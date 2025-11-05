import { supabase, isSupabaseConfigured } from "./supabase/client"
import type { Database } from "./supabase/types"

type BookingInsert = Database["public"]["Tables"]["bookings"]["Insert"]
type BookingRow = Database["public"]["Tables"]["bookings"]["Row"]

export interface BookingFormData {
  firstName: string
  lastName?: string
  email?: string
  telegram: string
  lessonType: "beginner" | "intermediate" | "advanced" | "analysis"
  chessLevel: "complete-beginner" | "beginner" | "intermediate" | "advanced" | "expert"
  lessonDate: string
  lessonTime: string
  additionalNotes?: string
  language: "ru" | "en"
}

// Add at the top after imports:
let connectionCache: any = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
let lastCacheTime = 0
let cachedBookings: any = null

// Helper function to format date properly without timezone issues
function formatDateForDatabase(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

// Helper function to safely extract error message
function getErrorMessage(error: any): string {
  if (!error) return "Unknown error"

  // Handle Supabase error format
  if (error.message) return error.message
  if (error.details) return error.details
  if (error.hint) return error.hint

  // Try JSON stringify
  try {
    const jsonStr = JSON.stringify(error, null, 2)
    if (jsonStr && jsonStr !== "{}" && jsonStr !== "null") {
      return jsonStr
    }
  } catch (e) {
    // Ignore stringify errors
  }

  return String(error)
}

// Add helper function for cached database calls:
function getCachedSupabaseClient() {
  if (!connectionCache) {
    connectionCache = supabase
  }
  return connectionCache
}

// Function to test database connection and permissions
async function testDatabaseConnection(): Promise<{ success: boolean; error?: string; details?: any }> {
  try {
    console.log("=== Testing Database Connection ===")

    // Test 1: Check if we can connect to Supabase
    console.log("Test 1: Basic connection test...")
    const connectionTest = await supabase.from("bookings").select("count", { count: "exact", head: true })
    console.log("Connection test result:", connectionTest)

    if (connectionTest.error) {
      return {
        success: false,
        error: `Connection failed: ${getErrorMessage(connectionTest.error)}`,
        details: connectionTest,
      }
    }

    // Test 2: Check if we can read from the table
    console.log("Test 2: Read permission test...")
    const readTest = await supabase.from("bookings").select("*").limit(1)
    console.log("Read test result:", readTest)

    if (readTest.error) {
      return {
        success: false,
        error: `Read permission failed: ${getErrorMessage(readTest.error)}`,
        details: readTest,
      }
    }

    // Test 3: Check current row count
    console.log("Test 3: Row count check...")
    const countTest = await supabase.from("bookings").select("*", { count: "exact", head: true })
    console.log("Count test result:", countTest)
    console.log("Current row count:", countTest.count)

    // Test 4: Try to insert a test record
    console.log("Test 4: Insert permission test...")
    const testRecord = {
      first_name: "Test",
      last_name: "Connection",
      telegram: "@test_user",
      lesson_type: "beginner" as const,
      chess_level: "beginner" as const,
      lesson_date: formatDateForDatabase(new Date()),
      lesson_time: "10:00",
      language: "en" as const,
      status: "pending" as const,
    }

    const insertTest = await supabase.from("bookings").insert([testRecord]).select().single()
    console.log("Insert test result:", insertTest)

    if (insertTest.error) {
      return {
        success: false,
        error: `Insert permission failed: ${getErrorMessage(insertTest.error)}`,
        details: insertTest,
      }
    }

    // Test 5: Verify the record was actually inserted
    console.log("Test 5: Verification test...")
    const verifyTest = await supabase.from("bookings").select("*").eq("telegram", testRecord.telegram)
    console.log("Verification test result:", verifyTest)

    return {
      success: true,
      details: {
        connection: connectionTest,
        read: readTest,
        count: countTest,
        insert: insertTest,
        verify: verifyTest,
      },
    }
  } catch (error) {
    console.error("Database test exception:", error)
    return {
      success: false,
      error: `Database test failed: ${getErrorMessage(error)}`,
    }
  }
}

// Function to check if table exists and create it if needed
async function ensureTableExists(): Promise<{ success: boolean; error?: string }> {
  try {
    console.log("Checking if bookings table exists...")

    // Try a simple select to test table existence
    const { data, error } = await supabase.from("bookings").select("id").limit(1)

    if (error) {
      console.log("Table check error:", error)

      // Check if it's a "table doesn't exist" error
      if (error.code === "42P01" || error.message?.includes("does not exist")) {
        console.log("❌ Table does not exist")
        return {
          success: false,
          error: `Database table 'bookings' does not exist. Please run the SQL script to create it. Error: ${getErrorMessage(error)}`,
        }
      }

      // Other database errors
      return {
        success: false,
        error: `Database error: ${getErrorMessage(error)}`,
      }
    }

    console.log("✅ Table exists and is accessible")
    return { success: true }
  } catch (error) {
    console.log("Table check exception:", error)
    return {
      success: false,
      error: `Failed to check table existence: ${getErrorMessage(error)}`,
    }
  }
}

export async function createBooking(
  formData: BookingFormData,
): Promise<{ success: boolean; error?: string; booking?: BookingRow }> {
  console.log("=== Starting createBooking function ===")
  console.log("Form data received:", formData)

  try {
    // Check if Supabase is configured
    const configured = isSupabaseConfigured()
    console.log("Supabase configured:", configured)

    if (!configured) {
      console.log("Supabase not configured, using demo mode")
      // Simulate successful booking for demo
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return {
        success: true,
        booking: {
          id: `demo-${Date.now()}`,
          created_at: new Date().toISOString(),
          first_name: formData.firstName,
          last_name: formData.lastName || null,
          email: formData.email || null,
          telegram: formData.telegram,
          lesson_type: formData.lessonType,
          chess_level: formData.chessLevel,
          lesson_date: formData.lessonDate,
          lesson_time: formData.lessonTime,
          additional_notes: formData.additionalNotes || null,
          language: formData.language,
          status: "pending" as const,
          updated_at: new Date().toISOString(),
        },
      }
    }

    // Run comprehensive database tests
    console.log("Running database connection tests...")
    const dbTest = await testDatabaseConnection()
    console.log("Database test results:", dbTest)

    if (!dbTest.success) {
      return {
        success: false,
        error: dbTest.error,
      }
    }

    // Check if table exists
    const tableCheck = await ensureTableExists()
    if (!tableCheck.success) {
      return {
        success: false,
        error: tableCheck.error,
      }
    }

    // Check if the time slot is already reserved before creating the booking
    console.log("=== CHECKING FOR EXISTING RESERVATIONS ===")
    const existingBookings = await supabase
      .from("bookings")
      .select("lesson_time")
      .eq("lesson_date", formData.lessonDate)
      .eq("lesson_time", formData.lessonTime)
      .in("status", ["pending", "confirmed"])

    console.log("Existing bookings check:", existingBookings)

    if (existingBookings.error) {
      return {
        success: false,
        error: `Failed to check existing bookings: ${getErrorMessage(existingBookings.error)}`,
      }
    }

    if (existingBookings.data && existingBookings.data.length > 0) {
      console.log("❌ Time slot already reserved")
      return {
        success: false,
        error: "This time slot has already been reserved. Please select a different time.",
      }
    }

    const bookingData: BookingInsert = {
      first_name: formData.firstName,
      last_name: formData.lastName || null,
      email: formData.email || null,
      telegram: formData.telegram,
      lesson_type: formData.lessonType,
      chess_level: formData.chessLevel,
      lesson_date: formData.lessonDate,
      lesson_time: formData.lessonTime,
      additional_notes: formData.additionalNotes || null,
      language: formData.language,
      status: "pending",
    }

    console.log("=== ATTEMPTING REAL BOOKING INSERT ===")
    console.log("Booking data to insert:", JSON.stringify(bookingData, null, 2))

    const { data, error } = await supabase.from("bookings").insert([bookingData]).select().single()

    console.log("=== INSERT RESULT ===")
    console.log("Data returned:", data)
    console.log("Error returned:", error)

    if (error) {
      const errorMessage = getErrorMessage(error)
      console.log("❌ Insert failed with error:", errorMessage)
      return {
        success: false,
        error: `Failed to create booking: ${errorMessage}`,
      }
    }

    if (!data) {
      console.log("❌ No data returned from insert")
      return {
        success: false,
        error: "No data returned from booking creation",
      }
    }

    console.log("✅ Booking created successfully!")
    console.log("Created booking data:", JSON.stringify(data, null, 2))

    // Verify the booking was actually saved
    console.log("=== VERIFYING BOOKING WAS SAVED ===")
    const verifyResult = await supabase.from("bookings").select("*").eq("id", data.id).single()
    console.log("Verification result:", verifyResult)

    if (verifyResult.data) {
      console.log("✅ Booking verified in database:", verifyResult.data)
    } else {
      console.log("⚠️ Could not verify booking in database")
    }

    // clearBookingsCache()
    clearBookingsCache()

    return { success: true, booking: data }
  } catch (outerError) {
    console.log("=== OUTER CATCH ===")
    console.log("Outer error:", outerError)
    const errorMessage = getErrorMessage(outerError)
    return {
      success: false,
      error: `Unexpected error: ${errorMessage}`,
    }
  }
}

// Replace getBookings function with:
export async function getBookings(): Promise<{ success: boolean; bookings?: BookingRow[]; error?: string }> {
  try {
    // Return cached data if still valid
    const now = Date.now()
    if (cachedBookings && now - lastCacheTime < CACHE_DURATION) {
      console.log("✅ Returning cached bookings")
      return { success: true, bookings: cachedBookings }
    }

    if (!isSupabaseConfigured()) {
      console.log("Supabase not configured, returning empty bookings")
      return { success: true, bookings: [] }
    }

    console.log("=== FETCHING ALL BOOKINGS ===")

    const tableCheck = await ensureTableExists()
    if (!tableCheck.success) {
      return {
        success: false,
        error: tableCheck.error,
      }
    }

    const client = getCachedSupabaseClient()
    const { data, error } = await client.from("bookings").select("*").order("created_at", { ascending: false })

    if (error) {
      const errorMessage = getErrorMessage(error)
      console.log("❌ Fetch failed:", errorMessage)
      return { success: false, error: errorMessage }
    }

    // Cache the results
    cachedBookings = data || []
    lastCacheTime = now

    console.log(`✅ Successfully fetched ${data?.length || 0} bookings`)
    return { success: true, bookings: data || [] }
  } catch (error) {
    console.log("Fetch bookings exception:", error)
    const errorMessage = getErrorMessage(error)
    return { success: false, error: errorMessage }
  }
}

export async function updateBookingStatus(
  bookingId: string,
  status: "pending" | "confirmed" | "cancelled" | "completed",
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!isSupabaseConfigured()) {
      console.log("Supabase not configured, simulating status update")
      return { success: true }
    }

    // Check if table exists first
    const tableCheck = await ensureTableExists()
    if (!tableCheck.success) {
      return {
        success: false,
        error: tableCheck.error,
      }
    }

    const { error } = await supabase.from("bookings").update({ status }).eq("id", bookingId)

    if (error) {
      const errorMessage = getErrorMessage(error)
      return { success: false, error: errorMessage }
    }

    // clearBookingsCache()
    clearBookingsCache()

    return { success: true }
  } catch (error) {
    const errorMessage = getErrorMessage(error)
    return { success: false, error: errorMessage }
  }
}

export async function getReservedTimeSlots(
  date: string,
): Promise<{ success: boolean; reservedTimes?: string[]; error?: string }> {
  try {
    if (!isSupabaseConfigured()) {
      console.log("Supabase not configured, returning empty reserved times")
      return { success: true, reservedTimes: [] }
    }

    console.log("=== FETCHING RESERVED TIME SLOTS ===")
    console.log("Date:", date)

    // Check if table exists first
    const tableCheck = await ensureTableExists()
    if (!tableCheck.success) {
      return {
        success: false,
        error: tableCheck.error,
      }
    }

    const { data, error } = await supabase
      .from("bookings")
      .select("lesson_time, lesson_date")
      .eq("lesson_date", date)
      .in("status", ["pending", "confirmed"])

    console.log("Reserved times query result:")
    console.log("- Data:", data)
    console.log("- Error:", error)
    console.log("- Query date:", date)

    if (error) {
      const errorMessage = getErrorMessage(error)
      console.log("❌ Fetch reserved times failed:", errorMessage)
      return { success: false, error: errorMessage }
    }

    const reservedTimes = data?.map((booking) => booking.lesson_time) || []
    console.log(`✅ Successfully fetched ${reservedTimes.length} reserved time slots:`, reservedTimes)

    // Also log the actual dates in the database for debugging
    if (data && data.length > 0) {
      console.log(
        "Database dates found:",
        data.map((d) => d.lesson_date),
      )
    }

    return { success: true, reservedTimes }
  } catch (error) {
    console.log("Fetch reserved times exception:", error)
    const errorMessage = getErrorMessage(error)
    return { success: false, error: errorMessage }
  }
}

// Add function to clear cache:
export function clearBookingsCache() {
  cachedBookings = null
  lastCacheTime = 0
}

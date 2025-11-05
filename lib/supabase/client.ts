import { createClient } from "@supabase/supabase-js"
import type { Database } from "./types"

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  console.log("=== Supabase Configuration Check ===")
  console.log("Environment check:")
  console.log("- NODE_ENV:", process.env.NODE_ENV)
  console.log(
    "- All env vars:",
    Object.keys(process.env).filter((key) => key.includes("SUPABASE")),
  )

  if (!url) {
    console.log("❌ NEXT_PUBLIC_SUPABASE_URL is missing")
    console.log("Available env vars:", Object.keys(process.env).slice(0, 10))
    return false
  }

  if (!key) {
    console.log("❌ NEXT_PUBLIC_SUPABASE_ANON_KEY is missing")
    return false
  }

  console.log("✅ Both environment variables are present")
  console.log("URL:", url)
  console.log("Key length:", key.length)
  console.log("Key preview:", key.substring(0, 30) + "...")

  // Basic validation
  if (!url.startsWith("https://")) {
    console.log("❌ URL does not start with https://")
    return false
  }

  if (!key.startsWith("eyJ")) {
    console.log("❌ Key does not appear to be a JWT token")
    return false
  }

  console.log("✅ Configuration validation passed")
  return true
}

// Create the Supabase client
let supabaseClient: ReturnType<typeof createClient<Database>> | null = null

const initializeSupabaseClient = () => {
  console.log("=== Initializing Supabase Client ===")

  if (!isSupabaseConfigured()) {
    console.log("❌ Cannot initialize - configuration invalid")
    return null
  }

  if (supabaseClient) {
    console.log("✅ Using existing client")
    return supabaseClient
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  try {
    console.log("Creating new Supabase client...")
    supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey)

    // Test the client
    console.log("Testing client methods...")
    console.log("- Has 'from' method:", typeof supabaseClient.from === "function")
    console.log("- Client object keys:", Object.keys(supabaseClient))

    console.log("✅ Supabase client created and tested successfully")
    return supabaseClient
  } catch (error) {
    console.error("❌ Failed to create Supabase client:")
    console.error("Error:", error)
    console.error("Error type:", typeof error)
    console.error("Error message:", error instanceof Error ? error.message : "Not an Error object")
    return null
  }
}

// Initialize the client
const client = initializeSupabaseClient()

// Export the client
export const supabase = (() => {
  if (!client) {
    console.log("❌ Supabase client not available")
    // Return a proxy that provides detailed error information
    return new Proxy({} as ReturnType<typeof createClient<Database>>, {
      get(target, prop) {
        const errorMsg = `Supabase client unavailable. Property '${String(prop)}' accessed but client initialization failed. Check configuration and console logs.`
        console.error(errorMsg)
        throw new Error(errorMsg)
      },
    })
  }

  console.log("✅ Supabase client ready")
  return client
})()

export const getSupabaseClient = () => client

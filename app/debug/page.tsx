"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2, Database, CheckCircle, XCircle, AlertTriangle, RefreshCw } from "lucide-react"
import Link from "next/link"
import { getBookings } from "@/lib/bookings"
import { isSupabaseConfigured } from "@/lib/supabase/client"

export default function DebugPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [debugResults, setDebugResults] = useState<any>(null)

  const runDiagnostics = async () => {
    setIsLoading(true)
    setDebugResults(null)

    try {
      console.log("=== RUNNING COMPREHENSIVE DIAGNOSTICS ===")

      const results = {
        timestamp: new Date().toISOString(),
        supabaseConfigured: isSupabaseConfigured(),
        environmentVariables: {
          url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
          key: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          urlValue: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30) + "...",
          keyLength: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length || 0,
        },
        bookingsFetch: null as any,
        errors: [] as string[],
      }

      console.log("Environment check:", results.environmentVariables)

      if (results.supabaseConfigured) {
        console.log("Supabase is configured, testing database...")
        try {
          const bookingsResult = await getBookings()
          results.bookingsFetch = bookingsResult
          console.log("Bookings fetch result:", bookingsResult)
        } catch (error) {
          console.error("Bookings fetch error:", error)
          results.errors.push(`Bookings fetch failed: ${error}`)
        }
      } else {
        results.errors.push("Supabase is not configured")
      }

      console.log("Final diagnostic results:", results)
      setDebugResults(results)
    } catch (error) {
      console.error("Diagnostics failed:", error)
      setDebugResults({
        timestamp: new Date().toISOString(),
        error: `Diagnostics failed: ${error}`,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Database Debug Dashboard</h1>
          <p className="text-blue-700 text-lg">Diagnose why data isn't appearing in Supabase</p>
        </div>

        {/* Run Diagnostics */}
        <Card className="border-blue-200 mb-8">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center">
              <Database className="w-5 h-5 mr-2" />
              Database Diagnostics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <Button
                onClick={runDiagnostics}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 mb-4 text-white"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin text-white" />
                    Running Diagnostics...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 text-white" />
                    Run Full Diagnostics
                  </>
                )}
              </Button>
              <p className="text-sm text-blue-600">
                This will test your Supabase connection, permissions, and data visibility
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {debugResults && (
          <div className="space-y-6">
            {/* Configuration Status */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Configuration Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Supabase Configured:</span>
                    <Badge variant={debugResults.supabaseConfigured ? "default" : "destructive"}>
                      {debugResults.supabaseConfigured ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Yes
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 mr-1" />
                          No
                        </>
                      )}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Environment URL:</span>
                    <Badge variant={debugResults.environmentVariables.url ? "default" : "destructive"}>
                      {debugResults.environmentVariables.url ? "Present" : "Missing"}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Environment Key:</span>
                    <Badge variant={debugResults.environmentVariables.key ? "default" : "destructive"}>
                      {debugResults.environmentVariables.key ? "Present" : "Missing"}
                    </Badge>
                  </div>

                  {debugResults.environmentVariables.urlValue && (
                    <div className="text-sm text-blue-600">
                      <strong>URL Preview:</strong> {debugResults.environmentVariables.urlValue}
                    </div>
                  )}

                  {debugResults.environmentVariables.keyLength > 0 && (
                    <div className="text-sm text-blue-600">
                      <strong>Key Length:</strong> {debugResults.environmentVariables.keyLength} characters
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Database Test Results */}
            {debugResults.bookingsFetch && (
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Database Test Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Database Connection:</span>
                      <Badge variant={debugResults.bookingsFetch.success ? "default" : "destructive"}>
                        {debugResults.bookingsFetch.success ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Success
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 mr-1" />
                            Failed
                          </>
                        )}
                      </Badge>
                    </div>

                    {debugResults.bookingsFetch.success && (
                      <div className="flex items-center justify-between">
                        <span>Records Found:</span>
                        <Badge variant="outline" className="text-blue-600 border-blue-300">
                          {debugResults.bookingsFetch.bookings?.length || 0} records
                        </Badge>
                      </div>
                    )}

                    {debugResults.bookingsFetch.error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-start">
                          <AlertTriangle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong className="text-red-800">Error:</strong>
                            <p className="text-red-700 text-sm mt-1">{debugResults.bookingsFetch.error}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Data Preview */}
            {debugResults.bookingsFetch?.success && debugResults.bookingsFetch.bookings?.length > 0 && (
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Recent Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {debugResults.bookingsFetch.bookings.slice(0, 5).map((booking: any, index: number) => (
                      <div key={booking.id || index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <strong>Name:</strong> {booking.first_name} {booking.last_name}
                          </div>
                          <div>
                            <strong>Email:</strong> {booking.email}
                          </div>
                          <div>
                            <strong>Date:</strong> {booking.lesson_date}
                          </div>
                          <div>
                            <strong>Time:</strong> {booking.lesson_time}
                          </div>
                          <div>
                            <strong>Status:</strong> {booking.status}
                          </div>
                          <div>
                            <strong>Created:</strong> {new Date(booking.created_at).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Errors */}
            {debugResults.errors?.length > 0 && (
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-900">Errors Found</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {debugResults.errors.map((error: string, index: number) => (
                      <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-start">
                          <XCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-red-700 text-sm">{error}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Raw Debug Data */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Raw Debug Data</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-lg text-xs overflow-auto max-h-96">
                  {JSON.stringify(debugResults, null, 2)}
                </pre>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Navigation */}
        <div className="text-center mt-8 space-x-4">
          <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
            <Link href="/booking">← Back to Booking</Link>
          </Button>
          <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
            <Link href="/admin">View Admin Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

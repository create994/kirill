export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string | null
          email: string | null
          telegram: string
          lesson_type: "beginner" | "intermediate" | "advanced" | "analysis"
          chess_level: "complete-beginner" | "beginner" | "intermediate" | "advanced" | "expert"
          lesson_date: string
          lesson_time: string
          additional_notes: string | null
          language: "ru" | "en"
          status: "pending" | "confirmed" | "cancelled" | "completed"
          updated_at: string
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          last_name?: string | null
          email?: string | null
          telegram: string
          lesson_type: "beginner" | "intermediate" | "advanced" | "analysis"
          chess_level: "complete-beginner" | "beginner" | "intermediate" | "advanced" | "expert"
          lesson_date: string
          lesson_time: string
          additional_notes?: string | null
          language: "ru" | "en"
          status?: "pending" | "confirmed" | "cancelled" | "completed"
          updated_at?: string
        }
        Update: {
          id?: string
          created_at?: string
          first_name?: string
          last_name?: string | null
          email?: string | null
          telegram?: string
          lesson_type?: "beginner" | "intermediate" | "advanced" | "analysis"
          chess_level?: "complete-beginner" | "beginner" | "intermediate" | "advanced" | "expert"
          lesson_date?: string
          lesson_time?: string
          additional_notes?: string | null
          language?: "ru" | "en"
          status?: "pending" | "confirmed" | "cancelled" | "completed"
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

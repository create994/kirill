-- Create bookings table for chess lesson appointments (Updated version)
-- This script will create the table if it doesn't exist

-- Drop table if it exists (for clean recreation)
DROP TABLE IF EXISTS bookings CASCADE;

-- Create bookings table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Personal Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  
  -- Lesson Details
  lesson_type TEXT NOT NULL CHECK (lesson_type IN ('beginner', 'intermediate', 'advanced', 'analysis')),
  chess_level TEXT NOT NULL CHECK (chess_level IN ('complete-beginner', 'beginner', 'intermediate', 'advanced', 'expert')),
  
  -- Scheduling
  lesson_date DATE NOT NULL,
  lesson_time TIME NOT NULL,
  
  -- Additional Information
  additional_notes TEXT,
  language TEXT NOT NULL CHECK (language IN ('ru', 'en')),
  
  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  
  -- Metadata
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX idx_bookings_email ON bookings(email);
CREATE INDEX idx_bookings_date ON bookings(lesson_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_created_at ON bookings(created_at);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_bookings_updated_at 
    BEFORE UPDATE ON bookings 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a booking form)
CREATE POLICY "Anyone can create bookings" ON bookings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can read bookings" ON bookings
  FOR SELECT USING (true);

CREATE POLICY "Anyone can update bookings" ON bookings
  FOR UPDATE USING (true);

-- Insert a test record to verify everything works
INSERT INTO bookings (
  first_name,
  last_name,
  email,
  lesson_type,
  chess_level,
  lesson_date,
  lesson_time,
  language
) VALUES (
  'Test',
  'User',
  'test@example.com',
  'beginner',
  'beginner',
  CURRENT_DATE + INTERVAL '1 day',
  '10:00',
  'en'
);

-- Verify the table was created successfully
SELECT 'Table created successfully!' as message, COUNT(*) as record_count FROM bookings;

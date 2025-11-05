-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert bookings (for the booking form)
CREATE POLICY "Anyone can create bookings" ON bookings
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reading bookings (you might want to restrict this later)
CREATE POLICY "Anyone can read bookings" ON bookings
  FOR SELECT USING (true);

-- Create policy to allow updates (you might want to restrict this to authenticated users)
CREATE POLICY "Anyone can update bookings" ON bookings
  FOR UPDATE USING (true);

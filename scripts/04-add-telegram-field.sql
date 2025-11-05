-- Add telegram field to bookings table
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS telegram TEXT NOT NULL DEFAULT '';

-- Update the constraint to make telegram required for new records
-- (We'll handle this in the application logic)

-- Update any existing records to have a placeholder telegram value
UPDATE bookings SET telegram = 'not_provided' WHERE telegram = '' OR telegram IS NULL;

-- Verify the change
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'bookings' 
ORDER BY ordinal_position;

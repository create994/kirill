-- Make last_name and email optional in bookings table
ALTER TABLE bookings ALTER COLUMN last_name DROP NOT NULL;
ALTER TABLE bookings ALTER COLUMN email DROP NOT NULL;

-- Update any existing records that might have empty strings
UPDATE bookings SET last_name = NULL WHERE last_name = '';
UPDATE bookings SET email = NULL WHERE email = '';

-- Verify the changes
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'bookings' 
AND column_name IN ('last_name', 'email')
ORDER BY ordinal_position;

# Supabase Integration Setup

This project uses Supabase to securely store waitlist signups. Follow these steps to complete the integration:

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Create a new project or use an existing one
3. Go to **Settings > API** and copy:
   - **Project URL** (e.g., `https://your-project.supabase.co`)
   - **Anon Key** (public key for client-side access)

## 2. Create the Waitlist Table

Run this SQL in the Supabase SQL Editor (SQL > New Query):

```sql
-- Create the waitlist table
CREATE TABLE waitlist (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending' -- pending, confirmed, converted
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for form submissions)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads (for admin dashboard later)
CREATE POLICY "Allow authenticated reads" ON waitlist
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create an index on email for fast lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);
```

## 3. Add Supabase Credentials to Manus

In the Manus Management UI:
1. Go to **Settings > Secrets**
2. Add the following environment variables:
   - `SUPABASE_URL`: Your Supabase Project URL
   - `SUPABASE_ANON_KEY`: Your Supabase Anon Key
   - `VITE_SUPABASE_URL`: Same as `SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`: Same as `SUPABASE_ANON_KEY`

## 4. Test the Integration

1. Visit the landing page
2. Scroll to the "Get the Sprint" section
3. Fill out the waitlist form with a test email
4. Check the Supabase dashboard (Table Editor > waitlist) to confirm the entry was saved

## 5. Manage Waitlist Data

In Supabase:
- **Table Editor**: View and manage all signups
- **SQL Editor**: Run queries to export or analyze data
- **Auth**: Set up email confirmations (optional)

## Optional: Email Notifications

To send confirmation emails on signup, add a Supabase Edge Function or use a third-party service like SendGrid or Mailgun integrated with your backend.

## Troubleshooting

- **"Connection refused"**: Check that `SUPABASE_URL` and `SUPABASE_ANON_KEY` are correct
- **"Unique violation"**: Email already exists in the waitlist
- **"Permission denied"**: Check Row Level Security policies

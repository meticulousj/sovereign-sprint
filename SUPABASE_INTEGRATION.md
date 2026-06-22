# Supabase Integration Guide

## Overview

This guide walks you through setting up Supabase for persistent waitlist storage in the Sovereign Sprint landing page.

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Fill in project details and create
4. Wait for the project to initialize (2-3 minutes)

## Step 2: Create Waitlist Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste the SQL schema below
4. Click **Run**

```sql
-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create policy to allow anonymous reads
CREATE POLICY "Allow anonymous reads" ON waitlist
  FOR SELECT USING (true);

-- Create admin-only update policy
CREATE POLICY "Allow updates" ON waitlist
  FOR UPDATE USING (true);
```

## Step 3: Get Your Credentials

1. Go to **Settings > API** in your Supabase dashboard
2. Copy your **Project URL** (e.g., `https://xxxxx.supabase.co`)
3. Copy your **Anon Key** (under "anon public")

## Step 4: Add Credentials to Manus

1. In the Manus Management UI, go to **Settings > Secrets**
2. Add two new environment variables:
   - `SUPABASE_URL`: Your Project URL
   - `SUPABASE_ANON_KEY`: Your Anon Key

3. Save and restart the dev server

## Step 5: Verify Integration

1. Go to the landing page
2. Try joining the waitlist
3. Check your Supabase dashboard > **Table Editor > waitlist**
4. You should see your entry appear

## Admin Dashboard

The admin dashboard at `/admin` will now pull data from Supabase:

1. Login with password (default: `admin123`)
2. View all waitlist subscribers
3. Export as CSV

## Troubleshooting

### "Email already on waitlist"
This is expected if you try to join twice with the same email. Supabase enforces the unique constraint.

### No data appearing in Supabase
1. Check that `SUPABASE_URL` and `SUPABASE_ANON_KEY` are set correctly
2. Verify the waitlist table exists in your Supabase project
3. Check the browser console for error messages
4. Restart the dev server after adding credentials

### Row Level Security (RLS) Errors
If you see RLS errors, ensure the policies are created correctly. Re-run the SQL schema above.

## Security Notes

- The **Anon Key** is public-facing and safe to use in the frontend
- The **Service Role Key** should only be used on the backend
- RLS policies prevent unauthorized access to the database
- Emails are unique, preventing duplicate signups

## Next Steps

- Set up SendGrid for email notifications
- Create automated emails to send daily ritual prompts
- Build a dashboard to view analytics and trends

# Sovereign Sprint Landing Page — Integration Guide

This guide walks you through setting up the Supabase integration for the waitlist form.

## Overview

The landing page includes a functional waitlist form that captures visitor emails. By default, it stores data in-memory (lost on server restart). To enable persistent storage, connect Supabase.

**Architecture:**
- **Frontend**: React form with client-side Supabase integration (optional)
- **Backend**: Express API with fallback in-memory storage
- **Database**: Supabase PostgreSQL table for persistent storage

## Quick Start (5 minutes)

### 1. Create Supabase Account & Project

1. Visit [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Wait for the project to initialize (~2 min)

### 2. Create the Waitlist Table

In your Supabase dashboard:

1. Go to **SQL Editor** (left sidebar)
2. Click **New Query**
3. Paste the SQL below and click **Run**:

```sql
-- Create the waitlist table
CREATE TABLE waitlist (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for form submissions)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create index for fast email lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);
```

### 3. Get Your Credentials

1. Go to **Settings > API** (left sidebar)
2. Copy these values:
   - **Project URL** (e.g., `https://abc123.supabase.co`)
   - **Anon Key** (public key under "Project API keys")

### 4. Add Credentials to Manus

In the Manus Management UI:

1. Click **Settings** (gear icon, top-right)
2. Go to **Secrets**
3. Add these environment variables:
   - `SUPABASE_URL`: Paste your Project URL
   - `SUPABASE_ANON_KEY`: Paste your Anon Key
   - `VITE_SUPABASE_URL`: Same as `SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`: Same as `SUPABASE_ANON_KEY`

4. Click **Save** and wait for the deployment to complete

### 5. Test the Integration

1. Visit your landing page
2. Scroll to **"Get the Sprint"** section
3. Fill out the waitlist form
4. Check Supabase: Go to **Table Editor > waitlist** to confirm the entry

## How It Works

### Frontend Flow

1. User fills out the form (name + email)
2. Form submits to `/api/waitlist` endpoint
3. Backend validates and stores in Supabase (or in-memory if not configured)
4. Success/error message displayed to user

### Backend Flow

```
POST /api/waitlist
├── Validate email format
├── Check if email already exists
├── Insert into Supabase (if configured)
├── Fallback to in-memory storage (if Supabase not configured)
└── Return success/error response
```

### Fallback Behavior

If Supabase credentials are not set:
- Form still works
- Data stored in-memory (server RAM)
- Data lost when server restarts
- Console warning logged on startup

## Managing Your Waitlist

### View Signups

In Supabase:
1. Go to **Table Editor** (left sidebar)
2. Click **waitlist** table
3. See all signups with timestamps

### Export Data

1. In Table Editor, click the **Download** icon (top-right)
2. Choose CSV or JSON format
3. Use for email campaigns or analysis

### Query Data

In **SQL Editor**, run queries like:

```sql
-- Count total signups
SELECT COUNT(*) as total FROM waitlist;

-- Get signups from last 7 days
SELECT * FROM waitlist 
WHERE created_at > NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;

-- Find duplicate emails
SELECT email, COUNT(*) as count FROM waitlist
GROUP BY email HAVING COUNT(*) > 1;
```

## Optional Enhancements

### Send Confirmation Emails

Use Supabase Edge Functions + SendGrid/Mailgun:

```typescript
// In Supabase SQL Editor, create a trigger:
CREATE TRIGGER send_welcome_email
AFTER INSERT ON waitlist
FOR EACH ROW
EXECUTE FUNCTION send_email_notification();
```

### Add Referral Tracking

Add a `referred_by` column to track referrals:

```sql
ALTER TABLE waitlist ADD COLUMN referred_by TEXT;
ALTER TABLE waitlist ADD COLUMN referral_code TEXT UNIQUE;
```

### Email Verification

Add a `verified_at` column and send verification links:

```sql
ALTER TABLE waitlist ADD COLUMN verified_at TIMESTAMP;
ALTER TABLE waitlist ADD COLUMN verification_token TEXT UNIQUE;
```

## Troubleshooting

### "Connection refused" or "Failed to add to waitlist"

**Cause**: Supabase credentials incorrect or network issue

**Fix**:
1. Double-check `SUPABASE_URL` and `SUPABASE_ANON_KEY`
2. Ensure they're set in Manus Settings > Secrets
3. Restart the dev server

### "Email already on waitlist"

**Cause**: Email already exists (unique constraint)

**Fix**: This is expected behavior. User can try a different email.

### "Permission denied" in Supabase

**Cause**: Row Level Security policy issue

**Fix**: Verify the policy allows inserts:
```sql
SELECT * FROM pg_policies WHERE tablename = 'waitlist';
```

### Data not persisting

**Cause**: Supabase not configured (using in-memory storage)

**Fix**: Check server logs for warning message, then set credentials in Manus Settings > Secrets

## Security Notes

- **Anon Key**: Safe to expose in frontend (read/insert only)
- **Service Role Key**: Keep secret (full database access)
- Row Level Security policies restrict what users can do
- Email is unique and case-insensitive

## API Reference

### POST /api/waitlist

**Request:**
```json
{
  "email": "user@example.com",
  "name": "John Doe"
}
```

**Success Response (200):**
```json
{
  "message": "Successfully joined waitlist",
  "email": "user@example.com"
}
```

**Error Responses:**
- `400`: Missing email or name
- `409`: Email already on waitlist
- `500`: Server error

### GET /api/health

**Response:**
```json
{
  "status": "ok",
  "supabase": "connected",
  "timestamp": "2026-06-20T00:31:02.534Z"
}
```

## Next Steps

1. **Test thoroughly** before launch
2. **Set up email notifications** for new signups
3. **Create a launch checklist** for when you're ready
4. **Monitor signups** in Supabase dashboard
5. **Export data regularly** for backups

## Support

For Supabase issues: [supabase.com/docs](https://supabase.com/docs)

For landing page issues: Check the dev server logs in Manus

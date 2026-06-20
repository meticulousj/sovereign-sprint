# Admin Dashboard Setup Guide

The Sovereign Sprint landing page includes a password-protected admin dashboard for managing waitlist subscribers.

## Accessing the Admin Dashboard

1. Navigate to `/admin` on your deployed site or `http://localhost:3000/admin` in development
2. Enter the admin password (default: `admin123`)
3. View all waitlist subscribers in a sortable table
4. Export subscriber data as CSV

## Changing the Admin Password

### Development

Set the `ADMIN_PASSWORD` environment variable before starting the server:

```bash
export ADMIN_PASSWORD="your-secure-password"
npm run dev
```

### Production (Manus Deployment)

1. Go to your Manus project Settings → Secrets
2. Add or update the `ADMIN_PASSWORD` environment variable with your secure password
3. Redeploy the project

**Important:** Change the default password immediately in production for security.

## Features

### Dashboard View

- **Subscriber Table**: Displays all waitlist signups with name, email, and join date
- **Refresh Button**: Reload subscriber data from the backend
- **Export CSV**: Download all subscribers as a CSV file with timestamp
- **Logout**: Clear session and return to login screen

### CSV Export

The exported CSV includes:
- Subscriber name
- Email address
- Join date (formatted as MM/DD/YYYY)

File naming: `sovereign-sprint-waitlist-YYYY-MM-DD.csv`

## Data Storage

### In-Memory (Default)

When Supabase is not configured, subscriber data is stored in-memory on the server. This means:
- Data persists during the current server session
- Data is lost when the server restarts
- Good for testing and development

### Supabase (Persistent)

To enable persistent storage:

1. Create a Supabase project at https://supabase.com
2. Create a `waitlist` table with columns:
   - `id` (UUID, primary key)
   - `email` (text, unique)
   - `name` (text)
   - `created_at` (timestamp)

3. Set environment variables:
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_ANON_KEY`: Your Supabase anon key

4. Redeploy your project

The admin dashboard will automatically fetch from Supabase when configured.

## Security Considerations

- The admin password is transmitted in the request body; use HTTPS in production
- Consider adding rate limiting to the `/api/admin/verify` endpoint
- Change the default password immediately
- Store the password securely (use environment variables, not hardcoded)
- Consider adding additional authentication layers (IP whitelisting, 2FA) for production

## API Endpoints

### Verify Admin Password

```bash
POST /api/admin/verify
Content-Type: application/json

{
  "password": "admin123"
}
```

Response (success):
```json
{
  "message": "Authenticated"
}
```

Response (failure):
```json
{
  "message": "Invalid password"
}
```

### Get All Subscribers

```bash
GET /api/admin/subscribers
```

Response:
```json
{
  "subscribers": [
    {
      "id": "0",
      "email": "user@example.com",
      "name": "John Doe",
      "created_at": "2026-06-20T05:00:00.000Z"
    }
  ]
}
```

## Troubleshooting

**Admin page shows 404:**
- Ensure you're accessing `/admin` (not `/admin/`)
- Check that the dev server is running

**Password not working:**
- Verify you're using the correct password (default: `admin123`)
- Check environment variables if you've set a custom password
- Clear browser cache and try again

**No subscribers showing:**
- Ensure subscribers have actually joined the waitlist
- If using in-memory storage, data is lost on server restart
- Check server logs for errors

**CSV export not working:**
- Ensure you have at least one subscriber
- Check browser console for errors
- Verify your browser allows file downloads

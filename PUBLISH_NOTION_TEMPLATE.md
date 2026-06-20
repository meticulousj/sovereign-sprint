# How to Publish Your Notion Template & Get a Public Link

Follow these steps to create, test, and publish your 90-Day Sovereign Sprint Notion template.

---

## Step 1: Create the Notion Workspace

### 1.1 Sign Up or Log In

- Go to [notion.so](https://notion.so)
- Sign in with your account
- Click "New workspace"

### 1.2 Name Your Workspace

- **Workspace Name**: 90-Day Sovereign Sprint
- **Workspace Icon**: 📋 (clipboard) or 📊 (chart)
- Click "Create workspace"

---

## Step 2: Build the Template Structure

### 2.1 Follow the Setup Guide

Use the **NOTION_TEMPLATE_SETUP.md** file to:

1. Create the Dashboard page
2. Create all 5 databases:
   - Daily Log
   - Weekly Reflections
   - Milestones
   - Wins Archive
   - Patterns Tracker
3. Add all properties and views
4. Set up relations between databases
5. Add formulas where applicable

### 2.2 Reference the JSON Export

The **NOTION_TEMPLATE_EXPORT.json** file contains:
- Complete database schemas
- All property types
- All view configurations
- Suggested icons and colors

---

## Step 3: Add Sample Data

### 3.1 Create Sample Daily Entries

Add 3-5 sample daily entries to show users how to use the template:

**Sample Day 1 Entry:**
- Date: [Today's date]
- Day: 1
- Week: 1
- Theme: Identity Friction
- Daily Question: What's one non-negotiable I will complete today no matter what?
- Morning Ignition: [Sample text about morning ritual]
- Midday Recalibration: [Sample text about midday check-in]
- Evening Audit: [Sample text about evening reflection]
- Daily Score: 8
- Rituals Completed: ✓
- Wins: [Sample win]
- Status: On-track

### 3.2 Create Sample Weekly Reflection

Add one sample weekly reflection:

- Week: 1
- Week Start Date: [Start of week]
- Theme: Identity Friction
- Top 3 Wins: [Sample wins]
- Broke My Word: [Sample reflection]
- Patterns Proud Of: [Sample pattern]
- Patterns to Die: [Sample pattern]
- Single Focus: [Sample focus]
- Weekly Score: 85
- Consistency Rate: 100%
- Status: Complete

### 3.3 Add Sample Wins & Patterns

Add 2-3 sample wins and patterns to populate the archive views.

---

## Step 4: Customize the Look & Feel

### 4.1 Add Workspace Icon

1. Click workspace name in top-left
2. Click the icon next to the name
3. Choose: 📋 📊 🎯 📈 or 🏆

### 4.2 Add Database Icons

For each database:
1. Open the database
2. Click the icon next to the database name
3. Assign icons:
   - Daily Log: 📓
   - Weekly Reflections: 📊
   - Milestones: 🏁
   - Wins Archive: 🏆
   - Patterns Tracker: 🔄

### 4.3 Add Cover Images

For each database:
1. Open the database
2. Click "Cover" at the top
3. Upload or select an image that represents the database

**Suggested Images:**
- Daily Log: Calendar or notebook
- Weekly Reflections: Mirror or reflection
- Milestones: Finish line or achievement
- Wins Archive: Trophy or celebration
- Patterns Tracker: Cycle or spiral

### 4.4 Add Color Scheme

1. In each database, click "Properties"
2. For "Status" or "Theme" properties, assign colors:
   - Primary: Deep charcoal or navy
   - Accent: Brass/gold
   - Highlights: Oxblood red

---

## Step 5: Create Instructions Page

Add a **Getting Started** page with:

```
# Getting Started with the 90-Day Sovereign Sprint

## What This Template Does

This template is a complete system for 90 days of recorded proof:
- Daily protocols (morning, midday, evening)
- Weekly reflections (5 questions, 15 minutes)
- Milestone checkpoints (day 30, 60, 90)
- Wins archive (track all wins)
- Patterns tracker (identify recurring patterns)

## Quick Start

1. **Set Your Sprint Dates**
   - Go to Dashboard
   - Enter your start date
   - The template auto-calculates your end date (90 days later)

2. **Review the Daily Questions**
   - Go to Resources → Daily Questions
   - Read the question for Day 1

3. **Create Your First Entry**
   - Go to Daily Log
   - Click "New"
   - Fill in today's date and answer the daily question

4. **Set Ritual Reminders**
   - Add calendar reminders for:
     - Morning Ignition (5 min)
     - Midday Recalibration (3 min)
     - Evening Audit (7 min)

5. **Begin Your 90 Days**
   - Follow the three rituals daily
   - Reflect weekly
   - Document your proof

## Key Features

### Daily Log
- Track your three daily rituals
- Log wins and patterns
- Rate your day (1-10)
- Monitor your mood and energy

### Weekly Reflections
- Answer 5 key questions
- Track consistency rate
- Document patterns
- Set focus for next week

### Milestones
- Day 30: Foundation Proof
- Day 60: Momentum Proof
- Day 90: Mastery Proof

### Wins Archive
- Celebrate all wins
- Categorize by type
- Track win frequency
- Build momentum

### Patterns Tracker
- Identify recurring patterns
- Track pattern evolution
- Plan actions
- Celebrate progress

## Tips for Success

1. **Consistency**: Do the three rituals daily at the same time
2. **Honesty**: Be truthful in your reflections
3. **Celebration**: Log your wins, no matter how small
4. **Patterns**: Notice what's working and what's not
5. **Proof**: Document everything—the evidence is the point

## Need Help?

- See the FAQ page
- Review the Three Rituals guide
- Check the Daily Questions
- Look at sample entries

---

**Discipline creates freedom when it is recorded.**

Your template, your system, your proof.
```

---

## Step 6: Test the Template

### 6.1 Test All Views

For each database, verify:
- [ ] Table view works
- [ ] Calendar view works (if applicable)
- [ ] Gallery view works
- [ ] Timeline view works (if applicable)
- [ ] Grouped views work
- [ ] Filters work

### 6.2 Test Relations

Verify:
- [ ] Daily Log links to Weekly Reflections
- [ ] Wins Archive links to Daily Log
- [ ] Patterns Tracker links to Daily Log
- [ ] All relations are bidirectional

### 6.3 Test Formulas

Verify:
- [ ] Days Completed formula works
- [ ] Weekly Completion Rate formula works
- [ ] Any other formulas display correctly

### 6.4 Test User Flow

Walk through the user experience:
1. [ ] User duplicates template
2. [ ] User can create a daily entry
3. [ ] User can create a weekly reflection
4. [ ] User can log a win
5. [ ] User can track a pattern
6. [ ] User can view all data in different views

---

## Step 7: Publish as a Public Template

### 7.1 Enable Sharing

1. Click "Share" button (top-right)
2. Click "Share to web"
3. Toggle "Allow duplicate as template" ON
4. Copy the public link

**Your public link will look like:**
```
https://www.notion.so/[workspace-id]?v=[version-id]
```

### 7.2 Test the Public Link

1. Open the link in an incognito/private browser window
2. Verify you can see the template
3. Click "Duplicate" to test the duplication flow
4. Verify the duplicate works in a new workspace

### 7.3 Customize the Duplicate Experience

When users click "Duplicate", they should see:
- [ ] Clear instructions on the Dashboard
- [ ] Sample data to show how to use it
- [ ] Getting Started guide
- [ ] FAQ page

---

## Step 8: Submit to Notion Template Gallery (Optional)

### 8.1 Prepare Your Submission

Gather:
- [ ] Public template link
- [ ] Template name: "90-Day Sovereign Sprint"
- [ ] Template description (see below)
- [ ] Cover image (1200x630px recommended)
- [ ] Category: Productivity / Personal Development
- [ ] Tags: productivity, personal-development, goal-tracking, habits, 90-days

### 8.2 Write Your Description

```
A complete system for 90 days of recorded proof. 

This template includes:
- Daily protocols: Morning Ignition (5 min), Midday Recalibration (3 min), Evening Audit (7 min)
- Weekly reflections: 5 questions, 15 minutes, zero theatre
- Milestone checkpoints: Day 30, 60, 90 proof documentation
- Wins archive: Track and celebrate all wins
- Patterns tracker: Identify recurring patterns and track evolution

Perfect for anyone ready to stop drifting and start proving.
```

### 8.3 Submit to Notion

1. Go to [notion.so/templates](https://notion.so/templates)
2. Click "Submit a template"
3. Fill in all fields
4. Upload cover image
5. Submit for review

**Note:** Notion typically reviews submissions within 1-2 weeks.

---

## Step 9: Get Your Public Template Link

Once your template is live, you'll have a link like:

```
https://www.notion.so/templates/90-day-sovereign-sprint-[ID]
```

---

## Step 10: Update the Landing Page

Once you have your public Notion template link:

1. Go to the landing page code: `/home/ubuntu/sovereign-sprint/client/src/pages/Home.tsx`
2. Find the `notionTemplate` URL in the assets
3. Replace with your public template link
4. Example:
   ```javascript
   notionTemplate: "https://www.notion.so/templates/90-day-sovereign-sprint-abc123",
   ```
5. Save and redeploy

---

## Sharing Your Template

### With Your Waitlist

Once published, share the link:

**Email Template:**
```
Subject: The 90-Day Sovereign Sprint Template is Ready

Hi [Name],

Your template is live. 

Three formats, one system:
- PDF Workbook (print-ready)
- Notion Template (cloud-based, collaborative)
- Obsidian Vault (local-first, markdown)

Duplicate the Notion template to your workspace:
[Public Template Link]

Start your 90 days.

—
```

### On Social Media

```
The 90-Day Sovereign Sprint is now available in three formats:

📄 PDF Workbook (print-ready)
📊 Notion Template (cloud-based)
📓 Obsidian Vault (local-first)

One system. Three formats. 90 days of recorded proof.

Get started: [Landing Page Link]
```

---

## Troubleshooting

**Q: I can't find the Share button**
A: Click the "Share" button in the top-right corner of your workspace.

**Q: The duplicate isn't working**
A: Make sure "Allow duplicate as template" is toggled ON in share settings.

**Q: My formulas aren't calculating**
A: Notion formulas require specific syntax. Double-check the formula in the property settings.

**Q: How do I update the template after publishing?**
A: Edit your workspace directly. Changes will be reflected for new duplicates, but existing duplicates won't auto-update.

**Q: Can I make the template paid?**
A: Notion's template gallery doesn't support paid templates. Consider offering it free and monetizing through your main product.

---

## Next Steps

1. ✅ Create the Notion workspace
2. ✅ Build the template structure
3. ✅ Add sample data
4. ✅ Customize the look & feel
5. ✅ Test everything
6. ✅ Publish as a public template
7. ✅ Get your public link
8. ✅ Update the landing page
9. ✅ Share with your waitlist

---

**Discipline creates freedom when it is recorded.**

Your template is ready. Now share it.

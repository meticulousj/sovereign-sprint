# 90-Day Sovereign Sprint — Notion Setup Guide

This guide walks you through setting up the Notion template for your 90-day sprint. You have two options: duplicate a pre-built shared template, or build it yourself using the structure guide.

## Option 1: Duplicate the Shared Template (Recommended — 2 minutes)

**Coming soon**: A shared Notion template link will be provided. When available:

1. Click the shared template link
2. Click **"Duplicate"** in the top-right corner
3. Choose where to save it (your Notion workspace)
4. Click **"Duplicate"**
5. Update the start date in Settings
6. Begin your sprint

---

## Option 2: Build Your Own Template (15 minutes)

If you prefer to build the template from scratch, follow this step-by-step guide.

### Step 1: Create the Dashboard

1. In Notion, create a new page called **"90-Day Sovereign Sprint"**
2. Add these sections:

**Sprint Overview**
- Create a table with: Start Date, End Date, Current Day (formula), Days Remaining (formula)

**Quick Stats**
- Add a button block with these stats:
  - Days Completed / 90
  - Weekly Completion Rate (%)
  - Consistency Streak (days)
  - Wins Logged (total)

**Navigation**
- Create links to: Daily Log, Weekly Reflection, Milestones, Wins Archive

### Step 2: Create the Daily Log Database

1. Create a new database called **"Daily Log"**
2. Add these properties:

| Property | Type | Notes |
|----------|------|-------|
| Date | Date | Required |
| Day Number | Number | Formula: `dateBetween(prop("End Date"), prop("Start Date"), "days")` |
| Daily Question | Text | The day's prompt |
| Morning Ignition | Checkbox | Completed? |
| Morning Notes | Text | What set the tone? |
| Midday Recalibration | Checkbox | Completed? |
| Midday Notes | Text | What shifted? |
| Evening Audit | Checkbox | Completed? |
| Evening Notes | Text | What was executed? |
| Daily Score | Number | 1-10 rating |
| Wins Logged | Text | Proof of action |
| Patterns Noticed | Text | What's repeating? |
| Status | Select | On Track / Slipped / Recovered |
| Week Number | Number | For linking to Weekly Reflection |

3. Create these views:
   - **Calendar View**: Show entries by date
   - **This Week**: Filter to current week
   - **Wins Archive**: Filter where "Wins Logged" is not empty

### Step 3: Create the Weekly Reflection Database

1. Create a new database called **"Weekly Reflection"**
2. Add these properties:

| Property | Type | Notes |
|----------|------|-------|
| Week Number | Number | 1-13 (required) |
| Week Start Date | Date | Monday of the week |
| Question 01: Top 3 Wins | Text | Your top 3 wins |
| Question 02: Where I Broke My Word | Text | Honest audit |
| Question 03: Patterns I'm Proud Of | Text | What's working |
| Question 04: Patterns That Need to Die | Text | What to eliminate |
| Question 05: Single Focus for Next Week | Text | One priority |
| Weekly Score | Number | 1-100 |
| Consistency Rate | Number | % of rituals completed |
| Key Lesson | Text | One sentence takeaway |
| Mood | Select | Energized / Steady / Struggling / Recovering |
| Related Daily Entries | Relation | Link to Daily Log |

3. Create these views:
   - **Timeline**: All weeks chronological
   - **Insights**: Sorted by weekly score
   - **Mood Arc**: Grouped by mood

### Step 4: Create the Milestones Database

1. Create a new database called **"30/60/90 Milestones"**
2. Add these properties:

| Property | Type | Notes |
|----------|------|-------|
| Milestone | Select | Day 30 / Day 60 / Day 90 |
| Checkpoint Date | Date | Actual date |
| Status | Select | Pending / Completed / Reviewed |
| Foundation Proof | Text | Day 30 proof |
| Momentum Proof | Text | Day 60 proof |
| Mastery Proof | Text | Day 90 proof |
| Evidence | File | Photos, screenshots |
| Reflection | Text | What this means |
| Next Season Plan | Text | After day 90 |

3. Create these views:
   - **Milestone Board**: Kanban view by status
   - **Proof Gallery**: Gallery view of evidence

### Step 5: Create Supporting Databases

**Seasonal Arc** (Track weekly themes)
- Week Number (Number)
- Theme (Text)
- Description (Text)
- Key Ritual (Select)
- Challenge (Text)
- Resources (Text)
- Completed (Checkbox)

Pre-fill with these 12 themes:
1. Identity Friction
2. Energy Command
3. Focus Containment
4. Execution Standards
5. Distraction Audit
6. Environment Design
7. Trust Repair
8. Momentum Compounding
9. Proof Integration
10. Season Closure
11. Next-Season Map
12. Sovereign Handoff

**Wins Archive** (Celebrate all wins)
- Date (Date)
- Win (Text)
- Category (Select): Health / Work / Relationships / Discipline / Learning / Other
- Size (Select): Small / Medium / Large
- Related Week (Relation)
- Impact (Text)
- Proof (File)

**Patterns Tracker** (Monitor recurring patterns)
- Pattern (Text)
- Type (Select): Proud Of / Needs to Die / Neutral
- First Noticed (Date)
- Frequency (Select): Daily / Weekly / Situational
- Evidence (Text)
- Action (Text)
- Status (Select): Emerging / Established / Shifting / Mastered

### Step 6: Create the Settings Page

1. Create a new page called **"Settings & Reference"**
2. Add sections for:
   - Sprint Configuration (start date, end date, timezone)
   - Daily Question Prompts (all 90 questions)
   - Three Rituals Guide (full descriptions)
   - Weekly Reflection Instructions
   - FAQ

---

## Customization Tips

### Add Formulas

**Current Day Counter**:
```
dateBetween(prop("End Date"), prop("Start Date"), "days")
```

**Consistency Rate**:
```
round(
  countAll(
    filter(
      prop("Daily Entries"),
      current.prop("Morning Ignition") == true
    )
  ) / 90 * 100
) & "%"
```

**Weekly Completion**:
```
round(
  countAll(
    filter(
      prop("Related Daily Entries"),
      current.prop("Morning Ignition") == true
    )
  ) / 7 * 100
) & "%"
```

### Add Relations

Link databases together for better insights:
- Daily Log → Weekly Reflection (via Week Number)
- Weekly Reflection → Wins Archive (via Week)
- Daily Log → Patterns Tracker (via Pattern)
- Milestones → Evidence (File uploads)

### Create Rollups

Aggregate data across databases:
- Total wins logged
- Average daily score
- Consistency percentage
- Mood distribution

---

## Daily Workflow in Notion

### Morning (5 minutes)

1. Open today's Daily Log entry
2. Answer the daily question
3. Check off "Morning Ignition"
4. Log your morning notes

### Midday (3 minutes)

1. Return to today's entry
2. Check off "Midday Recalibration"
3. Log what shifted

### Evening (7 minutes)

1. Complete "Evening Audit"
2. Rate the day (1-10)
3. Log wins and patterns
4. Review tomorrow's question

### Weekly (15 minutes)

1. Open this week's Weekly Reflection
2. Answer all 5 questions
3. Review daily entries for patterns
4. Rate the week
5. Identify next week's focus

---

## Optional Enhancements

### Habit Tracker

Create a database to track daily habits:
- Habit name
- Frequency (daily/weekly)
- Completed (checkbox)
- Streak counter
- Link to daily log

### Book & Resources

Track reading and learning:
- Title
- Author
- Category
- Status (reading/finished)
- Key takeaways
- Related week

### Accountability Partners

Track check-ins with accountability partners:
- Person name
- Check-in frequency
- Last check-in date
- Notes
- Wins shared

### Project Tracker

Monitor projects advancing during the sprint:
- Project name
- Status (planning/active/completed)
- Progress %
- Related week
- Wins achieved

---

## Syncing with PDF Workbook

If you're using both the PDF and Notion template:

1. **Daily**: Use Notion for quick logging (faster)
2. **Weekly**: Reflect in both PDF (deeper) and Notion (trackable)
3. **Milestones**: Document in both formats for archiving
4. **Export**: Export Notion data to PDF on day 90 for final record

---

## Backup & Export

### Weekly Backup

1. Open Weekly Reflection database
2. Click **"..."** → **"Export"**
3. Choose PDF format
4. Save to your computer

### Full Sprint Export

On day 90:
1. Go to Dashboard
2. Click **"..."** → **"Export all"**
3. Choose PDF format
4. Save as "90-Day-Sovereign-Sprint-Final.pdf"

### Data Export

For analysis or sharing:
1. Open any database
2. Click **"..."** → **"Export"**
3. Choose CSV format
4. Import to spreadsheet for analysis

---

## Troubleshooting

**Q: How do I link databases?**
A: Use the "Relation" property type. In Daily Log, create a "Week Number" relation to Weekly Reflection.

**Q: Can I use this on mobile?**
A: Yes, Notion works on mobile. Download the Notion app for iOS or Android.

**Q: How do I create a formula?**
A: Click the property type dropdown and select "Formula". Notion has a formula editor with documentation.

**Q: Can I share this with an accountability partner?**
A: Yes, click Share and invite them with view-only or edit access.

**Q: What if I miss a day?**
A: Just continue. The sprint is about consistency, not perfection. Log what you can and keep going.

---

## Next Steps

1. **Set your start date** in Settings
2. **Review the daily questions** to understand the framework
3. **Create your first daily entry** for tomorrow
4. **Set a recurring reminder** for your three rituals
5. **Begin your 90 days**

The template is yours to customize. Make it work for your life, not the other way around.

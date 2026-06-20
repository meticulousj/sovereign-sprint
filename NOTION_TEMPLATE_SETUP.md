# 90-Day Sovereign Sprint — Notion Template Setup Guide

This guide walks you through creating a complete Notion workspace for the 90-Day Sovereign Sprint. Follow these steps to build the template, then publish it as a public template for your community.

---

## Part 1: Create the Master Database Structure

### Step 1: Create a New Notion Workspace

1. Go to [notion.so](https://notion.so)
2. Click "New workspace"
3. Name it: **90-Day Sovereign Sprint**
4. Choose a workspace icon (use a calendar or target emoji)

---

### Step 2: Create the Dashboard Page

This is your hub. Create a new page called **Dashboard** at the workspace root.

**Dashboard Content:**

```
# 90-Day Sovereign Sprint Dashboard

## Quick Stats
- Days Completed: [Database Formula]
- Weekly Completion Rate: [Database Formula]
- Consistency Streak: [Database Formula]
- Wins Logged: [Database Formula]
- Patterns Identified: [Database Formula]

## This Week
- Week Number: [Manual or Formula]
- Theme: [Linked to Weekly Reflections]
- Focus: [From latest weekly reflection]
- Rituals This Week: [Database Formula]

## Navigation
- [Link to Daily Log]
- [Link to Weekly Reflections]
- [Link to Milestones]
- [Link to Wins Archive]
- [Link to Patterns Tracker]

## Recent Wins
[Embed: Wins database, filtered to last 7 days]

## Current Focus
[Text block for user to fill in]
```

---

### Step 3: Create the Daily Log Database

**Name:** Daily Log

**Database Type:** Database (Table view)

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| Date | Date | The date of the entry |
| Day | Number | Day number (1-90) |
| Week | Number | Week number (1-13) |
| Theme | Select | The week's theme (see themes list below) |
| Daily Question | Text | The day's opening prompt |
| Morning Ignition | Text | Morning ritual notes |
| Midday Recalibration | Text | Midday ritual notes |
| Evening Audit | Text | Evening ritual notes |
| Daily Score | Number | Rating 1-10 |
| Rituals Completed | Checkbox | All 3 rituals done? |
| Wins | Text | Wins logged today |
| Patterns | Text | Patterns noticed |
| Energy Level | Select | Low / Medium / High |
| Mood | Select | Energized / Steady / Struggling / Recovering |
| Status | Select | On-track / Struggling / Off-track |
| Tags | Multi-select | #morning-ignition, #midday-recalibration, #evening-audit, #win, #pattern, #breakthrough, #struggle |

**Theme Options (Select):**
- Identity Friction
- Energy Command
- Focus Containment
- Execution Standards
- Distraction Audit
- Environment Design
- Trust Repair
- Momentum Compounding
- Proof Integration
- Season Closure
- Next-Season Map
- Sovereign Handoff
- Final Integration

**Views to Create:**

1. **Calendar View** — Group by Date to see your sprint visually
2. **Timeline View** — Show progress across 90 days
3. **Gallery View** — Show daily entries as cards
4. **By Week** — Group by Week number
5. **By Status** — Filter by On-track / Struggling / Off-track

---

### Step 4: Create the Weekly Reflections Database

**Name:** Weekly Reflections

**Database Type:** Database (Table view)

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| Week | Number | Week number (1-13) |
| Week Start Date | Date | First day of the week |
| Theme | Select | The week's theme |
| Top 3 Wins | Text | Three biggest wins |
| Broke My Word | Text | Where you negotiated against standard |
| Patterns Proud Of | Text | Patterns to strengthen |
| Patterns to Die | Text | Patterns to eliminate |
| Single Focus | Text | One focus for next week |
| Weekly Score | Number | Rating 1-100 |
| Consistency Rate | Percent | % of rituals completed |
| Key Lesson | Text | One sentence takeaway |
| Mood Arc | Select | Energized → Steady → Struggling → Recovering |
| Related Daily Entries | Relation | Link to Daily Log entries |
| Status | Select | Complete / In Progress / Pending |

**Views to Create:**

1. **Timeline View** — Show weeks 1-13
2. **Gallery View** — Show each week as a card
3. **By Theme** — Group by theme

---

### Step 5: Create the Milestones Database

**Name:** Milestones

**Database Type:** Database (Table view)

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| Milestone | Select | Day 30 / Day 60 / Day 90 |
| Checkpoint Date | Date | When the checkpoint occurs |
| Foundation Proof | Text | What's built (Day 30) |
| Momentum Proof | Text | What's compounding (Day 60) |
| Mastery Proof | Text | What's mastered (Day 90) |
| Daily Habits | Text | Habits established |
| Rituals Status | Checkbox | Rituals consistent? |
| Environmental Changes | Text | What changed |
| Wins Summary | Text | Summary of wins |
| Reflection | Text | What this means |
| Next 30 Days | Text | Focus for next phase |
| Status | Select | Pending / In Progress / Complete |

**Views to Create:**

1. **Timeline View** — Show Day 30, 60, 90
2. **Gallery View** — Show each milestone as a card

---

### Step 6: Create the Wins Archive Database

**Name:** Wins Archive

**Database Type:** Database (Table view)

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| Date | Date | When the win occurred |
| Win | Text | Description of the win |
| Category | Select | Health / Work / Relationships / Learning / Discipline |
| Size | Select | Small / Medium / Large |
| Evidence | Text | Proof of the win |
| Related Daily Entry | Relation | Link to Daily Log |
| Tags | Multi-select | #win, #breakthrough, #milestone |

**Views to Create:**

1. **By Category** — Group by category
2. **By Size** — Group by win size
3. **Timeline View** — Show wins chronologically
4. **Gallery View** — Show wins as cards

---

### Step 7: Create the Patterns Tracker Database

**Name:** Patterns Tracker

**Database Type:** Database (Table view)

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| Pattern | Text | Name of the pattern |
| Type | Select | Proud Of / Needs to Die / Neutral |
| Frequency | Select | Daily / Weekly / Situational |
| Evidence | Text | Examples of the pattern |
| Action | Text | What to do about it |
| Status | Select | Emerging / Established / Shifting / Mastered |
| First Noticed | Date | When you first noticed it |
| Last Updated | Date | When you last updated it |
| Related Daily Entries | Relation | Link to Daily Log |
| Tags | Multi-select | #pattern, #proud-of, #needs-to-die |

**Views to Create:**

1. **By Type** — Group by Proud Of / Needs to Die / Neutral
2. **By Status** — Group by Emerging / Established / Shifting / Mastered
3. **Timeline View** — Show pattern evolution
4. **Gallery View** — Show patterns as cards

---

### Step 8: Create the Resources Page

Create a new page called **Resources** with the following sections:

**Daily Questions**
- Create a database or embed the 90 daily questions
- Link to specific days

**Three Rituals Guide**
- Morning Ignition (5 min)
- Midday Recalibration (3 min)
- Evening Audit (7 min)

**Weekly Framework**
- 5 questions, 15 minutes, zero theatre

**Milestone Checkpoints**
- Day 30: Foundation Proof
- Day 60: Momentum Proof
- Day 90: Mastery Proof

**FAQ**
- Common questions and answers

---

## Part 2: Add Formulas and Automations

### Formula 1: Days Completed

In the Dashboard, create a formula to count completed days:

```
dateBetween(now(), prop("Start Date"), "days")
```

### Formula 2: Weekly Completion Rate

In Weekly Reflections, calculate ritual completion:

```
prop("Rituals Completed") / 21 * 100
```

### Formula 3: Consistency Streak

In the Dashboard, count consecutive days with all rituals completed:

```
[Advanced: Requires database query or manual tracking]
```

### Formula 4: Total Wins

In the Dashboard, count all wins:

```
dateBetween(now(), prop("Start Date"), "days")
```

---

## Part 3: Set Up Database Relations

### Link Daily Log to Weekly Reflections

1. In Daily Log, add a property: **Related Weekly Reflection** (Relation)
2. In Weekly Reflections, add a property: **Related Daily Entries** (Relation)
3. These will auto-sync

### Link Daily Log to Wins Archive

1. In Wins Archive, add a property: **Related Daily Entry** (Relation)
2. When you log a win, link it to the daily entry

### Link Daily Log to Patterns Tracker

1. In Patterns Tracker, add a property: **Related Daily Entries** (Relation)
2. When you notice a pattern, link related daily entries

---

## Part 4: Create Template Buttons

Add buttons to automate entry creation:

### Daily Entry Button

Create a button in the Dashboard that:
1. Creates a new Daily Log entry
2. Pre-fills the date
3. Pre-fills the day number
4. Pre-fills the week number
5. Pre-fills the theme
6. Pre-fills the daily question

**Button Formula:**
```
[Requires Notion API or manual setup]
```

### Weekly Reflection Button

Create a button that:
1. Creates a new Weekly Reflections entry
2. Pre-fills the week number
3. Pre-fills the theme
4. Links to related daily entries

---

## Part 5: Customize the Look & Feel

### Colors & Branding

1. **Workspace Icon**: Use a calendar or target emoji
2. **Database Icons**: 
   - Daily Log: 📓 (notebook)
   - Weekly Reflections: 📊 (chart)
   - Milestones: 🏁 (flag)
   - Wins Archive: 🏆 (trophy)
   - Patterns Tracker: 🔄 (cycle)

3. **Color Scheme**:
   - Primary: Deep charcoal or navy
   - Accent: Brass/gold
   - Highlights: Oxblood red

### Cover Images

Add cover images to each database:
- Daily Log: Calendar or notebook imagery
- Weekly Reflections: Reflection or mirror imagery
- Milestones: Achievement or finish line imagery
- Wins Archive: Trophy or celebration imagery
- Patterns Tracker: Cycle or spiral imagery

---

## Part 6: Publish as a Public Template

### Step 1: Prepare the Template

1. Fill in sample data for the first week
2. Test all views and formulas
3. Write clear instructions on the Dashboard
4. Add example entries to show users how to use it

### Step 2: Publish to Notion Template Gallery

1. Go to your Notion workspace settings
2. Click "Share" → "Share to web"
3. Enable "Allow duplicate as template"
4. Copy the public link

### Step 3: Submit to Notion Template Gallery

1. Go to [notion.so/templates](https://notion.so/templates)
2. Click "Submit a template"
3. Fill in:
   - **Template Name**: 90-Day Sovereign Sprint
   - **Description**: A complete system for 90 days of recorded proof. Daily protocols, weekly reflections, milestone checkpoints, and pattern tracking.
   - **Category**: Productivity / Personal Development
   - **Public Link**: [Your public link]
   - **Cover Image**: [Upload a branded image]
   - **Tags**: productivity, personal-development, goal-tracking, habits, 90-days

### Step 4: Get Your Public Template Link

Once approved, you'll receive a public template link like:
```
https://www.notion.so/templates/90-day-sovereign-sprint-[ID]
```

---

## Part 7: Update the Landing Page

Once you have your public Notion template link, update the landing page:

1. Go to the landing page code
2. Find the `notionTemplate` URL in the assets
3. Replace with your public template link
4. Redeploy

---

## Quick Start for Users

Once users duplicate your template, they should:

1. **Set Sprint Dates** in Settings
2. **Review Daily Questions** in Resources
3. **Create First Daily Entry** for tomorrow
4. **Set Ritual Reminders** in their calendar
5. **Begin the 90 days**

---

## Maintenance & Updates

### Weekly
- Review the Dashboard
- Update the current week's theme
- Check consistency metrics

### Monthly
- Archive completed weeks
- Review patterns
- Update next month's focus

### At Day 30, 60, 90
- Complete milestone checkpoints
- Document proof
- Reflect on progress

---

## Troubleshooting

**Q: How do I duplicate this as a template?**
A: Click "Duplicate" in Notion, then save to your workspace.

**Q: Can I customize the databases?**
A: Yes! Add or remove properties as needed for your context.

**Q: How do I share this with my team?**
A: Use Notion's share settings to invite team members.

**Q: Can I export this to PDF?**
A: Yes, use Notion's export feature or print to PDF.

---

## Next Steps

1. **Create the Notion workspace** using this guide
2. **Test all databases and views**
3. **Add sample data** for the first week
4. **Publish as a public template**
5. **Get your public link**
6. **Update the landing page** with the link
7. **Share with your waitlist**

---

**Discipline creates freedom when it is recorded.**

Your template, your system, your proof.

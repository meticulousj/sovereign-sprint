# 90-Day Sovereign Sprint — Notion Template

This document describes the structure of the Notion template for the 90-Day Sovereign Sprint workbook. You can use this to create your own Notion workspace or duplicate the shared template.

## Template Structure

### 1. **Dashboard** (Home Page)

**Purpose**: Central hub for the entire 90-day sprint.

**Content**:
- **Sprint Overview**: Title, start date, end date, current day counter
- **Quick Stats**: 
  - Days completed / 90
  - Weekly completion rate (%)
  - Consistency streak
  - Wins logged
- **Navigation**: Links to Daily Log, Weekly Reflection, Milestones
- **This Week's Focus**: Single sentence from latest weekly reflection
- **Recent Wins**: Last 3 logged wins

**Formula Examples**:
```
Current Day: dateBetween(prop("End Date"), prop("Start Date"), "days")
Completion Rate: round(prop("Days Completed") / 90 * 100) & "%"
```

---

### 2. **Daily Log** (Database)

**Purpose**: Record daily prompts, rituals, and reflections.

**Properties**:
- **Date** (Date): Day of the sprint
- **Day Number** (Number): 1-90 (auto-calculated)
- **Daily Question** (Text): The day's opening prompt
- **Morning Ignition** (Checkbox): Completed?
  - **Morning Notes** (Text): What set the tone?
- **Midday Recalibration** (Checkbox): Completed?
  - **Midday Notes** (Text): What shifted?
- **Evening Audit** (Checkbox): Completed?
  - **Evening Notes** (Text): What was executed?
- **Daily Score** (Number): 1-10 self-rating
- **Wins Logged** (Text): Proof of action
- **Patterns Noticed** (Text): What's repeating?
- **Status** (Select): On Track / Slipped / Recovered

**Views**:
- **Calendar View**: Visual progress across 90 days
- **This Week**: Filtered to current week
- **Consistency Tracker**: Ritual completion rates
- **Wins Archive**: All wins logged

**Template Button**:
```
Create new daily entry with:
- Date: Tomorrow
- Day Number: Auto-increment
- Daily Question: [Prompt for the day]
- Morning/Midday/Evening sections pre-filled
```

---

### 3. **Weekly Reflection** (Database)

**Purpose**: Deep weekly audit and planning.

**Properties**:
- **Week Number** (Number): 1-13
- **Week Start Date** (Date): Monday of the week
- **Question 01: Top 3 Wins** (Text)
- **Question 02: Where I Broke My Word** (Text)
- **Question 03: Patterns I'm Proud Of** (Text)
- **Question 04: Patterns That Need to Die** (Text)
- **Question 05: Single Focus for Next Week** (Text)
- **Weekly Score** (Number): 1-100
- **Consistency Rate** (Number): % of rituals completed
- **Key Lesson** (Text): One sentence takeaway
- **Mood** (Select): Energized / Steady / Struggling / Recovering
- **Related Daily Entries** (Relation): Link to Daily Log

**Views**:
- **Timeline**: All 13 weeks in chronological order
- **Insights**: Sorted by weekly score
- **Patterns**: Group by mood to track emotional arc

---

### 4. **30/60/90 Milestones** (Database)

**Purpose**: Track proof at each checkpoint.

**Properties**:
- **Milestone** (Select): Day 30 / Day 60 / Day 90
- **Checkpoint Date** (Date): Actual date
- **Status** (Select): Pending / Completed / Reviewed
- **Foundation Proof** (Text): Day 30 — What's built?
  - Daily pages completed
  - Core habits established
  - Environmental design done
- **Momentum Proof** (Text): Day 60 — What's compounding?
  - Focus blocks logged
  - Projects advanced
  - Values-aligned decisions
- **Mastery Proof** (Text): Day 90 — What's owned?
  - Major milestone reached
  - System refined
  - Identity shifted
- **Evidence** (File): Upload photos, screenshots, documents
- **Reflection** (Text): What this milestone means
- **Next Season Plan** (Text): What comes after day 90?

**Views**:
- **Milestone Board**: Kanban view (Pending → Completed → Reviewed)
- **Proof Gallery**: All evidence files

---

### 5. **Seasonal Arc** (Database)

**Purpose**: Track the 12-week themes and focus areas.

**Properties**:
- **Week Number** (Number): 1-13
- **Theme** (Text): Weekly focus (e.g., "Identity Friction")
- **Description** (Text): What this week explores
- **Key Ritual** (Select): Which protocol is primary this week?
- **Challenge** (Text): The week's edge case
- **Resources** (Text): Books, articles, tools for this week
- **Completed** (Checkbox)

**Themes for 12 Weeks**:
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

---

### 6. **Wins Archive** (Database)

**Purpose**: Celebrate and track all wins throughout the sprint.

**Properties**:
- **Date** (Date): When the win occurred
- **Win** (Text): What was accomplished
- **Category** (Select): Health / Work / Relationships / Discipline / Learning / Other
- **Size** (Select): Small / Medium / Large
- **Related Week** (Relation): Link to Weekly Reflection
- **Impact** (Text): Why this matters
- **Proof** (File): Photo or document

**Views**:
- **Gallery**: Visual wins with images
- **Timeline**: Chronological wins
- **By Category**: Grouped by type
- **Wins Counter**: Total wins logged

---

### 7. **Patterns Tracker** (Database)

**Purpose**: Identify and monitor recurring patterns.

**Properties**:
- **Pattern** (Text): What's repeating?
- **Type** (Select): Proud Of / Needs to Die / Neutral
- **First Noticed** (Date): When did this start?
- **Frequency** (Select): Daily / Weekly / Situational
- **Evidence** (Text): Examples from the sprint
- **Action** (Text): What to do about it
- **Status** (Select): Emerging / Established / Shifting / Mastered

**Views**:
- **Active Patterns**: Current patterns being tracked
- **Evolution**: How patterns have changed over time

---

### 8. **Settings & Reference**

**Purpose**: Store sprint parameters and guidance.

**Content**:
- **Sprint Start Date**: [User fills in]
- **Sprint End Date**: [Auto-calculated]
- **Daily Question Prompts**: All 90 prompts (one per day)
- **Three Rituals Guide**:
  - Morning Ignition: Full description + example
  - Midday Recalibration: Full description + example
  - Evening Audit: Full description + example
- **Weekly Reflection Instructions**: How to answer the 5 questions
- **Milestone Definitions**: What "proof" means at each stage
- **FAQ**: Common questions answered

---

## How to Use This Template

### Getting Started

1. **Duplicate the Template**: Click "Duplicate" in the shared Notion link
2. **Set Your Dates**: Enter sprint start date in Settings
3. **Review the Rituals**: Read the guidance for each protocol
4. **Create Day 1**: Use the template button to create your first daily entry

### Daily Workflow

1. **Morning** (5 min):
   - Open today's Daily Log entry
   - Answer the daily question
   - Check off Morning Ignition
   - Log your morning notes

2. **Midday** (3 min):
   - Return to today's entry
   - Check off Midday Recalibration
   - Log what shifted or needs adjusting

3. **Evening** (7 min):
   - Complete Evening Audit
   - Rate the day (1-10)
   - Log wins and patterns
   - Set tomorrow's focus

### Weekly Workflow

1. **Friday or Sunday** (15 min):
   - Open this week's Weekly Reflection entry
   - Answer all 5 questions
   - Review daily entries for patterns
   - Rate the week
   - Identify next week's focus

### Milestone Checkpoints

1. **Day 30**: Review Foundation Proof
2. **Day 60**: Review Momentum Proof
3. **Day 90**: Review Mastery Proof + plan next season

---

## Customization Ideas

### Add These Optional Features

1. **Habit Tracker**: Database of habits with daily check-ins
2. **Books & Resources**: Database of recommended reading
3. **People & Accountability**: Database of people to check in with
4. **Projects**: Database of projects advancing during the sprint
5. **Mood Tracker**: Simple daily mood logging
6. **Sleep & Energy**: Track sleep hours and energy levels
7. **Financial Wins**: Track money saved or earned
8. **Health Metrics**: Weight, exercise, nutrition tracking

### Advanced Features

- **Formulas**: Auto-calculate consistency rates, streak counters
- **Relations**: Link daily entries to weekly reflections automatically
- **Rollups**: Aggregate stats (total wins, average daily score)
- **Filters**: Show only incomplete rituals, this week's entries
- **Sorts**: Chronological, by score, by category

---

## Database Relations Map

```
Daily Log
  ├── Links to: Weekly Reflection (via Week Number)
  ├── Links to: Wins Archive (via Date)
  └── Links to: Patterns Tracker (via Pattern)

Weekly Reflection
  ├── Links to: Daily Log (via Week Number)
  ├── Links to: Seasonal Arc (via Week Number)
  └── Links to: Wins Archive (via Week)

Milestones
  └── Links to: Evidence (File uploads)

Wins Archive
  ├── Links to: Daily Log (via Date)
  └── Links to: Weekly Reflection (via Week)

Patterns Tracker
  └── Links to: Daily Log (via Pattern)
```

---

## Export & Backup

- **Weekly Export**: Export weekly reflections as PDF for archiving
- **Final Export**: Export entire sprint as PDF on day 90
- **CSV Export**: Export Daily Log for analysis in spreadsheets
- **Backup**: Duplicate the entire workspace monthly

---

## Tips for Success

1. **Consistency**: Set a daily reminder to complete the three rituals
2. **Honesty**: Don't skip the evening audit even if it was a rough day
3. **Weekly Review**: Make Friday reflection non-negotiable
4. **Pattern Recognition**: Review patterns monthly to spot trends
5. **Celebrate Wins**: Spend time in the Wins Archive when motivation dips

---

## Support & Customization

This template is designed to be flexible. Feel free to:
- Add or remove properties
- Create custom views
- Add formulas for your metrics
- Integrate with other tools (Zapier, IFTTT)
- Export data for analysis

For questions or customization requests, refer to the Notion documentation or reach out for support.

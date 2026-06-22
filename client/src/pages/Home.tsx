import { ArrowRight, Check, Clock3, Download, FileText, Flame, Gauge, ShieldCheck, Eye } from "lucide-react";
import { useState } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import PreviewModal from "@/components/PreviewModal";
import RitualsWalkthrough from "@/components/RitualsWalkthrough";
import FAQAccordion from "@/components/FAQAccordion";

/**
 * Design Philosophy Reminder — Neo-Brutalist Editorial Monasticism:
 * This page must feel like a disciplined campaign dossier, not a generic productivity landing page.
 * Use warm paper, charred ink, oxblood decisions, brass proof markers, offset editorial panels,
 * stamped labels, marginal notes, visible rules, and tactile workbook evidence throughout.
 */

const previewSlides = [
  {
    id: "notion-dashboard",
    title: "Notion Dashboard",
    description:
      "Your command center. Quick stats show days completed, weekly completion rate, consistency streak, and wins logged. Navigate to all databases from one central hub.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663638163440/RKGQXJWSfHbJcuYjLRyjU5/notion-template-preview-dashboard-AQqkwr5AEeGuKpuvAvARbo.webp",
    alt: "Notion Dashboard Preview",
  },
  {
    id: "pdf-workbook",
    title: "PDF Workbook Spread",
    description:
      "Premium printed experience. Left page shows the three daily rituals with checkboxes and note areas. Right page displays the five weekly reflection questions. Warm paper, charred ink, brass accents.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663638163440/RKGQXJWSfHbJcuYjLRyjU5/pdf-workbook-preview-spread-XS9XDRqHyGdYYuskFh68no.webp",
    alt: "PDF Workbook Preview",
  },
  {
    id: "notion-database",
    title: "Daily Log Database",
    description:
      "Track every day. Columns for date, day number, week, theme, daily score, rituals completed, and status. Multiple views: table, calendar, gallery, timeline. All data linked and searchable.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663638163440/RKGQXJWSfHbJcuYjLRyjU5/notion-database-preview-AQqkwr5AEeGuKpuvAvARbo.webp",
    alt: "Notion Daily Log Database Preview",
  },
];

const assets = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663638163440/RKGQXJWSfHbJcuYjLRyjU5/sovereign-sprint-hero-dossier-CahF6DQWoUSHaeRcN9QDHh.webp",
  spread: "https://d2xsxph8kpxj0f.cloudfront.net/310519663638163440/RKGQXJWSfHbJcuYjLRyjU5/sovereign-workbook-spread-PQvAxxaTSm5zJEQTuaw6mC.webp",
  rituals: "https://d2xsxph8kpxj0f.cloudfront.net/310519663638163440/RKGQXJWSfHbJcuYjLRyjU5/ritual-protocol-cards-JwzM5JQJzQNjmyvAB5p2KL.webp",
  milestones: "https://d2xsxph8kpxj0f.cloudfront.net/310519663638163440/RKGQXJWSfHbJcuYjLRyjU5/milestone-proof-map-eNrpx9jx4gnQDLvJDfx92w.webp",
  workbookPdf: "/manus-storage/90_day_sovereign_sprint_workbook_698ede0d.pdf",
  notionTemplate: "https://www.notion.so/templates/sovereign-sprint",
  obsidianVault: "/manus-storage/90-Day-Sovereign-Sprint-Obsidian_d62a9717.zip",
};

const protocols = [
  {
    number: "01",
    title: "Morning ignition",
    prompt: "Start the day before the day starts negotiating with you.",
    detail: "One decisive question, one priority line, one first action logged before momentum gets outsourced to mood.",
    icon: Flame,
  },
  {
    number: "02",
    title: "Midday recalibration",
    prompt: "Pause the drift while there is still time to recover the line.",
    detail: "A short reset that asks what changed, what matters now, and what gets protected for the next block.",
    icon: Gauge,
  },
  {
    number: "03",
    title: "Evening audit",
    prompt: "Close the loop while the evidence is still warm.",
    detail: "A plain record of what was executed, what leaked, what was learned, and what tomorrow inherits.",
    icon: ShieldCheck,
  },
];

const inclusions = [
  ["Daily prompts", "One question to crack the day open without turning reflection into theatre."],
  ["Three rituals", "Morning ignition, midday recalibration, and evening audit repeated until they become a standard."],
  ["Weekly reflection", "Five questions, fifteen minutes, and a clean audit of what actually moved."],
  ["30/60/90 milestones", "Proof checkpoints that show whether the season created evidence or only intention."],
  ["Two formats", "Print-ready PDF plus Notion template, with an Obsidian variant included for local-first operators."],
];

const weeks = [
  "Identity friction",
  "Energy command",
  "Focus containment",
  "Execution standards",
  "Distraction audit",
  "Environment design",
  "Trust repair",
  "Momentum compounding",
  "Proof integration",
  "Season closure",
  "Next-season map",
  "Sovereign handoff",
];

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#get-the-sprint"
      className={`group inline-flex items-center justify-center gap-3 border border-ink bg-oxblood px-6 py-4 font-label text-sm uppercase tracking-[0.18em] text-paper shadow-[7px_7px_0_#161310] transition duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_#161310] focus:outline-none focus:ring-4 focus:ring-brass/35 ${className}`}
    >
      Get the Sprint
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

function Stamp({ children }: { children: React.ReactNode }) {
  return <span className="stamp-label">{children}</span>;
}

export default function Home() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <section className="hero-shell relative min-h-screen border-b-2 border-ink bg-ink text-paper">
        <img src={assets.hero} alt="The 90-Day Sovereign Sprint workbook dossier" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,19,16,0.96)_0%,rgba(22,19,16,0.84)_38%,rgba(22,19,16,0.36)_78%)]" />
        <div className="paper-noise absolute inset-0 opacity-35" />
        <header className="relative z-10 flex items-center justify-between border-b border-paper/20 px-5 py-5 md:px-10">
          <a href="#top" className="font-label text-xs uppercase tracking-[0.35em] text-brass">Sovereign Systems</a>
          <nav className="hidden items-center gap-8 font-label text-xs uppercase tracking-[0.22em] text-paper/72 md:flex">
            <a href="#protocols" className="transition hover:text-brass">Protocols</a>
            <a href="#inside" className="transition hover:text-brass">Inside</a>
            <a href="#milestones" className="transition hover:text-brass">Milestones</a>
          </nav>
        </header>

        <div id="top" className="relative z-10 grid min-h-[calc(100vh-76px)] items-center gap-10 px-5 py-16 md:grid-cols-[0.95fr_0.45fr] md:px-10 lg:px-16">
          <div className="max-w-4xl">
            <Stamp>Season Field Manual / 90 Days</Stamp>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(4.1rem,12vw,12rem)] uppercase leading-[0.78] tracking-[-0.08em] text-paper">
              The 90-Day<br />Sovereign Sprint.
            </h1>
            <p className="mt-8 max-w-2xl border-l-4 border-oxblood pl-6 font-serif text-2xl leading-tight text-paper/88 md:text-3xl">
              One focused arc. Three protocols a day. One honest reflection a week. A workbook for the season you stop drifting and start proving.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaButton />
              <a href="#inside" className="inline-flex items-center gap-3 font-label text-xs uppercase tracking-[0.18em] text-paper/70 underline decoration-brass/60 underline-offset-8 transition hover:text-brass">
                Inspect the system <FileText className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="rotate-panel hidden border border-paper/25 bg-paper/10 p-5 backdrop-blur md:block">
            <div className="border border-paper/30 p-5">
              <p className="font-label text-xs uppercase tracking-[0.25em] text-brass">Dossier No. 090</p>
              <p className="mt-12 font-display text-7xl leading-none text-paper">90</p>
              <p className="mt-3 font-label text-xs uppercase tracking-[0.2em] text-paper/64">Days of recorded proof</p>
              <div className="mt-8 grid grid-cols-3 gap-2">
                {[30, 60, 90].map((day) => (
                  <div key={day} className="border border-paper/25 px-3 py-4 text-center">
                    <p className="font-display text-2xl text-brass">{day}</p>
                    <p className="font-label text-[0.58rem] uppercase tracking-[0.16em] text-paper/58">Day mark</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative border-b-2 border-ink bg-paper px-5 py-20 md:px-10 lg:px-16">
        <div className="absolute left-0 top-0 hidden h-full w-16 border-r-2 border-ink/20 md:block">
          <p className="side-note">Not motivation. System.</p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.78fr_1.22fr] md:pl-16">
          <div>
            <Stamp>Manifesto</Stamp>
            <h2 className="mt-6 font-display text-5xl uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl">You do not need another vague reset.</h2>
          </div>
          <div className="grid gap-8 border-l-2 border-ink pl-8">
            <p className="font-serif text-2xl leading-snug text-ink/84 md:text-4xl">
              You need a finite season with a daily operating rhythm, a weekly reckoning, and a visible record of whether your standards survived contact with real life.
            </p>
            <p className="max-w-3xl text-lg leading-8 text-ink/68">
              The Sovereign Sprint turns ninety days into a contained campaign. It does not ask you to perform transformation online. It asks you to answer one useful question each morning, run three short protocols, and submit honest evidence at the end of each week.
            </p>
          </div>
        </div>
      </section>

      <section id="protocols" className="relative border-b-2 border-ink bg-stone px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <Stamp>Three daily protocols</Stamp>
            <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">A day is won in three cuts.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
              The system is intentionally small. It gives the day a beginning, a correction point, and a closing audit, so discipline becomes observable before it becomes dramatic.
            </p>
            <img src={assets.rituals} alt="Three Sovereign Sprint ritual protocol cards" className="mt-10 border-2 border-ink shadow-[12px_12px_0_#7a2f25]" />
          </div>

          <div className="space-y-5">
            {protocols.map((protocol) => {
              const Icon = protocol.icon;
              return (
                <article key={protocol.title} className="group grid gap-5 border-2 border-ink bg-paper p-6 shadow-[8px_8px_0_#161310] transition duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0_#161310] md:grid-cols-[7rem_1fr]">
                  <div className="flex items-start justify-between md:block">
                    <p className="font-display text-6xl leading-none text-oxblood">{protocol.number}</p>
                    <Icon className="mt-2 h-7 w-7 text-brass md:mt-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl uppercase tracking-[-0.03em] md:text-5xl">{protocol.title}</h3>
                    <p className="mt-3 font-serif text-xl italic leading-snug text-ink/80">{protocol.prompt}</p>
                    <p className="mt-5 leading-7 text-ink/66">{protocol.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <RitualsWalkthrough />

      <FAQAccordion />

      <section id="inside" className="border-b-2 border-ink bg-paper px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1">
            <img src={assets.spread} alt="Interior workbook spread with daily ritual and weekly reflection pages" className="border-2 border-ink shadow-[14px_14px_0_#b08b43]" />
          </div>
          <div className="order-1 lg:order-2">
            <Stamp>Inside the sprint</Stamp>
            <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">The workbook is the witness.</h2>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              Each page is built to reduce hiding. The prompts are short, the rituals are repeatable, and the weekly reflection is plain enough to tell the truth.
            </p>
            <div className="mt-8 divide-y-2 divide-ink border-y-2 border-ink">
              {inclusions.map(([title, body]) => (
                <div key={title} className="grid gap-4 py-5 md:grid-cols-[11rem_1fr]">
                  <h3 className="font-label text-sm uppercase tracking-[0.16em] text-oxblood">{title}</h3>
                  <p className="leading-7 text-ink/70">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-ink bg-ink px-5 py-20 text-paper md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Stamp>Weekly reflection</Stamp>
              <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">Five questions. Fifteen minutes. Zero theatre.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "What actually moved this week?",
                "Where did I negotiate against my own standard?",
                "What pattern am I proud of?",
                "What pattern needs to die?",
                "What is the single focus for next week?",
              ].map((question, index) => (
                <div key={question} className={`border border-paper/25 bg-paper/7 p-5 ${index === 4 ? "md:col-span-2" : ""}`}>
                  <p className="font-display text-4xl text-brass">0{index + 1}</p>
                  <p className="mt-5 font-serif text-xl leading-snug text-paper/88">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="milestones" className="border-b-2 border-ink bg-paper px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Stamp>30 / 60 / 90 Milestones</Stamp>
              <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">Proof you moved, not just tried.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink/70">
              At day 30, you inspect the base. At day 60, you inspect the compound effect. At day 90, you inspect ownership. The goal is not a perfect streak. The goal is evidence you can build from.
            </p>
          </div>
          <img src={assets.milestones} alt="30, 60, and 90 day milestone proof map" className="mt-10 border-2 border-ink shadow-[14px_14px_0_#7a2f25]" />
        </div>
      </section>

      <section className="border-b-2 border-ink bg-stone px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Stamp>The seasonal arc</Stamp>
            <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">Twelve weeks. One line held.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {weeks.map((week, index) => (
              <div key={week} className="border-2 border-ink bg-paper p-4 transition hover:-translate-y-1 hover:bg-brass/20">
                <p className="font-display text-3xl text-oxblood">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-4 font-label text-xs uppercase tracking-[0.15em] text-ink/72">{week}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="get-the-sprint" className="relative bg-ink px-5 py-20 text-paper md:px-10 lg:px-16">
        <div className="paper-noise absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.82fr]">
          <div>
            <Stamp>Get the Sprint</Stamp>
            <h2 className="mt-6 max-w-4xl font-display text-6xl uppercase leading-[0.82] tracking-[-0.06em] md:text-8xl">Stop drifting. Start proving.</h2>
            <p className="mt-8 max-w-2xl font-serif text-2xl leading-snug text-paper/82">
              A focused ninety-day workbook for founders, operators, creators, and self-led professionals who want a season of visible evidence instead of another private promise.
            </p>
          </div>

          <aside className="border-2 border-paper bg-paper p-6 text-ink shadow-[14px_14px_0_#7a2f25]">
            <div className="flex items-start justify-between gap-6 border-b-2 border-ink pb-6">
              <div>
                <p className="font-label text-xs uppercase tracking-[0.22em] text-oxblood">Launch package</p>
                <h3 className="mt-3 font-display text-4xl uppercase tracking-[-0.04em]">PDF + Notion + Obsidian</h3>
              </div>
              <Download className="h-8 w-8 text-brass" />
            </div>
            <div className="space-y-4 py-6">
              {inclusions.map(([title]) => (
                <div key={title} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center border border-ink bg-oxblood text-paper"><Check className="h-4 w-4" /></span>
                  <span className="font-label text-xs uppercase tracking-[0.13em]">{title}</span>
                </div>
              ))}
            </div>
            <div className="mb-6 space-y-3 border-b-2 border-ink pb-6">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="group flex w-full items-center justify-center gap-3 border-2 border-brass bg-brass/12 px-6 py-4 font-label text-sm uppercase tracking-[0.18em] text-brass shadow-[5px_5px_0_#b08b43] transition duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#b08b43] focus:outline-none focus:ring-4 focus:ring-brass/35"
              >
                <Eye className="h-4 w-4" />
                Sneak Peek
              </button>
              <a
                href={assets.workbookPdf}
                download="90-Day-Sovereign-Sprint-Workbook.pdf"
                className="group flex w-full items-center justify-center gap-3 border-2 border-brass bg-brass/12 px-6 py-4 font-label text-sm uppercase tracking-[0.18em] text-brass shadow-[5px_5px_0_#b08b43] transition duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#b08b43] focus:outline-none focus:ring-4 focus:ring-brass/35"
              >
                <Download className="h-4 w-4" />
                PDF Workbook (1.6 MB)
              </a>
              <a
                href={assets.notionTemplate}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 border-2 border-brass bg-brass/12 px-6 py-4 font-label text-sm uppercase tracking-[0.18em] text-brass shadow-[5px_5px_0_#b08b43] transition duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#b08b43] focus:outline-none focus:ring-4 focus:ring-brass/35"
              >
                <Download className="h-4 w-4" />
                Duplicate Notion Template
              </a>
              <div className="text-center text-xs text-ink/60 border-t border-ink/20 pt-3">
                <p>👉 <a href="#" className="underline hover:text-ink">Setup Guide</a> for building your own template</p>
              </div>
              <a
                href={assets.obsidianVault}
                download="90-Day-Sovereign-Sprint-Obsidian.zip"
                className="group flex w-full items-center justify-center gap-3 border-2 border-brass bg-brass/12 px-6 py-4 font-label text-sm uppercase tracking-[0.18em] text-brass shadow-[5px_5px_0_#b08b43] transition duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#b08b43] focus:outline-none focus:ring-4 focus:ring-brass/35"
              >
                <Download className="h-4 w-4" />
                Obsidian Vault (21 KB)
              </a>
            </div>
            <WaitlistForm />
          </aside>
        </div>
      </section>

      {/* Preview Modal */}
      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        slides={previewSlides}
      />

      <footer className="flex flex-col gap-4 border-t-2 border-paper/15 bg-ink px-5 py-8 text-paper/60 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <p className="font-label text-xs uppercase tracking-[0.22em]">The 90-Day Sovereign Sprint</p>
        <p className="font-serif text-sm italic">Discipline creates freedom when it is recorded.</p>
        <a href="#top" className="font-label text-xs uppercase tracking-[0.18em] text-brass">Return to top</a>
      </footer>
    </main>
  );
}

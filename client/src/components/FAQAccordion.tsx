import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "rituals" | "commitment" | "formats" | "results";
}

const faqItems: FAQItem[] = [
  {
    category: "rituals",
    question: "What if I miss a day? Does the streak reset?",
    answer:
      "The Sprint isn't about perfection—it's about evidence. A missed day doesn't reset anything. What matters is what you do next. Log the miss, understand why it happened, and return to the rituals the next morning. The goal is 90 days of honest practice, not 90 days of flawless execution. Many people who complete the Sprint have 2–3 missed days. They still finish with undeniable proof.",
  },
  {
    category: "rituals",
    question: "How long do the three rituals actually take?",
    answer:
      "Morning Ignition: 5–10 minutes. Midday Recalibration: 2–3 minutes. Evening Audit: 5–10 minutes. Total daily commitment: 15–20 minutes. That's less time than most people spend on email. The rituals are designed to be short enough to sustain, long enough to matter.",
  },
  {
    category: "rituals",
    question: "Can I do the rituals on my phone, or do I need the PDF?",
    answer:
      "You can use any format: PDF printed, Notion on your laptop, Obsidian on your phone, or even a plain notebook. The format doesn't matter. What matters is that you show up and record the truth. Pick the format that removes friction for you. Some people print the PDF and keep it on their desk. Others use Notion as their single source of truth. Choose what works.",
  },
  {
    category: "commitment",
    question: "Is 90 days really the right length?",
    answer:
      "Yes. 30 days is enough to start a habit. 60 days is enough to see a pattern. 90 days is enough to see a season change. At day 30, you'll have proof you can show up. At day 60, you'll see the compound effect. At day 90, you'll own the system. Shorter sprints don't give you enough time to see real change. Longer ones lose momentum.",
  },
  {
    category: "commitment",
    question: "What if I'm already busy? How do I add this on top?",
    answer:
      "The rituals aren't something you add on top of your work—they're something you add to your work. The Morning Ignition replaces the chaos of deciding what to do. The Midday Recalibration prevents wasted afternoons. The Evening Audit prevents tomorrow from starting blind. Most people find they save time because they waste less of it. You're not adding 20 minutes to your day; you're protecting your day with 20 minutes of intention.",
  },
  {
    category: "commitment",
    question: "Do I need to be a 'productivity person' to benefit?",
    answer:
      "No. The Sprint isn't for productivity nerds—it's for people who are tired of drifting. You don't need to be organized, disciplined, or motivated. You just need to be honest. The rituals work because they're simple and they create evidence. If you can show up and tell the truth for 90 days, you'll see what's possible.",
  },
  {
    category: "formats",
    question: "What's the difference between PDF, Notion, and Obsidian?",
    answer:
      "PDF: Tactile, printable, no distractions. Best if you like pen and paper. Notion: Searchable, linked, visual dashboards. Best if you want to see patterns and trends. Obsidian: Local-first, markdown-based, portable. Best if you want your data to stay on your device. All three contain the same prompts and rituals. Choose based on how you work.",
  },
  {
    category: "formats",
    question: "Can I switch formats mid-Sprint?",
    answer:
      "Yes. Some people start with PDF, then move to Notion when they want to see trends. Others start digital and switch to paper when they want less distraction. The data is portable—you can migrate your entries between formats. The Sprint is flexible enough to adapt to you.",
  },
  {
    category: "results",
    question: "What kind of results can I expect?",
    answer:
      "That depends on what you're working on. The Sprint doesn't promise specific outcomes—it promises visibility. You'll know exactly what you shipped, where you got stuck, and what patterns are real. Some people use it to build a business. Others use it to fix a relationship or recover from burnout. The rituals work because they force honesty, not because they're magic.",
  },
  {
    category: "results",
    question: "What if I don't see results by day 30?",
    answer:
      "Day 30 is a checkpoint, not a verdict. You're looking for evidence you can build from—not a finished product. By day 30, you should see: patterns in your behavior, clarity on what actually matters, and proof you can show up consistently. If you're not seeing those, the rituals are still working—they're just showing you what needs to change.",
  },
  {
    category: "results",
    question: "Is this a one-time thing, or do I repeat it?",
    answer:
      "The Sprint is one focused 90-day arc. After you finish, you can either repeat it with a new focus, or you can integrate the rituals into your permanent practice. Many people do the Sprint once and then keep the three rituals as a daily habit. Others do multiple Sprints on different goals. It's designed to be a season, not a forever commitment.",
  },
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (question: string) => {
    setOpenItems((prev) =>
      prev.includes(question) ? prev.filter((q) => q !== question) : [...prev, question]
    );
  };

  const categories = ["rituals", "commitment", "formats", "results"] as const;
  const categoryLabels = {
    rituals: "About the Rituals",
    commitment: "About the Commitment",
    formats: "About the Formats",
    results: "About the Results",
  };

  return (
    <section className="bg-paper px-5 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-ink mb-4">Common Questions</h2>
          <p className="font-serif text-lg text-ink/72">
            The Sprint raises objections. Here are honest answers.
          </p>
        </div>

        {/* FAQ by Category */}
        {categories.map((category) => {
          const categoryItems = faqItems.filter((item) => item.category === category);

          return (
            <div key={category} className="mb-16">
              {/* Category Header */}
              <h3 className="font-label text-sm uppercase tracking-[0.16em] text-brass mb-6 pb-3 border-b-2 border-brass/40">
                {categoryLabels[category]}
              </h3>

              {/* FAQ Items */}
              <div className="space-y-3">
                {categoryItems.map((item) => {
                  const isOpen = openItems.includes(item.question);

                  return (
                    <div
                      key={item.question}
                      className="border-2 border-ink/20 transition-all duration-200 hover:border-ink/40"
                    >
                      <button
                        onClick={() => toggleItem(item.question)}
                        className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-ink/2 transition"
                      >
                        <h4 className="font-serif text-lg font-semibold text-ink flex-1 pr-4">
                          {item.question}
                        </h4>
                        <ChevronDown
                          className={`h-5 w-5 text-brass flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <div className="border-t-2 border-ink/20 bg-ink/2 p-5 animate-in fade-in slide-in-from-top-2 duration-200">
                          <p className="font-serif text-base leading-7 text-ink/80">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Still have questions? */}
        <div className="mt-16 border-2 border-brass bg-brass/8 p-8 text-center">
          <p className="font-serif text-lg text-ink/72 mb-4">Still have questions?</p>
          <p className="font-label text-sm uppercase tracking-[0.13em] text-ink/60">
            Join the waitlist and we'll send you a detailed guide when the Sprint launches.
          </p>
        </div>
      </div>
    </section>
  );
}

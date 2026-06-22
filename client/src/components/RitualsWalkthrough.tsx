import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sun, Clock, Moon } from "lucide-react";

interface Ritual {
  id: number;
  title: string;
  time: string;
  icon: React.ReactNode;
  description: string;
  steps: string[];
  color: string;
  bgColor: string;
}

const rituals: Ritual[] = [
  {
    id: 1,
    title: "Morning Ignition",
    time: "5–10 minutes",
    icon: <Sun className="h-12 w-12" />,
    description: "Start your day with intention. Answer one focused question. Set the three protocols you'll execute today.",
    steps: [
      "Sit with coffee or tea",
      "Read the daily question",
      "Write one honest answer",
      "Identify your three protocols",
      "Commit to the day",
    ],
    color: "text-brass",
    bgColor: "bg-brass/12",
  },
  {
    id: 2,
    title: "Midday Recalibration",
    time: "2–3 minutes",
    icon: <Clock className="h-12 w-12" />,
    description: "Pause at noon. Check your progress. Adjust course if needed. No judgment—just honest assessment.",
    steps: [
      "Step away from work",
      "Review morning progress",
      "Note what's working",
      "Identify blockers",
      "Adjust if necessary",
    ],
    color: "text-ink",
    bgColor: "bg-ink/5",
  },
  {
    id: 3,
    title: "Evening Audit",
    time: "5–10 minutes",
    icon: <Moon className="h-12 w-12" />,
    description: "Close the loop. Reflect on what moved. Record proof. Celebrate the small wins. Plan tomorrow.",
    steps: [
      "Review the day's work",
      "Record what you shipped",
      "Note patterns",
      "Celebrate wins",
      "Prepare for tomorrow",
    ],
    color: "text-oxblood",
    bgColor: "bg-oxblood/12",
  },
];

export default function RitualsWalkthrough() {
  const [currentRitual, setCurrentRitual] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const stepTimer = setTimeout(() => {
      if (currentStep < rituals[currentRitual].steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Move to next ritual
        if (currentRitual < rituals.length - 1) {
          setCurrentRitual(currentRitual + 1);
          setCurrentStep(0);
        } else {
          // Loop back to start
          setCurrentRitual(0);
          setCurrentStep(0);
        }
      }
    }, 3000);

    return () => clearTimeout(stepTimer);
  }, [currentStep, currentRitual, isAutoPlay]);

  const ritual = rituals[currentRitual];

  const handlePrevRitual = () => {
    setIsAutoPlay(false);
    setCurrentRitual((prev) => (prev === 0 ? rituals.length - 1 : prev - 1));
    setCurrentStep(0);
  };

  const handleNextRitual = () => {
    setIsAutoPlay(false);
    setCurrentRitual((prev) => (prev === rituals.length - 1 ? 0 : prev + 1));
    setCurrentStep(0);
  };

  const handlePrevStep = () => {
    setIsAutoPlay(false);
    setCurrentStep((prev) => (prev === 0 ? ritual.steps.length - 1 : prev - 1));
  };

  const handleNextStep = () => {
    setIsAutoPlay(false);
    if (currentStep < ritual.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleNextRitual();
    }
  };

  return (
    <section className="bg-paper py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-ink mb-4">Three Rituals. One Day. Proof.</h2>
          <p className="font-serif text-lg text-ink/72 max-w-2xl mx-auto">
            The Sprint isn't about perfection. It's about consistency. These three micro-rituals anchor your day and compound into 90 days of undeniable progress.
          </p>
        </div>

        {/* Main Demo Area */}
        <div className={`border-4 border-ink ${ritual.bgColor} p-8 mb-8 transition-all duration-500`}>
          {/* Ritual Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`${ritual.color}`}>{ritual.icon}</div>
            <div>
              <h3 className="font-display text-3xl font-bold text-ink">{ritual.title}</h3>
              <p className="font-label text-xs uppercase tracking-[0.13em] text-ink/60">{ritual.time}</p>
            </div>
          </div>

          {/* Description */}
          <p className="font-serif text-lg text-ink mb-8 leading-relaxed">{ritual.description}</p>

          {/* Steps */}
          <div className="space-y-4 mb-8">
            <p className="font-label text-xs uppercase tracking-[0.13em] text-ink/72 mb-4">The Process</p>
            {ritual.steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 p-4 border-l-4 transition-all duration-300 ${
                  idx === currentStep
                    ? `border-l-brass bg-brass/8 scale-105 origin-left`
                    : idx < currentStep
                      ? "border-l-ink/40 opacity-60"
                      : "border-l-ink/20 opacity-40"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-label text-xs font-bold transition-all duration-300 ${
                    idx === currentStep
                      ? "bg-brass text-paper"
                      : idx < currentStep
                        ? "bg-ink/40 text-paper"
                        : "bg-ink/10 text-ink/60"
                  }`}
                >
                  {idx + 1}
                </div>
                <p className={`font-serif text-base pt-1 ${idx === currentStep ? "text-ink font-semibold" : "text-ink/72"}`}>
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="flex gap-2 mb-8">
            {ritual.steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 flex-1 transition-all duration-300 ${
                  idx <= currentStep ? "bg-brass" : "bg-ink/20"
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevStep}
              className="flex items-center gap-2 border-2 border-ink px-4 py-2 font-label text-xs uppercase tracking-[0.13em] text-ink hover:bg-ink/5 transition"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            <div className="flex gap-2">
              {ritual.steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlay(false);
                    setCurrentStep(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentStep ? "bg-brass w-6" : "bg-ink/40 hover:bg-ink/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextStep}
              className="flex items-center gap-2 border-2 border-brass bg-brass/12 px-4 py-2 font-label text-xs uppercase tracking-[0.13em] text-brass hover:bg-brass/20 transition"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Ritual Selector */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handlePrevRitual}
            className="flex items-center gap-2 border-2 border-ink px-4 py-2 font-label text-xs uppercase tracking-[0.13em] text-ink hover:bg-ink/5 transition"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous Ritual
          </button>

          <div className="flex gap-3">
            {rituals.map((r, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlay(false);
                  setCurrentRitual(idx);
                  setCurrentStep(0);
                }}
                className={`px-6 py-3 font-label text-sm uppercase tracking-[0.13em] transition-all border-2 ${
                  idx === currentRitual
                    ? `border-${r.color.split("-")[1]} bg-${r.color.split("-")[1]}/12 text-${r.color.split("-")[1]}`
                    : "border-ink/20 text-ink/60 hover:border-ink/40"
                }`}
              >
                {r.title.split(" ")[0]}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextRitual}
            className="flex items-center gap-2 border-2 border-brass bg-brass/12 px-4 py-2 font-label text-xs uppercase tracking-[0.13em] text-brass hover:bg-brass/20 transition"
          >
            Next Ritual
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Auto-play Toggle */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-6 py-3 font-label text-xs uppercase tracking-[0.13em] border-2 transition ${
              isAutoPlay
                ? "border-brass bg-brass/12 text-brass"
                : "border-ink/40 text-ink/60 hover:border-ink/60"
            }`}
          >
            {isAutoPlay ? "⏸ Pause Auto-play" : "▶ Resume Auto-play"}
          </button>
        </div>
      </div>
    </section>
  );
}

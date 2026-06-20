import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PreviewSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: PreviewSlide[];
}

export default function PreviewModal({
  isOpen,
  onClose,
  slides,
}: PreviewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isOpen || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl border-2 border-ink bg-paper p-0">
        {/* Header */}
        <div className="border-b-2 border-ink px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Sneak Peek
            </h2>
            <p className="font-label text-xs uppercase tracking-[0.13em] text-ink/60">
              {currentIndex + 1} / {slides.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-ink/10 rounded transition"
            aria-label="Close preview"
          >
            <X className="h-5 w-5 text-ink" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative bg-ink/5 aspect-video overflow-hidden">
          <img
            src={currentSlide.image}
            alt={currentSlide.alt}
            className="w-full h-full object-cover"
          />

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white text-ink rounded-full shadow-lg transition z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white text-ink rounded-full shadow-lg transition z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Slide Info */}
        <div className="px-6 py-4 border-b-2 border-ink">
          <h3 className="font-label text-sm uppercase tracking-[0.18em] text-brass mb-2">
            {currentSlide.title}
          </h3>
          <p className="font-body text-sm text-ink/80 leading-relaxed">
            {currentSlide.description}
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition ${
                  index === currentIndex
                    ? "w-8 bg-brass"
                    : "w-2 bg-ink/30 hover:bg-ink/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <p className="font-label text-xs uppercase tracking-[0.13em] text-ink/60">
            Use arrows or dots to navigate
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

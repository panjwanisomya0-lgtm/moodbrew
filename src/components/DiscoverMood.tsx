import React from 'react';
import { MOODS, MoodItem, SIGNATURE_COFFEES } from '../data/coffeeData';
import { ArrowUpRight, Sparkles, Check } from 'lucide-react';

interface DiscoverMoodProps {
  selectedMoodId: string;
  onSelectMood: (moodId: string) => void;
  onOpenQuiz?: () => void;
}

export const DiscoverMood: React.FC<DiscoverMoodProps> = ({
  selectedMoodId,
  onSelectMood,
  onOpenQuiz,
}) => {
  return (
    <section id="moods" className="py-20 md:py-28 px-6 bg-[#FAF6F0] border-b border-[#2D201C]/8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#B97849]">
              <span className="w-6 h-[1px] bg-[#B97849]" />
              <span>Section 02 · Emotional Calibration</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#2D201C] tracking-tight">
              SO, HOW ARE WE FEELING?
            </h2>

            <p className="text-base sm:text-lg text-[#2D201C]/75 leading-relaxed font-light">
              Pick the feeling that finds you today. We'll find the cup that belongs with it.
            </p>
          </div>

          {onOpenQuiz && (
            <button
              onClick={onOpenQuiz}
              className="px-5 py-3 rounded-2xl bg-white border border-[#B97849]/30 hover:border-[#B97849] hover:bg-[#FAF6F0] text-[#2D201C] shadow-2xs flex items-center gap-3 group transition-all cursor-pointer self-start md:self-auto shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-[#B97849]/15 flex items-center justify-center text-[#B97849] group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono uppercase tracking-wider text-[#B97849] font-medium">Unsure what to feel?</p>
                <p className="text-xs font-editorial text-[#2D201C] font-semibold">Take 60-Sec Discovery Quiz →</p>
              </div>
            </button>
          )}
        </div>

        {/* Quick Filter Strip for Mobile/Touch / Easy Switching */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs uppercase font-mono tracking-wider text-[#2D201C]/50 shrink-0 mr-2">
            Quick Select:
          </span>
          {MOODS.map((mood) => {
            const isSelected = mood.id === selectedMoodId;
            return (
              <button
                key={`tab-${mood.id}`}
                onClick={() => onSelectMood(mood.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#2D201C] text-white shadow-sm ring-2 ring-[#B97849]'
                    : 'bg-white/80 text-[#2D201C]/80 hover:bg-white hover:text-[#2D201C] border border-[#2D201C]/10'
                }`}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/10"
                  style={{ backgroundColor: mood.hex }} 
                />
                <span>{mood.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#B97849]" />}
              </button>
            );
          })}
        </div>

        {/* Art-Directed Editorial Layout for 6 Moods (Not a generic repetitive 3x2 grid!) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Mood 01 — SLOW MORNING (Large Anchor Card - 7 cols) */}
          {(() => {
            const mood = MOODS[0];
            const coffee = SIGNATURE_COFFEES.find(c => c.id === mood.recommendedCoffeeId);
            const isSelected = selectedMoodId === mood.id;
            return (
              <div
                onClick={() => onSelectMood(mood.id)}
                className={`md:col-span-7 rounded-3xl p-8 sm:p-10 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group border ${
                  isSelected
                    ? 'ring-2 ring-[#2D201C] shadow-xl scale-[1.01]'
                    : 'border-[#2D201C]/10 hover:border-[#2D201C]/30 hover:shadow-md'
                }`}
                style={{ backgroundColor: mood.bgLight }}
              >
                {/* Background Swatch Pill Accent */}
                <div 
                  className="absolute top-0 right-0 w-44 h-44 rounded-bl-full opacity-30 pointer-events-none transition-transform group-hover:scale-110 duration-500"
                  style={{ backgroundColor: mood.hex }}
                />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2D201C]/60">
                      Mood {mood.number} · {mood.colorName}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center text-[#2D201C] group-hover:bg-[#2D201C] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-[#2D201C] font-normal tracking-tight">
                      {mood.name}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#2D201C]/80 font-light max-w-md">
                      {mood.quote}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#2D201C]/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#2D201C]/50">
                      Recommended Cup
                    </p>
                    <p className="text-sm font-semibold text-[#2D201C]">{coffee?.name}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {mood.flavourNotes.map((note, i) => (
                      <span key={i} className="text-xs text-[#2D201C]/70 font-light">
                        {note}{i < mood.flavourNotes.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Mood 02 — NEED A RESET (Editorial Vertical Panel - 5 cols) */}
          {(() => {
            const mood = MOODS[1];
            const coffee = SIGNATURE_COFFEES.find(c => c.id === mood.recommendedCoffeeId);
            const isSelected = selectedMoodId === mood.id;
            return (
              <div
                onClick={() => onSelectMood(mood.id)}
                className={`md:col-span-5 rounded-3xl p-8 sm:p-10 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group border ${
                  isSelected
                    ? 'ring-2 ring-[#2D201C] shadow-xl scale-[1.01]'
                    : 'border-[#2D201C]/10 hover:border-[#2D201C]/30 hover:shadow-md'
                }`}
                style={{ backgroundColor: mood.bgLight }}
              >
                <div 
                  className="absolute bottom-0 right-0 w-36 h-36 rounded-tl-full opacity-40 pointer-events-none"
                  style={{ backgroundColor: mood.hex }}
                />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2D201C]/60">
                      Mood {mood.number} · {mood.colorName}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center text-[#2D201C] group-hover:bg-[#2D201C] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#2D201C] font-normal tracking-tight">
                    {mood.name}
                  </h3>

                  <p className="text-sm text-[#2D201C]/80 font-light leading-relaxed">
                    {mood.quote}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#2D201C]/10 relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2D201C]/50 block">
                    Target Pairing
                  </span>
                  <span className="text-sm font-semibold text-[#2D201C] block">
                    {coffee?.name}
                  </span>
                  <p className="text-xs text-[#2D201C]/70 mt-1">
                    Chilled layers · Vanilla pods · Fresh ice
                  </p>
                </div>
              </div>
            );
          })()}

          {/* Mood 03 — MAIN CHARACTER (4 cols) */}
          {(() => {
            const mood = MOODS[2];
            const coffee = SIGNATURE_COFFEES.find(c => c.id === mood.recommendedCoffeeId);
            const isSelected = selectedMoodId === mood.id;
            return (
              <div
                onClick={() => onSelectMood(mood.id)}
                className={`md:col-span-4 rounded-3xl p-8 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group border ${
                  isSelected
                    ? 'ring-2 ring-[#2D201C] shadow-xl scale-[1.01]'
                    : 'border-[#2D201C]/10 hover:border-[#2D201C]/30 hover:shadow-md'
                }`}
                style={{ backgroundColor: mood.bgLight }}
              >
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2D201C]/60">
                      Mood {mood.number}
                    </span>
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-black/10"
                      style={{ backgroundColor: mood.hex }} 
                    />
                  </div>
                  <h3 className="font-editorial text-2xl text-[#2D201C] font-normal">
                    {mood.name}
                  </h3>
                  <p className="text-xs text-[#2D201C]/75 font-light leading-relaxed">
                    {mood.quote}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2D201C]/10">
                  <p className="text-xs font-semibold text-[#2D201C]">{coffee?.name}</p>
                  <p className="text-[11px] text-[#2D201C]/60 font-mono">Dark chocolate & rose water</p>
                </div>
              </div>
            );
          })()}

          {/* Mood 04 — DEEP FOCUS (4 cols - High Contrast Dark/Espresso Block) */}
          {(() => {
            const mood = MOODS[3];
            const coffee = SIGNATURE_COFFEES.find(c => c.id === mood.recommendedCoffeeId);
            const isSelected = selectedMoodId === mood.id;
            return (
              <div
                onClick={() => onSelectMood(mood.id)}
                className={`md:col-span-4 rounded-3xl p-8 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group border bg-[#2D201C] text-[#F5EFE6] ${
                  isSelected
                    ? 'ring-2 ring-[#B97849] shadow-xl scale-[1.01]'
                    : 'border-white/10 hover:border-white/30 hover:shadow-md'
                }`}
              >
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                      Mood {mood.number} · {mood.colorName}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B97849]" />
                  </div>
                  <h3 className="font-editorial text-2xl text-[#FFF9F1] font-normal tracking-tight">
                    {mood.name}
                  </h3>
                  <p className="text-xs text-[#F5EFE6]/75 font-light leading-relaxed">
                    {mood.quote}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold text-[#FFF9F1]">{coffee?.name}</p>
                  <p className="text-[11px] text-white/50 font-mono">Ristretto double & glossy microfoam</p>
                </div>
              </div>
            );
          })()}

          {/* Mood 05 & 06 (Spanned 4 cols & balanced row) */}
          {(() => {
            const mood = MOODS[4];
            const coffee = SIGNATURE_COFFEES.find(c => c.id === mood.recommendedCoffeeId);
            const isSelected = selectedMoodId === mood.id;
            return (
              <div
                onClick={() => onSelectMood(mood.id)}
                className={`md:col-span-4 rounded-3xl p-8 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group border ${
                  isSelected
                    ? 'ring-2 ring-[#2D201C] shadow-xl scale-[1.01]'
                    : 'border-[#2D201C]/10 hover:border-[#2D201C]/30 hover:shadow-md'
                }`}
                style={{ backgroundColor: mood.bgLight }}
              >
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2D201C]/60">
                      Mood {mood.number}
                    </span>
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-black/10"
                      style={{ backgroundColor: mood.hex }} 
                    />
                  </div>
                  <h3 className="font-editorial text-2xl text-[#2D201C] font-normal">
                    {mood.name}
                  </h3>
                  <p className="text-xs text-[#2D201C]/75 font-light leading-relaxed">
                    {mood.quote}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2D201C]/10">
                  <p className="text-xs font-semibold text-[#2D201C]">{coffee?.name}</p>
                  <p className="text-[11px] text-[#2D201C]/60 font-mono">Steamed foam cloud & Ceylon cinnamon</p>
                </div>
              </div>
            );
          })()}

          {/* Mood 06 — FEELING BOLD (Span 12 for wide artistic climax banner) */}
          {(() => {
            const mood = MOODS[5];
            const coffee = SIGNATURE_COFFEES.find(c => c.id === mood.recommendedCoffeeId);
            const isSelected = selectedMoodId === mood.id;
            return (
              <div
                onClick={() => onSelectMood(mood.id)}
                className={`md:col-span-12 rounded-3xl p-8 sm:p-10 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 group border ${
                  isSelected
                    ? 'ring-2 ring-[#2D201C] shadow-xl scale-[1.005]'
                    : 'border-[#2D201C]/10 hover:border-[#2D201C]/30 hover:shadow-md'
                }`}
                style={{ backgroundColor: mood.bgLight }}
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: mood.hex }} />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2D201C]/60">
                      Mood {mood.number} · {mood.colorName}
                    </span>
                  </div>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#2D201C] font-normal tracking-tight">
                    {mood.name}
                  </h3>
                  <p className="text-sm text-[#2D201C]/80 font-light">
                    {mood.quote}
                  </p>
                </div>

                <div className="flex items-center gap-6 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-[#2D201C]/10 md:pl-8">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2D201C]/50 block">
                      The Bold Pour
                    </span>
                    <span className="text-base font-semibold text-[#2D201C]">
                      {coffee?.name}
                    </span>
                    <span className="text-xs text-[#2D201C]/65 block font-light">
                      24h cold steep · Seville orange · Toasted spice
                    </span>
                  </div>

                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2D201C] group-hover:bg-[#2D201C] group-hover:text-white transition-colors shadow-xs">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            );
          })()}

        </div>
      </div>
    </section>
  );
};

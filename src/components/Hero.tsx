import React from 'react';
import { ArrowDown, Compass, Sparkles } from 'lucide-react';

interface HeroProps {
  onFindMood: () => void;
  onExploreCollection: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFindMood, onExploreCollection, onOpenQuiz }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:py-24 border-b border-[#2D201C]/8 bg-gradient-to-b from-[#F5EFE6] via-[#FAF4EC] to-[#F5EFE6]">
      {/* Subtle organic ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#BFCAB8]/20 blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-0 w-[30rem] h-[30rem] rounded-full bg-[#C66C42]/10 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Expressive Typography & Editorial Text (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Editorial Collection Label / Kicker */}
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-mono text-[#B97849]">
              <span className="w-8 h-[1px] bg-[#B97849]" />
              <span>Autumn / Winter 2026 Flight</span>
              <span className="text-[#2D201C]/40">·</span>
              <span className="text-[#2D201C]/60">Six Sensory Moods</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl xl:text-7xl font-normal leading-[1.05] tracking-tight text-[#2D201C] text-balance">
              THERE’S A CUP <br className="hidden sm:inline" />
              <span className="italic font-light text-[#B97849]">FOR THE FEELING.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#2D201C]/80 font-light leading-relaxed max-w-xl text-pretty">
              Slow mornings, long days, little celebrations. Whatever today feels like, there’s a coffee for your kind of moment.
            </p>

            {/* Editorial Note (Handwritten/Notebook Style Detail) */}
            <div className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-[#2D201C]/8 max-w-md shadow-xs">
              <p className="text-xs sm:text-sm text-[#2D201C]/85 italic font-editorial leading-relaxed">
                “We don’t ask what you want to order. We ask how your day is treating you, then we grind accordingly.”
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#2D201C]/50">
                <span>The Counter Philosophy</span>
                <span>Bar 01</span>
              </div>
            </div>

            {/* Primary & Secondary Action Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onFindMood}
                className="px-7 py-3.5 bg-[#2D201C] text-[#FFF9F1] rounded-full text-sm font-medium tracking-wide uppercase hover:bg-[#B97849] active:scale-[0.98] transition-all shadow-md flex items-center gap-2.5 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#B97849] group-hover:text-white" />
                <span>Find Your Mood</span>
              </button>

              <button
                onClick={onOpenQuiz}
                className="px-6 py-3.5 bg-white/90 border border-[#B97849]/40 text-[#2D201C] rounded-full text-sm font-medium tracking-wide uppercase hover:bg-white hover:border-[#B97849] hover:text-[#B97849] active:scale-[0.98] transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#B97849]" />
                <span>Take Mood Quiz</span>
              </button>

              <button
                onClick={onExploreCollection}
                className="px-6 py-3.5 bg-transparent border border-[#2D201C]/25 text-[#2D201C] rounded-full text-sm font-medium tracking-wide uppercase hover:border-[#2D201C] hover:bg-[#2D201C]/5 active:scale-[0.98] transition-all cursor-pointer"
              >
                Explore Collection
              </button>
            </div>

            {/* Quick Mood Micro Indicators */}
            <div className="pt-4 border-t border-[#2D201C]/10 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#2D201C]/65">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#2D201C]/40">Today's Profiles:</span>
              <span className="hover:text-[#2D201C] transition-colors cursor-pointer" onClick={onFindMood}>Slow Morning</span>
              <span aria-hidden="true">·</span>
              <span className="hover:text-[#2D201C] transition-colors cursor-pointer" onClick={onFindMood}>Need a Reset</span>
              <span aria-hidden="true">·</span>
              <span className="hover:text-[#2D201C] transition-colors cursor-pointer" onClick={onFindMood}>Main Character</span>
              <span aria-hidden="true">·</span>
              <span className="hover:text-[#2D201C] transition-colors cursor-pointer" onClick={onFindMood}>Deep Focus</span>
              <span aria-hidden="true">·</span>
              <button 
                onClick={onOpenQuiz}
                className="text-[#B97849] hover:underline flex items-center gap-1 cursor-pointer font-medium"
              >
                <span>Calibrate via Quiz ✨</span>
              </button>
            </div>
          </div>

          {/* Right Column: Large Atmospheric Editorial Coffee Photography (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative framed edge */}
              <div className="absolute -inset-2.5 rounded-3xl border border-[#2D201C]/10 -rotate-1 pointer-events-none transition-transform group-hover:rotate-0 duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#E8DDD0] aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="/src/assets/images/hero_moodbrew_atmosphere_1792144404919.jpg"
                  alt="Atmospheric artisanal coffee cup on travertine table in warm natural morning sunlight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle scrim for editorial label */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D201C]/70 via-transparent to-black/10 pointer-events-none" />

                {/* Overlaid Editorial Note */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-white/80">
                    <span>Fig. 01 — Morning Light Extraction</span>
                    <span>Single Origin</span>
                  </div>
                  <p className="font-editorial text-xl italic font-light text-white leading-snug">
                    “The slow alchemy of hot water, ceramic, and time.”
                  </p>
                </div>
              </div>

              {/* Floating aesthetic stamp */}
              <div className="absolute -bottom-5 -left-5 bg-[#FFF9F1] border border-[#2D201C]/15 rounded-2xl p-3.5 shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#B97849]/15 flex items-center justify-center text-[#B97849] font-editorial font-bold text-base">
                  ☕
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#2D201C]/50">Sensory Bar</p>
                  <p className="text-xs font-semibold text-[#2D201C]">100% Direct-Trade Origin</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Gentle Section Scroll Transition */}
      <div className="mt-16 flex justify-center">
        <button
          onClick={onFindMood}
          aria-label="Scroll to discover moods"
          className="flex flex-col items-center gap-2 text-[#2D201C]/50 hover:text-[#B97849] transition-colors text-xs font-mono tracking-widest uppercase cursor-pointer group"
        >
          <span>Select Your Feeling</span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

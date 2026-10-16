import React from 'react';
import { MOODS, SIGNATURE_COFFEES, MoodItem, CoffeeItem } from '../data/coffeeData';
import { Sparkles, Thermometer, Coffee, Plus, Music, Volume2 } from 'lucide-react';

interface MoodRecommendationProps {
  selectedMoodId: string;
  onOrderDrink: (coffee: CoffeeItem) => void;
  onViewDetails: (coffee: CoffeeItem) => void;
  onSelectMood: (moodId: string) => void;
}

export const MoodRecommendation: React.FC<MoodRecommendationProps> = ({
  selectedMoodId,
  onOrderDrink,
  onViewDetails,
  onSelectMood,
}) => {
  const currentMood = MOODS.find(m => m.id === selectedMoodId) || MOODS[0];
  const currentMoodDrinks = SIGNATURE_COFFEES.filter(c => c.moodId === currentMood.id);
  
  const [selectedDrinkId, setSelectedDrinkId] = React.useState<string>(currentMood.recommendedCoffeeId);

  // Sync with mood selection
  React.useEffect(() => {
    setSelectedDrinkId(currentMood.recommendedCoffeeId);
  }, [selectedMoodId]);

  const currentCoffee = currentMoodDrinks.find(c => c.id === selectedDrinkId) || currentMoodDrinks[0] || SIGNATURE_COFFEES[0];

  return (
    <section id="recommendation" className="py-20 md:py-28 px-6 bg-[#F5EFE6] border-b border-[#2D201C]/8 transition-colors duration-700">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#B97849]">
              <span className="w-6 h-[1px] bg-[#B97849]" />
              <span>Section 03 · The Tailored Reveal</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#2D201C] tracking-tight">
              MADE FOR THE WAY YOU FEEL.
            </h2>
          </div>

          {/* Quick Mood Carousel Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {MOODS.map(m => (
              <button
                key={`rec-tab-${m.id}`}
                onClick={() => onSelectMood(m.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  m.id === selectedMoodId
                    ? 'bg-[#2D201C] text-white shadow-xs font-semibold'
                    : 'text-[#2D201C]/60 hover:text-[#2D201C] hover:bg-black/5'
                }`}
              >
                {m.number} · {m.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dedicated Recommendation Reveal Area */}
        <div 
          className="rounded-3xl p-6 sm:p-10 md:p-14 border border-[#2D201C]/10 shadow-xl transition-all duration-500 overflow-hidden relative"
          style={{ backgroundColor: currentMood.bgLight }}
        >
          {/* Subtle Ambient Color Wave */}
          <div 
            aria-hidden="true"
            className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-25 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: currentMood.hex }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left: Drink Unique Photography (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div 
                  className="absolute -inset-2 rounded-3xl opacity-40 blur-md transition-all duration-500"
                  style={{ backgroundColor: currentMood.hex }}
                />

                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-[#E8DDD0] shadow-lg border border-[#2D201C]/10">
                  <img
                    key={currentCoffee.image}
                    src={currentCoffee.image}
                    alt={`${currentCoffee.name} styled for ${currentMood.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlaid Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider text-[#2D201C] shadow-xs">
                    Mood {currentMood.number} · {currentMood.name}
                  </div>

                  <div className="absolute bottom-4 right-4 bg-[#2D201C]/80 backdrop-blur-md text-[#FFF9F1] px-3 py-1 rounded-full text-xs font-mono">
                    ${currentCoffee.price.toFixed(2)}
                  </div>
                </div>

                {/* Soundtrack / Vibe Card */}
                <div className="mt-4 p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-[#2D201C]/8 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#2D201C]/75">
                    <Music className="w-3.5 h-3.5 text-[#B97849]" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#2D201C]/50">Vibe:</span>
                    <span className="font-medium text-[#2D201C]">{currentMood.soundtrackMood}</span>
                  </div>
                  <Volume2 className="w-3.5 h-3.5 text-[#2D201C]/40" />
                </div>
              </div>
            </div>

            {/* Right: Emotional Description & Coffee Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B97849]">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentMood.hex }} />
                  <span>Your Prescribed Cup</span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-5xl font-normal text-[#2D201C] tracking-tight">
                  {currentCoffee.name}
                </h3>

                <p className="font-editorial text-lg sm:text-2xl italic text-[#2D201C]/90 font-light leading-snug pt-1">
                  “{currentCoffee.emotionalCopy}”
                </p>

                {/* Sibling Cups for this Mood */}
                {currentMoodDrinks.length > 1 && (
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#2D201C]/50">
                      More for {currentMood.name}:
                    </span>
                    {currentMoodDrinks.map(drink => (
                      <button
                        key={drink.id}
                        onClick={() => setSelectedDrinkId(drink.id)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          drink.id === currentCoffee.id
                            ? 'bg-[#2D201C] text-white shadow-2xs font-semibold'
                            : 'bg-white/80 text-[#2D201C]/75 hover:bg-white hover:text-[#2D201C] border border-[#2D201C]/10'
                        }`}
                      >
                        {drink.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Flavour Notes Badges */}
              <div className="space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#2D201C]/50">
                  Flavour Notes & Botanicals
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentCoffee.flavourNotes.map((note, idx) => (
                    <span 
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-white text-xs font-medium text-[#2D201C] border border-[#2D201C]/10 shadow-2xs"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sensory Breakdown Scales */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#2D201C]/10 max-w-md">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2D201C]/50 block">Sweetness</span>
                  <div className="flex gap-1 mt-1.5">
                    {[1, 2, 3, 4, 5].map(v => (
                      <span 
                        key={v} 
                        className={`h-1.5 flex-1 rounded-full ${
                          v <= currentCoffee.sweetness ? 'bg-[#B97849]' : 'bg-[#2D201C]/15'
                        }`} 
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2D201C]/50 block">Intensity</span>
                  <div className="flex gap-1 mt-1.5">
                    {[1, 2, 3, 4, 5].map(v => (
                      <span 
                        key={v} 
                        className={`h-1.5 flex-1 rounded-full ${
                          v <= currentCoffee.intensity ? 'bg-[#2D201C]' : 'bg-[#2D201C]/15'
                        }`} 
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2D201C]/50 block">Creaminess</span>
                  <div className="flex gap-1 mt-1.5">
                    {[1, 2, 3, 4, 5].map(v => (
                      <span 
                        key={v} 
                        className={`h-1.5 flex-1 rounded-full ${
                          v <= currentCoffee.creaminess ? 'bg-[#C66C42]' : 'bg-[#2D201C]/15'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Brewing & Vessel Specifications */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#2D201C]/75 pt-2">
                <div className="flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-[#B97849]" />
                  <span>{currentCoffee.temperature}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-[#B97849]" />
                  <span>{currentCoffee.servingVessel}</span>
                </div>
              </div>

              {/* Primary Call to Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOrderDrink(currentCoffee)}
                  className="px-8 py-3.5 bg-[#2D201C] text-[#FFF9F1] rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#B97849] active:scale-[0.98] transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Order This Cup (${currentCoffee.price.toFixed(2)})</span>
                </button>

                <button
                  onClick={() => onViewDetails(currentCoffee)}
                  className="px-6 py-3.5 bg-white border border-[#2D201C]/20 text-[#2D201C] rounded-full text-xs uppercase tracking-wider font-medium hover:border-[#2D201C] hover:bg-[#2D201C]/5 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Meet Your Coffee (Notes & Recipe)
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

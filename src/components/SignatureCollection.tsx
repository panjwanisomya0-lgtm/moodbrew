import React, { useState, useMemo } from 'react';
import { SIGNATURE_COFFEES, CoffeeItem } from '../data/coffeeData';
import { Plus, Eye, Sparkles, Filter, Search } from 'lucide-react';

interface SignatureCollectionProps {
  onOrderDrink: (coffee: CoffeeItem) => void;
  onViewDetails: (coffee: CoffeeItem) => void;
  onOpenQuiz?: () => void;
}

type CategoryFilter = 'All' | 'Comfort' | 'Refresh' | 'Focus' | 'Indulgence' | 'Adventure';

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({
  onOrderDrink,
  onViewDetails,
  onOpenQuiz
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [temperatureFilter, setTemperatureFilter] = useState<'All' | 'Warm' | 'Chilled'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: CategoryFilter[] = ['All', 'Comfort', 'Refresh', 'Focus', 'Indulgence', 'Adventure'];

  const filteredCoffees = useMemo(() => {
    return SIGNATURE_COFFEES.filter(c => {
      // Category Filter
      if (activeCategory !== 'All' && c.category !== activeCategory) {
        return false;
      }
      // Temperature Filter
      if (temperatureFilter === 'Warm') {
        const isWarm = c.temperature.includes('Warm') || c.temperature.includes('Steamed') || c.temperature.includes('Piping') || c.temperature.includes('Hot');
        if (!isWarm) return false;
      } else if (temperatureFilter === 'Chilled') {
        const isChilled = c.temperature.includes('Chilled') || c.temperature.includes('Cold') || c.temperature.includes('Rocks') || c.temperature.includes('Effervescent');
        if (!isChilled) return false;
      }
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = c.name.toLowerCase().includes(query);
        const matchesMood = c.moodName.toLowerCase().includes(query);
        const matchesNotes = c.flavourNotes.some(n => n.toLowerCase().includes(query));
        const matchesDesc = c.shortDescription.toLowerCase().includes(query);
        if (!matchesName && !matchesMood && !matchesNotes && !matchesDesc) return false;
      }
      return true;
    });
  }, [activeCategory, temperatureFilter, searchQuery]);

  // Lead highlight drink for current filter selection
  const leadDrink = filteredCoffees[0];
  const otherDrinks = filteredCoffees.slice(1);

  return (
    <section id="collection" className="py-20 md:py-28 px-6 bg-[#FAF6F0] border-b border-[#2D201C]/8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#B97849]">
              <span className="w-6 h-[1px] bg-[#B97849]" />
              <span>Section 04 · The Expanded Collection</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#2D201C] tracking-tight">
              THE SIGNATURE COLLECTION.
            </h2>
            <p className="text-base sm:text-lg text-[#2D201C]/75 font-light leading-relaxed">
              From gentle morning lattes to late-night affogatos. Handcrafted extractions calibrated for the nuance of how you feel.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onOpenQuiz && (
              <button
                onClick={onOpenQuiz}
                className="px-3.5 py-2 rounded-full bg-[#B97849]/10 hover:bg-[#B97849]/20 text-[#B97849] border border-[#B97849]/20 text-xs font-mono font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                title="Let the quiz pick from the 18 cups"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quiz Calibration</span>
              </button>
            )}

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#2D201C]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search flavours, beans..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full bg-white border border-[#2D201C]/10 text-xs text-[#2D201C] focus:outline-none focus:ring-1 focus:ring-[#B97849] w-44 sm:w-52 shadow-2xs"
              />
            </div>
            <span className="text-xs font-mono text-[#2D201C]/50 whitespace-nowrap">
              {filteredCoffees.length} of {SIGNATURE_COFFEES.length} cups
            </span>
          </div>
        </div>

        {/* Filter Navigation Bar (Categorical Mood Families + Temperature Segmented Bar) */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#2D201C]/10">
            
            {/* Primary Category Filters (Comfort, Refresh, Focus, Indulgence, Adventure) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                const count = cat === 'All' 
                  ? SIGNATURE_COFFEES.length 
                  : SIGNATURE_COFFEES.filter(c => c.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#2D201C] text-white shadow-xs font-semibold'
                        : 'bg-white/80 text-[#2D201C]/75 hover:bg-white hover:text-[#2D201C] border border-[#2D201C]/8'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] font-mono ${isSelected ? 'text-[#B97849]' : 'text-[#2D201C]/40'}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Temperature Sub-Filter */}
            <div className="flex items-center p-1 bg-white rounded-xl border border-[#2D201C]/10 shadow-2xs">
              {(['All', 'Warm', 'Chilled'] as const).map((temp) => (
                <button
                  key={temp}
                  onClick={() => setTemperatureFilter(temp)}
                  className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                    temperatureFilter === temp
                      ? 'bg-[#2D201C] text-white font-medium'
                      : 'text-[#2D201C]/60 hover:text-[#2D201C]'
                  }`}
                >
                  {temp === 'All' ? 'All Temps' : temp}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Empty State */}
        {filteredCoffees.length === 0 && (
          <div className="py-20 text-center space-y-3 bg-white rounded-3xl border border-[#2D201C]/10">
            <p className="font-editorial text-2xl text-[#2D201C]">No cups match your selected filter.</p>
            <p className="text-xs text-[#2D201C]/60">Try clearing your search query or selecting a different feeling category.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setTemperatureFilter('All');
                setSearchQuery('');
              }}
              className="mt-2 px-5 py-2 rounded-full bg-[#2D201C] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#B97849] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Editorial Visual Rhythm */}
        {filteredCoffees.length > 0 && (
          <div className="space-y-10">
            
            {/* Feature Spotlight Card (Lead Drink for current selection) */}
            {leadDrink && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#2D201C]/10 shadow-sm hover:shadow-md transition-all group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Image Column (6 cols) */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8DDD0] shadow-xs">
                      <img
                        src={leadDrink.image}
                        alt={leadDrink.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="bg-[#2D201C]/85 backdrop-blur-md text-[#FFF9F1] px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider">
                          {leadDrink.moodName}
                        </span>
                        <span className="bg-white/90 backdrop-blur-md text-[#2D201C] px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider">
                          {leadDrink.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details Column (6 cols) */}
                  <div className="lg:col-span-6 space-y-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#B97849]">
                        Featured Brew · {leadDrink.temperature}
                      </span>
                      <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-[#2D201C] mt-1">
                        {leadDrink.name}
                      </h3>
                    </div>

                    <p className="font-editorial text-lg italic text-[#2D201C]/85 font-light leading-snug">
                      “{leadDrink.emotionalCopy}”
                    </p>

                    <p className="text-xs sm:text-sm text-[#2D201C]/75 font-light leading-relaxed">
                      {leadDrink.shortDescription}
                    </p>

                    {/* Flavour notes */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {leadDrink.flavourNotes.map((note, i) => (
                        <span key={i} className="text-xs text-[#2D201C]/75 bg-[#FAF6F0] px-3 py-1 rounded-md border border-[#2D201C]/8 font-light">
                          {note}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[#2D201C]/10 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono uppercase text-[#2D201C]/50 block">Cup Price</span>
                        <span className="text-xl font-mono font-semibold text-[#2D201C]">
                          ${leadDrink.price.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onViewDetails(leadDrink)}
                          className="px-4 py-2.5 rounded-full border border-[#2D201C]/20 hover:border-[#2D201C] hover:bg-black/5 text-xs font-mono uppercase tracking-wider text-[#2D201C] transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Tasting Specs</span>
                        </button>
                        <button
                          onClick={() => onOrderDrink(leadDrink)}
                          className="px-6 py-2.5 rounded-full bg-[#2D201C] text-[#FFF9F1] hover:bg-[#B97849] transition-colors text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Order Cup</span>
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* Asymmetric Multi-Card Gallery for Remaining Drinks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {otherDrinks.map((coffee) => (
                <div
                  key={coffee.id}
                  className="bg-white rounded-3xl p-6 border border-[#2D201C]/10 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Image slot */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8DDD0] shadow-2xs">
                      <img
                        src={coffee.image}
                        alt={coffee.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="bg-[#2D201C]/85 backdrop-blur-md text-[#FFF9F1] px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider">
                          {coffee.moodName}
                        </span>
                        <span className="bg-white/90 backdrop-blur-md text-[#2D201C] px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider">
                          {coffee.category}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-editorial text-2xl font-normal text-[#2D201C] group-hover:text-[#B97849] transition-colors">
                          {coffee.name}
                        </h4>
                        <span className="font-mono text-sm font-semibold text-[#2D201C] shrink-0">
                          ${coffee.price.toFixed(2)}
                        </span>
                      </div>

                      <p className="text-xs text-[#2D201C]/75 font-light mt-1.5 leading-relaxed line-clamp-2">
                        {coffee.shortDescription}
                      </p>
                    </div>

                    {/* Flavour Notes */}
                    <div className="flex flex-wrap gap-1">
                      {coffee.flavourNotes.map((note, i) => (
                        <span key={i} className="text-[10px] text-[#2D201C]/70 bg-[#FAF6F0] px-2 py-0.5 rounded border border-[#2D201C]/8">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="mt-6 pt-4 border-t border-[#2D201C]/10 flex items-center justify-between">
                    <button
                      onClick={() => onViewDetails(coffee)}
                      className="text-xs font-mono uppercase tracking-wider text-[#2D201C]/60 hover:text-[#B97849] transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onOrderDrink(coffee)}
                      className="px-4 py-1.5 rounded-full bg-[#2D201C] text-[#FFF9F1] hover:bg-[#B97849] transition-colors text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

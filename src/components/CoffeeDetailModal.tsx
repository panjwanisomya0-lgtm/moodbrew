import React from 'react';
import { CoffeeItem } from '../data/coffeeData';
import { X, Thermometer, MapPin, Sparkles, Plus, Clock, Coffee } from 'lucide-react';

interface CoffeeDetailModalProps {
  coffee: CoffeeItem | null;
  onClose: () => void;
  onOrder: (coffee: CoffeeItem) => void;
}

export const CoffeeDetailModal: React.FC<CoffeeDetailModalProps> = ({
  coffee,
  onClose,
  onOrder,
}) => {
  if (!coffee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-[#2D201C]/65 backdrop-blur-xs transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] rounded-3xl border border-[#2D201C]/15 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-[#2D201C]/10 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B97849]">
            <Coffee className="w-4 h-4" />
            <span>Tasting Profile & Extraction Notes</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#2D201C]/70 hover:text-[#2D201C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 rounded-2xl overflow-hidden aspect-square bg-[#E8DDD0] shadow-sm">
              <img
                src={coffee.image}
                alt={coffee.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sm:col-span-7 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#2D201C]/50 block">
                Prescribed for {coffee.moodName}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#2D201C] font-normal">
                {coffee.name}
              </h3>
              <p className="font-editorial text-base italic text-[#2D201C]/85">
                “{coffee.emotionalCopy}”
              </p>
              <p className="font-mono text-sm font-semibold text-[#2D201C] pt-1">
                ${coffee.price.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Sourcing & Technical Blueprint */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-white p-4 rounded-2xl border border-[#2D201C]/8">
            <div>
              <p className="font-mono text-[10px] uppercase text-[#2D201C]/50">Terroir Origin</p>
              <p className="font-medium text-[#2D201C] mt-0.5">{coffee.origin}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase text-[#2D201C]/50">Roast Profile</p>
              <p className="font-medium text-[#2D201C] mt-0.5">{coffee.roastLevel}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase text-[#2D201C]/50">Serving Warmth</p>
              <p className="font-medium text-[#2D201C] mt-0.5">{coffee.temperature}</p>
            </div>
          </div>

          {/* Ingredients list */}
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-[#2D201C]/60">
              Ingredients & Craft Elements
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {coffee.ingredients.map((ing, i) => (
                <li key={i} className="flex items-center gap-2 text-[#2D201C]/80 bg-white/70 px-3 py-2 rounded-xl border border-[#2D201C]/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B97849]" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sensory Balance Scales */}
          <div className="space-y-2 pt-2">
            <p className="text-xs font-mono uppercase tracking-wider text-[#2D201C]/60">
              Sensory Balance
            </p>
            <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-2xl border border-[#2D201C]/8 text-xs">
              <div>
                <span className="text-[11px] text-[#2D201C]/60">Sweetness ({coffee.sweetness}/5)</span>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4,5].map(v => (
                    <span key={v} className={`h-1.5 flex-1 rounded-full ${v <= coffee.sweetness ? 'bg-[#B97849]' : 'bg-[#2D201C]/10'}`} />
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] text-[#2D201C]/60">Intensity ({coffee.intensity}/5)</span>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4,5].map(v => (
                    <span key={v} className={`h-1.5 flex-1 rounded-full ${v <= coffee.intensity ? 'bg-[#2D201C]' : 'bg-[#2D201C]/10'}`} />
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] text-[#2D201C]/60">Creaminess ({coffee.creaminess}/5)</span>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4,5].map(v => (
                    <span key={v} className={`h-1.5 flex-1 rounded-full ${v <= coffee.creaminess ? 'bg-[#C66C42]' : 'bg-[#2D201C]/10'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Action Bar */}
        <div className="p-4 sm:p-6 border-t border-[#2D201C]/10 bg-white flex items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#2D201C]/60">
            Handcrafted on Slayer Single-Group Espresso Machine
          </div>

          <button
            onClick={() => {
              onOrder(coffee);
              onClose();
            }}
            className="px-6 py-3 rounded-full bg-[#2D201C] text-[#FFF9F1] uppercase text-xs font-mono tracking-wider hover:bg-[#B97849] transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Customize & Order Cup</span>
          </button>
        </div>

      </div>
    </div>
  );
};

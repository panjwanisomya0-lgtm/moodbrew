import React from 'react';
import { Heart, Compass, ShieldCheck, Sparkles } from 'lucide-react';

export const MoodStory: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-28 px-6 bg-[#FAF6F0] border-b border-[#2D201C]/8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#B97849]">
            <span className="w-6 h-[1px] bg-[#B97849]" />
            <span>Section 06 · The Philosophy</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#2D201C] tracking-tight">
            YOUR MOOD. YOUR MOMENT. <br />
            <span className="italic text-[#B97849]">YOUR COFFEE.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2D201C]/75 font-light leading-relaxed">
            Coffee websites too often treat coffee as fuel or transactions. We started MOODBREW because emotions fluctuate, and drinks should answer how you truly feel.
          </p>
        </div>

        {/* 3 Pillars of Craftsmanship */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#2D201C]/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B97849]">
                Pillar 01 · Origin & Terroir
              </span>
              <h3 className="font-editorial text-2xl font-normal text-[#2D201C]">
                100% Direct-Trade Beans
              </h3>
              <p className="text-sm text-[#2D201C]/75 font-light leading-relaxed">
                We partner with single-estate growers in Yirgacheffe, Nyeri, and Huila at prices averaging 2.4× fair-trade minimums. Transparent harvest sourcing where sweetness and origin voice take precedence over dark roasts.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2D201C]/8 text-xs font-mono text-[#2D201C]/50">
              Harvest: October 2026 Season
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-8 border border-[#2D201C]/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B97849]">
                Pillar 02 · Tactile Ceramic Art
              </span>
              <h3 className="font-editorial text-2xl font-normal text-[#2D201C]">
                Hand-Thrown Stoneware
              </h3>
              <p className="text-sm text-[#2D201C]/75 font-light leading-relaxed">
                Paper cups kill temperature and soul. Every cup served in our physical café is thrown on a potter's wheel by local ceramists, glazed in mineral tones that mirror each mood: sage quiet, raw oat, and espresso ink.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2D201C]/8 text-xs font-mono text-[#2D201C]/50">
              Ceramist Studio: Kyoto & Portland
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-8 border border-[#2D201C]/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B97849]">
                Pillar 03 · Botanical Infusions
              </span>
              <h3 className="font-editorial text-2xl font-normal text-[#2D201C]">
                Fresh, Unprocessed Flavours
              </h3>
              <p className="text-sm text-[#2D201C]/75 font-light leading-relaxed">
                No artificial pump syrups. We make our oat milk in-house every sunrise from organic Scottish oats, cold-press Seville citrus peels, and simmer whole Madagascar vanilla pods in raw unrefined cane nectar.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2D201C]/8 text-xs font-mono text-[#2D201C]/50">
              Fresh Daily Extraction
            </div>
          </div>

        </div>

        {/* Large Editorial Manifesto Quote */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#2D201C] text-[#F5EFE6] relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-[#B97849]">
              The Moodbrew Manifesto
            </span>
            <p className="font-editorial text-2xl sm:text-4xl md:text-5xl font-light italic leading-snug">
              “Some days call for comfort. Some call for courage. There’s a cup for the feeling.”
            </p>
            <p className="text-sm sm:text-base text-[#F5EFE6]/75 font-light leading-relaxed">
              We reject the idea that coffee should be a mechanical caffeine hit swallowed between meetings. We design it as a five-minute refuge: a sensory pause where aroma, warmth, and emotion converge.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono tracking-wider uppercase text-[#F5EFE6]/50">
              <span>Elena & Kaelen</span>
              <span>·</span>
              <span>Founders, MOODBREW</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

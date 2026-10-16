import React, { useState, useRef } from 'react';
import { MOOD_LETTERS, MoodLetterCategory, MoodLetterContent } from '../data/moodLetterData';
import { SIGNATURE_COFFEES, CoffeeItem } from '../data/coffeeData';
import { RefreshCw, Copy, Check, Download, Heart, Coffee, Plus, Sparkles, Feather } from 'lucide-react';

interface MoodLetterProps {
  onOrderDrink: (coffee: CoffeeItem) => void;
  onViewDetails: (coffee: CoffeeItem) => void;
}

export const MoodLetter: React.FC<MoodLetterProps> = ({
  onOrderDrink,
  onViewDetails,
}) => {
  const [selectedMoodId, setSelectedMoodId] = useState<string>('slow');
  const [letterIndexMap, setLetterIndexMap] = useState<Record<string, number>>({
    slow: 0,
    overwhelmed: 0,
    hopeful: 0,
    confident: 0,
    nostalgic: 0,
    comfort: 0,
  });
  const [copied, setCopied] = useState(false);
  const [isSavingImage, setIsSavingImage] = useState(false);

  const activeCategory = MOOD_LETTERS.find(m => m.id === selectedMoodId) || MOOD_LETTERS[0];
  const currentLetterIndex = letterIndexMap[selectedMoodId] || 0;
  const currentLetter: MoodLetterContent = activeCategory.letters[currentLetterIndex % activeCategory.letters.length];
  const pairedCoffee = SIGNATURE_COFFEES.find(c => c.id === activeCategory.pairedCoffeeId) || SIGNATURE_COFFEES[0];

  // Cycle to next letter variation for current mood
  const handleAnotherLetter = () => {
    setLetterIndexMap(prev => ({
      ...prev,
      [selectedMoodId]: ((prev[selectedMoodId] || 0) + 1) % activeCategory.letters.length,
    }));
  };

  // Copy letter text to clipboard
  const handleCopyLetter = async () => {
    const textToCopy = `MOODBREW — ${activeCategory.name.toUpperCase()} LETTER\n\n"${currentLetter.heading}"\n\n${currentLetter.salutation}\n\n${currentLetter.paragraphs.join('\n\n')}\n\n${currentLetter.signoff}\nMOODBREW Café\n\n${currentLetter.postscript}\n\nPaired with: ${pairedCoffee.name} (${pairedCoffee.flavourNotes.join(', ')})`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Save letter as Image via Canvas
  const handleSaveAsImage = () => {
    setIsSavingImage(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = 1200;
      const height = 1500;
      canvas.width = width;
      canvas.height = height;

      // 1. Draw Paper Background
      ctx.fillStyle = activeCategory.paperBg;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Decorative Border Frame
      ctx.strokeStyle = activeCategory.borderTint;
      ctx.lineWidth = 3;
      ctx.strokeRect(40, 40, width - 80, height - 80);

      ctx.strokeStyle = 'rgba(45, 32, 28, 0.15)';
      ctx.lineWidth = 1;
      ctx.strokeRect(55, 55, width - 110, height - 110);

      // 3. Draw Postal Dispatch Header
      ctx.fillStyle = activeCategory.stampColor;
      ctx.font = 'bold 20px monospace';
      ctx.fillText('MOODBREW DISPATCH · ' + activeCategory.stampCode, 90, 110);

      ctx.fillStyle = 'rgba(45, 32, 28, 0.6)';
      ctx.font = '16px monospace';
      ctx.fillText('FLAGSHIP SANCTUARY · 428 MERCER STREET', 90, 140);
      ctx.fillText('AUTUMN / WINTER 2026 EDITION', width - 420, 140);

      // Divider
      ctx.strokeStyle = 'rgba(45, 32, 28, 0.12)';
      ctx.beginPath();
      ctx.moveTo(90, 170);
      ctx.lineTo(width - 90, 170);
      ctx.stroke();

      // 4. Headline
      ctx.fillStyle = '#2D201C';
      ctx.font = 'italic 52px serif';
      const words = currentLetter.heading.split(' ');
      let line = '';
      let y = 250;
      for (const word of words) {
        const testLine = line + word + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > width - 200 && line !== '') {
          ctx.fillText(line, 90, y);
          line = word + ' ';
          y += 65;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 90, y);
      y += 50;

      // 5. Salutation
      ctx.fillStyle = '#2D201C';
      ctx.font = '28px serif';
      ctx.fillText(currentLetter.salutation, 90, y);
      y += 45;

      // 6. Paragraphs
      ctx.font = '24px sans-serif';
      ctx.fillStyle = 'rgba(45, 32, 28, 0.88)';
      for (const p of currentLetter.paragraphs) {
        const pWords = p.split(' ');
        let pLine = '';
        for (const w of pWords) {
          const test = pLine + w + ' ';
          if (ctx.measureText(test).width > width - 200 && pLine !== '') {
            ctx.fillText(pLine, 90, y);
            pLine = w + ' ';
            y += 38;
          } else {
            pLine = test;
          }
        }
        ctx.fillText(pLine, 90, y);
        y += 55;
      }

      // 7. Signoff
      y += 10;
      ctx.font = 'italic 28px serif';
      ctx.fillStyle = '#2D201C';
      ctx.fillText(currentLetter.signoff, 90, y);
      y += 40;
      ctx.font = 'bold 24px serif';
      ctx.fillText('MOODBREW Café & Roastery', 90, y);
      y += 55;

      // 8. Postscript
      ctx.font = 'italic 20px serif';
      ctx.fillStyle = activeCategory.accentColor;
      ctx.fillText(currentLetter.postscript, 90, y);

      // 9. Bottom Coffee Pairing Block
      ctx.fillStyle = '#FFFFFF';
      ctx.roundRect ? ctx.roundRect(90, height - 220, width - 180, 130, 16) : ctx.fillRect(90, height - 220, width - 180, 130);
      ctx.fill();
      ctx.strokeStyle = 'rgba(45, 32, 28, 0.12)';
      ctx.stroke();

      ctx.fillStyle = activeCategory.accentColor;
      ctx.font = 'bold 16px monospace';
      ctx.fillText('PRESCRIBED COMPANION CUP:', 120, height - 175);

      ctx.fillStyle = '#2D201C';
      ctx.font = 'bold 26px serif';
      ctx.fillText(pairedCoffee.name, 120, height - 135);

      ctx.fillStyle = 'rgba(45, 32, 28, 0.65)';
      ctx.font = '18px sans-serif';
      ctx.fillText(pairedCoffee.flavourNotes.join(' · ') + '  |  ' + pairedCoffee.temperature, 120, height - 105);

      // Trigger download
      const imageURL = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `moodbrew_letter_${activeCategory.id}.png`;
      downloadLink.href = imageURL;
      downloadLink.click();
    } catch (err) {
      console.error('Error saving image:', err);
    } finally {
      setIsSavingImage(false);
    }
  };

  return (
    <section id="mood-letter" className="py-20 md:py-28 px-6 bg-[#FAF6F0] border-b border-[#2D201C]/8 relative overflow-hidden">
      
      {/* Background Watermark Texture */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48rem] h-[48rem] rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeCategory.borderTint }} 
      />

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#B97849]">
            <Feather className="w-3.5 h-3.5" />
            <span>Signature Experience · The MOOD LETTER</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#2D201C] tracking-tight">
            WORDS BEFORE THE FIRST SIP.
          </h2>

          <p className="text-base sm:text-lg text-[#2D201C]/75 font-light leading-relaxed">
            Select the feeling you are holding today. Receive an intimate, personalized letter folded just for this hour, paired with its dedicated coffee companion.
          </p>
        </div>

        {/* Mood Selector Tabs (6 Emotional States) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {MOOD_LETTERS.map((cat) => {
            const isSelected = cat.id === selectedMoodId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedMoodId(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#2D201C] text-white shadow-sm ring-2 ring-[#B97849]'
                    : 'bg-white/80 text-[#2D201C]/75 hover:bg-white hover:text-[#2D201C] border border-[#2D201C]/10'
                }`}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/10"
                  style={{ backgroundColor: cat.stampColor }}
                />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* The Letter Presentation Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: The Handwritten Journal / Postal Letter Sheet (8 cols) */}
          <div className="lg:col-span-8">
            <div 
              className="relative rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl border transition-all duration-500 overflow-hidden"
              style={{ 
                backgroundColor: activeCategory.paperBg,
                borderColor: activeCategory.borderTint,
              }}
            >
              {/* Paper Watermark Stamp (Top Right) */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#2D201C]/10 text-xs font-mono">
                <div className="space-y-0.5">
                  <span className="uppercase tracking-widest text-[#2D201C]/60 block text-[11px]">
                    MOODBREW POSTAL DISPATCH
                  </span>
                  <span className="font-semibold text-xs" style={{ color: activeCategory.stampColor }}>
                    {activeCategory.stampCode}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#2D201C]/50">
                  <span>Variation {currentLetterIndex + 1} of {activeCategory.letters.length}</span>
                  <span>·</span>
                  <span>Handcrafted</span>
                </div>
              </div>

              {/* Letter Core Content */}
              <div className="pt-8 space-y-6">
                
                {/* Heading / Epigraph */}
                <h3 className="font-editorial text-2xl sm:text-4xl text-[#2D201C] font-normal leading-snug tracking-tight">
                  {currentLetter.heading}
                </h3>

                {/* Salutation */}
                <p className="font-editorial text-lg text-[#2D201C] italic font-light">
                  {currentLetter.salutation}
                </p>

                {/* Letter Body Paragraphs */}
                <div className="space-y-4 text-base sm:text-lg text-[#2D201C]/85 font-light leading-relaxed font-sans">
                  {currentLetter.paragraphs.map((para, i) => (
                    <p key={i}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Sign-off */}
                <div className="pt-4 space-y-1">
                  <p className="font-editorial text-base italic text-[#2D201C]/75 font-light">
                    {currentLetter.signoff}
                  </p>
                  <p className="font-editorial text-lg text-[#2D201C] font-semibold">
                    The Baristas of MOODBREW
                  </p>
                </div>

                {/* Postscript (P.S.) */}
                <div 
                  className="p-4 rounded-2xl bg-white/60 border border-[#2D201C]/8 text-xs sm:text-sm font-editorial italic leading-relaxed"
                  style={{ color: activeCategory.stampColor }}
                >
                  {currentLetter.postscript}
                </div>

              </div>

              {/* Action Toolbar on Bottom of Letter Sheet */}
              <div className="mt-10 pt-6 border-t border-[#2D201C]/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                
                <button
                  onClick={handleAnotherLetter}
                  className="px-4 py-2.5 rounded-full bg-white border border-[#2D201C]/15 hover:border-[#2D201C] hover:bg-[#2D201C]/5 transition-all text-[#2D201C] font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-2xs"
                  title="Generate another letter for this mood"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-[#B97849]" />
                  <span>Give Me Another Letter</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLetter}
                    className="px-4 py-2.5 rounded-full bg-white border border-[#2D201C]/15 hover:border-[#2D201C] text-[#2D201C] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#2D201C]/60" />
                        <span>Copy Letter</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleSaveAsImage}
                    disabled={isSavingImage}
                    className="px-4 py-2.5 rounded-full bg-[#2D201C] text-white hover:bg-[#B97849] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5 text-white" />
                    <span>{isSavingImage ? 'Saving...' : 'Save as Image'}</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Matched Coffee Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#2D201C]/10 shadow-sm space-y-5">
              
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B97849] font-semibold">
                  Prescribed Pairing
                </span>
                <span className="text-xs font-mono font-medium text-[#2D201C]/60">
                  {pairedCoffee.temperature}
                </span>
              </div>

              {/* Coffee Photograph */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8DDD0] shadow-xs group">
                <img
                  src={pairedCoffee.image}
                  alt={pairedCoffee.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#2D201C]/80 backdrop-blur-md text-[#FFF9F1] px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider">
                  For {activeCategory.name} Days
                </div>
              </div>

              {/* Title & Emotional description */}
              <div className="space-y-1">
                <h4 className="font-editorial text-2xl font-normal text-[#2D201C]">
                  {pairedCoffee.name}
                </h4>
                <p className="text-xs text-[#2D201C]/75 font-light leading-relaxed">
                  “{pairedCoffee.emotionalCopy}”
                </p>
              </div>

              {/* Flavour notes */}
              <div className="flex flex-wrap gap-1">
                {pairedCoffee.flavourNotes.map((note, i) => (
                  <span key={i} className="text-[10px] text-[#2D201C]/75 bg-[#FAF6F0] px-2.5 py-1 rounded-md border border-[#2D201C]/8">
                    {note}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#2D201C]/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#2D201C]/50">Price:</span>
                  <span className="text-base font-semibold text-[#2D201C]">${pairedCoffee.price.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => onOrderDrink(pairedCoffee)}
                  className="w-full py-3 rounded-full bg-[#2D201C] text-[#FFF9F1] hover:bg-[#B97849] transition-colors text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Order This Cup</span>
                </button>

                <button
                  onClick={() => onViewDetails(pairedCoffee)}
                  className="w-full py-2.5 rounded-full border border-[#2D201C]/15 text-[#2D201C] hover:bg-black/5 transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer"
                >
                  View Tasting Specs
                </button>
              </div>

            </div>

            {/* Editorial Mini-Banner */}
            <div className="p-5 rounded-3xl bg-[#FAF6F0] border border-[#2D201C]/8 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#B97849] font-medium block">
                The Envelope Promise
              </span>
              <p className="text-xs text-[#2D201C]/75 font-light leading-relaxed">
                When you visit our flagship café in person, every table flight includes a physical letter typed on our 1968 Hermes 3000 typewriter.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

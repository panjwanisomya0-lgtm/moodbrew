import React from 'react';
import { Sparkles, ShoppingBag, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenCart: () => void;
  cartCount: number;
  onSelectMoodSection: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCart,
  cartCount,
  onSelectMoodSection,
  onOpenQuiz
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F5EFE6]/90 backdrop-blur-md border-b border-[#2D201C]/8 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="group flex items-baseline gap-2 shrink-0 text-decoration-none"
        >
          <span className="font-editorial text-2xl md:text-3xl font-medium tracking-tight text-[#2D201C] group-hover:text-[#B97849] transition-colors">
            MOODBREW
          </span>
          <span className="text-[10px] tracking-widest uppercase font-mono text-[#2D201C]/50 hidden sm:inline">
            EST. 2026
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-medium text-[#2D201C]/75">
          <button 
            onClick={onSelectMoodSection}
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Find Your Mood
          </button>
          
          <button
            onClick={onOpenQuiz}
            className="hover:text-[#B97849] text-[#B97849] font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer px-2.5 py-1 rounded-full bg-[#B97849]/10 border border-[#B97849]/20 hover:bg-[#B97849]/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B97849]" />
            <span>Mood Quiz</span>
          </button>

          <a 
            href="#collection" 
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0"
          >
            Signature Cups
          </a>
          <a 
            href="#mood-letter" 
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            <span>Mood Letter</span>
          </a>
          <a 
            href="#ritual" 
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0"
          >
            Ritual
          </a>
          <a 
            href="#story" 
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0"
          >
            Philosophy
          </a>
          <a 
            href="#journal" 
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0"
          >
            Journal
          </a>
          <a 
            href="#visit" 
            className="hover:text-[#B97849] transition-colors whitespace-nowrap shrink-0"
          >
            Sanctuary
          </a>
        </nav>

        {/* Zone 3: Primary Action, Quiz (Mobile) & Bag */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenQuiz}
            className="md:hidden p-2 rounded-full bg-[#B97849]/10 text-[#B97849] hover:bg-[#B97849]/20 transition-colors cursor-pointer flex items-center gap-1 text-xs font-mono font-medium"
            aria-label="Open Mood Discovery Quiz"
            title="Take Mood Quiz"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-[11px] uppercase">Quiz</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="Open Ritual Bag"
            className="relative p-2.5 rounded-full hover:bg-[#2D201C]/5 text-[#2D201C] transition-colors cursor-pointer flex items-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#B97849] text-white text-[10px] font-semibold flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
            <span className="hidden lg:inline text-xs font-medium tracking-wide uppercase">
              Bag {cartCount > 0 ? `(${cartCount})` : ''}
            </span>
          </button>

          <a
            href="#visit"
            className="px-4 py-2 text-xs uppercase tracking-wider font-medium text-white bg-[#2D201C] rounded-full hover:bg-[#B97849] transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Reserve Flight
          </a>
        </div>
      </div>
    </header>
  );
};

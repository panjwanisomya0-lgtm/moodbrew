import React, { useState } from 'react';
import { BookOpen, Check } from 'lucide-react';

interface FooterProps {
  onSelectMoodSection: () => void;
  onOpenQuiz?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectMoodSection, onOpenQuiz }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#2D201C] text-[#F5EFE6] pt-20 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Brand Identity & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <h3 className="font-editorial text-3xl sm:text-4xl font-normal tracking-tight text-[#FFF9F1]">
              MOODBREW
            </h3>
            <p className="font-editorial text-xl italic text-[#B97849] font-light">
              “There’s a cup for the feeling.”
            </p>
            <p className="text-sm text-[#F5EFE6]/70 font-light leading-relaxed max-w-sm">
              Connecting daily emotions with slow coffee rituals. Single-origin beans roasted to honour gentle mornings, deep focus, and quiet resets.
            </p>
          </div>

          {/* Site Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#B97849]">
              The Experience
            </p>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-[#F5EFE6]/75">
              <li>
                <button 
                  onClick={onSelectMoodSection} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Discover Your Mood
                </button>
              </li>
              {onOpenQuiz && (
                <li>
                  <button
                    onClick={onOpenQuiz}
                    className="hover:text-[#B97849] text-[#B97849] font-medium transition-colors cursor-pointer text-left flex items-center gap-1"
                  >
                    <span>Mood Discovery Quiz</span>
                    <span>✨</span>
                  </button>
                </li>
              )}
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Signature Collection
                </a>
              </li>
              <li>
                <a href="#mood-letter" className="hover:text-[#B97849] transition-colors">
                  The Mood Letter
                </a>
              </li>
              <li>
                <a href="#ritual" className="hover:text-white transition-colors">
                  Brewing Alchemy
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Brand Philosophy
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-white transition-colors">
                  The Mood Journal
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-white transition-colors">
                  Reserve Tasting Flight
                </a>
              </li>
            </ul>
          </div>

          {/* Weekly Mood Dispatch Newsletter (4 cols) */}
          <div className="md:col-span-4 space-y-5">
            <p className="text-xs font-mono uppercase tracking-widest text-[#B97849]">
              The Sunday Mood Dispatch
            </p>
            <p className="text-xs text-[#F5EFE6]/70 leading-relaxed font-light">
              One weekly micro-essay on slow rituals, a seasonal coffee recipe, and our Sunday ambient playlist.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2 text-xs text-[#FFF9F1]">
                <Check className="w-4 h-4 text-[#BFCAB8]" />
                <span>You're on the Sunday dispatch list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="your.email@ritual.com"
                    value={newsletterEmail}
                    onChange={e => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-[#FFF9F1] placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#B97849]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#B97849] text-white hover:bg-[#C66C42] transition-colors text-xs uppercase font-mono tracking-wider cursor-pointer font-medium"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-xs font-mono text-[#F5EFE6]/50">
              Handcrafted in the Arts District · Flagship Atrium Open Daily
            </div>

          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright & Location */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F5EFE6]/50">
          <div>
            © 2026 MOODBREW CAFÉ CO. · ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>Direct-Trade Sourced</span>
            <span>·</span>
            <span>Hand-Thrown Ceramics</span>
            <span>·</span>
            <span>No Artificial Syrups</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

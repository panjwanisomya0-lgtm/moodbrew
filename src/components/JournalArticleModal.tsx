import React from 'react';
import { JournalArticle } from '../data/coffeeData';
import { X, BookOpen, Clock, Calendar } from 'lucide-react';

interface JournalArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const JournalArticleModal: React.FC<JournalArticleModalProps> = ({
  article,
  onClose,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-[#2D201C]/65 backdrop-blur-xs transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] rounded-3xl border border-[#2D201C]/15 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#2D201C]/10 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B97849]">
            <BookOpen className="w-4 h-4" />
            <span>The Mood Journal · Editorial Dispatch</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#2D201C]/70 hover:text-[#2D201C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
          <div className="space-y-3 pb-6 border-b border-[#2D201C]/10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#2D201C]/60">
              <span className="text-[#B97849] uppercase font-semibold">{article.moodTag}</span>
              <span>·</span>
              <span>{article.readTime}</span>
              <span>·</span>
              <span>{article.date}</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl text-[#2D201C] font-normal leading-tight">
              {article.title}
            </h2>

            <p className="font-editorial text-lg italic text-[#2D201C]/80 font-light">
              {article.subtitle}
            </p>

            <p className="text-xs font-mono text-[#2D201C]/50 pt-1">
              By {article.author}
            </p>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-5 text-base sm:text-lg text-[#2D201C]/85 font-light leading-relaxed">
            {article.content.map((para, i) => (
              <p key={i}>
                {para}
              </p>
            ))}
          </div>

          {/* Article Footer Note */}
          <div className="p-5 rounded-2xl bg-white border border-[#2D201C]/8 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B97849] block">
              Sensory Ritual Prompt
            </span>
            <p className="text-xs sm:text-sm text-[#2D201C]/75 font-light italic">
              “Brew this cup without a timer or device screen. Listen to the hiss of the steam and let the room fill with fragrance.”
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#2D201C]/10 bg-white flex items-center justify-between text-xs font-mono text-[#2D201C]/50">
          <span>MOODBREW Essays · Volume 04</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-[#2D201C]/20 hover:bg-[#2D201C]/5 text-[#2D201C] cursor-pointer uppercase tracking-wider"
          >
            Close Reader
          </button>
        </div>

      </div>
    </div>
  );
};

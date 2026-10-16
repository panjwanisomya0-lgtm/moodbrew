import React from 'react';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/coffeeData';
import { ArrowUpRight, BookOpen } from 'lucide-react';

interface MoodJournalProps {
  onReadArticle: (article: JournalArticle) => void;
}

export const MoodJournal: React.FC<MoodJournalProps> = ({ onReadArticle }) => {
  return (
    <section id="journal" className="py-20 md:py-28 px-6 bg-[#F5EFE6] border-b border-[#2D201C]/8">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#B97849]">
              <span className="w-6 h-[1px] bg-[#B97849]" />
              <span>Section 07 · The Mood Journal</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#2D201C] tracking-tight">
              PAGES FROM THE COUNTER.
            </h2>
            <p className="text-base sm:text-lg text-[#2D201C]/75 font-light leading-relaxed">
              Quiet writings on ritual, morning daylight, nervous system resets, and the emotional resonance of coffee.
            </p>
          </div>

          <div className="text-xs font-mono uppercase tracking-wider text-[#2D201C]/50">
            Issue IV · Autumn Harvest
          </div>
        </div>

        {/* 4 Editorial Essays in Varied Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#2D201C]/10 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#2D201C]/60 font-mono">
                  <span className="text-[#B97849] uppercase font-semibold">
                    {article.moodTag}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-[#2D201C] font-normal leading-snug group-hover:text-[#B97849] transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-[#2D201C]/75 font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2D201C]/8 flex items-center justify-between text-xs">
                <div className="text-[#2D201C]/60">
                  <span className="font-medium text-[#2D201C]">{article.author}</span>
                  <span className="mx-1.5">·</span>
                  <span>{article.date}</span>
                </div>

                <span className="flex items-center gap-1 font-mono uppercase text-xs tracking-wider text-[#B97849] font-medium group-hover:translate-x-0.5 transition-transform">
                  <span>Read Piece</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

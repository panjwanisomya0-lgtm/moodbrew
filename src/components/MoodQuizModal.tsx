import React, { useState } from 'react';
import { SIGNATURE_COFFEES, CoffeeItem } from '../data/coffeeData';
import { X, Sparkles, ArrowRight, RotateCcw, Plus, Eye, Check, Compass } from 'lucide-react';

interface MoodQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderDrink: (coffee: CoffeeItem) => void;
  onViewDetails: (coffee: CoffeeItem) => void;
  onSelectMood?: (moodId: string) => void;
}

interface QuizQuestion {
  id: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    icon: string;
    tags: string[];
  }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'environment',
    question: 'Where are your feet resting right now?',
    subtitle: 'Your immediate surroundings shape what your palate craves.',
    options: [
      {
        label: 'Beside a quiet morning window',
        description: 'Sunlight filtering through linen, soft ambient silence.',
        icon: '🪟',
        tags: ['slow-morning', 'Comfort']
      },
      {
        label: 'At a busy desk with 18 open tabs',
        description: 'Screen glare, tight deadlines, and serious tasks ahead.',
        icon: '💻',
        tags: ['deep-focus', 'Focus']
      },
      {
        label: 'Tucked into a cozy chair while it rains',
        description: 'Soft wool sweater, low afternoon light, book in hand.',
        icon: '🌧️',
        tags: ['soft-comfort', 'Comfort']
      },
      {
        label: 'Midday rush or walking through the city',
        description: 'Warm sidewalks, moving quickly, craving a sharp reset.',
        icon: '🚶',
        tags: ['need-a-reset', 'Refresh', 'feeling-bold']
      }
    ]
  },
  {
    id: 'energy',
    question: 'What is your internal battery reading?',
    subtitle: 'Be honest—no judgment at the counter.',
    options: [
      {
        label: 'Running on 14% and need a gentle lift',
        description: 'Gentle sugars, comforting grain, nothing harsh or bitter.',
        icon: '🪫',
        tags: ['slow-morning', 'soft-comfort']
      },
      {
        label: 'Scattered and overheated—need a clean shock',
        description: 'Ice cubes, crisp vanilla, or effervescent tonic.',
        icon: '⚡',
        tags: ['need-a-reset', 'Refresh']
      },
      {
        label: 'Ready to produce masterpiece work',
        description: 'High-density extraction, pure crema, zero fluff.',
        icon: '🎯',
        tags: ['deep-focus', 'Focus']
      },
      {
        label: 'Electrified and craving pure self-indulgence',
        description: 'Chocolate, floral petals, or pistachio decadence.',
        icon: '✨',
        tags: ['main-character', 'Indulgence', 'feeling-bold']
      }
    ]
  },
  {
    id: 'craving',
    question: 'What does your tongue secretly want?',
    subtitle: 'The sensory texture that will satisfy you most today.',
    options: [
      {
        label: 'Thick, velvety steamed foam to cradle',
        description: 'Piping warm microfoam dusted with warm spices.',
        icon: '☕',
        tags: ['cinnamon-cappuccino', 'maple-muse', 'hazelnut-hush', 'Comfort']
      },
      {
        label: 'Chilled iced layers with a floating cold foam cloud',
        description: 'Ice clinking, cold milk swirling into dark espresso.',
        icon: '🧊',
        tags: ['velvet-cloud-latte', 'iced-vanilla-latte', 'coconut-coast', 'Refresh']
      },
      {
        label: 'Uncompromising double ristretto density',
        description: 'Short, aromatic, caramelized hazelnut and crema.',
        icon: '🖤',
        tags: ['flat-white', 'brown-sugar-shaken-espresso', 'golden-hour-macchiato', 'Focus']
      },
      {
        label: 'Unexpected botanical or citrus drama',
        description: 'Blood orange peel, floral Damascus rose, or star anise.',
        icon: '🍊',
        tags: ['rose-mocha', 'citrus-rush', 'orange-cinnamon-cold-brew', 'spiced-ember-tonic', 'Adventure', 'Indulgence']
      }
    ]
  },
  {
    id: 'outcome',
    question: 'How do you want to feel twenty minutes from now?',
    subtitle: 'The emotional destination of your cup.',
    options: [
      {
        label: 'Grounded, peaceful, and in unhurried rhythm',
        description: 'Time slows down; the world feels soft and safe.',
        icon: '🕊️',
        tags: ['slow-morning', 'soft-comfort', 'Comfort']
      },
      {
        label: 'Locked in with razor-sharp creative clarity',
        description: 'Mental fog evaporated, solutions appearing in sequence.',
        icon: '💡',
        tags: ['deep-focus', 'Focus']
      },
      {
        label: 'Cool, refreshed, and ready to tackle the afternoon',
        description: 'A second wind of crisp mental daylight.',
        icon: '🌿',
        tags: ['need-a-reset', 'Refresh']
      },
      {
        label: 'Celebratory, daring, and unapologetically alive',
        description: 'Feeling like the absolute star of the film.',
        icon: '👑',
        tags: ['main-character', 'feeling-bold', 'Indulgence', 'Adventure']
      }
    ]
  }
];

export const MoodQuizModal: React.FC<MoodQuizModalProps> = ({
  isOpen,
  onClose,
  onOrderDrink,
  onViewDetails,
  onSelectMood,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [matchedCoffee, setMatchedCoffee] = useState<CoffeeItem | null>(null);

  // Close on Escape & lock body scroll
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = optionIndex;
    setSelectedAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate best coffee recommendation
      calculateRecommendation(updated);
    }
  };

  const calculateRecommendation = (answers: number[]) => {
    // Gather all accumulated tags
    const allTags: string[] = [];
    answers.forEach((ansIdx, qIdx) => {
      const q = QUIZ_QUESTIONS[qIdx];
      const opt = q.options[ansIdx];
      if (opt) {
        allTags.push(...opt.tags);
      }
    });

    // Score all 18 coffees
    let bestCoffee = SIGNATURE_COFFEES[0];
    let highestScore = -1;

    SIGNATURE_COFFEES.forEach((coffee) => {
      let score = 0;
      allTags.forEach((tag) => {
        if (coffee.id === tag) score += 5;
        if (coffee.moodId === tag) score += 3;
        if (coffee.category === tag) score += 2;
        if (coffee.flavourNotes.some(n => n.toLowerCase().includes(tag.toLowerCase()))) score += 1;
      });

      // Bonus if matches specific craving texture
      if (score > highestScore) {
        highestScore = score;
        bestCoffee = coffee;
      }
    });

    setMatchedCoffee(bestCoffee);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setMatchedCoffee(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-[#2D201C]/70 backdrop-blur-xs transition-opacity" 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] rounded-3xl border border-[#2D201C]/15 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-[#2D201C]/10 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#B97849]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#B97849] font-medium">
              Sensory Calibration · Mood Discovery Quiz
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#2D201C]/70 hover:text-[#2D201C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1">
          
          {!matchedCoffee ? (
            /* Question Step */
            <div className="space-y-6">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-mono text-[#2D201C]/50">
                <span>Question 0{currentStep + 1} of 0{QUIZ_QUESTIONS.length}</span>
                <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% Calibrated</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-[#2D201C]/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#B97849] transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Heading */}
              <div className="space-y-1 pt-2">
                <h3 className="font-editorial text-2xl sm:text-4xl text-[#2D201C] font-normal tracking-tight">
                  {currentQ.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#2D201C]/70 font-light">
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedAnswers[currentStep] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`p-4 sm:p-5 rounded-2xl text-left transition-all border cursor-pointer flex items-start gap-4 group ${
                        isSelected
                          ? 'bg-white border-[#2D201C] shadow-sm ring-1 ring-[#2D201C]'
                          : 'bg-white/70 border-[#2D201C]/10 hover:bg-white hover:border-[#2D201C]/30 hover:shadow-2xs'
                      }`}
                    >
                      <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                        {opt.icon}
                      </span>
                      <div className="space-y-0.5 min-w-0 flex-1">
                        <p className="font-editorial text-lg text-[#2D201C] font-normal leading-snug">
                          {opt.label}
                        </p>
                        <p className="text-xs text-[#2D201C]/70 font-light leading-relaxed">
                          {opt.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#2D201C]/30 group-hover:text-[#B97849] group-hover:translate-x-0.5 transition-all self-center shrink-0" />
                    </button>
                  );
                })}
              </div>

              {/* Back step navigation if > 0 */}
              {currentStep > 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-mono uppercase tracking-wider text-[#2D201C]/60 hover:text-[#2D201C] transition-colors cursor-pointer"
                  >
                    ← Previous Question
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Result Reveal View */
            <div className="space-y-8 animate-fadeIn">
              
              <div className="text-center space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B97849] font-medium flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Your Calibrated Prescription</span>
                </span>
                <h3 className="font-editorial text-3xl sm:text-5xl text-[#2D201C] font-normal tracking-tight">
                  {matchedCoffee.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#2D201C]/70 font-mono">
                  Prescribed for {matchedCoffee.moodName} · {matchedCoffee.category} Category
                </p>
              </div>

              {/* Matched Drink Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#2D201C]/10 shadow-sm space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  
                  {/* Photo */}
                  <div className="sm:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8DDD0] shadow-xs">
                    <img
                      src={matchedCoffee.image}
                      alt={matchedCoffee.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Why it matches */}
                  <div className="sm:col-span-7 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B97849]">
                      Why This Belongs With You
                    </span>
                    <p className="font-editorial text-base sm:text-lg italic text-[#2D201C] font-light leading-snug">
                      “{matchedCoffee.emotionalCopy}”
                    </p>
                    <p className="text-xs text-[#2D201C]/75 font-light leading-relaxed">
                      {matchedCoffee.shortDescription}
                    </p>
                    <div className="flex items-center gap-3 text-xs font-mono text-[#2D201C]/70 pt-1">
                      <span>{matchedCoffee.temperature}</span>
                      <span>·</span>
                      <span className="font-semibold text-sm text-[#2D201C]">${matchedCoffee.price.toFixed(2)}</span>
                    </div>
                  </div>

                </div>

                {/* Flavour notes */}
                <div className="space-y-1.5 pt-4 border-t border-[#2D201C]/8">
                  <span className="text-[11px] font-mono uppercase text-[#2D201C]/50">
                    Active Flavour Spectrum:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {matchedCoffee.flavourNotes.map((note, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 rounded-full bg-[#FAF6F0] text-xs font-medium text-[#2D201C] border border-[#2D201C]/10"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => {
                      onOrderDrink(matchedCoffee);
                      onClose();
                    }}
                    className="flex-1 py-3.5 rounded-full bg-[#2D201C] text-[#FFF9F1] uppercase text-xs font-mono font-semibold tracking-wider hover:bg-[#B97849] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Order This Cup (${matchedCoffee.price.toFixed(2)})</span>
                  </button>

                  {onSelectMood && (
                    <button
                      onClick={() => {
                        onSelectMood(matchedCoffee.moodId);
                        onClose();
                      }}
                      className="px-5 py-3.5 rounded-full bg-[#FAF6F0] border border-[#2D201C]/20 hover:border-[#B97849] hover:bg-white text-[#2D201C] uppercase text-xs font-mono tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                      title="Load this mood and ritual into the page"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#B97849]" />
                      <span>Experience Mood Ritual</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      onViewDetails(matchedCoffee);
                      onClose();
                    }}
                    className="px-4 py-3.5 rounded-full border border-[#2D201C]/20 hover:bg-black/5 text-[#2D201C] uppercase text-xs font-mono tracking-wider cursor-pointer flex items-center justify-center"
                    title="View Extraction Specs"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Reset Quiz Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleRestart}
                  className="text-xs font-mono uppercase tracking-wider text-[#2D201C]/60 hover:text-[#B97849] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Calibrate a Different Mood</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#2D201C]/10 bg-[#FAF6F0] flex items-center justify-between text-xs font-mono text-[#2D201C]/50">
          <span>MOODBREW Algorithmic Sommelier</span>
          <span>18 Handcrafted Options</span>
        </div>

      </div>
    </div>
  );
};

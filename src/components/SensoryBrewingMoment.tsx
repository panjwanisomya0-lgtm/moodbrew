import React, { useState } from 'react';
import { BREWING_STEPS } from '../data/coffeeData';
import { Sparkles, Droplets, Flame, Wind, CheckCircle2 } from 'lucide-react';

export const SensoryBrewingMoment: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepIcons = [
    <Wind key="0" className="w-5 h-5 text-[#B97849]" />,
    <Flame key="1" className="w-5 h-5 text-[#C66C42]" />,
    <Droplets key="2" className="w-5 h-5 text-[#B9CFD8]" />,
    <Sparkles key="3" className="w-5 h-5 text-[#BFCAB8]" />
  ];

  const currentStep = BREWING_STEPS[activeStepIndex];

  return (
    <section id="ritual" className="py-20 md:py-28 px-6 bg-[#F5EFE6] border-b border-[#2D201C]/8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#B97849]">
            <span className="w-6 h-[1px] bg-[#B97849]" />
            <span>Section 05 · A Little Coffee Moment</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#2D201C] tracking-tight">
            THE SLOW ALCHEMY.
          </h2>
          <p className="text-base sm:text-lg text-[#2D201C]/75 font-light leading-relaxed">
            Four quiet steps between the raw bean and your peace of mind. Every extraction is tuned to honour the mood.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {BREWING_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-5 rounded-2xl text-left transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#2D201C] shadow-md ring-1 ring-[#2D201C]'
                    : 'bg-white/60 border-[#2D201C]/10 hover:bg-white hover:border-[#2D201C]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#2D201C]/50 font-semibold">
                    Phase {step.step}
                  </span>
                  {stepIcons[idx]}
                </div>
                <p className="font-editorial text-lg text-[#2D201C] font-normal leading-snug">
                  {step.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Step Highlight Box */}
        <div className="bg-[#FAF4EC] rounded-3xl p-8 sm:p-12 border border-[#2D201C]/10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B97849] font-semibold">
                Step {currentStep.step} of 04
              </span>
              <span className="text-[#2D201C]/30">·</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2D201C]/60">
                Brewmaster's Sensory Log
              </span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-4xl text-[#2D201C] font-normal">
              {currentStep.title}
            </h3>

            <p className="text-base sm:text-lg text-[#2D201C]/80 font-light leading-relaxed max-w-2xl">
              {currentStep.description}
            </p>

            {/* Sensory Cue Detail */}
            <div className="pt-2 p-4 rounded-xl bg-white/80 border border-[#2D201C]/8 max-w-xl">
              <p className="text-xs font-mono uppercase tracking-wider text-[#B97849] mb-1">
                Sensory Cue to Notice:
              </p>
              <p className="text-sm font-editorial italic text-[#2D201C]/85">
                “{currentStep.sensoryCue}”
              </p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-center items-center p-6 rounded-2xl bg-white/70 border border-[#2D201C]/10 text-center space-y-3">
            <span className="font-mono text-4xl sm:text-5xl font-light text-[#2D201C]">
              {activeStepIndex === 0 && '22.0g'}
              {activeStepIndex === 1 && '30 sec'}
              {activeStepIndex === 2 && '93.5°C'}
              {activeStepIndex === 3 && '65.0°C'}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#2D201C]/60">
              {activeStepIndex === 0 && 'Precision Dose'}
              {activeStepIndex === 1 && 'Bloom Degas'}
              {activeStepIndex === 2 && 'Water Temperature'}
              {activeStepIndex === 3 && 'Cup Drinking Warmth'}
            </span>
            <p className="text-xs text-[#2D201C]/70 font-light">
              Calibrated daily on seasonal single-origin harvests.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

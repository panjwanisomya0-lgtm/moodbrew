import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Users, Coffee, CheckCircle, Sparkles } from 'lucide-react';

export const FindYourMoment: React.FC = () => {
  const [partySize, setPartySize] = useState('2 Guests');
  const [timeSlot, setTimeSlot] = useState('10:30 AM');
  const [flightOption, setFlightOption] = useState('The Circadian Flight (3 Cups: Wake, Focus, Comfort)');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [isReserved, setIsReserved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
    setIsReserved(true);
  };

  return (
    <section id="visit" className="py-20 md:py-28 px-6 bg-[#FAF6F0] border-b border-[#2D201C]/8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#B97849]">
            <span className="w-6 h-[1px] bg-[#B97849]" />
            <span>Section 08 · Find Your Moment</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#2D201C] tracking-tight">
            VISIT THE SENSORY BAR.
          </h2>
          <p className="text-base sm:text-lg text-[#2D201C]/75 font-light leading-relaxed">
            Experience the full ritual in person. Pull up a stool at the oak counter, let our baristas assess your mood, and taste our seasonal flights.
          </p>
        </div>

        {/* 2-Column Grid: Cafe Logistics & Interactive Tasting Reservation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Cafe Information & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-8 bg-white rounded-3xl p-8 sm:p-10 border border-[#2D201C]/10 shadow-xs">
            
            <div className="space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-[#B97849]">
                Flagship Sanctuary
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#2D201C]">
                MOODBREW Atrium
              </h3>
              <p className="text-sm text-[#2D201C]/75 font-light leading-relaxed">
                428 Mercer Street, Arts District <br />
                Natural daylight atrium with acoustic dampening, live olive trees, and hand-thrown ceramic counters.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2D201C]/8 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B97849] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#2D201C] uppercase font-mono text-[11px]">Daily Hours</p>
                  <p className="text-[#2D201C]/70 mt-0.5">Monday – Friday: 07:00 – 18:00</p>
                  <p className="text-[#2D201C]/70">Saturday – Sunday: 08:00 – 19:00</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Coffee className="w-4 h-4 text-[#B97849] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#2D201C] uppercase font-mono text-[11px]">Current Counter State</p>
                  <p className="text-[#2D201C]/70 mt-0.5">
                    Currently pouring: <strong className="text-[#2D201C] font-semibold">Slow Morning & Deep Focus Flights</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#2D201C]/8">
              <p className="text-xs font-mono uppercase tracking-wider text-[#B97849] mb-1">
                Walk-ins Welcome
              </p>
              <p className="text-xs text-[#2D201C]/75 font-light">
                Counter seats are always reserved for spontaneous walk-in guests seeking a quiet cup between thoughts.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Tasting Flight Reservation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#2D201C]/10 shadow-xs">
            
            {isReserved ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#BFCAB8]/30 text-[#2D201C] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-[#263828]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-editorial text-3xl font-normal text-[#2D201C]">
                    Moment Confirmed for {guestName}
                  </h3>
                  <p className="text-sm text-[#2D201C]/75 font-light max-w-md mx-auto">
                    We have set aside an oak counter tasting table for {partySize} at {timeSlot}. A calendar confirmation has been sent to {guestEmail}.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#2D201C]/8 text-left max-w-md mx-auto text-xs space-y-1">
                  <p className="font-mono text-[11px] text-[#2D201C]/50 uppercase">Reserved Experience</p>
                  <p className="font-medium text-[#2D201C]">{flightOption}</p>
                </div>

                <button
                  onClick={() => setIsReserved(false)}
                  className="px-6 py-2.5 rounded-full border border-[#2D201C]/20 text-xs uppercase font-mono tracking-wider hover:bg-[#2D201C]/5 cursor-pointer"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#B97849]">
                    Reserve Tasting Table
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#2D201C] mt-1">
                    Book a Mood Flight Experience
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D201C]/75 font-light mt-1">
                    A 45-minute guided flight through three distinct mood extractions with our lead sensory barista.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#2D201C]/70 mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#2D201C]/10 text-sm text-[#2D201C] focus:outline-none focus:ring-1 focus:ring-[#B97849]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#2D201C]/70 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@studio.com"
                      value={guestEmail}
                      onChange={e => setGuestEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#2D201C]/10 text-sm text-[#2D201C] focus:outline-none focus:ring-1 focus:ring-[#B97849]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#2D201C]/70 mb-2">
                      Party Size
                    </label>
                    <select
                      value={partySize}
                      onChange={e => setPartySize(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#2D201C]/10 text-sm text-[#2D201C] focus:outline-none focus:ring-1 focus:ring-[#B97849]"
                    >
                      <option>1 Solo Ritualist</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests (Tasting Alcove)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#2D201C]/70 mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      value={timeSlot}
                      onChange={e => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#2D201C]/10 text-sm text-[#2D201C] focus:outline-none focus:ring-1 focus:ring-[#B97849]"
                    >
                      <option>08:30 AM · Gentle Morning</option>
                      <option>10:30 AM · Sunlight Pour</option>
                      <option>01:30 PM · Midday Reset</option>
                      <option>03:30 PM · Deep Focus Bar</option>
                      <option>05:00 PM · Evening Indulgence</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#2D201C]/70 mb-2">
                    Flight Selection
                  </label>
                  <select
                    value={flightOption}
                    onChange={e => setFlightOption(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#2D201C]/10 text-sm text-[#2D201C] focus:outline-none focus:ring-1 focus:ring-[#B97849]"
                  >
                    <option>The Circadian Flight (Slow Morning + Deep Focus + Soft Comfort)</option>
                    <option>The Reset & Bold Flight (Iced Vanilla + Orange Cold Brew + Rose Mocha)</option>
                    <option>Custom Barista Consultation (Decided upon arrival)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#2D201C] text-[#FFF9F1] uppercase font-semibold text-xs tracking-wider hover:bg-[#B97849] active:scale-[0.99] transition-all cursor-pointer shadow-md"
                >
                  Confirm Table Reservation ($18.00 per guest)
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

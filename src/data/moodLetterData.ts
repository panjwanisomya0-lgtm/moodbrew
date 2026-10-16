export interface MoodLetterContent {
  id: string;
  salutation: string;
  heading: string;
  paragraphs: string[];
  signoff: string;
  postscript: string;
}

export interface MoodLetterCategory {
  id: string;
  name: string;
  tagline: string;
  paperBg: string;
  borderTint: string;
  stampColor: string;
  accentColor: string;
  stampCode: string;
  pairedCoffeeId: string;
  letters: MoodLetterContent[];
}

export const MOOD_LETTERS: MoodLetterCategory[] = [
  {
    id: 'slow',
    name: 'Slow',
    tagline: 'When time has finally decided to loosen its grip.',
    paperBg: '#F5F7F3',
    borderTint: '#BFCAB8',
    stampColor: '#4A5B43',
    accentColor: '#6B7E63',
    stampCode: 'NO. 01 · GENTLE HOUR',
    pairedCoffeeId: 'honey-oat-latte',
    letters: [
      {
        id: 'slow-1',
        salutation: 'To the one who has decided not to rush,',
        heading: 'There is nothing you are missing out on right now.',
        paragraphs: [
          'Look at the light moving across the floorboards. It doesn’t hurry across the wood; it takes thirty minutes just to travel three inches. That is the tempo of things that actually matter.',
          'The world spent the last decade convincing us that speed is synonymous with living. But the best coffee takes five minutes to brew, and twenty minutes to drink. Let the emails sit in the queue. Let the urgency belong to someone else for the next half-hour.',
          'Your only assignment right now is to feel the warmth of the ceramic against your palm and let your shoulders drop from your ears.'
        ],
        signoff: 'With quiet regard,',
        postscript: 'P.S. Notice how honey never dissolves quickly. It takes its time to sweeten the cup.'
      },
      {
        id: 'slow-2',
        salutation: 'To whoever woke up wanting stillness,',
        heading: 'Permission to do absolutely nothing of consequence.',
        paragraphs: [
          'You woke up without the alarm today, or maybe you turned it off and stayed horizontal anyway. Good. The world asks for your productivity seven days a week; it can survive this morning without your input.',
          'Put on wool socks. Boil water slowly. Don’t listen to a podcast; listen to the kettle whistle and the city murmur through the glass. Everything of beauty requires unmetered space to breathe.',
          'Take a slow sip. Drink until you can taste the floral finish. The day will start whenever you say it does.'
        ],
        signoff: 'From the quiet corner of the café,',
        postscript: 'P.S. An unhurried morning is not lost time; it is borrowed peace.'
      },
      {
        id: 'slow-3',
        salutation: 'To a fellow traveler of the unhurried life,',
        heading: 'The luxury of an uninterrupted breath.',
        paragraphs: [
          'Notice how rare silence has become. When you stop rushing, the world feels louder at first, and then suddenly softer. The sound of oat milk swirling into espresso is its own kind of symphony.',
          'You don’t have to conquer today. You just have to inhabit it. Be where your feet are, hold your cup with both hands, and trust that you have already done enough to deserve this gentle pause.'
        ],
        signoff: 'Warmly from the counter,',
        postscript: 'P.S. The steam curls upward in spirals because air is patient. Be like the air.'
      }
    ]
  },
  {
    id: 'overwhelmed',
    name: 'Overwhelmed',
    tagline: 'When every tab is open and the air feels too tight.',
    paperBg: '#F3F6F8',
    borderTint: '#B9CFD8',
    stampColor: '#2C4957',
    accentColor: '#436B7C',
    stampCode: 'NO. 02 · COLD THRESHOLD',
    pairedCoffeeId: 'velvet-cloud-latte',
    letters: [
      {
        id: 'overwhelmed-1',
        salutation: 'To you, whose mind is carrying twenty things at once,',
        heading: 'Put down the heaviest thing. Just for three minutes.',
        paragraphs: [
          'I know. It feels like if you stop pedaling for even sixty seconds, the whole bicycle topples over. But that is the panic talking, not reality. The sky will not cave in if you take four deep belly breaths right here.',
          'Notice the cold glass. Feel the sharp temperature difference against your fingertips. Cold is a physical shock that pulls scattered thoughts right back into the body. The ice clinking inside your glass is your anchor.',
          'You don’t have to solve tomorrow, or next week, or even five o’clock. You only have to drink this cup, breath by breath.'
        ],
        signoff: 'Steadying your hands,',
        postscript: 'P.S. Close all browser tabs that end in question marks. They can wait.'
      },
      {
        id: 'overwhelmed-2',
        salutation: 'To someone whose nervous system needs a reset,',
        heading: 'You are allowed to step outside the storm.',
        paragraphs: [
          'When life becomes a noise of notifications and half-finished sentences, the antidote is not working faster. The antidote is sensory clarity.',
          'Let the sweetness of pure vanilla cut through the static. Let the dark espresso ground you. You are a person who is breathing, not a machine processing tasks. Treat yourself with the same gentleness you would offer a tired friend.'
        ],
        signoff: 'Standing beside you,',
        postscript: 'P.S. Three slow sips. One long exhale. You will find your rhythm again.'
      },
      {
        id: 'overwhelmed-3',
        salutation: 'To whoever feels stretched paper-thin today,',
        heading: 'One sip at a time is a valid survival strategy.',
        paragraphs: [
          'Overwhelm is just too many tomorrows demanding your presence right now. Send them back. Tomorrow does not belong in this hour.',
          'This hour belongs to cold milk, rich espresso, and the quiet truth that you have survived every overwhelming day before this one with grace.'
        ],
        signoff: 'From your sanctuary,',
        postscript: 'P.S. If you can only do one thing this afternoon, let it be drinking this cup in peace.'
      }
    ]
  },
  {
    id: 'hopeful',
    name: 'Hopeful',
    tagline: 'When the horizon feels wide open and full of possibility.',
    paperBg: '#FDF7EC',
    borderTint: '#E8C582',
    stampColor: '#8C5A14',
    accentColor: '#B97849',
    stampCode: 'NO. 03 · GOLDEN DAWN',
    pairedCoffeeId: 'golden-hour-macchiato',
    letters: [
      {
        id: 'hopeful-1',
        salutation: 'To the dreamer with sparks behind their eyes,',
        heading: 'Something good is quietly on its way.',
        paragraphs: [
          'Can you feel it? That subtle current beneath the surface of the week—a sense that an old chapter has finally closed its heavy door, and something light-footed is turning the corner.',
          'Hope isn’t naive; hope is the bravest thing we ever cultivate. It is looking at a cold morning and deciding to believe in golden afternoon light anyway. This cup of stained espresso and caramel honey is a celebration of what’s starting.',
          'Write down that idea you had yesterday. Even if it feels small. Small seeds become entire forests.'
        ],
        signoff: 'Cheering for your horizon,',
        postscript: 'P.S. Drink this while standing in direct sunlight if you can find some.'
      },
      {
        id: 'hopeful-2',
        salutation: 'To the one stepping onto new ground,',
        heading: 'Trust the momentum that is building inside you.',
        paragraphs: [
          'Every great journey begins with a cup of coffee and the quiet audacity to try. Whatever project, connection, or change you are contemplating, remember: you don’t need to see the entire staircase to take the first step.',
          'The crema on this macchiato is rich, sweet, and golden. Take a sip, smile at a stranger, and let your curiosity lead the way today.'
        ],
        signoff: 'With bright eyes,',
        postscript: 'P.S. Fortune favours the person who drinks good coffee with open hands.'
      }
    ]
  },
  {
    id: 'confident',
    name: 'Confident',
    tagline: 'When your energy is electric and you are the main character.',
    paperBg: '#FAF1F0',
    borderTint: '#D5A7A1',
    stampColor: '#6B2B24',
    accentColor: '#9C4337',
    stampCode: 'NO. 04 · MAIN CHARACTER',
    pairedCoffeeId: 'rose-mocha',
    letters: [
      {
        id: 'confident-1',
        salutation: 'To the one who is owning the room today,',
        heading: 'Do not apologize for taking up space.',
        paragraphs: [
          'You walked into the day with your head high and your intentions clear. There is nothing accidental about the way you make things happen. When you step into a room, the air shifts.',
          'We made the Rose Mocha for moments exactly like this: dark single-origin chocolate, rich espresso, and botanical rose petals that refuse to be modest. It is decadent because you deserve decadence.',
          'Drink it like you were born to sip out of gilded porcelain. Because frankly, you were.'
        ],
        signoff: 'In admiration,',
        postscript: 'P.S. Wear your favorite jacket today. The world is watching.'
      },
      {
        id: 'confident-2',
        salutation: 'To you, bold architect of your own story,',
        heading: 'Taste is a statement. Make it loud.',
        paragraphs: [
          'Mediocrity is cheap and easy to come by. Greatness—in coffee, in design, in how you speak—requires conviction. Today is not the day for compromise.',
          'Let the floral fragrance and dark chocolate ground your resolve. You know what you want, you know what you are worth, and you know how to build it.'
        ],
        signoff: 'Raising a cup to you,',
        postscript: 'P.S. Look in the mirror before you step out. You look incredible.'
      }
    ]
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    tagline: 'When old memories smell like autumn leaves and warm kitchens.',
    paperBg: '#F8F4EE',
    borderTint: '#D8C3A8',
    stampColor: '#5C3E21',
    accentColor: '#8C5E33',
    stampCode: 'NO. 05 · OLD MEMORY',
    pairedCoffeeId: 'hazelnut-hush',
    letters: [
      {
        id: 'nostalgic-1',
        salutation: 'To the keeper of golden memories,',
        heading: 'Some flavours carry you ten years into the past.',
        paragraphs: [
          'Isn’t it strange how a single note of roasted hazelnut can summon an entire kitchen from 2014? The smell of rain on wool coats, an old radio playing softly in the kitchen, someone you haven’t called in six months laughing across a table.',
          'Nostalgia is not sadness; it is proof of how richly you have lived. The past isn’t lost—it lives safely in your marrow, and every now and then, a cup of coffee opens the latch.',
          'Hold the warm terracotta in your hands. Let the memory play out like an old song. Then send a quick text to someone who was there.'
        ],
        signoff: 'Tenderly from the past,',
        postscript: 'P.S. Call your friend. They were thinking about you too.'
      },
      {
        id: 'nostalgic-2',
        salutation: 'To anyone who misses an old season of life,',
        heading: 'Honor the road that brought you here.',
        paragraphs: [
          'You are not the person you were three years ago, but that person did their absolute best to build the life you now inhabit. Be gentle with who you used to be.',
          'Sip the slow praline sweetness. Let the warmth soothe old aches. The past made you; the present is yours.'
        ],
        signoff: 'With gentle reverence,',
        postscript: 'P.S. Keep the vintage photographs on the fridge. They remind you of the magic.'
      }
    ]
  },
  {
    id: 'comfort',
    name: 'In Need of Comfort',
    tagline: 'When the world is heavy and you need a warm embrace.',
    paperBg: '#F9F4ED',
    borderTint: '#D4C0A7',
    stampColor: '#4A321E',
    accentColor: '#A36838',
    stampCode: 'NO. 06 · WARM EMBRACE',
    pairedCoffeeId: 'maple-muse',
    letters: [
      {
        id: 'comfort-1',
        salutation: 'Dear friend who is weary today,',
        heading: 'Wrap both hands around the cup and lean in.',
        paragraphs: [
          'I don’t know what took so much out of you today, but I see how tired you are. It takes courage to carry heavy things quietly, and today you have carried more than your share.',
          'You don’t have to be strong right now. You don’t have to have an answer or a five-point plan. For the next ten minutes, you are simply someone holding a warm ceramic mug filled with dark Vermont maple syrup and steamed oat milk.',
          'Let the sweetness soak in. Let the cinnamon warm your chest. You are safe here, the doors are locked against the wind, and you are going to be okay.'
        ],
        signoff: 'Holding space for you,',
        postscript: 'P.S. If you need to cry into your foam, go right ahead. Baristas never judge.'
      },
      {
        id: 'comfort-2',
        salutation: 'To whoever needs a sanctuary today,',
        heading: 'Softness is not weakness; it is medicine.',
        paragraphs: [
          'When life is jagged, surround yourself with soft things: oversized knit blankets, quiet acoustic cello, and warm coffee that tastes like home.',
          'The maple in this cup was tapped from trees that survived forty winters. They gave their sweetness only after weathering the deep freeze. You, too, will emerge from this winter sweeter and whole.'
        ],
        signoff: 'Like a blanket around your shoulders,',
        postscript: 'P.S. Drink this until the mug is cold. Take your time.'
      },
      {
        id: 'comfort-3',
        salutation: 'To the heart that just needs a breather,',
        heading: 'You do not have to hold it all together today.',
        paragraphs: [
          'Some days are for marching forward; some days are for retreating into a warm corner with a spoon and a cup of comfort. Today is the second kind of day.',
          'Let yourself be held by small pleasures. The aroma of maple. The creamy weight of the milk. The gentle rhythm of your own heart.'
        ],
        signoff: 'Warmest regards from the hearth,',
        postscript: 'P.S. Tomorrow will bring fresh light. Tonight, rest.'
      }
    ]
  }
];

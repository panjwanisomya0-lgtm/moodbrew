export interface MoodItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  colorName: string;
  hex: string;
  contrastText: string;
  bgLight: string;
  borderTint: string;
  recommendedCoffeeId: string;
  feeling: string;
  flavourNotes: string[];
  quote: string;
  soundtrackMood: string;
  timeOfDay: string;
}

export interface CoffeeItem {
  id: string;
  name: string;
  moodId: string;
  moodName: string;
  category: 'Comfort' | 'Refresh' | 'Focus' | 'Indulgence' | 'Adventure';
  image: string;
  shortDescription: string;
  emotionalCopy: string;
  flavourNotes: string[];
  price: number;
  origin: string;
  roastLevel: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark' | 'Cold Extraction';
  temperature: string;
  sweetness: number; // 1-5
  intensity: number; // 1-5
  creaminess: number; // 1-5
  servingVessel: string;
  recommendedTime: string;
  ingredients: string[];
}

export interface JournalArticle {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  author: string;
  date: string;
  moodTag: string;
  excerpt: string;
  content: string[];
}

export const MOODS: MoodItem[] = [
  {
    id: 'slow-morning',
    number: '01',
    name: 'SLOW MORNING',
    tagline: 'Gentle, slow, and unhurried',
    colorName: 'Sage Quiet',
    hex: '#BFCAB8',
    contrastText: '#263828',
    bgLight: '#F2F6F0',
    borderTint: '#A8B7A0',
    recommendedCoffeeId: 'honey-oat-latte',
    feeling: 'Gentle, slow, and unhurried.',
    flavourNotes: ['Wild Honey', 'Steamed Oat Milk', 'Smooth Espresso'],
    quote: 'Nothing urgent. Nowhere to rush. Just a little honey, a little oat milk, and a moment that’s entirely yours.',
    soundtrackMood: 'Soft acoustic strings & morning rain',
    timeOfDay: '07:00 – 10:30'
  },
  {
    id: 'need-a-reset',
    number: '02',
    name: 'NEED A RESET',
    tagline: 'Refreshing, light, and ready for fresh air',
    colorName: 'Blue Hour',
    hex: '#B9CFD8',
    contrastText: '#1B3744',
    bgLight: '#EFF5F8',
    borderTint: '#9FBCC8',
    recommendedCoffeeId: 'iced-vanilla-latte',
    feeling: 'Refreshing, light, and ready for a fresh start.',
    flavourNotes: ['Madagascar Vanilla', 'Chilled Farm Milk', 'Crisp Espresso'],
    quote: 'A cool breath across a crowded afternoon. Glass clinking with crystal ice, gentle vanilla sweetness, and clarity in every sip.',
    soundtrackMood: 'Midday ambient breeze & clean chimes',
    timeOfDay: '11:00 – 14:00'
  },
  {
    id: 'main-character',
    number: '03',
    name: 'MAIN CHARACTER',
    tagline: 'Expressive, confident, and a little indulgent',
    colorName: 'Rose Clay',
    hex: '#D5A7A1',
    contrastText: '#4A201B',
    bgLight: '#FAF0EF',
    borderTint: '#C5918A',
    recommendedCoffeeId: 'rose-mocha',
    feeling: 'Expressive, confident, and a little indulgent.',
    flavourNotes: ['Dark Cocoa', 'Damascus Rose Water', 'Velvet Espresso'],
    quote: 'You are the scene. Unapologetic richness of single-origin dark cocoa kissed with organic rose petals. Coffee as an art piece.',
    soundtrackMood: 'French vinyl jazz & slow basslines',
    timeOfDay: '13:30 – 17:00'
  },
  {
    id: 'deep-focus',
    number: '04',
    name: 'DEEP FOCUS',
    tagline: 'Clear-headed, grounded, and ready to concentrate',
    colorName: 'Espresso Ink',
    hex: '#2D201C',
    contrastText: '#F5EFE6',
    bgLight: '#2D201C',
    borderTint: '#523C35',
    recommendedCoffeeId: 'flat-white',
    feeling: 'Clear-headed, grounded, and ready to concentrate.',
    flavourNotes: ['Caramelised Hazelnut', 'Double Ristretto', 'Silky Microfoam'],
    quote: 'Quiet confidence in precision. Two dense ristretto pulls bound in glossy milk foam. Zero distractions, resonant clarity.',
    soundtrackMood: 'Deep lo-fi pulses & rain on studio glass',
    timeOfDay: '09:00 – 16:30'
  },
  {
    id: 'soft-comfort',
    number: '05',
    name: 'SOFT COMFORT',
    tagline: 'Cosy, familiar, and comforting',
    colorName: 'Oat Cream',
    hex: '#E8DDD0',
    contrastText: '#3B2B23',
    bgLight: '#FBF8F4',
    borderTint: '#D4C3B2',
    recommendedCoffeeId: 'cinnamon-cappuccino',
    feeling: 'Cosy, familiar, and comforting.',
    flavourNotes: ['Roasted Ceylon Cinnamon', 'Foamy Cloud Foam', 'Warm Toffee Roast'],
    quote: 'Slipping your palms around a warm ceramic mug when the weather turns brisk. Thick velvet foam, aromatic cinnamon, and steady warmth.',
    soundtrackMood: 'Crackling fireside piano & warm cello',
    timeOfDay: '15:00 – 19:00'
  },
  {
    id: 'feeling-bold',
    number: '06',
    name: 'FEELING BOLD',
    tagline: 'Adventurous, energetic, and unexpected',
    colorName: 'Burnt Sienna',
    hex: '#C66C42',
    contrastText: '#FFFFFF',
    bgLight: '#FDF1EB',
    borderTint: '#B55A30',
    recommendedCoffeeId: 'orange-cinnamon-cold-brew',
    feeling: 'Adventurous, energetic, and unexpected.',
    flavourNotes: ['Seville Orange Peel', 'Slow-Steep Cold Brew', 'Charred Cinnamon'],
    quote: 'An electric twist of citrus and spice through twenty-four hours of cold-steeped Kenyan beans. Lively, unexpected, and alive.',
    soundtrackMood: 'Upbeat brass grooves & energetic rhythm',
    timeOfDay: '12:00 – 17:30'
  }
];

export const SIGNATURE_COFFEES: CoffeeItem[] = [
  // --- Original 6 Anchor Drinks ---
  {
    id: 'honey-oat-latte',
    name: 'Honey Oat Latte',
    moodId: 'slow-morning',
    moodName: 'Slow Morning',
    category: 'Comfort',
    image: '/src/assets/images/coffee_honey_oat_latte_1792144405813.jpg',
    shortDescription: 'Gentle warmth with raw clover honey, creamy oat milk, and smooth espresso.',
    emotionalCopy: 'Nothing urgent. Nowhere to rush. Just a little honey, a little oat milk, and a moment that’s entirely yours.',
    flavourNotes: ['Wild Honey', 'Steamed Oat Milk', 'Smooth Espresso'],
    price: 6.25,
    origin: 'Ethiopia Yirgacheffe (Washed)',
    roastLevel: 'Light',
    temperature: 'Warm (65°C)',
    sweetness: 4,
    intensity: 2,
    creaminess: 5,
    servingVessel: 'Handcrafted sage stoneware cup',
    recommendedTime: 'Early Mornings',
    ingredients: ['Double espresso', 'Stone-ground oat milk', 'Raw mountain clover honey', 'Toasted rolled oat flakes']
  },
  {
    id: 'iced-vanilla-latte',
    name: 'Iced Vanilla Latte',
    moodId: 'need-a-reset',
    moodName: 'Need a Reset',
    category: 'Refresh',
    image: '/src/assets/images/coffee_iced_vanilla_latte_1792144406248.jpg',
    shortDescription: 'Chilled layers of whole milk, fragrant vanilla bean, and vibrant espresso over ice.',
    emotionalCopy: 'A cool breath across a crowded afternoon. Crisp ice, fragrant Madagascar vanilla pod infusion, and espresso that cuts straight through the noise.',
    flavourNotes: ['Madagascar Vanilla', 'Chilled Farm Milk', 'Crisp Espresso'],
    price: 6.50,
    origin: 'Colombia Huila & Nariño blend',
    roastLevel: 'Medium',
    temperature: 'Chilled on Rocks',
    sweetness: 3,
    intensity: 3,
    creaminess: 4,
    servingVessel: 'Tall faceted crystal glass with metal straw',
    recommendedTime: 'Midday Reboot',
    ingredients: ['Double espresso', 'Madagascar bourbon vanilla syrup', 'Chilled organic whole milk', 'Crystal clear ice blocks']
  },
  {
    id: 'rose-mocha',
    name: 'Rose Mocha',
    moodId: 'main-character',
    moodName: 'Main Character',
    category: 'Indulgence',
    image: '/src/assets/images/coffee_rose_mocha_1792144407412.jpg',
    shortDescription: 'Velvety dark chocolate and subtle Damascus rose water in a blush ceramic cup.',
    emotionalCopy: 'Unapologetic richness. Single-origin Ecuadorian dark chocolate melded with botanical Damascus rose water, crowned with edible velvety petals.',
    flavourNotes: ['Dark Cocoa', 'Damascus Rose Water', 'Velvet Espresso'],
    price: 6.75,
    origin: 'Ecuador Arriba Nacional 72% & Sumatra Mandheling',
    roastLevel: 'Medium-Dark',
    temperature: 'Steamed Silk (68°C)',
    sweetness: 4,
    intensity: 4,
    creaminess: 5,
    servingVessel: 'Blush porcelain cup with gilded saucer',
    recommendedTime: 'Afternoon Indulgence',
    ingredients: ['Double shot espresso', '72% melted dark chocolate ganache', 'Steamed whole milk', 'Organic Damascus rose water', 'Edible dried rose petals']
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    moodId: 'deep-focus',
    moodName: 'Deep Focus',
    category: 'Focus',
    image: '/src/assets/images/coffee_flat_white_1792144413031.jpg',
    shortDescription: 'Two precision ristretto shots bound in glossy microfoam with hazelnut crema.',
    emotionalCopy: 'Precision in simplicity. Two ristretto extractions bound in a paper-thin layer of microfoam. No distractions, just resonant clarity.',
    flavourNotes: ['Caramelised Hazelnut', 'Double Ristretto', 'Silky Microfoam'],
    price: 5.50,
    origin: 'Guatemala Antigua & Costa Rica Tarrazú',
    roastLevel: 'Medium',
    temperature: 'Warm (62°C)',
    sweetness: 1,
    intensity: 5,
    creaminess: 3,
    servingVessel: 'Matte black ceramic tumbler (180ml)',
    recommendedTime: 'Work Sessions & Deep Reading',
    ingredients: ['Double ristretto pull (22g in / 36g out)', 'Precisely steamed silky whole milk (62°C)']
  },
  {
    id: 'cinnamon-cappuccino',
    name: 'Cinnamon Cappuccino',
    moodId: 'soft-comfort',
    moodName: 'Soft Comfort',
    category: 'Comfort',
    image: '/src/assets/images/coffee_cinnamon_cappuccino_v2_1792146145531.jpg',
    shortDescription: 'Billowy steamed foam mountain dusted with freshly ground Ceylon cinnamon.',
    emotionalCopy: 'Like slipping on your favourite oversized sweater on a rainy afternoon. Billowy foam mountains dusted with freshly ground Ceylon cinnamon bark.',
    flavourNotes: ['Roasted Ceylon Cinnamon', 'Foamy Cloud Foam', 'Warm Toffee Roast'],
    price: 5.75,
    origin: 'Brazil Cerrado Mineiro (Natural Process)',
    roastLevel: 'Medium-Dark',
    temperature: 'Piping (70°C)',
    sweetness: 2,
    intensity: 3,
    creaminess: 5,
    servingVessel: 'Earthenware speckled ceramic bowl cup',
    recommendedTime: 'Late Afternoon Wind Down',
    ingredients: ['Espresso double shot', 'Equal parts steamed milk and aerated foam', 'Ground organic Ceylon cinnamon bark']
  },
  {
    id: 'orange-cinnamon-cold-brew',
    name: 'Orange Cinnamon Cold Brew',
    moodId: 'feeling-bold',
    moodName: 'Feeling Bold',
    category: 'Adventure',
    image: '/src/assets/images/coffee_orange_cinnamon_cold_brew_1792144413019.jpg',
    shortDescription: '24-hour slow steep cold brew with Seville orange oils and charred cinnamon bark.',
    emotionalCopy: '24-hour slow steeped cold brew infused with sun-dried Seville orange peel and toasted cinnamon stick. Crisp, citrusy, and thrillingly vibrant.',
    flavourNotes: ['Seville Orange Peel', 'Slow-Steep Cold Brew', 'Charred Cinnamon'],
    price: 6.50,
    origin: 'Kenya Nyeri AA & Rwanda Bourbon',
    roastLevel: 'Cold Extraction',
    temperature: '24h Cold Steep',
    sweetness: 2,
    intensity: 5,
    creaminess: 1,
    servingVessel: 'Textured amber lowball glass with large ice sphere',
    recommendedTime: 'Afternoon Energy Surge',
    ingredients: ['24-hour cold steeped single-origin coffee', 'Seville blood orange peel twist', 'Toasted Sri Lankan cinnamon stick', 'Natural citrus blossom water']
  },

  // --- 12 Expanded Drinks ---
  {
    id: 'golden-hour-macchiato',
    name: 'Golden Hour Macchiato',
    moodId: 'slow-morning',
    moodName: 'Slow Morning',
    category: 'Focus',
    image: '/src/assets/images/coffee_golden_hour_macchiato_1792145819505.jpg',
    shortDescription: 'Stained espresso in fluted glass with a warm amber dollop of honeyed microfoam.',
    emotionalCopy: 'When the late afternoon sun stretches across the counter. Dense espresso, stained with a single spoonful of silky foam and raw demerara sugar.',
    flavourNotes: ['Caramelised Honey', 'Espresso Foam Dollop', 'Raw Demerara'],
    price: 5.75,
    origin: 'Costa Rica Tarrazú Honey Process',
    roastLevel: 'Medium',
    temperature: 'Warm (64°C)',
    sweetness: 3,
    intensity: 4,
    creaminess: 2,
    servingVessel: 'Small clear fluted glass cup with saucer',
    recommendedTime: 'Late Afternoon Transition',
    ingredients: ['Double espresso pull', 'Dollop of textured microfoam', 'Raw cane demerara syrup', 'Wild honey drip']
  },
  {
    id: 'velvet-cloud-latte',
    name: 'Velvet Cloud Latte',
    moodId: 'need-a-reset',
    moodName: 'Need a Reset',
    category: 'Refresh',
    image: '/src/assets/images/coffee_velvet_cloud_latte_1792145818686.jpg',
    shortDescription: 'Ultra-thick marshmallow-soft aerated cold foam floating atop deep iced espresso.',
    emotionalCopy: 'Drinking a cloud before the coffee arrives. Aerated cold sweet foam gently cascading down through rich iced espresso, breaking the summer heat.',
    flavourNotes: ['Cold Foam Cloud', 'Madagascar Vanilla', 'Iced Espresso'],
    price: 6.75,
    origin: 'Colombia Nariño (Washed)',
    roastLevel: 'Medium',
    temperature: 'Chilled over Rock Ice',
    sweetness: 4,
    intensity: 3,
    creaminess: 5,
    servingVessel: 'Stemless crystal tumbler on stone coaster',
    recommendedTime: 'Warm Afternoon Reboot',
    ingredients: ['Iced espresso double', 'Chilled oat milk', 'Whipped vanilla cold foam', 'Flaked white cocoa shavings']
  },
  {
    id: 'lavender-daydream',
    name: 'Lavender Daydream',
    moodId: 'slow-morning',
    moodName: 'Slow Morning',
    category: 'Comfort',
    image: '/src/assets/images/coffee_lavender_daydream_1792145820736.jpg',
    shortDescription: 'Infused culinary lavender blossom steeped in velvety oat milk with a serene floral finish.',
    emotionalCopy: 'Soft daylight filtering through sheer curtains. French Provence lavender flowers infused slowly into warm stone-ground oat milk, pairing with delicate floral coffee notes.',
    flavourNotes: ['French Lavender', 'Warm Oat Silk', 'Gentle Floral Espresso'],
    price: 6.50,
    origin: 'Ethiopia Sidama Natural',
    roastLevel: 'Light',
    temperature: 'Warm (65°C)',
    sweetness: 3,
    intensity: 2,
    creaminess: 5,
    servingVessel: 'Fluted ceramic tea mug with lavender sprig',
    recommendedTime: 'Sunday Mornings & Journaling',
    ingredients: ['Light roast espresso', 'House-steeped Provence lavender blossom', 'Organic oat milk', 'Pure raw clover nectar']
  },
  {
    id: 'midnight-mocha',
    name: 'Midnight Mocha',
    moodId: 'main-character',
    moodName: 'Main Character',
    category: 'Indulgence',
    image: '/src/assets/images/coffee_midnight_mocha_1792145820526.jpg',
    shortDescription: 'Pitch-black Dutch dark cocoa and rich espresso dusted with delicate silver mica flakes.',
    emotionalCopy: 'The allure of after dark. Deep black onyx cocoa, roasted espresso, and flaky sea salt that lingers like good conversation long past midnight.',
    flavourNotes: ['Black Cocoa', 'Smoked Sea Salt', 'Silver Glimmer'],
    price: 7.00,
    origin: 'Sumatra Mandheling & 85% Black Onyx Cocoa',
    roastLevel: 'Dark',
    temperature: 'Steamed Silk (68°C)',
    sweetness: 3,
    intensity: 5,
    creaminess: 4,
    servingVessel: 'Matte charcoal stoneware cup on black slate',
    recommendedTime: 'Dusk & Creative Night Sessions',
    ingredients: ['Double espresso', 'Black Dutch cocoa reduction', 'Whole steamed milk', 'Maldon smoked salt', 'Edible silver dust']
  },
  {
    id: 'hazelnut-hush',
    name: 'Hazelnut Hush',
    moodId: 'soft-comfort',
    moodName: 'Soft Comfort',
    category: 'Comfort',
    image: '/src/assets/images/coffee_hazelnut_hush_1792145822125.jpg',
    shortDescription: 'Earthy terracotta warmth, slow-roasted Piedmont hazelnut paste, and toasted praline crumble.',
    emotionalCopy: 'Rain tapping against café windows. Slow-roasted hazelnuts stone-ground into a silky paste and folded into golden espresso, creating an enveloping shelter of nutty warmth.',
    flavourNotes: ['Roasted Hazelnut Praline', 'Brown Butter', 'Velvety Foam'],
    price: 6.50,
    origin: 'Brazil Cerrado & Colombia Huila',
    roastLevel: 'Medium-Dark',
    temperature: 'Piping Warm (68°C)',
    sweetness: 3,
    intensity: 3,
    creaminess: 5,
    servingVessel: 'Terracotta artisan clay mug with saucer',
    recommendedTime: 'Chilly Rainy Days & Cozy Reading',
    ingredients: ['Double espresso', 'Piedmont roasted hazelnut butter', 'Steamed whole milk', 'Caramelised hazelnut praline dust']
  },
  {
    id: 'citrus-rush',
    name: 'Citrus Rush',
    moodId: 'feeling-bold',
    moodName: 'Feeling Bold',
    category: 'Refresh',
    image: '/src/assets/images/coffee_citrus_rush_1792145822963.jpg',
    shortDescription: 'Sparkling botanical tonic water crowned with a floating espresso extraction and ruby grapefruit peel.',
    emotionalCopy: 'An electric awakening. Sparkling Indian tonic infused with hand-peeled ruby grapefruit and aromatic thyme, topped with a suspended layer of bright, effervescent espresso.',
    flavourNotes: ['Ruby Grapefruit', 'Crisp Tonic Water', 'Floating Crema'],
    price: 6.75,
    origin: 'Kenya Kirinyaga (Washed)',
    roastLevel: 'Light',
    temperature: 'Effervescent Chilled on Ice',
    sweetness: 2,
    intensity: 4,
    creaminess: 1,
    servingVessel: 'Tall crystal highball with golden metal straw',
    recommendedTime: 'High Noon Energy Peak',
    ingredients: ['Single-estate Kenyan espresso float', 'Artisanal tonic water', 'Ruby grapefruit wheel', 'Fresh lemon peel twist']
  },
  {
    id: 'brown-sugar-shaken-espresso',
    name: 'Brown Sugar Shaken Espresso',
    moodId: 'deep-focus',
    moodName: 'Deep Focus',
    category: 'Focus',
    image: '/src/assets/images/coffee_brown_sugar_shaken_espresso_1792146431004.jpg',
    shortDescription: 'Shaken double espresso aerated over ice with caramelized brown sugar and chilled oat milk.',
    emotionalCopy: 'Concentrated momentum. Two ristretto shots hand-shaken vigorously over dense ice cubes with dark Muscovado sugar and a pinch of cinnamon, capped with frothy crema for sustained mental flow.',
    flavourNotes: ['Caramelised Muscovado', 'Frothy Espresso Foam', 'Chilled Oat Layer'],
    price: 6.25,
    origin: 'Guatemala Antigua & Colombia Huila',
    roastLevel: 'Medium-Dark',
    temperature: 'Shaken Chilled over Ice',
    sweetness: 3,
    intensity: 4,
    creaminess: 3,
    servingVessel: 'Ribbed glass tumbler with architectural notebook',
    recommendedTime: 'Morning Study & Deep Creative Work',
    ingredients: ['Double espresso pull', 'Dark Muscovado brown sugar syrup', 'Organic oat milk splash', 'Grated Ceylon cinnamon']
  },
  {
    id: 'coconut-coast',
    name: 'Coconut Coast',
    moodId: 'need-a-reset',
    moodName: 'Need a Reset',
    category: 'Refresh',
    image: '/src/assets/images/coffee_coconut_coast_1792145824486.jpg',
    shortDescription: 'Layered creamy toasted coconut milk beneath dark single-origin cold brew with toasted coconut ribbons.',
    emotionalCopy: 'Ocean air in a glass. Cold-pressed young coconut water and toasted coconut cream form a serene white base beneath slow-dripped cold brew, sending your senses straight to the coastline.',
    flavourNotes: ['Toasted Coconut Milk', 'Cold Extraction', 'Sea Salt Flakes'],
    price: 6.75,
    origin: 'Papua New Guinea & Brazil Natural',
    roastLevel: 'Cold Extraction',
    temperature: 'Chilled on Solid Ice Block',
    sweetness: 3,
    intensity: 3,
    creaminess: 4,
    servingVessel: 'Ribbed glass tumbler with bamboo straw',
    recommendedTime: 'Summer Midday Recharge',
    ingredients: ['24-hour slow drip cold brew', 'Toasted coconut milk', 'Pure coconut nectar', 'Golden toasted coconut shavings']
  },
  {
    id: 'pistachio-poetry',
    name: 'Pistachio Poetry',
    moodId: 'main-character',
    moodName: 'Main Character',
    category: 'Indulgence',
    image: '/src/assets/images/coffee_pistachio_poetry_1792145824664.jpg',
    shortDescription: 'Glazed moss-green ceramic rimmed with rich Sicilian pistachio cream and finely crushed nut crumb.',
    emotionalCopy: 'Pure green gold. Authentic Bronte pistachio butter emulsified into rich whole milk with a hint of cardamom, crowned with a delicate pistachio dust rim that turns each sip into poetry.',
    flavourNotes: ['Bronte Pistachio Cream', 'Cardamom Kiss', 'Whole Steamed Milk'],
    price: 7.25,
    origin: 'Costa Rica & Sicily Bronte Harvest',
    roastLevel: 'Medium',
    temperature: 'Warm (66°C)',
    sweetness: 4,
    intensity: 3,
    creaminess: 5,
    servingVessel: 'Moss-green glazed artisan cup with rim dust',
    recommendedTime: 'Artistic Afternoons & Celebrations',
    ingredients: ['Double espresso', '100% Sicilian pistachio butter paste', 'Steamed whole milk', 'Crushed pistachio rim']
  },
  {
    id: 'spiced-ember-tonic',
    name: 'Spiced Ember Tonic',
    moodId: 'feeling-bold',
    moodName: 'Feeling Bold',
    category: 'Adventure',
    image: '/src/assets/images/coffee_spiced_ember_tonic_1792145824882.jpg',
    shortDescription: 'Dramatic rocks glass with spiced ginger-clove effervescence, espresso float, and a flame-singed star anise.',
    emotionalCopy: 'A fiery dance of spice and crisp coffee. Cold-pressed ginger root, whole cloves, and botanical tonic water supporting a floating shot of rich crema espresso with charred anise aromatics.',
    flavourNotes: ['Charred Star Anise', 'Clove Ginger Tonic', 'Dark Roast Crema'],
    price: 6.75,
    origin: 'Rwanda Gitesi & Kenya AA',
    roastLevel: 'Medium-Dark',
    temperature: 'Crisp Chilled on Rocks',
    sweetness: 2,
    intensity: 5,
    creaminess: 1,
    servingVessel: 'Curved rocks glass with flame-singed star anise',
    recommendedTime: 'Twilight Aperitif & Evening Boost',
    ingredients: ['Double espresso float', 'Spiced ginger clove tonic', 'Sun-dried orange peel', 'Charred whole star anise']
  },
  {
    id: 'after-hours-affogato',
    name: 'After Hours Affogato',
    moodId: 'main-character',
    moodName: 'Main Character',
    category: 'Indulgence',
    image: '/src/assets/images/coffee_after_hours_affogato_1792145826445.jpg',
    shortDescription: 'Artisanal vanilla bean gelato in a vintage crystal coupe drowned table-side in scorching espresso.',
    emotionalCopy: 'The classic meeting of fire and ice. A dense globe of slow-churned Tahitian vanilla bean gelato drowned under a scorching ristretto pull that melts into a pool of bitter-sweet velvet.',
    flavourNotes: ['Tahitian Vanilla Gelato', 'Piping Double Ristretto', 'Molten Silk'],
    price: 7.25,
    origin: 'Guatemala Antigua washed espresso',
    roastLevel: 'Dark',
    temperature: 'Hot Ristretto over Frozen Gelato',
    sweetness: 5,
    intensity: 4,
    creaminess: 5,
    servingVessel: 'Antique crystal dessert coupe with silver spoon',
    recommendedTime: 'Post-Dinner Indulgence & Romance',
    ingredients: ['Artisanal Tahitian vanilla bean gelato scoop', 'Piping hot double ristretto pull', 'Dark chocolate cocoa nibs']
  },
  {
    id: 'maple-muse',
    name: 'Maple Muse',
    moodId: 'soft-comfort',
    moodName: 'Soft Comfort',
    category: 'Comfort',
    image: '/src/assets/images/coffee_maple_muse_v2_1792146145899.jpg',
    shortDescription: 'Dark amber maple syrup folded into warm microfoam, dusted with cinnamon bark beside a cozy knit morning.',
    emotionalCopy: 'Autumn captured in a cup. First-tap pure Vermont dark amber maple syrup blended seamlessly into rich espresso and steamed oat milk, crowned with freshly grated Ceylon cinnamon bark.',
    flavourNotes: ['Vermont Amber Maple', 'Cinnamon Bark', 'Oatmeal Earthenware'],
    price: 6.50,
    origin: 'Brazil Cerrado Natural & Colombia Organic',
    roastLevel: 'Medium',
    temperature: 'Warm (67°C)',
    sweetness: 4,
    intensity: 3,
    creaminess: 5,
    servingVessel: 'Speckled oatmeal stoneware cup with wooden coaster',
    recommendedTime: 'Crisp Morning Walk & Fireside Cozying',
    ingredients: ['Double espresso', 'Grade A Vermont dark amber maple syrup', 'Silky steamed oat milk', 'Fresh ground cinnamon bark']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: '01-morning-stillness',
    title: 'On 7 AM Stillness and the Steam Wand',
    subtitle: 'Why the first fifteen minutes of your morning deserve silence, warm ceramic, and zero push notifications.',
    readTime: '3 min read',
    author: 'Elena Vance, Head of Sensory Experience',
    date: 'October 12, 2026',
    moodTag: 'Slow Morning',
    excerpt: 'Before the day asks you for your attention, there is a small window of daylight where steam curls in the air and your coffee is just for you.',
    content: [
      'In a world that demands instant availability, the morning coffee ritual has become our last quiet borderland. When the burr grinder whirs and warm water meets freshly roasted grounds, time stretches just enough for breath.',
      'We formulated the Honey Oat Latte not as an energy fix, but as an invitation to arrive gently. The slow sweetness of raw honey does not spike your palate; it rests alongside the earthy grain of rolled oat milk, allowing your mind to wake at its natural tempo.',
      'Tomorrow morning, try setting your cup down between sips. Notice the texture of the ceramic against your palm. Notice the daylight creeping across the wall. That stillness is where the day actually begins.'
    ]
  },
  {
    id: '02-midday-threshold',
    title: 'The Midday Threshold: Resetting Over Ice',
    subtitle: 'How cold temperatures and pure vanilla redirect scattered afternoon thoughts into focused clarity.',
    readTime: '4 min read',
    author: 'Kaelen Mori, Roasting Director',
    date: 'October 08, 2026',
    moodTag: 'Need a Reset',
    excerpt: 'When your screen feels too bright and tasks overlap like open browser tabs, the sharp temperature contrast of cold brew breaks the cycle.',
    content: [
      'Neurobiology tells us that temperature shocks ground sensory perception immediately. The clink of dense ice cubes, the crisp condensation sweating on the glass, and the clean snap of cold espresso jolt us out of cognitive fatigue.',
      'Our Iced Vanilla Latte avoids heavy processed syrups in favour of Madagascar vanilla pods cold-steeped in house. It delivers brightness without a sugar slump.',
      'Take three sips without looking at a screen. Let the coolness reset your nervous system. The second half of your day does not have to resemble the first.'
    ]
  },
  {
    id: '03-emotional-palate',
    title: 'Coffee as Self-Expression: The Main Character Paradox',
    subtitle: 'Exploring why drinking something beautiful alters the way we carry ourselves through the city.',
    readTime: '5 min read',
    author: 'Sora Chen, Visual & Flavor Alchemist',
    date: 'September 29, 2026',
    moodTag: 'Main Character',
    excerpt: 'Holding a blush ceramic cup dusted with crushed rose petals changes your posture. Taste is not purely nutritional—it is theatrical.',
    content: [
      'Café culture has always been cinematic. From 1920s Montparnasse to modern Tokyo kissatens, drinking coffee in public is an act of taking your seat on the stage of everyday life.',
      'With our Rose Mocha, we wanted to create a drink that refuses to be ordinary. The bitterness of 72% Ecuadorian cocoa grounds the floral lift of wild Damascus rose petals. It is complex, decadent, and unapologetic.',
      'Next time you feel invisible or overwhelmed by routine, order something that feels like an occasion. You don’t need an excuse to treat ordinary Tuesday as poetry.'
    ]
  },
  {
    id: '04-ritual-of-depth',
    title: 'The Architecture of the Flat White: Precision as Calm',
    subtitle: 'Why the tightest extraction parameters bring the deepest mental quietude.',
    readTime: '4 min read',
    author: 'Liam Ross, Lead Barista Educator',
    date: 'September 21, 2026',
    moodTag: 'Deep Focus',
    excerpt: 'In the search for concentration, stripping away the excess is the only rule that matters. 36 grams of liquid gold.',
    content: [
      'A true flat white is an exercise in restraint. No mountain of foam, no sugary syrups. Just twenty-two grams of finely ground Guatemalan beans pulled under nine bars of pressure for twenty-seven seconds.',
      'The microfoam is steamed to exactly sixty-two degrees Celsius—hot enough to unfold milk sugars into silk, cool enough to drink immediately without scalding the palate.',
      'When your mind needs to solve a difficult problem, you do not want distractions. You want density, rich hazelnut notes, and the steady quiet confidence that comes from single-minded craft.'
    ]
  }
];

export const BREWING_STEPS = [
  {
    step: '01',
    title: 'The Awakening Grind',
    description: 'Whole beans metered to the exact gram. The burrs release volatile aromatics of stone fruit, roasted malt, and honeyed floral oils into the air.',
    sensoryCue: 'Rich acoustic crackle of whole beans breaking, releasing fresh floral fragrances.'
  },
  {
    step: '02',
    title: 'The Gentle Bloom',
    description: 'A delicate 45ml saturation at 93°C. For thirty seconds, trapped carbon dioxide expands into a domed, fragrant crema crust.',
    sensoryCue: 'Soft bubbling degassing and the deep aroma of caramelising sugars.'
  },
  {
    step: '03',
    title: 'The Concentric Pour',
    description: 'Water poured in slow, continuous spirals from center to rim. Steady turbulence draws balanced acidity and dense body into harmony.',
    sensoryCue: 'Warm steam rising with notes of dark cacao and toasted cereal.'
  },
  {
    step: '04',
    title: 'The First Sip Ritual',
    description: 'Held in hand-thrown stoneware that keeps heat gentle. First sip coats the palate; second reveals the finish. A pause entirely yours.',
    sensoryCue: 'Warmth transferring from cup to hands, grounding your breathing.'
  }
];

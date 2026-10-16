import React, { useState } from 'react';
import { MOODS, SIGNATURE_COFFEES, CoffeeItem, JournalArticle } from './data/coffeeData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiscoverMood } from './components/DiscoverMood';
import { MoodRecommendation } from './components/MoodRecommendation';
import { SignatureCollection } from './components/SignatureCollection';
import { SensoryBrewingMoment } from './components/SensoryBrewingMoment';
import { MoodStory } from './components/MoodStory';
import { MoodJournal } from './components/MoodJournal';
import { FindYourMoment } from './components/FindYourMoment';
import { Footer } from './components/Footer';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { CoffeeDetailModal } from './components/CoffeeDetailModal';
import { JournalArticleModal } from './components/JournalArticleModal';
import { MoodLetter } from './components/MoodLetter';
import { MoodQuizModal } from './components/MoodQuizModal';

export default function App() {
  const [selectedMoodId, setSelectedMoodId] = useState<string>('slow-morning');
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'default-1',
      coffee: SIGNATURE_COFFEES[0],
      quantity: 1,
      milk: 'In-House Oat Milk',
      sweetness: 'Classic Recipe',
      size: 'Regular (8 oz)'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedCoffeeForCustomization, setSelectedCoffeeForCustomization] = useState<CoffeeItem | null>(null);
  const [detailCoffee, setDetailCoffee] = useState<CoffeeItem | null>(null);
  const [activeJournalArticle, setActiveJournalArticle] = useState<JournalArticle | null>(null);

  // Handlers
  const handleSelectMood = (moodId: string) => {
    setSelectedMoodId(moodId);
    const recSection = document.getElementById('recommendation');
    if (recSection) {
      recSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMoods = () => {
    const moodsSection = document.getElementById('moods');
    if (moodsSection) {
      moodsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCollection = () => {
    const colSection = document.getElementById('collection');
    if (colSection) {
      colSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderDrink = (coffee: CoffeeItem) => {
    setSelectedCoffeeForCustomization(coffee);
    setIsCartOpen(true);
  };

  const handleAddToCartCustomized = (newItem: CartItem) => {
    setCart(prev => [...prev, newItem]);
    setSelectedCoffeeForCustomization(null);
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart(prev => prev.map(item => item.id === itemId ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5EFE6] text-[#2D201C] selection:bg-[#B97849]/20 selection:text-[#2D201C]">
      
      {/* Navigation */}
      <Navbar
        onOpenCart={() => {
          setSelectedCoffeeForCustomization(null);
          setIsCartOpen(true);
        }}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onSelectMoodSection={handleScrollToMoods}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Experience Flow: 8 Core Sections */}
      <main className="flex-1">
        
        {/* Section 01: Hero Section */}
        <Hero
          onFindMood={handleScrollToMoods}
          onExploreCollection={handleScrollToCollection}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Section 02: Discover Your Mood */}
        <DiscoverMood
          selectedMoodId={selectedMoodId}
          onSelectMood={handleSelectMood}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Section 03: Your Mood, Your Coffee */}
        <MoodRecommendation
          selectedMoodId={selectedMoodId}
          onOrderDrink={handleOrderDrink}
          onViewDetails={(coffee) => setDetailCoffee(coffee)}
          onSelectMood={handleSelectMood}
        />

        {/* Section 04: The Signature Collection */}
        <SignatureCollection
          onOrderDrink={handleOrderDrink}
          onViewDetails={(coffee) => setDetailCoffee(coffee)}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Section 05: Signature Experience · The MOOD LETTER */}
        <MoodLetter
          onOrderDrink={handleOrderDrink}
          onViewDetails={(coffee) => setDetailCoffee(coffee)}
        />

        {/* Section 06: A Little Coffee Moment (Sensory Brewing Ritual) */}
        <SensoryBrewingMoment />

        {/* Section 06: The MOODBREW Story */}
        <MoodStory />

        {/* Section 07: The Mood Journal */}
        <MoodJournal
          onReadArticle={(article) => setActiveJournalArticle(article)}
        />

        {/* Section 08: Find Your Moment (Café Visit & Table Reservation) */}
        <FindYourMoment />

      </main>

      {/* Section 09: Footer */}
      <Footer
        onSelectMoodSection={handleScrollToMoods}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Modals & Slide-over Drawers */}
      
      {/* 1. Mood Discovery Quiz Modal */}
      <MoodQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onOrderDrink={handleOrderDrink}
        onViewDetails={(coffee) => setDetailCoffee(coffee)}
        onSelectMood={handleSelectMood}
      />

      {/* 2. Order & Customization Slide-over Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => {
          setIsCartOpen(false);
          setSelectedCoffeeForCustomization(null);
        }}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        selectedCoffeeForCustomization={selectedCoffeeForCustomization}
        onAddToCartCustomized={handleAddToCartCustomized}
      />

      {/* 3. Tasting Details Modal */}
      <CoffeeDetailModal
        coffee={detailCoffee}
        onClose={() => setDetailCoffee(null)}
        onOrder={handleOrderDrink}
      />

      {/* 4. Journal Essay Reader Modal */}
      <JournalArticleModal
        article={activeJournalArticle}
        onClose={() => setActiveJournalArticle(null)}
      />

    </div>
  );
}

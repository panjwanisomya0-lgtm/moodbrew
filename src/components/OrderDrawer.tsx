import React, { useState } from 'react';
import { CoffeeItem } from '../data/coffeeData';
import { X, Trash2, Plus, Minus, CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';

export interface CartItem {
  id: string;
  coffee: CoffeeItem;
  quantity: number;
  milk: string;
  sweetness: string;
  size: string;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  selectedCoffeeForCustomization: CoffeeItem | null;
  onAddToCartCustomized: (item: CartItem) => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  selectedCoffeeForCustomization,
  onAddToCartCustomized,
}) => {
  // Customization state for current drink being added
  const [selectedMilk, setSelectedMilk] = useState('In-House Oat Milk');
  const [selectedSweetness, setSelectedSweetness] = useState('Classic Recipe');
  const [selectedSize, setSelectedSize] = useState('Regular (8 oz)');
  const [isOrdered, setIsOrdered] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [pickupTime, setPickupTime] = useState('15 mins');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => {
    const sizeMultiplier = item.size.includes('Grand') ? 1.25 : 1.0;
    return sum + (item.coffee.price * sizeMultiplier * item.quantity);
  }, 0);

  const tax = subtotal * 0.0825;
  const total = subtotal + tax;

  const handleAddCustomized = () => {
    if (!selectedCoffeeForCustomization) return;
    const newItem: CartItem = {
      id: `${selectedCoffeeForCustomization.id}-${Date.now()}`,
      coffee: selectedCoffeeForCustomization,
      quantity: 1,
      milk: selectedMilk,
      sweetness: selectedSweetness,
      size: selectedSize,
    };
    onAddToCartCustomized(newItem);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName) return;
    setIsOrdered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#2D201C]/60 backdrop-blur-xs transition-opacity" 
      />

      {/* Slide-over Drawer */}
      <div className="relative w-full max-w-lg bg-[#FAF6F0] text-[#2D201C] h-full shadow-2xl flex flex-col z-10 overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#2D201C]/10 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#B97849]" />
            <h3 className="font-editorial text-2xl font-normal text-[#2D201C]">
              Your Ritual Bag
            </h3>
            <span className="text-xs font-mono text-[#2D201C]/50">
              ({cart.reduce((c, i) => c + i.quantity, 0)} cups)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#2D201C]/70 hover:text-[#2D201C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Customizer Section (If triggered with a specific coffee to customize) */}
          {selectedCoffeeForCustomization && (
            <div className="bg-white rounded-2xl p-5 border border-[#B97849]/30 shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src={selectedCoffeeForCustomization.image}
                  alt={selectedCoffeeForCustomization.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B97849]">
                    Personalize Cup
                  </span>
                  <h4 className="font-editorial text-xl text-[#2D201C] font-normal">
                    {selectedCoffeeForCustomization.name}
                  </h4>
                  <p className="text-xs font-mono text-[#2D201C]/60">
                    ${selectedCoffeeForCustomization.price.toFixed(2)} base
                  </p>
                </div>
              </div>

              {/* Milk Option */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#2D201C]/60 block mb-1.5">
                  Milk or Alternative
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['In-House Oat Milk', 'Whole Farm Milk', 'Almond Milk', 'Black / No Milk'].map(m => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setSelectedMilk(m)}
                      className={`px-3 py-2 rounded-lg text-left transition-all border cursor-pointer ${
                        selectedMilk === m
                          ? 'border-[#2D201C] bg-[#2D201C] text-white font-medium'
                          : 'border-[#2D201C]/10 bg-[#FAF6F0] text-[#2D201C] hover:bg-white'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sweetness */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#2D201C]/60 block mb-1.5">
                  Sweetness Calibration
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Unsweetened', 'Light (50%)', 'Classic Recipe'].map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSweetness(s)}
                      className={`px-2 py-1.5 rounded-lg text-center transition-all border cursor-pointer ${
                        selectedSweetness === s
                          ? 'border-[#2D201C] bg-[#2D201C] text-white font-medium'
                          : 'border-[#2D201C]/10 bg-[#FAF6F0] text-[#2D201C] hover:bg-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#2D201C]/60 block mb-1.5">
                  Cup Size
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['Regular (8 oz)', 'Grand (12 oz +$1.25)'].map(sz => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 rounded-lg text-center transition-all border cursor-pointer ${
                        selectedSize === sz
                          ? 'border-[#2D201C] bg-[#2D201C] text-white font-medium'
                          : 'border-[#2D201C]/10 bg-[#FAF6F0] text-[#2D201C] hover:bg-white'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAddCustomized}
                className="w-full py-3 rounded-full bg-[#B97849] text-white font-medium text-xs uppercase tracking-wider hover:bg-[#A36638] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Customized Cup to Bag</span>
              </button>
            </div>
          )}

          {/* Bag Items List */}
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <ShoppingBag className="w-10 h-10 text-[#2D201C]/20 mx-auto" />
              <p className="font-editorial text-xl text-[#2D201C]">Your bag is currently peaceful.</p>
              <p className="text-xs text-[#2D201C]/60 max-w-xs mx-auto">
                Explore our six moods above and choose the cup that matches your feeling today.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono uppercase text-[#2D201C]/50">
                <span>Selected Brews</span>
                <button 
                  onClick={onClearCart} 
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  Clear Bag
                </button>
              </div>

              {cart.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl p-4 border border-[#2D201C]/8 shadow-2xs flex items-center gap-4"
                >
                  <img
                    src={item.coffee.image}
                    alt={item.coffee.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <h5 className="font-editorial text-lg text-[#2D201C] truncate">
                      {item.coffee.name}
                    </h5>
                    <p className="text-[11px] text-[#2D201C]/60 truncate">
                      {item.milk} · {item.sweetness} · {item.size}
                    </p>
                    <p className="text-xs font-mono font-semibold text-[#2D201C]">
                      ${(item.coffee.price * (item.size.includes('Grand') ? 1.25 : 1.0)).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center border border-[#2D201C]/15 rounded-lg bg-[#FAF6F0]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-black/5 text-[#2D201C] cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-mono font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-black/5 text-[#2D201C] cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-[#2D201C]/40 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Checkout State Modal / Form */}
          {cart.length > 0 && !isOrdered && (
            <div className="pt-4 border-t border-[#2D201C]/10 space-y-4">
              <div className="space-y-1.5 text-xs text-[#2D201C]/75 font-mono">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sales Tax (8.25%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-sm text-[#2D201C] pt-2 border-t border-[#2D201C]/10">
                  <span>Total Due</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={handleCheckout} className="space-y-3 pt-2">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#2D201C]/60 mb-1">
                    Pickup Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Julian Ward"
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#2D201C]/15 text-xs text-[#2D201C] focus:outline-none focus:ring-1 focus:ring-[#B97849]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#2D201C]/60 mb-1">
                    Estimated Arrival
                  </label>
                  <select
                    value={pickupTime}
                    onChange={e => setPickupTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#2D201C]/15 text-xs text-[#2D201C] focus:outline-none focus:ring-1 focus:ring-[#B97849]"
                  >
                    <option>In 10–15 minutes (Fresh Pour)</option>
                    <option>In 25 minutes</option>
                    <option>At the Flagship Counter later today</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#2D201C] text-[#FFF9F1] uppercase font-semibold text-xs tracking-wider hover:bg-[#B97849] active:scale-[0.99] transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span>Place Café Pickup Order (${total.toFixed(2)})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {/* Order Confirmed Receipt */}
          {isOrdered && (
            <div className="bg-white rounded-2xl p-6 border border-[#BFCAB8] space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#BFCAB8]/30 flex items-center justify-center mx-auto text-[#263828]">
                <CheckCircle className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-editorial text-2xl text-[#2D201C]">
                  Brewing for {customerName}
                </h4>
                <p className="text-xs text-[#2D201C]/70 mt-1">
                  Order #MB-{Math.floor(1000 + Math.random() * 9000)} is queued at Bar 01. Ready in {pickupTime}.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF6F0] text-left text-xs font-mono space-y-1">
                <div className="flex justify-between text-[#2D201C]/60">
                  <span>Cups ordered</span>
                  <span>{cart.reduce((c, i) => c + i.quantity, 0)}</span>
                </div>
                <div className="flex justify-between font-semibold text-[#2D201C]">
                  <span>Amount Paid</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClearCart();
                  setIsOrdered(false);
                  onClose();
                }}
                className="w-full py-2.5 rounded-full border border-[#2D201C]/20 text-xs font-mono uppercase tracking-wider hover:bg-[#2D201C]/5 cursor-pointer"
              >
                Close & Return to Tasting
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

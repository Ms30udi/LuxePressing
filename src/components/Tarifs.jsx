import React, { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Tag } from 'lucide-react';

// Modal Component
const TarifsModal = ({ isOpen, onClose, items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  if (!isOpen) return null;

  // Categories based on item types
  const categories = [
    'Tous',
    'Vêtements',
    'Literie',
    'Accessoires',
    'Spécial'
  ];

  // Function to categorize items
  const getCategoryForItem = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('drap') || lowerTitle.includes('couette') || 
        lowerTitle.includes('housse') || lowerTitle.includes('oreillé') || 
        lowerTitle.includes('couverture')) {
      return 'Literie';
    }
    if (lowerTitle.includes('caftan') || lowerTitle.includes('jupe') || 
        lowerTitle.includes('chemise') || lowerTitle.includes('manteau') || 
        lowerTitle.includes('blouson') || lowerTitle.includes('robe') ||
        lowerTitle.includes('pantalon') || lowerTitle.includes('polo') ||
        lowerTitle.includes('pull') || lowerTitle.includes('veste') ||
        lowerTitle.includes('t-shirt') || lowerTitle.includes('sweat')) {
      return 'Vêtements';
    }
    if (lowerTitle.includes('nappe') || lowerTitle.includes('serviette') || 
        lowerTitle.includes('taie') || lowerTitle.includes('rideau')) {
      return 'Accessoires';
    }
    return 'Spécial';
  };

  // Filter items based on search and category
  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || getCategoryForItem(item.title) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Tous Nos Tarifs</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Rechercher un article... (ex: chemise, drap, caftan)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-600 mt-3">
            {filteredItems.length} résultat{filteredItems.length !== 1 ? 's' : ''} trouvé{filteredItems.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Modal Content - Grid of filtered items */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-280px)]">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-40 bg-gray-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-teal-500 font-medium mb-3">THE QUICK LAUNDRY</p>
                    <p className="text-lg font-bold text-gray-900">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun résultat trouvé</p>
              <p className="text-gray-400 text-sm mt-2">Essayez avec d'autres mots-clés ou catégories</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Item Card Component
const ItemCard = ({ item }) => (
  <div className="group w-64 flex-shrink-0">
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative h-40 bg-gray-100">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 leading-tight">{item.title}</h3>
        <p className="mt-1 text-xs text-teal-500 font-medium">THE QUICK LAUNDRY</p>
        <div className="mt-3">
          <p className="text-lg font-bold text-gray-900">{item.price}</p>
        </div>
      </div>
    </div>
  </div>
);

// Main Tarifs Carousel Component
export default function TarifsCarousel() {
  const carouselRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // All tarifs data
  const allTarifs = [
    { id: 1, title: "Blouson", price: "40.00 DH", imageUrl: "" },
    { id: 2, title: "Bustier", price: "30.00 DH", imageUrl: "" },
    { id: 3, title: "Caftan 1 pièce", price: "50.00 DH", imageUrl: "" },
    { id: 4, title: "Caftan 2 pièces", price: "60.00 DH", imageUrl: "" },
    { id: 5, title: "Caftan spécial", price: "300.00 DH", imageUrl: "" },
    { id: 6, title: "CALEÇON / SOUS VÊTEMENT", price: "40.00 DH / kg", imageUrl: "" },
    { id: 7, title: "CHAUSSETTES", price: "40.00 DH / kg", imageUrl: "" },
    { id: 8, title: "Chemise pliée", price: "27.00 DH", imageUrl: "" },
    { id: 9, title: "Chemise sur cintre", price: "23.00 DH", imageUrl: "" },
    { id: 10, title: "Chemisier", price: "27.00 DH", imageUrl: "" },
    { id: 11, title: "Couette plume et duvet", price: "80.00 DH", imageUrl: "" },
    { id: 12, title: "Couette synthétique", price: "70.00 DH", imageUrl: "" },
    { id: 13, title: "Couverture", price: "55.00 DH", imageUrl: "" },
    { id: 14, title: "Djellaba", price: "30.00 DH", imageUrl: "" },
    { id: 15, title: "Drap de bain", price: "18.00 DH", imageUrl: "" },
    { id: 16, title: "Drap housse", price: "25.00 DH", imageUrl: "" },
    { id: 17, title: "Drap lit", price: "27.00 DH", imageUrl: "" },
    { id: 18, title: "Housse couette", price: "40.00 DH", imageUrl: "" },
    { id: 19, title: "Housse de canapé", price: "35.00 DH", imageUrl: "" },
    { id: 20, title: "Housse de matelas", price: "70.00 DH", imageUrl: "" },
    { id: 21, title: "Jupe", price: "28.00 DH", imageUrl: "" },
    { id: 22, title: "Jupe de marié", price: "50.00 DH", imageUrl: "" },
    { id: 23, title: "Jupe longue-plissée", price: "100.00 DH", imageUrl: "" },
    { id: 24, title: "Manteau", price: "40.00 DH", imageUrl: "" },
    { id: 25, title: "Manteau en laine", price: "50.00 DH", imageUrl: "" },
    { id: 26, title: "Nappage", price: "35.00 DH", imageUrl: "" },
    { id: 27, title: "Nappe", price: "40.00 DH", imageUrl: "" },
    { id: 28, title: "Nappe brodée", price: "40.00 DH", imageUrl: "" },
    { id: 29, title: "Oreillé", price: "25.00 DH", imageUrl: "" },
    { id: 30, title: "Oreillé salon marocain", price: "30.00 DH", imageUrl: "" },
  ];

  // Only show first 7 items in carousel
  const displayedItems = allTarifs.slice(0, 7);

  // Auto-scroll effect
  useEffect(() => {
    if (!isPaused && carouselRef.current) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          
          // If we reached the end, scroll back to start
          if (scrollWidth - scrollLeft - clientWidth < 10) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll by one card width
            carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' });
          }
        }
      }, 3000); // Scroll every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      const newScrollLeft =
        carouselRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const checkScrollPosition = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft < 10);
      setIsAtEnd(scrollWidth - scrollLeft - clientWidth < 10);
    }
  }, []);

  useEffect(() => {
    const currentCarousel = carouselRef.current;
    if (currentCarousel) {
      currentCarousel.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (currentCarousel) {
        currentCarousel.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, [checkScrollPosition]);

  return (
    <>
      <div
        className="w-full py-20 bg-gray-50"
        style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
        id="tarifs"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              {/* Left: Offer Section */}
              <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Tag className="h-6 w-6 text-teal-500" />
                  <p className="text-sm text-gray-600">Tarifs transparents</p>
                </div>
                <h2 className="text-3xl font-bold text-teal-500 mb-2">Nos Tarifs</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Prix compétitifs et service de qualité pour tous vos besoins de blanchisserie
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-teal-500/30"
                >
                  Voir tous les tarifs
                </button>
              </div>

              {/* Right: Carousel Section */}
              <div className="relative lg:col-span-9">
                <div 
                  ref={carouselRef} 
                  className="overflow-x-auto scrollbar-hide"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="flex gap-4 px-1 py-2">
                    {displayedItems.map((item) => (
                      <ItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                {!isAtStart && (
                  <button
                    className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-white border border-gray-300 shadow-lg z-10 hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => scroll('left')}
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                )}
                {!isAtEnd && (
                  <button
                    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-white border border-gray-300 shadow-lg z-10 hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => scroll('right')}
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <TarifsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={allTarifs}
      />
    </>
  );
}
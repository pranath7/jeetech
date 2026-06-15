const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "./images/slide1.jpg",
      alt: "JEETECH Repairs Professional Mobile Repair Service",
    },
    {
      id: 2,
      image: "./images/slide2.jpg",
      alt: "JEETECH Pink Box Displays Premium Quality",
    },
    {
      id: 3,
      image: "./images/slide3.jpg",
      alt: "Premium Quality Display Solutions Care Original",
    },
    {
      id: 4,
      image: "./images/slide4.jpg",
      alt: "Mercury Original Combo Specialist Premium Display Solutions",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Auto scroll every 5 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Variants for sliding transition
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen bg-transparent flex flex-col items-center justify-center pt-24 pb-12 px-4 md:px-8 overflow-hidden"
    >
      <h1 className="sr-only">JEE-TECH | Chennai's Premium Wholesale Mobile Screen Combos & Spares</h1>
      {/* Slider Wrapper: Centered Box with aspect ratio for banners */}
      <div className="relative w-full max-w-6xl aspect-[16/10] rounded-[2rem] overflow-hidden liquid-glass border border-slate-200/60 shadow-2xl bg-white/40 flex items-center justify-center">
        
        {/* Animated Slide */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <img 
                src={slides[currentIndex].image} 
                alt={slides[currentIndex].alt}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-white/70 hover:bg-white text-slate-800 hover:text-blue-600 border border-slate-200/50 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 group"
          title="Previous Slide"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-white/70 hover:bg-white text-slate-800 hover:text-blue-600 border border-slate-200/50 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 group"
          title="Next Slide"
        >
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 p-2 rounded-full bg-black/15 backdrop-blur-sm">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-110 shadow-sm" : "bg-white/50 hover:bg-white/80"
              }`}
              title={`Go to Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;

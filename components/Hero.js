const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

const Hero = ({ setActiveCategory }) => {
  const slides = [
    {
      id: 1,
      image: "./images/slide1.jpg",
      alt: "JEETECH Repairs Professional Mobile Repair Service",
      action: () => {
        window.open("https://wa.me/919159291522?text=Hello%20JEE-TECH%20Chennai%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20mobile%20repairs.", "_blank");
      }
    },
    {
      id: 2,
      image: "./images/slide2.jpg",
      alt: "JEETECH Pink Box Displays Premium Quality",
      action: () => {
        if (setActiveCategory) setActiveCategory("pinkbox");
        document.getElementById("model-showcase")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: 3,
      image: "./images/slide3.jpg",
      alt: "Premium Quality Display Solutions Care Original",
      action: () => {
        document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: 4,
      image: "./images/slide4.jpg",
      alt: "Mercury Original Combo Specialist Premium Display Solutions",
      action: () => {
        if (setActiveCategory) setActiveCategory("incell");
        document.getElementById("model-showcase")?.scrollIntoView({ behavior: "smooth" });
      }
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
              className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer"
              onClick={slides[currentIndex].action}
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

      {/* Quick Action CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center items-center relative z-20">
        {/* Products */}
        <button
          onClick={() => document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full py-3.5 px-7 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 hover:scale-[1.02] active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span>Explore Products</span>
        </button>

        {/* Store Locator */}
        <button
          onClick={() => document.getElementById("locator")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full sm:w-auto liquid-glass border border-slate-200/60 bg-white/70 hover:bg-white text-slate-800 hover:text-blue-600 font-semibold text-sm rounded-full py-3.5 px-7 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] active:scale-95"
        >
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Store Locator</span>
        </button>

        {/* Review Us on Google */}
        <a
          href="https://maps.app.goo.gl/cF7ei21saaFSd5Wq7"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto liquid-glass border border-slate-200/60 bg-white/70 hover:bg-white text-slate-800 hover:text-blue-600 font-semibold text-sm rounded-full py-3.5 px-7 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] active:scale-95"
        >
          {/* Yellow Star Icon */}
          <svg className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
          </svg>
          <span>Review Us on Google</span>
        </a>
      </div>
    </section>
  );
};

window.Hero = Hero;

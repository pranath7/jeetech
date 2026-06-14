const { motion } = window.Motion;

const PlayIcon = ({ className = "h-4 w-4" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <polygon points="6,4 20,12 6,20" />
  </svg>
);

const SuccessIcon = ({ className = "h-7 w-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const GlobeIcon = ({ className = "h-7 w-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Hero = () => {
  const { FadingVideo, BlurText, ArrowUpRight } = window;
  const transitionSettings = {
    duration: 0.8,
    ease: "easeOut"
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen overflow-hidden bg-transparent flex flex-col justify-between"
    >
      {/* Hero content layer, z-10 */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 px-4 md:px-8 max-w-4xl mx-auto text-center">
        {/* Badge (delay 0.4s) */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ ...transitionSettings, delay: 0.4 }}
          className="liquid-glass rounded-full inline-flex items-center gap-2 p-1 pr-3 max-w-full md:max-w-max"
        >
          <span className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap">
            New
          </span>
          <span className="text-xs md:text-sm text-slate-700 font-body font-medium truncate">
            Premium Pink Box LCD Combos Available Now
          </span>
        </motion.div>

        {/* Headline — BlurText (word-by-word staggered entry) */}
        <div className="mt-6">
          <BlurText
            text="Venture Past the Screen Into Pure Light"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-slate-900 leading-[0.8] tracking-[-4px]"
          />
        </div>

        {/* Subheading (delay 0.8s) */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ ...transitionSettings, delay: 0.8 }}
          className="mt-6 text-sm md:text-base text-slate-600 max-w-2xl font-body font-light leading-snug"
        >
          Welcome to JEE-TECH. Chennai's premier wholesale dealer in high-grade mobile combos, frames, back doors, and accessories. Experience engineered screen replacements that redefine display quality.
        </motion.p>

        {/* CTAs (delay 1.1s) */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ ...transitionSettings, delay: 1.1 }}
          className="flex items-center gap-6 mt-8"
        >
          <a
            href="#contact"
            className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-3 text-sm font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/10"
          >
            <span>Become a Partner</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
          
          <a
            href="#qc-test"
            className="flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-blue-600 active:scale-95 transition-all duration-300 group"
          >
            <span>Interactive QC Test</span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass group-hover:scale-105 transition-transform duration-300">
              <PlayIcon className="h-3.5 w-3.5 fill-current text-blue-600" />
            </span>
          </a>
        </motion.div>

        {/* Stats Row (delay 1.3s) */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ ...transitionSettings, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mt-10 w-full"
        >
          {/* Card 1 */}
          <div className="liquid-glass p-5 w-full sm:w-[220px] rounded-[1.25rem] flex flex-col justify-between items-start text-left">
            <div className="text-blue-600 mb-6">
              <SuccessIcon className="h-7 w-7 text-blue-600" />
            </div>
            <div>
              <div className="font-heading italic text-blue-600 text-4xl tracking-[-1px] leading-none">
                99.8%
              </div>
              <div className="text-xs text-slate-500 font-body font-medium mt-2">
                Tested Success Rate
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="liquid-glass p-5 w-full sm:w-[220px] rounded-[1.25rem] flex flex-col justify-between items-start text-left">
            <div className="text-blue-600 mb-6">
              <GlobeIcon className="h-7 w-7 text-blue-600" />
            </div>
            <div>
              <div className="font-heading italic text-blue-600 text-4xl tracking-[-1px] leading-none">
                Pan-India
              </div>
              <div className="text-xs text-slate-500 font-body font-medium mt-2">
                Express Spares Shipping
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partners Row (bottom of hero, delay 1.4s) */}
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ ...transitionSettings, delay: 1.4 }}
        className="relative z-10 flex flex-col items-center gap-4 pb-8 pt-10"
      >
        <div className="liquid-glass rounded-full px-3.5 py-1 text-[11px] font-semibold text-slate-600 uppercase tracking-wider font-body">
          Supplying premium replacement parts for top brands in India
        </div>
        <div className="flex flex-wrap justify-center items-center font-heading italic text-slate-700 text-2xl md:text-3xl tracking-tight gap-8 md:gap-16 px-4">
          <span>Oppo</span>
          <span>Vivo</span>
          <span>Realme</span>
          <span>OnePlus</span>
          <span>Honor</span>
        </div>
      </motion.div>
    </section>
  );
};

window.Hero = Hero;

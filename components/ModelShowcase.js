const { useState } = React;
const { motion } = window.Motion;

const ModelShowcase = ({ onSelectModel }) => {
  const [activeCategory, setActiveCategory] = useState("pinkbox");

  const categories = {
    pinkbox: {
      label: "Pink Box SVC Premium",
      title: "Pink Box SVC Series",
      desc: "Premium SVC-quality replacement screens packed in our signature Pink Box. Delivers original-grade colors and flawless touch sensitivity.",
      items: [
        {
          name: "Realme C11 / Oppo A16 Combo",
          image: "./images/pinkbox.jpg",
          specs: { technology: "Premium IPS LCD", quality: "Pink Box SVC Grade", features: "Perfect Fit Bezel" },
          parts: ["Pink Box SVC Display Combo", "Pre-tested Touch Digitizer", "High-grade Flex Ribbon"]
        },
        {
          name: "Realme C12 / C15 Combo",
          image: "./images/pinkbox.jpg",
          specs: { technology: "Premium IPS LCD", quality: "Pink Box SVC Grade", features: "Anti-Fingerprint Coating" },
          parts: ["Pink Box Premium Screen", "OCA Bonded Touch Panel", "Double-bubble Secure Wrap"]
        }
      ]
    },
    curvedog: {
      label: "100% OG Curved OLED",
      title: "100% OG Curved Series",
      desc: "Flagship 3D curved AMOLED display assemblies. 100% original IC integration, high-refresh rates, and under-display fingerprint compatibility.",
      items: [
        {
          name: "Vivo V27 Pro / V30E",
          image: "./images/curved.jpg",
          specs: { technology: "3D Curved AMOLED", quality: "100% OG Care Grade", features: "120Hz Refresh, HDR10+" },
          parts: ["OG Curved AMOLED Panel", "Pre-bonded Curved Front Glass", "Under-display Fingerprint Ring"]
        },
        {
          name: "Vivo Y200 Pro / Y300+",
          image: "./images/curved.jpg",
          specs: { technology: "Curved AMOLED", quality: "100% OG Care Grade", features: "Super Thin Edge Profile" },
          parts: ["Original Curved AMOLED Display", "OEM Grade Flex Cable", "Factory Oleophobic Seal"]
        },
        {
          name: "Vivo T2 Pro / Lava Agni 2",
          image: "./images/curved.jpg",
          specs: { technology: "Curved AMOLED", quality: "100% OG Curved Flat", features: "Peak Luminance Matched" },
          parts: ["Curved Display Combo Panel", "Chassis Mid-Frame Alignment", "Double-layer Shock Protect"]
        }
      ]
    },
    incell: {
      label: "Mercury & Davie Incell",
      title: "Happy Davie & Mercury Series",
      desc: "High-brightness Incell assemblies manufactured under Mercury and Happy Davie standards. Ideal for cost-effective, high-luminance repairs.",
      items: [
        {
          name: "Vivo V50 / V50E",
          image: "./images/incell.jpg",
          specs: { technology: "Incell Technology", quality: "Happy Davie / Mercury", features: "HD+ Resolution, 500+ Nits" },
          parts: ["Mercury Incell Screen Assembly", "Happy Davie Display Module", "Original Combo Specialist flex"]
        },
        {
          name: "iQOO Z10 / iQOO T4",
          image: "./images/incell.jpg",
          specs: { technology: "Incell Technology", quality: "Happy Davie / Mercury", features: "HD+ Resolution, 500+ Nits" },
          parts: ["Mercury Incell Combo Panel", "Tested Flex Ribbon Cable", "Happy Davie Calibration"]
        },
        {
          name: "Vivo Y300 Pro",
          image: "./images/incell.jpg",
          specs: { technology: "Incell Technology", quality: "Happy Davie Special", features: "High Contrast Backlight" },
          parts: ["Incell Screen Digitizer", "Mercury Standard Backlight", "Heavy Duty OCA Protection"]
        }
      ]
    },
    careog: {
      label: "Care OG Service Pack",
      title: "Care OG / With Battery Series",
      desc: "Original Service Pack components directly matching factory line builds. Pre-assembled chassis modules including OEM batteries and structural mesh.",
      items: [
        {
          name: "Moto Edge 60 Fusion (with Battery)",
          image: "./images/moto.jpg",
          specs: { technology: "pOLED Service Pack", quality: "WF. 100 Care OG", features: "With Original Battery Installed" },
          parts: ["Original pOLED Display Screen", "Factory Installed OEM Battery", "Pre-aligned Chassis Frame"]
        },
        {
          name: "Samsung M30 (Care OG)",
          image: "./images/samsung.jpg",
          specs: { technology: "Super AMOLED", quality: "Care OG Service Pack", features: "Original Board Integration" },
          parts: ["Super AMOLED Display Combo", "Pre-installed Ear Mesh & Sensor", "Service Pack Protective Film"]
        }
      ]
    }
  };

  const currentCategory = categories[activeCategory] || categories.pinkbox;

  return (
    <section 
      id="model-showcase" 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 px-6 md:px-16 lg:px-20 overflow-hidden border-t border-slate-200/50"
    >
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-6 uppercase"
          >
            // Catalog Sorting
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading italic text-slate-900 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px]"
          >
            Sort by product
            <br />
            categories
          </motion.h2>
        </div>

        {/* Category switcher tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-6 liquid-glass p-1.5 rounded-full"
        >
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
                activeCategory === key
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-slate-600 hover:text-blue-600"
              }`}
            >
              {categories[key].label}
            </button>
          ))}
        </motion.div>

        {/* Category Description */}
        <motion.p
          key={`desc-${activeCategory}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          className="text-sm font-body text-slate-600 max-w-2xl text-center mb-12 font-light leading-relaxed px-4"
        >
          {currentCategory.desc}
        </motion.p>

        {/* Grid display models */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch"
        >
          {currentCategory.items.map((item, index) => (
            <div
              key={index}
              className="liquid-glass rounded-[2rem] p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 text-left border border-slate-200/50 group"
            >
              <div>
                {/* Product Image Panel */}
                <div className="w-full h-52 rounded-[1.25rem] overflow-hidden bg-slate-100 border border-slate-200/50 mb-5 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                <span className="text-[9px] bg-blue-50 text-blue-600 border border-blue-100/50 px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider">
                  {currentCategory.title}
                </span>
                
                <h3 className="font-heading italic text-2xl md:text-3.5xl text-slate-900 mt-4 tracking-[-0.5px]">
                  {item.name}
                </h3>
                
                {/* Specs block */}
                <div className="mt-4 space-y-1.5 text-xs text-slate-500 font-body font-light">
                  <div><strong className="text-slate-700 font-normal">Panel Type:</strong> {item.specs.technology}</div>
                  <div><strong className="text-slate-700 font-normal">Spec Rating:</strong> {item.specs.quality}</div>
                  <div><strong className="text-slate-700 font-normal">Key Feature:</strong> {item.specs.features}</div>
                </div>

                {/* Parts list */}
                <div className="mt-6">
                  <h4 className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-body">Wholesale Pack Inclusions</h4>
                  <ul className="mt-2.5 space-y-1.5">
                    {item.parts.map((part, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 font-body font-light">
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span>{part}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Select CTA */}
              <div className="mt-8 pt-4 border-t border-slate-200/50">
                <button
                  onClick={() => onSelectModel(item.name)}
                  className="w-full bg-blue-50 text-blue-600 border border-blue-200/30 hover:bg-blue-600 hover:text-white font-semibold text-xs rounded-full py-2.5 px-4 transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <span>Request Quote</span>
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

window.ModelShowcase = ModelShowcase;

const { useState } = React;
const { motion } = window.Motion;

const Exploder = () => {
  const [hoveredLayer, setHoveredLayer] = useState(null);

  const layers = [
    {
      id: 0,
      title: "1. Premium Curved Glass",
      desc: "Top-tier shatterproof front glass with an oleophobic coating to resist fingerprints and smudges. 3D curved edges match the phone frame seamlessly.",
      color: "bg-blue-200/10 border-white/50 text-slate-800",
      offset: 120,
      badge: "Curved Glass"
    },
    {
      id: 1,
      title: "2. Pink Box Digitizer Panel",
      desc: "Ultra-sensitive capacitive touch matrix. Calibrated to ensure zero latency, 240Hz polling rate, and zero dead zones under double-touch tests.",
      color: "bg-emerald-200/10 border-emerald-500/20 text-slate-800",
      offset: 40,
      badge: "Touch Sensor"
    },
    {
      id: 2,
      title: "3. High-Luminance Display Panel",
      desc: "Original-spec display backplane delivering up to 600+ nits brightness, deep contrast ratios, and authentic color gamut accuracy.",
      color: "bg-gradient-to-tr from-blue-600/90 to-purple-600/90 border-blue-500/50 text-white",
      offset: -40,
      badge: "Active Matrix"
    },
    {
      id: 3,
      title: "4. Reinforced Bezel Frame",
      desc: "Rigid aluminum-alloy backing plate. Adds thermal dissipation and structural reinforcement to prevent flex-damage under drops.",
      color: "bg-slate-200/95 border-slate-300 text-slate-800",
      offset: -120,
      badge: "Alloy Frame"
    }
  ];

  return (
    <section 
      id="exploder" 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 px-6 md:px-16 lg:px-20 overflow-hidden border-t border-slate-200/50"
    >
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Explanatory text */}
        <div className="lg:col-span-5 text-left flex flex-col justify-center">
          <div className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-6 uppercase">
            // Anatomy of a Screen
          </div>
          
          <h2 className="font-heading italic text-slate-900 text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-3px] mb-8">
            Layered
            <br />
            excellence
          </h2>

          <p className="text-sm text-slate-600 font-body font-light leading-relaxed mb-8 max-w-md">
            Our Pink Box display combos are built with four highly-engineered layers, calibrated together to match or exceed OEM standard durability and performance. Hover over the layers to inspect.
          </p>

          {/* Interactive Layer selectors */}
          <div className="space-y-4">
            {layers.map((layer) => (
              <div
                key={layer.id}
                onMouseEnter={() => setHoveredLayer(layer.id)}
                onMouseLeave={() => setHoveredLayer(null)}
                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  hoveredLayer === layer.id 
                    ? "bg-blue-50/70 border-blue-200 shadow-sm translate-x-2" 
                    : "bg-white/40 border-slate-200/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-mono bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                    {layer.badge}
                  </span>
                  <h4 className="font-heading italic text-xl text-slate-900 leading-none">
                    {layer.title}
                  </h4>
                </div>
                <p className="mt-2 text-xs text-slate-500 font-body font-light leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive 3D Exploder */}
        <div className="lg:col-span-7 flex items-center justify-center min-h-[500px]">
          
          {/* 3D Perspective container */}
          <div 
            className="relative w-[280px] h-[480px] cursor-pointer"
            style={{
              perspective: "1200px",
            }}
          >
            {/* Inner rotated card deck */}
            <div
              className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out"
              style={{
                transform: "rotateX(52deg) rotateY(-10deg) rotateZ(-22deg)",
                transformStyle: "preserve-3d"
              }}
            >
              {layers.map((layer) => {
                // Calculate Z-axis translate with hover offset expansion
                const isHovered = hoveredLayer === layer.id;
                const isAnyHovered = hoveredLayer !== null;
                
                // Determine translation Z depth
                let translateZ = layer.offset;
                if (isAnyHovered) {
                  if (isHovered) {
                    translateZ = layer.offset * 1.75; // Push outwards further
                  } else {
                    translateZ = layer.offset * 0.45;  // Compress others slightly
                  }
                }

                return (
                  <div
                    key={layer.id}
                    className={`absolute inset-0 w-full h-full rounded-[2.25rem] border shadow-2xl transition-all duration-700 flex flex-col justify-between p-6 ${layer.color}`}
                    style={{
                      transform: `translateZ(${translateZ}px)`,
                      transformStyle: "preserve-3d",
                      boxShadow: isHovered 
                        ? "0 30px 60px rgba(0, 112, 246, 0.15)" 
                        : "0 20px 40px rgba(0,0,0,0.05)",
                      backdropFilter: layer.id < 2 ? "blur(3px)" : "none",
                      zIndex: 10 - layer.id
                    }}
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                  >
                    {/* Top Row: Info */}
                    <div className="flex justify-between items-start">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shadow-sm font-body ${
                        layer.id === 2 
                          ? "bg-white text-blue-600 border border-blue-200/50" 
                          : "bg-white/90 text-slate-800 border border-slate-200/50"
                      }`}>
                        {layer.id + 1}
                      </span>
                      <span className={`text-[9px] border px-2 py-0.5 rounded-full font-mono font-semibold uppercase tracking-wider ${
                        layer.id === 2 
                          ? "bg-blue-700/50 border-blue-400 text-white" 
                          : "bg-white/80 border-slate-200/50 text-slate-600"
                      }`}>
                        {layer.badge}
                      </span>
                    </div>

                    {/* Vector/SVG Representative Graphic */}
                    <div className="flex-1 flex items-center justify-center py-4">
                      {layer.id === 0 && (
                        <svg className="w-24 h-40 text-slate-400/40 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 100 160">
                          <rect x="5" y="5" width="90" height="150" rx="15" />
                          <path d="M40 8 h20 M45 150 a5 5 0 0 1 10 0" />
                          {/* Diagonal gloss reflection line */}
                          <line x1="20" y1="20" x2="80" y2="140" strokeDasharray="8 6" />
                        </svg>
                      )}
                      
                      {layer.id === 1 && (
                        <svg className="w-24 h-40 text-emerald-500/30 fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 100 160">
                          <rect x="5" y="5" width="90" height="150" rx="12" />
                          {/* Grid matrix overlay */}
                          <line x1="20" y1="5" x2="20" y2="155" strokeDasharray="3 3" />
                          <line x1="40" y1="5" x2="40" y2="155" strokeDasharray="3 3" />
                          <line x1="60" y1="5" x2="60" y2="155" strokeDasharray="3 3" />
                          <line x1="80" y1="5" x2="80" y2="155" strokeDasharray="3 3" />
                          <line x1="5" y1="30" x2="95" y2="30" strokeDasharray="3 3" />
                          <line x1="5" y1="60" x2="95" y2="60" strokeDasharray="3 3" />
                          <line x1="5" y1="90" x2="95" y2="90" strokeDasharray="3 3" />
                          <line x1="5" y1="120" x2="95" y2="120" strokeDasharray="3 3" />
                          {/* Golden flex tab representation */}
                          <rect x="40" y="150" width="20" height="10" fill="currentColor" opacity="0.5" />
                        </svg>
                      )}

                      {layer.id === 2 && (
                        <div className="flex flex-col items-center justify-center text-center">
                          <img 
                            src="./images/logo.png" 
                            alt="" 
                            className="w-14 h-14 object-contain animate-slow-spin opacity-95 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                          />
                          <span className="text-[10px] text-white/90 font-mono tracking-widest font-semibold uppercase mt-3">
                            Pink Box Screen
                          </span>
                        </div>
                      )}

                      {layer.id === 3 && (
                        <svg className="w-24 h-40 text-slate-500/40 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 100 160">
                          <rect x="5" y="5" width="90" height="150" rx="10" fill="currentColor" fillOpacity="0.05" />
                          {/* Board cutouts and thermal paste stickers */}
                          <rect x="25" y="20" width="50" height="40" rx="2" strokeDasharray="2 2" />
                          <circle cx="15" cy="15" r="2.5" />
                          <circle cx="85" cy="15" r="2.5" />
                          <circle cx="15" cy="145" r="2.5" />
                          <circle cx="85" cy="145" r="2.5" />
                        </svg>
                      )}
                    </div>

                    {/* Bottom Row: Text */}
                    <div className="text-left">
                      <p className={`text-[9px] uppercase tracking-wider font-semibold font-mono ${
                        layer.id === 2 ? "text-blue-200" : "text-slate-400"
                      }`}>
                        Layer Assembly
                      </p>
                      <h5 className={`font-heading italic text-lg leading-none mt-1 ${
                        layer.id === 2 ? "text-white" : "text-slate-900"
                      }`}>
                        {layer.title.split(" ").slice(1).join(" ")}
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

window.Exploder = Exploder;

const { useState, useEffect } = React;
const { motion } = window.Motion;

const DropSimulator = () => {
  const [screenType, setScreenType] = useState("incell"); // incell, pinkbox
  const [height, setHeight] = useState("3"); // 3 (Pocket), 4.5 (Shoulder), 6 (Ladder)
  const [dropState, setDropState] = useState("idle"); // idle, falling, impact, result
  const [damageReport, setDamageReport] = useState(null);
  const [cracks, setCracks] = useState([]);

  // Generate random crack branches
  const generateCracks = (severity) => {
    if (severity === 0) return [];
    
    const lines = [];
    const numPoints = severity * 6;
    const centerX = 85; // mid-width of phone
    const centerY = 300; // bottom impact point

    for (let i = 0; i < numPoints; i++) {
      const angle = Math.random() * Math.PI * 2;
      const length = 20 + Math.random() * (severity * 30);
      const targetX = centerX + Math.cos(angle) * length;
      const targetY = centerY + Math.sin(angle) * length;
      lines.push(`M ${centerX} ${centerY} Q ${centerX + (Math.random() - 0.5) * 20} ${centerY + (Math.random() - 0.5) * 20} ${targetX} ${targetY}`);
      
      // Add sub-branches
      if (Math.random() > 0.4) {
        const subAngle = angle + (Math.random() - 0.5) * 1.2;
        const subLength = length * 0.5;
        const subTargetX = targetX + Math.cos(subAngle) * subLength;
        const subTargetY = targetY + Math.sin(subAngle) * subLength;
        lines.push(`M ${targetX} ${targetY} L ${subTargetX} ${subTargetY}`);
      }
    }
    return lines;
  };

  const handleStartDrop = () => {
    setDropState("falling");
    setDamageReport(null);
    setCracks([]);

    // Step 1: Play falling animation for 1s
    setTimeout(() => {
      setDropState("impact");
      
      // Step 2: Show impact effect, evaluate damage
      let severity = 0; // 0 = none, 1 = low, 2 = medium, 3 = critical
      let reportText = "";
      let touchStatus = "100% Responsive";
      let displayStatus = "Perfect Display";
      let displayGlitch = false;
      let displayBleed = false;

      if (screenType === "incell") {
        if (height === "3") {
          severity = 1;
          reportText = "Hairline cracks formed across the center digitizer grid. Touch remains partially responsive but durability is compromised.";
          touchStatus = "80% Responsive (Ghost Touch)";
        } else if (height === "4.5") {
          severity = 2;
          reportText = "Display glass fractured extensively. Internal LCD backlight leaking, displaying vertical green lines. Glitchy response.";
          touchStatus = "40% Responsive (Glitchy)";
          displayStatus = "Green Glitch Lines";
          displayGlitch = true;
        } else {
          severity = 3;
          reportText = "Complete catastrophic failure. Screen shattered entirely. LCD glass panel broken internally resulting in black ink bleeds. Touch is completely unresponsive.";
          touchStatus = "0% Responsive (Dead)";
          displayStatus = "Black Ink Bleeds & Flickering";
          displayBleed = true;
        }
      } else {
        // Pink Box OLED
        if (height === "3") {
          severity = 0;
          reportText = "No structural damage detected. Screen protector glass and chassis frame absorbed the drop energy flawlessly. Passed!";
        } else if (height === "4.5") {
          const rand = Math.random();
          if (rand < 0.15) {
            severity = 1;
            reportText = "Minor cosmetic scratch on outer glass corner. OLED display panel and digitizer layer remain fully functional and intact.";
            touchStatus = "100% Responsive";
          } else {
            severity = 0;
            reportText = "Chassis absorbed the impact energy. Zero cracks on the display or glass layers. Survived without any scratches!";
          }
        } else {
          // 6ft Drop
          const rand = Math.random();
          if (rand < 0.25) {
            severity = 1;
            reportText = "A single hairline crack formed on outer front glass cover. Touch digitizer layer and active OLED matrix continue to operate flawlessly.";
            touchStatus = "100% Responsive";
          } else {
            severity = 0;
            reportText = "Survived a 6ft ladder drop! Heavy-duty alloy chassis and curved glass cover protected the entire assembly. Flawless survival!";
          }
        }
      }

      setCracks(generateCracks(severity));
      setDamageReport({
        severity,
        text: reportText,
        touch: touchStatus,
        display: displayStatus,
        glitch: displayGlitch,
        bleed: displayBleed
      });

      // Step 3: Finish drop transition
      setTimeout(() => {
        setDropState("result");
      }, 500);

    }, 1000);
  };

  const handleReset = () => {
    setDropState("idle");
    setCracks([]);
    setDamageReport(null);
  };

  return (
    <section 
      id="durability-simulator" 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 px-6 md:px-16 lg:px-20 overflow-hidden border-t border-slate-200/50"
    >
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Selector controls */}
        <div className="lg:col-span-5 text-left flex flex-col justify-center">
          <div className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-6 uppercase">
            // Lab Simulation
          </div>
          
          <h2 className="font-heading italic text-slate-900 text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-3px] mb-8">
            Drop durability
            <br />
            laboratory
          </h2>

          <p className="text-sm text-slate-600 font-body font-light leading-relaxed mb-8 max-w-md">
            Test the shock resistance of our premium <strong>Pink Box OLEDs</strong> compared to standard aftermarket Incell screens. Set your screen type and height, trigger the physics simulation, and inspect the real-time damage.
          </p>

          {/* Form parameters */}
          <div className="space-y-6 mb-8 max-w-sm">
            {/* parameter 1: Screen Type */}
            <div>
              <label className="text-[10px] uppercase font-mono text-slate-400 font-semibold tracking-wider block mb-2.5">
                1. Select Display Spare
              </label>
              <div className="grid grid-cols-2 gap-3 p-1 bg-slate-100 rounded-full border border-slate-200/60">
                <button
                  disabled={dropState === "falling" || dropState === "impact"}
                  onClick={() => setScreenType("incell")}
                  className={`py-2 px-4 rounded-full text-xs font-semibold uppercase tracking-wider font-body transition-all duration-300 ${
                    screenType === "incell" ? "bg-slate-800 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Standard Incell
                </button>
                <button
                  disabled={dropState === "falling" || dropState === "impact"}
                  onClick={() => setScreenType("pinkbox")}
                  className={`py-2 px-4 rounded-full text-xs font-semibold uppercase tracking-wider font-body transition-all duration-300 ${
                    screenType === "pinkbox" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Pink Box OLED
                </button>
              </div>
            </div>

            {/* parameter 2: Drop Height */}
            <div>
              <label className="text-[10px] uppercase font-mono text-slate-400 font-semibold tracking-wider block mb-2.5">
                2. Set Drop Height (Impact Velocity)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "3", label: "3 ft (Pocket)" },
                  { value: "4.5", label: "4.5 ft (Shoulder)" },
                  { value: "6", label: "6 ft (Ladder)" }
                ].map((item) => (
                  <button
                    key={item.value}
                    disabled={dropState === "falling" || dropState === "impact"}
                    onClick={() => setHeight(item.value)}
                    className={`py-2.5 px-3 border rounded-2xl text-[10px] font-semibold uppercase tracking-wider font-body transition-all duration-300 ${
                      height === item.value 
                        ? "bg-white border-blue-600 text-blue-600 shadow-sm" 
                        : "bg-white/40 border-slate-200 hover:border-slate-300 text-slate-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Simulate Action Triggers */}
          <div className="flex gap-4 items-center">
            {dropState === "idle" ? (
              <button
                onClick={handleStartDrop}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full py-4 px-8 shadow-lg shadow-blue-500/10 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                💥 Trigger Drop Test
              </button>
            ) : dropState === "result" ? (
              <button
                onClick={handleReset}
                className="bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs rounded-full py-4 px-8 shadow-lg shadow-slate-500/10 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                🔄 Reset Simulator
              </button>
            ) : (
              <div className="flex items-center gap-3 py-3 px-6 bg-slate-100 rounded-full border border-slate-200 text-slate-500 text-xs font-body font-semibold">
                <span className="w-2.5 h-2.5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span>Simulating drop physics...</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Physical Drop zone viewport */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[520px]">
          
          {/* Drop Zone Box */}
          <div className="relative w-full max-w-[340px] h-[480px] bg-slate-900/5 rounded-[2.5rem] border border-slate-200/60 shadow-inner overflow-hidden flex flex-col justify-end p-6 select-none liquid-glass">
            
            {/* Grid Floor Line */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-[linear-gradient(to_right,#e2e8f008_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f008_1px,transparent_1px)] bg-[size:10px_10px] border-t border-slate-200/10 z-10 flex items-center justify-center text-[8px] font-mono text-slate-400">
              IMPACT ZONE (FLOOR)
            </div>

            {/* Falling/Bouncing Mobile Object */}
            <div
              className={`w-[170px] h-[310px] mx-auto relative transition-all z-20 ${
                dropState === "idle"
                  ? "translate-y-[-80px] rotate-[-5deg]"
                  : dropState === "falling"
                  ? "translate-y-[120px] rotate-[180deg] scale-95 duration-1000 ease-in"
                  : dropState === "impact"
                  ? "translate-y-[135px] rotate-[175deg] scale-x-105 scale-y-95 duration-100"
                  : "translate-y-[110px] rotate-[170deg] duration-300 ease-out" // result state (bounced back slightly)
              }`}
            >
              {/* Phone Assembly Body */}
              <div className="absolute inset-0 rounded-[1.6rem] bg-slate-800 border-4 border-slate-700 shadow-2xl overflow-hidden flex flex-col justify-between p-3 select-none">
                
                {/* Active Screen Background Layer */}
                <div 
                  className={`absolute inset-0.5 rounded-[1.3rem] transition-colors duration-300 flex flex-col justify-between p-4 ${
                    dropState === "idle" || dropState === "falling"
                      ? "bg-slate-950"
                      : damageReport && damageReport.bleed
                      ? "bg-slate-950"
                      : screenType === "incell"
                      ? "bg-blue-900/40"
                      : "bg-gradient-to-tr from-blue-700/80 to-purple-800/80"
                  }`}
                >
                  {/* Top camera pill */}
                  <div className="w-12 h-2.5 bg-black rounded-full mx-auto" />

                  {/* Bleed spot rendering (Incell failed state) */}
                  {damageReport && damageReport.bleed && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-20 h-20 rounded-full bg-black/90 filter blur-md absolute top-12 left-4 scale-110" />
                      <div className="w-16 h-16 rounded-full bg-black/95 filter blur-sm absolute bottom-16 right-4" />
                      <div className="absolute inset-0 border-[2px] border-red-500/20 animate-pulse bg-red-600/5" />
                    </div>
                  )}

                  {/* Glitch lines rendering (Incell failed state) */}
                  {damageReport && damageReport.glitch && (
                    <div className="absolute inset-0 flex pointer-events-none">
                      <div className="w-1 h-full bg-green-500/90 shadow-[0_0_10px_#22c55e] absolute left-10" />
                      <div className="w-[2px] h-full bg-green-400/80 shadow-[0_0_8px_#22c55e] absolute left-14" />
                      <div className="w-1.5 h-full bg-red-500/40 absolute right-8" />
                    </div>
                  )}

                  {/* Brand Display Indicator */}
                  <div className="text-center mt-8">
                    {screenType === "pinkbox" ? (
                      <div className="opacity-80">
                        <img src="./images/logo.png" className="w-8 h-8 mx-auto opacity-80" />
                        <span className="text-[7px] text-white font-mono tracking-widest uppercase mt-1 block">Pink Box</span>
                      </div>
                    ) : (
                      <span className="text-[7px] text-slate-400 font-mono uppercase tracking-wide">Incell Aftermarket</span>
                    )}
                  </div>

                  {/* Screen OK Badge */}
                  <div className="text-center mb-6">
                    {dropState === "idle" || dropState === "falling" ? (
                      <span className="text-[8px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-mono">STANDBY</span>
                    ) : damageReport && damageReport.severity > 0 ? (
                      <span className="text-[8px] bg-red-600 px-2 py-0.5 rounded text-white font-mono font-bold animate-pulse">FAILED</span>
                    ) : (
                      <span className="text-[8px] bg-emerald-600 px-2 py-0.5 rounded text-white font-mono font-bold">PASSED</span>
                    )}
                  </div>
                </div>

                {/* SVG Glass Crack Layer Overlaid on top of phone */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-30 stroke-white/95" strokeWidth="1.2" fill="none">
                  {cracks.map((path, idx) => (
                    <path key={idx} d={path} />
                  ))}
                  {/* Glass reflective gloss lines */}
                  <line x1="20" y1="-50" x2="250" y2="180" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                </svg>
              </div>
            </div>

            {/* Impact Flash Shockwave ring */}
            {dropState === "impact" && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-28 h-28 border-4 border-red-500 rounded-full animate-ping z-0 pointer-events-none" style={{ animationDuration: "0.5s" }} />
            )}
          </div>

          {/* Results stats modal below drop-zone */}
          {dropState === "result" && damageReport && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 w-full max-w-[340px] liquid-glass border border-slate-200/80 rounded-[1.5rem] p-4 text-left shadow-lg"
            >
              <h4 className="font-heading italic text-lg text-slate-900 border-b border-slate-200/50 pb-2 mb-3">
                Laboratory Assessment
              </h4>
              <div className="space-y-2 text-xs font-body text-slate-600">
                <p>• <strong>Impact Height:</strong> {height} Feet</p>
                <p>• <strong>Touch Response:</strong> <span className={damageReport.severity > 0 ? "text-red-600 font-semibold" : "text-emerald-600 font-semibold"}>{damageReport.touch}</span></p>
                <p>• <strong>Display Status:</strong> <span className={damageReport.severity > 1 ? "text-red-600 font-semibold" : "text-emerald-600 font-semibold"}>{damageReport.display}</span></p>
                <p className="mt-3 text-slate-500 font-light italic text-[11px] leading-relaxed border-t border-slate-200/40 pt-2">
                  {damageReport.text}
                </p>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};

window.DropSimulator = DropSimulator;

const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

const DealerTools = () => {
  const [activeTab, setActiveTab] = useState("divider");
  
  // Tab 1: Divider states
  const [dividerPos, setDividerPos] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  // Tab 2: Tester states
  const [testColor, setTestColor] = useState(null); // null, "red", "green", "blue", "white", "black"
  const colorsList = ["red", "green", "blue", "white", "black"];

  // Tab 3: Estimator states
  const [pincode, setPincode] = useState("");
  const [estimateResult, setEstimateResult] = useState(null);

  // Tab 4: Verifier states
  const [serial, setSerial] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  // Divider mouse handlers for drag
  const handleMouseMove = (e) => {
    if (!isSliding) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setDividerPos(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isSliding) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setDividerPos(percentage);
  };

  // Shipping lookup logic
  const handleEstimate = (e) => {
    e.preventDefault();
    if (!pincode || pincode.length < 6) {
      setEstimateResult({ type: "error", message: "Please enter a valid 6-digit PIN code." });
      return;
    }
    const firstDigit = pincode[0];
    const firstTwo = pincode.slice(0, 3);
    
    if (firstTwo === "600") {
      setEstimateResult({
        type: "success",
        city: "Chennai (Local Hub)",
        time: "1 - 2 Hours",
        partner: "Shadowfax / Dunzo Premium",
        notes: "Same-day express dispatch within hours."
      });
    } else if (firstDigit === "5" || firstDigit === "6") {
      setEstimateResult({
        type: "success",
        city: "South India Region",
        time: "24 - 48 Hours",
        partner: "Bluedart Air / Professional",
        notes: "Next-day delivery to major cities."
      });
    } else {
      setEstimateResult({
        type: "success",
        city: "North / Domestic Region",
        time: "2 - 3 Business Days",
        partner: "Delhivery / DTDC Cargo",
        notes: "Includes double-bubble secure packaging."
      });
    }
  };

  // Serial verification logic
  const handleVerify = (e) => {
    e.preventDefault();
    if (!serial || serial.trim().length < 4) {
      setVerificationResult({ type: "error", message: "Invalid format. Code must be at least 4 characters." });
      return;
    }
    setVerificationResult({ type: "loading" });
    
    setTimeout(() => {
      // Return a simulated pass certificate based on the code
      const code = serial.trim().toUpperCase();
      const randomDate = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
      
      setVerificationResult({
        type: "verified",
        code: code,
        date: randomDate,
        grade: "Pink Box SVC Grade - A++",
        lat: "Touch Latency: 4.2ms (Passed)",
        color: "SRGB Gamut: 99.4% (Passed)"
      });
    }, 1200);
  };

  // Cycle colors during test
  const cycleColor = () => {
    if (testColor === null) return;
    const currentIndex = colorsList.indexOf(testColor);
    const nextIndex = (currentIndex + 1) % colorsList.length;
    setTestColor(colorsList[nextIndex]);
  };

  return (
    <section 
      id="dealer-tools" 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 px-6 md:px-16 lg:px-20 overflow-hidden border-t border-slate-200/50"
    >
      <AnimatePresence>
        {testColor !== null && (
          <div 
            onClick={cycleColor}
            className="fixed inset-0 z-[9999] cursor-pointer flex flex-col justify-between p-6 select-none"
            style={{
              backgroundColor: testColor === "white" ? "#ffffff" : testColor === "black" ? "#000000" : testColor
            }}
          >
            {/* Top Info Bar */}
            <div className="flex justify-between items-center bg-black/40 backdrop-blur-sm p-4 rounded-2xl text-white max-w-sm mx-auto w-full border border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider font-body">
                Testing Color: <span className="font-mono text-emerald-400 font-bold uppercase">{testColor}</span>
              </span>
              <span className="text-[10px] text-slate-300 font-body">Tap to Cycle</span>
            </div>

            {/* Bottom Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setTestColor(null);
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs rounded-full py-2.5 px-6 mx-auto shadow-lg shadow-red-500/20 transition-all duration-200 active:scale-95 border border-red-500/30"
            >
              Exit Tester
            </button>
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-6 uppercase">
            // Workbench Utilities
          </div>
          <h2 className="font-heading italic text-slate-900 text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-3px]">
            Interactive
            <br />
            technician suite
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 liquid-glass p-1.5 rounded-full border border-slate-200/50">
          <button
            onClick={() => setActiveTab("divider")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider font-body transition-all duration-300 ${
              activeTab === "divider" ? "bg-blue-600 text-white shadow-md shadow-blue-500/10" : "text-slate-600 hover:text-blue-600"
            }`}
          >
            Compare Screens
          </button>
          <button
            onClick={() => setActiveTab("tester")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider font-body transition-all duration-300 ${
              activeTab === "tester" ? "bg-blue-600 text-white shadow-md shadow-blue-500/10" : "text-slate-600 hover:text-blue-600"
            }`}
          >
            Color Tester
          </button>
          <button
            onClick={() => setActiveTab("estimator")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider font-body transition-all duration-300 ${
              activeTab === "estimator" ? "bg-blue-600 text-white shadow-md shadow-blue-500/10" : "text-slate-600 hover:text-blue-600"
            }`}
          >
            Shipping Estimator
          </button>
          <button
            onClick={() => setActiveTab("verifier")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider font-body transition-all duration-300 ${
              activeTab === "verifier" ? "bg-blue-600 text-white shadow-md shadow-blue-500/10" : "text-slate-600 hover:text-blue-600"
            }`}
          >
            Authenticate Spares
          </button>
        </div>

        {/* Tool View Area */}
        <div className="w-full max-w-4xl min-h-[460px] flex items-center justify-center">
          
          {/* Tab 1: Screen Divider (Incell vs OLED) */}
          {activeTab === "divider" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
              <div className="text-left">
                <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-100/50 px-2.5 py-1 rounded-full font-mono uppercase tracking-wider">
                  Quality Comparison
                </span>
                <h3 className="font-heading italic text-slate-900 text-4xl mt-4 leading-none">
                  Incell vs. OLED Display
                </h3>
                <p className="mt-4 text-sm text-slate-600 font-body font-light leading-relaxed">
                  Drag the center slider on the display screen mock to compare color, contrast, and backlight differences. 
                </p>
                <div className="mt-8 space-y-4 font-body text-xs">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center font-bold text-[8px]">←</span>
                    <span><strong>Left (Incell):</strong> Standard brightness, cooler backlight tones, wider screen bezels.</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[8px]">→</span>
                    <span><strong>Right (Pink Box):</strong> High-contrast OLED blacks, true color saturation, razor-thin borders.</span>
                  </div>
                </div>
              </div>

              {/* Slider Display Box */}
              <div className="flex items-center justify-center">
                <div 
                  className="relative w-[270px] h-[450px] rounded-[2.25rem] overflow-hidden border border-slate-200/80 bg-slate-900 shadow-2xl select-none"
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  onMouseDown={() => setIsSliding(true)}
                  onMouseUp={() => setIsSliding(false)}
                  onMouseLeave={() => setIsSliding(false)}
                  onTouchStart={() => setIsSliding(true)}
                  onTouchEnd={() => setIsSliding(false)}
                >
                  {/* Underlay layer: Standard Incell (Duller colors) */}
                  <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center text-center p-6 grayscale-[30%] opacity-80">
                    <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-400 mb-6">
                      ⚠️
                    </div>
                    <h4 className="text-xl font-heading text-slate-300">Standard Incell</h4>
                    <p className="text-[10px] text-slate-400 font-body mt-2">Dull contrast & thicker bezels</p>
                  </div>

                  {/* Overlay layer: Pink Box OLED (Vibrant colors) */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex flex-col items-center justify-center text-center p-6"
                    style={{
                      clipPath: `polygon(0 0, ${dividerPos}% 0, ${dividerPos}% 100%, 0 100%)`
                    }}
                  >
                    <img 
                      src="./images/logo.png" 
                      alt="" 
                      className="w-16 h-16 object-contain animate-slow-spin mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                    />
                    <h4 className="text-xl font-heading text-white italic">Pink Box OLED</h4>
                    <p className="text-[10px] text-blue-200 font-body mt-2">True blacks & ultra contrast</p>
                  </div>

                  {/* Divider Handle Bar */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white/95 z-30 cursor-ew-resize flex items-center justify-center"
                    style={{ left: `${dividerPos}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-600 border border-white/90 text-white flex items-center justify-center shadow-lg text-xs font-mono font-bold">
                      ↔
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Screen Color Tester */}
          {activeTab === "tester" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
              <div className="text-left">
                <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-100/50 px-2.5 py-1 rounded-full font-mono uppercase tracking-wider">
                  Dead Pixel Checker
                </span>
                <h3 className="font-heading italic text-slate-900 text-4xl mt-4 leading-none">
                  Workbench Color Tester
                </h3>
                <p className="mt-4 text-sm text-slate-600 font-body font-light leading-relaxed">
                  Used by workshop technicians to verify displays for screen bleeding, backlight shadows, or stuck pixels.
                </p>
                <p className="mt-2 text-xs text-slate-500 font-body font-light leading-relaxed">
                  Click below to open the tester. Once open, **tap anywhere on the screen** to cycle through solid Red, Green, Blue, White, and Black colors.
                </p>
                <button
                  onClick={() => setTestColor("red")}
                  className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full py-3.5 px-8 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:scale-[1.02] active:scale-95"
                >
                  Start Screen Test
                </button>
              </div>

              {/* Grid representation */}
              <div className="grid grid-cols-3 gap-4 p-6 liquid-glass rounded-[2rem] border border-slate-200/50 max-w-sm mx-auto w-full">
                {colorsList.map((col) => (
                  <button
                    key={col}
                    onClick={() => setTestColor(col)}
                    className="aspect-square rounded-2xl border border-slate-200/50 shadow-inner flex items-center justify-center text-[10px] font-mono uppercase font-bold text-slate-700 hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: col === "white" ? "#ffffff" : col === "black" ? "#111827" : col,
                      color: col === "black" || col === "blue" || col === "red" ? "#ffffff" : "#1f2937"
                    }}
                  >
                    {col}
                  </button>
                ))}
                <div className="aspect-square rounded-2xl border border-slate-200/30 border-dashed flex items-center justify-center text-[10px] font-mono text-slate-400">
                  Tap to check
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Shipping Estimator */}
          {activeTab === "estimator" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
              <div className="text-left">
                <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-100/50 px-2.5 py-1 rounded-full font-mono uppercase tracking-wider">
                  Logistics Calculator
                </span>
                <h3 className="font-heading italic text-slate-900 text-4xl mt-4 leading-none">
                  Delivery Time Lookup
                </h3>
                <p className="mt-4 text-sm text-slate-600 font-body font-light leading-relaxed">
                  Estimate shipping times and delivery channels for bulk combo orders from our Mount Road/Chintadripet warehouse.
                </p>

                <form onSubmit={handleEstimate} className="mt-8 flex gap-3 max-w-md">
                  <input
                    type="text"
                    maxLength="6"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                    placeholder="Enter 6-digit Pincode"
                    className="flex-1 bg-white border border-slate-300 rounded-full px-5 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 font-body"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full px-6 transition-all duration-300 hover:scale-[1.01] active:scale-95"
                  >
                    Estimate
                  </button>
                </form>
              </div>

              {/* Estimate results panel */}
              <div className="w-full max-w-sm mx-auto">
                {estimateResult ? (
                  <div className={`liquid-glass rounded-[2rem] p-6 text-left border ${
                    estimateResult.type === "error" ? "border-red-200/50 bg-red-50/20" : "border-slate-200/50"
                  }`}>
                    {estimateResult.type === "error" ? (
                      <p className="text-sm text-red-600 font-body font-medium">{estimateResult.message}</p>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-3 border-b border-slate-200/50">
                          <h4 className="font-heading italic text-xl text-slate-900">{estimateResult.city}</h4>
                          <span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-100/50 px-2 py-0.5 rounded-full font-mono uppercase">
                            Route Found
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-[9px] uppercase font-mono text-slate-400">Delivery Timeline</span>
                            <p className="text-lg font-bold text-slate-900 mt-1 font-body">{estimateResult.time}</p>
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-mono text-slate-400">Carrier Partner</span>
                            <p className="text-sm font-semibold text-slate-700 mt-1.5 font-body">{estimateResult.partner}</p>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 font-body font-light italic mt-2">
                          * {estimateResult.notes}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="liquid-glass rounded-[2rem] p-8 text-center border border-slate-200/30 border-dashed text-slate-400 font-body text-sm">
                    Enter your pin code to see available express delivery channels.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 4: Authenticate Spares */}
          {activeTab === "verifier" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
              <div className="text-left">
                <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-100/50 px-2.5 py-1 rounded-full font-mono uppercase tracking-wider">
                  Anti-Counterfeit
                </span>
                <h3 className="font-heading italic text-slate-900 text-4xl mt-4 leading-none">
                  Authenticity Verifier
                </h3>
                <p className="mt-4 text-sm text-slate-600 font-body font-light leading-relaxed">
                  Scan or enter the verification barcode serial number printed on the back of your Pink Box display folder assembly.
                </p>

                <form onSubmit={handleVerify} className="mt-8 flex gap-3 max-w-md">
                  <input
                    type="text"
                    value={serial}
                    onChange={(e) => setSerial(e.target.value)}
                    placeholder="E.g. PB-1045"
                    className="flex-1 bg-white border border-slate-300 rounded-full px-5 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 font-body uppercase"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full px-6 transition-all duration-300 hover:scale-[1.01] active:scale-95"
                  >
                    Verify Part
                  </button>
                </form>
              </div>

              {/* Verification results card */}
              <div className="w-full max-w-sm mx-auto">
                {verificationResult ? (
                  verificationResult.type === "loading" ? (
                    <div className="liquid-glass rounded-[2rem] p-8 text-center border border-slate-200/50 flex flex-col items-center justify-center min-h-[180px]">
                      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
                      <span className="text-sm text-slate-600 font-body font-medium">Validating signature...</span>
                    </div>
                  ) : verificationResult.type === "error" ? (
                    <div className="liquid-glass rounded-[2rem] p-6 text-left border border-red-200/50 bg-red-50/20">
                      <p className="text-sm text-red-600 font-body font-medium">{verificationResult.message}</p>
                    </div>
                  ) : (
                    <div className="liquid-glass rounded-[2rem] p-6 text-left border border-slate-200/50 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                      <div className="flex items-center gap-3 pb-3 border-b border-slate-200/50 mb-4">
                        <span className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 text-xs font-bold font-mono">
                          ✓
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 font-body">Genuine Spare Part</h4>
                          <span className="text-[9px] text-slate-400 font-mono">Serial: {verificationResult.code}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3 font-body text-xs text-slate-600">
                        <p>• <strong>Grade:</strong> {verificationResult.grade}</p>
                        <p>• <strong>Calibration Date:</strong> {verificationResult.date}</p>
                        <p>• <strong>Touch latency:</strong> {verificationResult.lat}</p>
                        <p>• <strong>Color Spectrum:</strong> {verificationResult.color}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/50 text-[10px] text-emerald-600 font-semibold font-body uppercase tracking-wider text-center">
                        Verified Pink Box Original
                      </div>
                    </div>
                  )
                ) : (
                  <div className="liquid-glass rounded-[2rem] p-8 text-center border border-slate-200/30 border-dashed text-slate-400 font-body text-sm">
                    Enter serial code to check catalog authentication.
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

window.DealerTools = DealerTools;

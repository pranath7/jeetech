const { useState, useEffect, useRef } = React;
const { motion } = window.Motion;

const Product3DViewer = () => {
  const [activeProduct, setActiveProduct] = useState("screen"); // screen, chassis, backdoor
  const [rotation, setRotation] = useState({ x: 15, y: -30 });
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const dragStart = useRef({ x: 0, y: 0 });
  const rotationStart = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || isDragging) {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      return;
    }

    const animate = () => {
      setRotation((prev) => ({
        x: prev.x,
        y: (prev.y + 0.4) % 360
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [autoRotate, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    dragStart.current = { x: e.clientX, y: e.clientY };
    rotationStart.current = { ...rotation };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    
    // Map dx to Y-rotation, dy to X-rotation
    setRotation({
      x: Math.max(-80, Math.min(80, rotationStart.current.x - dy * 0.5)),
      y: rotationStart.current.y + dx * 0.5
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto-rotation after 3 seconds of inactivity
    setTimeout(() => {
      setAutoRotate(true);
    }, 3000);
  };

  // Touch handlers for mobile support
  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    setIsDragging(true);
    setAutoRotate(false);
    dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    rotationStart.current = { ...rotation };
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStart.current.x;
    const dy = e.touches[0].clientY - dragStart.current.y;
    
    setRotation({
      x: Math.max(-80, Math.min(80, rotationStart.current.x - dy * 0.5)),
      y: rotationStart.current.y + dx * 0.5
    });
  };

  return (
    <section 
      id="product-3d-viewer" 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 px-6 md:px-16 lg:px-20 overflow-hidden border-t border-slate-200/50"
    >
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Product Details & Controls */}
        <div className="lg:col-span-5 text-left flex flex-col justify-center">
          <div className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-6 uppercase">
            // Interactive 3D Showcase
          </div>
          
          <h2 className="font-heading italic text-slate-900 text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-3px] mb-8">
            360° product
            <br />
            inspector
          </h2>

          <p className="text-sm text-slate-600 font-body font-light leading-relaxed mb-8 max-w-md">
            Interact with our high-end smartphone replacements in full 3D. Click and drag (or swipe on mobile) directly on the product to rotate it 360 degrees and inspect the structural assembly, glass curvature, and connector flex cables.
          </p>

          {/* Product selector buttons */}
          <div className="flex flex-col gap-3 mb-8">
            <button
              onClick={() => setActiveProduct("screen")}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                activeProduct === "screen" 
                  ? "bg-blue-50/70 border-blue-200 shadow-sm translate-x-2" 
                  : "bg-white/40 border-slate-200/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">📱</span>
                <h4 className="font-heading italic text-xl text-slate-900 leading-none">Pink Box Curved Display</h4>
              </div>
              <p className="mt-2 text-xs text-slate-500 font-body font-light leading-normal">
                Features curved front glass, AMOLED layers, metal backplate, and gold-plated motherboard flex tab.
              </p>
            </button>

            <button
              onClick={() => setActiveProduct("chassis")}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                activeProduct === "chassis" 
                  ? "bg-blue-50/70 border-blue-200 shadow-sm translate-x-2" 
                  : "bg-white/40 border-slate-200/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">⚙️</span>
                <h4 className="font-heading italic text-xl text-slate-900 leading-none">Middle Frame Chassis</h4>
              </div>
              <p className="mt-2 text-xs text-slate-500 font-body font-light leading-normal">
                Constructed with aluminum alloy backing, thermal distribution pads, motherboard screw holes, and camera slots.
              </p>
            </button>

            <button
              onClick={() => setActiveProduct("backdoor")}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                activeProduct === "backdoor" 
                  ? "bg-blue-50/70 border-blue-200 shadow-sm translate-x-2" 
                  : "bg-white/40 border-slate-200/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">💎</span>
                <h4 className="font-heading italic text-xl text-slate-900 leading-none">Glass Back Panel</h4>
              </div>
              <p className="mt-2 text-xs text-slate-500 font-body font-light leading-normal">
                Includes premium colored tempered glass, raised camera bezel rings, and adhesive gasket seals.
              </p>
            </button>
          </div>

          {/* Quick instructions */}
          <div className="flex items-center gap-3 text-xs text-slate-400 font-body font-light italic">
            <span>👋 Drag to rotate manually</span>
            <span>•</span>
            <button 
              onClick={() => setAutoRotate(!autoRotate)}
              className="text-blue-600 font-semibold underline hover:text-blue-700"
            >
              {autoRotate ? "Pause Auto-Rotation" : "Resume Auto-Rotation"}
            </button>
          </div>
        </div>

        {/* Right Side: Interactive 3D Canvas Viewport */}
        <div className="lg:col-span-7 flex items-center justify-center min-h-[500px] relative select-none">
          
          {/* Interactive viewport card */}
          <div 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] border border-slate-200/60 bg-white/40 shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden liquid-glass"
            style={{
              perspective: "1000px"
            }}
          >
            {/* Ambient Background Glow matching selected product */}
            <div className={`absolute w-72 h-72 rounded-full blur-[80px] opacity-[0.15] transition-all duration-700 pointer-events-none ${
              activeProduct === "screen" ? "bg-blue-600" : activeProduct === "chassis" ? "bg-emerald-500" : "bg-purple-600"
            }`} />

            {/* 3D Model Outer Rotator */}
            <div
              className="w-[200px] h-[360px] relative transition-transform duration-75 ease-out"
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Product 1: Smartphone Screen Assembly */}
              {activeProduct === "screen" && (
                <div className="absolute inset-0 w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                  {/* Layer 1: Front glass (Semi-transparent with reflection) */}
                  <div 
                    className="absolute inset-0 rounded-[1.8rem] border border-white/50 bg-blue-300/10 backdrop-blur-[2px] shadow-2xl"
                    style={{ 
                      transform: "translateZ(12px)", 
                      boxShadow: "inset 0 0 15px rgba(255,255,255,0.4)" 
                    }}
                  >
                    {/* Bezel details */}
                    <div className="absolute inset-1.5 border border-black/80 rounded-[1.5rem] flex flex-col justify-between p-4 bg-slate-900/15">
                      <div className="w-16 h-3 bg-black rounded-full mx-auto" />
                      <div className="w-8 h-8 rounded-full border border-white/20 mx-auto opacity-40 bg-white/10" />
                    </div>
                  </div>

                  {/* Layer 2: AMOLED Display Matrix */}
                  <div 
                    className="absolute inset-1.5 rounded-[1.5rem] bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 border border-blue-500/30 flex flex-col items-center justify-center p-6 text-center text-white"
                    style={{ transform: "translateZ(6px)" }}
                  >
                    <img 
                      src="./images/logo.png" 
                      alt="" 
                      className="w-12 h-12 object-contain animate-slow-spin mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    />
                    <h5 className="font-heading italic text-lg leading-none">Pink Box OLED</h5>
                    <p className="text-[8px] text-blue-200 font-mono tracking-widest uppercase mt-2">Active Matrix</p>
                  </div>

                  {/* Layer 3: Silver Alloy Backplate */}
                  <div 
                    className="absolute inset-1.5 rounded-[1.5rem] bg-slate-200 border-2 border-slate-300 flex items-center justify-center"
                    style={{ transform: "translateZ(0px)" }}
                  >
                    {/* Metallic grain lines */}
                    <div className="w-full h-full opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%),linear-gradient(-45deg,#000_25%,transparent_25%)] bg-[size:4px_4px]" />
                  </div>

                  {/* Layer 4: Golden Motherboard Flex Cable */}
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 bottom-[-15px] w-12 h-16 bg-amber-500/80 border border-amber-600 rounded-b-lg flex flex-col justify-end p-1.5"
                    style={{ 
                      transform: "translateZ(-4px) rotateX(10deg)",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
                    }}
                  >
                    {/* Flex connections */}
                    <div className="flex gap-0.5 justify-between">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-3 bg-yellow-300 rounded-t-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Product 2: Middle Frame Chassis */}
              {activeProduct === "chassis" && (
                <div className="absolute inset-0 w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                  {/* Outer Frame Wall (adds depth/extrusion) */}
                  <div 
                    className="absolute inset-0 rounded-[1.8rem] border-[3px] border-slate-400 bg-slate-300 shadow-2xl"
                    style={{ transform: "translateZ(4px)" }}
                  />

                  {/* Inner compartment partitions (depth layer 1) */}
                  <div 
                    className="absolute inset-2 rounded-[1.5rem] bg-slate-100 border border-slate-300 p-4 flex flex-col justify-between"
                    style={{ transform: "translateZ(2px)" }}
                  >
                    {/* Battery bay cutout */}
                    <div className="w-full h-40 border border-dashed border-slate-400 rounded-lg flex items-center justify-center text-[10px] font-mono text-slate-400 bg-slate-200/50">
                      BATTERY COMPARTMENT
                    </div>
                    {/* Motherboard slot */}
                    <div className="flex gap-2 h-16 mt-2">
                      <div className="flex-1 border border-dashed border-slate-400 rounded-md bg-slate-200/50" />
                      <div className="w-12 border border-dashed border-slate-400 rounded-md bg-slate-200/50" />
                    </div>
                  </div>

                  {/* Chassis backplate (extrusion layer 2) */}
                  <div 
                    className="absolute inset-0 rounded-[1.8rem] bg-slate-400/90 border border-slate-500"
                    style={{ transform: "translateZ(-4px)" }}
                  >
                    {/* Thermal heat shield representation */}
                    <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 bg-slate-600 rounded-xl opacity-80 flex items-center justify-center">
                      <div className="w-2/3 h-1/2 border border-dashed border-slate-400 rounded opacity-50" />
                    </div>
                  </div>
                </div>
              )}

              {/* Product 3: Glass Back Panel */}
              {activeProduct === "backdoor" && (
                <div className="absolute inset-0 w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                  {/* Layer 1: Colored Curved Tempered Glass */}
                  <div 
                    className="absolute inset-0 rounded-[1.8rem] border border-white/40 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 flex flex-col items-center justify-between p-8"
                    style={{ 
                      transform: "translateZ(4px)",
                      boxShadow: "inset 0 0 25px rgba(255,255,255,0.15), 0 20px 40px rgba(0,0,0,0.4)" 
                    }}
                  >
                    {/* Branded Logo details */}
                    <div className="flex-1 flex items-center justify-center">
                      <img 
                        src="./images/logo.png" 
                        alt="" 
                        className="w-14 h-14 object-contain opacity-40 grayscale"
                      />
                    </div>
                  </div>

                  {/* Layer 2: Raised Camera Bezels (3D Extrusion) */}
                  <div 
                    className="absolute top-6 left-6 w-16 h-28 rounded-2xl bg-black border border-white/20 shadow-lg flex flex-col items-center justify-around py-3"
                    style={{ 
                      transform: "translateZ(8px)",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
                    }}
                  >
                    {/* Lens 1 */}
                    <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center relative">
                      <div className="w-5 h-5 rounded-full bg-black border border-blue-500/40 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600/60" />
                      </div>
                    </div>
                    {/* Lens 2 */}
                    <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-black border border-blue-500/40 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600/60" />
                      </div>
                    </div>
                  </div>

                  {/* Layer 3: Foam Adhesive Gasket Seal (Underlay) */}
                  <div 
                    className="absolute inset-1 rounded-[1.7rem] bg-black border-2 border-slate-900"
                    style={{ transform: "translateZ(-2px)" }}
                  >
                    {/* Adhesive strips around edge */}
                    <div className="absolute inset-1.5 border border-dashed border-red-500/50 rounded-[1.5rem] opacity-70" />
                  </div>
                </div>
              )}
            </div>

            {/* Instruction tooltip overlay */}
            <div className="absolute bottom-6 inset-x-0 text-center pointer-events-none">
              <span className="bg-black/60 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[10px] uppercase font-mono tracking-wider font-semibold">
                {isDragging ? "Rotating..." : "↔ Drag to inspect 3D Model"}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

window.Product3DViewer = Product3DViewer;

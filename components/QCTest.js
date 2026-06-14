const { useState } = React;
const { motion } = window.Motion;

// Interactive QC Touch/Color/Chassis Simulator Panel
const TouchTester = () => {
  const [testMode, setTestMode] = useState("touch"); // touch, color, chassis
  const [grid, setGrid] = useState(Array(60).fill(false));

  const resetTouch = () => setGrid(Array(60).fill(false));

  const handleTouchGrid = (index) => {
    const newGrid = [...grid];
    newGrid[index] = true;
    setGrid(newGrid);
  };

  return (
    <div className="flex flex-col h-full liquid-glass-strong p-6 md:p-8 rounded-[2rem] text-left justify-between select-none border border-slate-200/50 shadow-lg relative overflow-hidden">
      {/* Top control bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200/60 pb-4 mb-4 gap-4 relative z-10">
        <div>
          <h4 className="font-heading italic text-2xl text-slate-900">Pink Box QC Calibration</h4>
          <p className="text-xs text-slate-500 font-body">Interactive quality control dashboard</p>
        </div>
        <div className="flex gap-2">
          {["touch", "color", "chassis"].map((mode) => (
            <button
              key={mode}
              onClick={() => setTestMode(mode)}
              className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all ${
                testMode === mode
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-transparent text-slate-600 border-slate-200 hover:border-blue-600"
              }`}
            >
              {mode.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive viewport */}
      <div className="flex-1 flex items-center justify-center bg-slate-50/50 rounded-2xl border border-slate-200/60 relative overflow-hidden min-h-[340px] z-10">
        {testMode === "touch" && (
          <div className="w-full max-w-[240px] aspect-[9/18] border border-slate-200 rounded-[2rem] p-3 flex flex-col justify-between bg-white shadow-lg">
            <div className="w-16 h-3 bg-slate-800 mx-auto rounded-full mb-2 shrink-0" />
            <div className="flex-1 grid grid-cols-6 grid-rows-10 gap-1">
              {Array.from({ length: 60 }).map((_, idx) => {
                const isTouched = grid[idx];
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => handleTouchGrid(idx)}
                    onTouchStart={() => handleTouchGrid(idx)}
                    className={`rounded transition-colors duration-100 cursor-crosshair ${
                      isTouched 
                        ? "bg-blue-500/80 shadow-lg shadow-blue-500/20" 
                        : "bg-slate-100 hover:bg-slate-200 border border-slate-200/40"
                    }`}
                  />
                );
              })}
            </div>
            <button 
              onClick={resetTouch}
              className="mt-2 text-[10px] text-center text-slate-400 hover:text-slate-600 transition-colors uppercase font-mono tracking-wider font-semibold"
            >
              Reset Touch Grid
            </button>
          </div>
        )}

        {testMode === "color" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-full max-w-[240px] aspect-[9/18] border border-slate-200 rounded-[2rem] overflow-hidden bg-black flex flex-col relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600 via-green-600 to-blue-600 animate-pulse opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-amber-500 opacity-60 mix-blend-color-dodge animate-bounce" style={{ animationDuration: '6s' }} />
              
              <div className="absolute inset-x-0 bottom-4 text-center z-10">
                <span className="text-[10px] bg-slate-900/80 px-2 py-1 rounded-full font-mono text-white">
                  DCI-P3 Color Space: 100%
                </span>
              </div>
            </div>
          </div>
        )}

        {testMode === "chassis" && (
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 relative">
            <div className="w-32 h-32 border border-dashed border-slate-300 rounded-full animate-spin flex items-center justify-center" style={{ animationDuration: '20s' }}>
              <div className="w-24 h-24 border border-dashed border-slate-400 rounded-full animate-spin flex items-center justify-center" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
                <div className="w-12 h-12 border border-slate-500 rounded-full animate-ping" />
              </div>
            </div>
            <div className="absolute bottom-6 font-mono text-[10px] text-slate-600 tracking-wider">
              Alignment Tolerance: ±0.01mm | SECURE
            </div>
          </div>
        )}
      </div>

      {/* Info status bar */}
      <div className="text-[11px] font-mono text-slate-400 text-center mt-4 border-t border-slate-200/60 pt-3 flex justify-between items-center relative z-10">
        <span>MODEL: JEE-TECH-PBX-2026</span>
        <span>QC-CALIBRATION: PASS</span>
      </div>
    </div>
  );
};

const QCTest = () => {
  return (
    <section 
      id="qc-test" 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 px-6 md:px-16 lg:px-20 overflow-hidden border-t border-slate-200/50"
    >
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Description Column */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-6 uppercase"
          >
            // QC Testing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading italic text-slate-900 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px]"
          >
            Double-tested
            <br />
            reliability
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-base text-slate-700 font-body font-light leading-relaxed max-w-xl"
          >
            We take quality seriously. Every single LCD panel and frame supplied by JEE-TECH is double-tested by our engineering team to meet strict quality thresholds.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-sm text-slate-600 font-body font-light leading-relaxed max-w-xl"
          >
            Use the interactive diagnostic panel on the right to simulate our testing process:
          </motion.p>
          
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 space-y-2 text-sm text-slate-600 font-body font-light pl-5 list-disc"
          >
            <li><strong>TOUCH mode:</strong> Hover/drag across the screen to test response.</li>
            <li><strong>COLOR mode:</strong> Sweep gradient color gamuts checking for DCI-P3 coverage.</li>
            <li><strong>CHASSIS mode:</strong> Check structural alignment tolerances (down to ±0.01mm).</li>
          </motion.ul>
        </div>

        {/* Right Widget Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-lg mx-auto"
        >
          <TouchTester />
        </motion.div>
      </div>
    </section>
  );
};

window.QCTest = QCTest;

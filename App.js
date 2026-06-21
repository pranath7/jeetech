const { useState } = React;
const { motion, AnimatePresence } = window.Motion;

const App = () => {
  const Navbar = window.Navbar;
  const Hero = window.Hero;
  const About = window.About;
  const Capabilities = window.Capabilities;
  const RepairsService = window.RepairsService;
  const DealerTools = window.DealerTools;
  const Product3DViewer = window.Product3DViewer;
  const DropSimulator = window.DropSimulator;
  const ModelShowcase = window.ModelShowcase;
  const QCTest = window.QCTest;
  const MapLocator = window.MapLocator;
  const Contact = window.Contact;
  const ComboSupport = window.ComboSupport;

  const [selectedModel, setSelectedModel] = useState("");
  const [activeCategory, setActiveCategory] = useState("pinkbox");
  const [chatOpen, setChatOpen] = useState(false);

  const handleSelectModel = (model) => {
    setSelectedModel(model);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-slate-50 w-full min-h-screen font-body text-slate-900 selection:bg-blue-500 selection:text-white pb-20 sm:pb-0">
      {/* Global Background Logo-Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-slate-50 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0070f305_1px,transparent_1px),linear-gradient(to_bottom,#0070f305_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Ambient Glow: Large, highly blurred, slow rotation */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] rounded-full mix-blend-multiply opacity-[0.22] filter blur-[150px] animate-slow-spin"
          style={{
            backgroundImage: "url('./images/logo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        {/* Floating Blurred Logo: Medium, moderately blurred */}
        <div 
          className="absolute left-[15%] top-[25%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] opacity-[0.12] filter blur-[15px] animate-float-drift"
        >
          <img 
            src="./images/logo.png" 
            alt="" 
            className="w-full h-full object-contain animate-spin-reverse"
          />
        </div>

        {/* Secondary Floating Logo: Smaller, more blurred */}
        <div 
          className="absolute right-[20%] bottom-[20%] w-[180px] h-[180px] md:w-[320px] md:h-[320px] opacity-[0.1] filter blur-[25px] animate-float-drift"
          style={{ animationDelay: "-8s", animationDuration: "28s" }}
        >
          <img 
            src="./images/logo.png" 
            alt="" 
            className="w-full h-full object-contain animate-slow-spin"
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main sections */}
      <main className="relative z-10">
        <Hero setActiveCategory={setActiveCategory} />
        <ComboSupport onSelectModel={handleSelectModel} />
        <About />
        <Capabilities />
        <RepairsService />
        <DealerTools />
        <Product3DViewer />
        <ModelShowcase 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
          onSelectModel={handleSelectModel} 
        />
        <QCTest />
        <DropSimulator />
        <MapLocator />
        <Contact selectedModel={selectedModel} />
      </main>

      {/* Floating WhatsApp Chat HUD with Department Selector */}
      <div className="fixed bottom-20 sm:bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
        {/* Animated Department Dropdown */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="w-72 border border-slate-200/80 rounded-[1.5rem] p-4 shadow-2xl flex flex-col gap-3 text-left mb-2 bg-white/95 backdrop-blur-sm"
              style={{
                boxShadow: "0 20px 50px rgba(0, 112, 246, 0.12)",
                zIndex: 9999
              }}
            >
              <div className="border-b border-slate-200/60 pb-2.5">
                <h4 className="font-heading italic text-lg text-slate-900 leading-none">JEE-TECH Support</h4>
                <p className="text-[10px] text-slate-500 font-body mt-1">Select a department to chat on WhatsApp</p>
              </div>

              <div className="flex flex-col gap-2 font-body text-xs">
                {/* Option 1: Wholesale Orders */}
                <a
                  href="https://wa.me/919159291522?text=Hello%20JEE-TECH%20Chennai%2C%20I%20am%20interested%20in%20placing%20a%20wholesale%20bulk%20order%20for%20spares."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/50 hover:text-blue-600 transition-colors border border-transparent hover:border-blue-100/30 text-slate-700"
                  onClick={() => setChatOpen(false)}
                >
                  <span className="text-base">📦</span>
                  <div>
                    <h5 className="font-semibold">Wholesale & Spares Orders</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5 font-light">Bulk display folder purchasing</p>
                  </div>
                </a>

                {/* Option 2: Repair booking */}
                <a
                  href="https://wa.me/919159291522?text=Hello%20JEE-TECH%20Chennai%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20mobile%20repairs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/50 hover:text-blue-600 transition-colors border border-transparent hover:border-blue-100/30 text-slate-700"
                  onClick={() => setChatOpen(false)}
                >
                  <span className="text-base">🔧</span>
                  <div>
                    <h5 className="font-semibold">Mobile Repair Bookings</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5 font-light">Workbench service appointments</p>
                  </div>
                </a>

                {/* Option 3: Track Shipping */}
                <a
                  href="https://wa.me/919159291522?text=Hello%20JEE-TECH%20Chennai%2C%20I%20am%20inquiring%20about%20the%20delivery%20status%20of%2520my%20recent%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/50 hover:text-blue-600 transition-colors border border-transparent hover:border-blue-100/30 text-slate-700"
                  onClick={() => setChatOpen(false)}
                >
                  <span className="text-base">🚚</span>
                  <div>
                    <h5 className="font-semibold">Shipment & Logistics</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5 font-light">Track courier dispatch status</p>
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Toggle Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="flex items-center gap-3 group focus:outline-none"
          title="WhatsApp Support Channels"
        >
          {/* Tooltip Label */}
          {!chatOpen && (
            <span className="hidden sm:inline-block px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-body bg-black/90 text-emerald-400 border border-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none backdrop-blur-sm shadow-lg">
              Support Channels
            </span>
          )}
          
          {/* Circular Button */}
          <div className="relative w-14 h-14 rounded-full flex items-center justify-center liquid-glass border border-emerald-500/30 text-emerald-400 bg-emerald-950/20 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] group-hover:scale-105 active:scale-95">
            <span className="absolute inset-0 rounded-full border border-emerald-500/40 animate-ping opacity-75 pointer-events-none" style={{ animationDuration: "3s" }} />
            {chatOpen ? (
              // Close Icon
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // WhatsApp Icon
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.993-1.879-1.879-4.361-2.91-6.993-2.91-5.434 0-9.858 4.417-9.862 9.861-.001 1.77.463 3.5 1.34 5.022l-.99 3.616 3.724-.977zm11.366-6.83c-.095-.157-.348-.252-.729-.443-.38-.19-2.256-1.114-2.604-1.24-.348-.127-.601-.19-.855.19-.253.38-.981 1.24-1.202 1.494-.222.253-.443.285-.824.095-.38-.19-1.602-.59-3.05-1.882-1.127-1.006-1.888-2.25-2.11-2.63-.222-.38-.024-.586.167-.776.171-.172.38-.443.57-.666.19-.222.253-.38.38-.633.127-.253.064-.475-.032-.666-.095-.19-.855-2.06-1.171-2.822-.308-.74-.622-.64-.855-.652-.222-.012-.475-.015-.729-.015-.253 0-.665.095-.981.443-.317.348-1.202 1.173-1.202 2.859 0 1.685 1.23 3.32 1.4 3.542.17.223 2.42 3.7 5.863 5.187.82.353 1.46.564 1.958.723.824.262 1.576.225 2.169.137.662-.098 2.256-.922 2.572-1.815.317-.892.317-1.657.222-1.816z" />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Sticky Bottom Bar for Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-3 shadow-[0_-8px_30px_rgba(0,112,246,0.06)] flex items-center justify-between gap-3">
        {/* Call Now */}
        <a 
          href="tel:+919159291522"
          className="w-11 h-11 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-700 hover:text-blue-600 transition-colors shrink-0"
          title="Call Us Now"
        >
          <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.145-.44.02-.927.396-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </a>

        {/* Book Repair */}
        <a 
          href="https://wa.me/919159291522?text=Hello%20JEE-TECH%20Chennai%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20mobile%20repairs."
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass border border-slate-200/80 text-slate-800 hover:text-blue-600 px-4 py-3 rounded-full text-xs font-semibold uppercase tracking-wider font-body flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all duration-300"
        >
          🔧 <span className="whitespace-nowrap">Repairs</span>
        </a>

        {/* Wholesale Order */}
        <a 
          href="https://wa.me/919159291522?text=Hello%20JEE-TECH%20Chennai%2C%20I%20am%20interested%20in%20placing%20a%20wholesale%20bulk%20order%20for%20spares."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full py-3 text-center tracking-wider uppercase font-body flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/10 active:scale-95 transition-all duration-300"
        >
          📦 <span className="whitespace-nowrap">Order Spares</span>
        </a>
      </div>
    </div>
  );
};

window.App = App;

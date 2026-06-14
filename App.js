const { useState } = React;

const App = () => {
  const Navbar = window.Navbar;
  const Hero = window.Hero;
  const About = window.About;
  const Capabilities = window.Capabilities;
  const ModelShowcase = window.ModelShowcase;
  const QCTest = window.QCTest;
  const MapLocator = window.MapLocator;
  const Contact = window.Contact;
  const ComboSupport = window.ComboSupport;

  const [selectedModel, setSelectedModel] = useState("");

  const handleSelectModel = (model) => {
    setSelectedModel(model);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-slate-50 w-full min-h-screen font-body text-slate-900 selection:bg-blue-500 selection:text-white">
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
        <Hero />
        <About />
        <Capabilities />
        <ModelShowcase onSelectModel={handleSelectModel} />
        <ComboSupport onSelectModel={handleSelectModel} />
        <QCTest />
        <MapLocator />
        <Contact selectedModel={selectedModel} />
      </main>

      {/* Floating WhatsApp Chat HUD */}
      <a
        href="https://wa.me/919159291522?text=Hello%20JEE-TECH%20Chennai%2C%20I%20am%20interested%20in%20mobile%20combos%20and%20accessories."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
        title="WhatsApp Chat"
      >
        {/* Tooltip label that slides out on hover */}
        <span className="hidden sm:inline-block px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-body bg-black/90 text-emerald-400 border border-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none backdrop-blur-sm shadow-lg">
          Order on WhatsApp
        </span>
        
        {/* Glowing Pulse Ring */}
        <div className="relative w-14 h-14 rounded-full flex items-center justify-center liquid-glass border border-emerald-500/30 text-emerald-400 bg-emerald-950/20 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] group-hover:scale-105 active:scale-95">
          <span className="absolute inset-0 rounded-full border border-emerald-500/40 animate-ping opacity-75 pointer-events-none" style={{ animationDuration: "3s" }} />
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.993-1.879-1.879-4.361-2.91-6.993-2.91-5.434 0-9.858 4.417-9.862 9.861-.001 1.77.463 3.5 1.34 5.022l-.99 3.616 3.724-.977zm11.366-6.83c-.095-.157-.348-.252-.729-.443-.38-.19-2.256-1.114-2.604-1.24-.348-.127-.601-.19-.855.19-.253.38-.981 1.24-1.202 1.494-.222.253-.443.285-.824.095-.38-.19-1.602-.59-3.05-1.882-1.127-1.006-1.888-2.25-2.11-2.63-.222-.38-.024-.586.167-.776.171-.172.38-.443.57-.666.19-.222.253-.38.38-.633.127-.253.064-.475-.032-.666-.095-.19-.855-2.06-1.171-2.822-.308-.74-.622-.64-.855-.652-.222-.012-.475-.015-.729-.015-.253 0-.665.095-.981.443-.317.348-1.202 1.173-1.202 2.859 0 1.685 1.23 3.32 1.4 3.542.17.223 2.42 3.7 5.863 5.187.82.353 1.46.564 1.958.723.824.262 1.576.225 2.169.137.662-.098 2.256-.922 2.572-1.815.317-.892.317-1.657.222-1.816z" />
          </svg>
        </div>
      </a>
    </div>
  );
};

window.App = App;

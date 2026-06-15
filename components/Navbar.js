const { motion } = window.Motion;

const ArrowUpRight = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Combo Match", href: "#compatibility-finder" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#capabilities" },
    { label: "Repairs", href: "#repairs-service" },
    { label: "3D Inspect", href: "#product-3d-viewer" },
    { label: "Series", href: "#model-showcase" },
    { label: "QC Test", href: "#qc-test" },
    { label: "Locate Us", href: "#locator" },
    { label: "Wholesale", href: "#contact" }
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 px-4 md:px-8 lg:px-16 z-50 flex items-center justify-between w-full">
      {/* Left Logo: Image badge scaled to center the blue shield */}
      <a 
        href="#hero"
        className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center liquid-glass hover:scale-105 transition-all duration-300 border border-white/5 shadow-[0_0_15px_rgba(0,112,246,0.15)] hover:shadow-[0_0_25px_rgba(0,112,246,0.35)]"
        title="JEE-TECH Logo"
      >
        <img 
          src="./images/logo.png" 
          alt="JEE-TECH Logo" 
          className="w-full h-full object-contain" 
        />
      </a>

      {/* Center (Desktop only): liquid-glass pill */}
      <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-1.5 py-1.5">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 font-body transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
        {/* Claim Spot / Get Quote CTA */}
        <a
          href="#contact"
          className="ml-2 bg-blue-600 text-white hover:bg-blue-700 text-sm font-semibold rounded-full px-4 py-2 flex items-center gap-1.5 whitespace-nowrap transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/15"
        >
          <span>Get Quote</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Mobile-only WhatsApp shortcut */}
      <a 
        href="https://wa.me/919159291522?text=Hello%20JEE-TECH%20Chennai%2C%20I%20am%20interested%20in%20mobile%20combos%20and%20accessories."
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden w-12 h-12 rounded-full flex items-center justify-center liquid-glass text-emerald-400 hover:scale-105 transition-all duration-300 border border-white/5 shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        title="WhatsApp Chat"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.993-1.879-1.879-4.361-2.91-6.993-2.91-5.434 0-9.858 4.417-9.862 9.861-.001 1.77.463 3.5 1.34 5.022l-.99 3.616 3.724-.977zm11.366-6.83c-.095-.157-.348-.252-.729-.443-.38-.19-2.256-1.114-2.604-1.24-.348-.127-.601-.19-.855.19-.253.38-.981 1.24-1.202 1.494-.222.253-.443.285-.824.095-.38-.19-1.602-.59-3.05-1.882-1.127-1.006-1.888-2.25-2.11-2.63-.222-.38-.024-.586.167-.776.171-.172.38-.443.57-.666.19-.222.253-.38.38-.633.127-.253.064-.475-.032-.666-.095-.19-.855-2.06-1.171-2.822-.308-.74-.622-.64-.855-.652-.222-.012-.475-.015-.729-.015-.253 0-.665.095-.981.443-.317.348-1.202 1.173-1.202 2.859 0 1.685 1.23 3.32 1.4 3.542.17.223 2.42 3.7 5.863 5.187.82.353 1.46.564 1.958.723.824.262 1.576.225 2.169.137.662-.098 2.256-.922 2.572-1.815.317-.892.317-1.657.222-1.816z"/>
        </svg>
      </a>

      {/* Right spacer */}
      <div className="hidden md:block w-12 h-12" aria-hidden="true" />
    </nav>
  );
};

window.Navbar = Navbar;
window.ArrowUpRight = ArrowUpRight;

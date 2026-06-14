const { useState, useRef, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

const SearchIcon = () => (
  <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const InfoIcon = () => (
  <svg className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ComboSupport = ({ onSelectModel }) => {
  const [compatibilityDatabase, setCompatibilityDatabase] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const dropdownRef = useRef(null);

  // Load database dynamically
  useEffect(() => {
    fetch('./compatibility_db.json')
      .then(res => res.json())
      .then(data => {
        setCompatibilityDatabase(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load compatibility database", err);
        setIsLoading(false);
      });
  }, []);

  // Close suggestion dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim().length > 0) {
      const cleanVal = value.toLowerCase().replace(/\s+/g, "");
      const matchedModels = [];
      
      compatibilityDatabase.forEach((group) => {
        group.models.forEach((model) => {
          const cleanModel = model.toLowerCase().replace(/\s+/g, "");
          if (cleanModel.includes(cleanVal)) {
            matchedModels.push({ model, group });
          }
        });
      });
      
      // Limit suggestions
      setSuggestions(matchedModels.slice(0, 8));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectModelMatch = (model, group) => {
    setQuery(model);
    setSelectedGroup(group);
    setShowSuggestions(false);
  };

  const handleInquire = () => {
    if (selectedGroup && onSelectModel) {
      onSelectModel(`${selectedGroup.brand} ${selectedGroup.displayGroup}`);
    }
  };

  return (
    <section 
      id="compatibility-finder" 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 px-6 md:px-16 lg:px-20 overflow-hidden border-t border-slate-200/50"
    >
      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-4 uppercase"
        >
          // Combo Support Database
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading italic text-slate-900 text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] mb-6"
        >
          Display Matcher
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base text-slate-600 max-w-xl mx-auto font-body font-light mb-12"
        >
          Search your phone model below to discover all other models sharing the exact same display combo assembly. Our index is connected to the official Combo Support database of 1,300+ models.
        </motion.p>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10 gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin" />
            <span className="text-xs text-slate-500 font-body uppercase tracking-wider font-semibold animate-pulse">Syncing Database...</span>
          </div>
        ) : (
          <>
            {/* Search HUD Module */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative max-w-xl mx-auto mb-10"
              ref={dropdownRef}
            >
              <div className="relative flex items-center w-full bg-white/80 border border-slate-200 rounded-full px-6 py-4 focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,112,246,0.03)]">
                <SearchIcon />
                <input
                  type="text"
                  value={query}
                  onChange={handleSearchChange}
                  onFocus={() => query.trim().length > 0 && setShowSuggestions(true)}
                  placeholder="Enter model (e.g. Y11, 10 Pro, 12C, A3s)..."
                  className="w-full bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400 pl-4 text-base font-body focus:ring-0"
                />
                {query && (
                  <button 
                    onClick={() => { setQuery(""); setSelectedGroup(null); }} 
                    className="text-slate-400 hover:text-slate-600 text-sm px-2 transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Suggestions Dropdown */}
              <AnimatePresence>
                {showSuggestions && suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 z-30 liquid-glass-strong rounded-[1.5rem] border border-slate-200 overflow-y-auto max-h-[300px] text-left"
                  >
                    {suggestions.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => selectModelMatch(item.model, item.group)}
                        className="w-full px-6 py-3.5 text-sm font-medium font-body text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 border-b border-slate-100 last:border-0 transition-colors text-left flex justify-between items-center"
                      >
                        <div className="flex flex-col">
                          <span>{item.model}</span>
                          <span className="text-[10px] text-slate-400 font-light mt-0.5">{item.group.brand}</span>
                        </div>
                        <span className="text-[9px] uppercase tracking-wider text-blue-600 font-semibold bg-blue-50 border border-blue-100/50 px-2.5 py-0.5 rounded-full">
                          Match Found
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Results Showcase Card */}
            <AnimatePresence mode="wait">
              {selectedGroup ? (
                <motion.div
                  key={selectedGroup.displayGroup}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-2xl mx-auto liquid-glass rounded-[2rem] p-6 md:p-8 border border-blue-200/50 shadow-sm text-left relative"
                >
                  <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-body border border-blue-100/30">
                    {selectedGroup.brand}
                  </div>

                  <h3 className="font-heading italic text-3xl md:text-4xl text-slate-900 mb-2 leading-none pr-20">
                    {selectedGroup.displayGroup}
                  </h3>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 my-4 border-y border-slate-200/50 text-xs">
                    <div>
                      <span className="text-slate-400 uppercase font-semibold block mb-1">Panel Type</span>
                      <span className="text-slate-700 font-medium text-sm">{selectedGroup.specs.type}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 uppercase font-semibold block mb-1">Screen Size</span>
                      <span className="text-slate-700 font-medium text-sm">{selectedGroup.specs.size}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 uppercase font-semibold block mb-1">Refresh Rate</span>
                      <span className="text-blue-600 font-medium text-sm">{selectedGroup.specs.hz}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 uppercase font-semibold block mb-1">Resolution</span>
                      <span className="text-slate-700 font-medium text-sm">{selectedGroup.specs.resolution}</span>
                    </div>
                  </div>

                  {/* Compatible list */}
                  <div className="mb-6">
                    <span className="text-xs text-slate-400 uppercase font-semibold block mb-3">Compatible Mobile Models</span>
                    <div className="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto pr-2">
                      {selectedGroup.models.map((model, idx) => {
                        const isQueried = query && model.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""));
                        return (
                          <span 
                            key={idx}
                            className={`text-xs px-3.5 py-1.5 rounded-full font-body font-medium transition-all duration-300 ${
                              isQueried 
                                ? "bg-blue-600 text-white border border-blue-500 shadow-[0_0_12px_rgba(0,112,243,0.2)] scale-105" 
                                : "bg-slate-100 text-slate-700 border border-slate-200/60 hover:bg-white"
                            }`}
                          >
                            {model}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pro Notes */}
                  <div className="flex gap-2.5 p-4 rounded-xl bg-blue-50/50 border border-blue-100/50 text-xs text-slate-600 leading-relaxed font-body mb-6">
                    <InfoIcon />
                    <div>
                      <strong className="text-slate-800 block mb-0.5">Workshop Alignment Note:</strong>
                      {selectedGroup.notes}
                    </div>
                  </div>

                  {/* Inquire CTA */}
                  <button
                    onClick={handleInquire}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full py-3 px-6 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-500/10"
                  >
                    <span>Request Price for this Display Group</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </motion.div>
              ) : query.trim().length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  className="text-sm font-body text-slate-500 py-10"
                >
                  No matching model found in our current catalog database. Please type another brand/model.
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  className="text-xs font-body text-slate-500 py-10 tracking-wider uppercase"
                >
                  💡 Try typing "Y11", "Redmi Note 10", "Realme 6", "Samsung A30" or "Moto G22" to see details.
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
};

window.ComboSupport = ComboSupport;

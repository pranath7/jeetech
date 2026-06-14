const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

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

const Contact = ({ selectedModel }) => {
  const [formState, setFormState] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    email: "",
    category: "Combos",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedModel) {
      setFormState((prev) => ({
        ...prev,
        message: `I am looking for a wholesale quote on replacement parts for: ${selectedModel}`
      }));
    }
  }, [selectedModel]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        businessName: "",
        contactName: "",
        phone: "",
        email: "",
        category: "Combos",
        message: ""
      });
    }, 4000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 px-6 md:px-16 lg:px-20 overflow-hidden border-t border-slate-200/50"
    >
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Form */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-6 uppercase"
          >
            // Become a Partner
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading italic text-slate-900 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px]"
          >
            Wholesale
            <br />
            portal
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 liquid-glass p-8 rounded-[2rem] border border-slate-200/50 relative shadow-sm"
          >
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-white/95 rounded-[2rem] z-20 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    ✓
                  </div>
                  <h4 className="font-heading italic text-3xl text-slate-900">Inquiry Sent</h4>
                  <p className="text-xs text-slate-600 font-body mt-2 max-w-[28ch]">
                    Thank you! Our wholesale representative will call you back shortly.
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* Official blended Brand Stamp Header */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200/60">
              <div className="w-12 h-12 rounded-full overflow-hidden liquid-glass flex items-center justify-center shrink-0 border border-slate-200/50 shadow-[0_0_15px_rgba(0,112,246,0.08)] hover:shadow-[0_0_25px_rgba(0,112,246,0.2)] hover:scale-105 transition-all duration-300">
                <img 
                  src="./images/logo.png" 
                  alt="JEE-TECH Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <h4 className="font-heading italic text-xl text-slate-900">JEE-TECH Bulk Spares Request</h4>
                <p className="text-[10px] text-slate-500 font-body uppercase tracking-wider font-semibold">Chennai Wholesale Division</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-500 mb-1 font-body font-semibold">Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formState.businessName}
                    onChange={handleInputChange}
                    required
                    placeholder="E.g. Mobile Tech Chennai"
                    className="w-full bg-white border border-slate-300 rounded-full px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 font-body"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-500 mb-1 font-body font-semibold">Contact Person</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formState.contactName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-white border border-slate-300 rounded-full px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 font-body"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-500 mb-1 font-body font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="10-digit number"
                    className="w-full bg-white border border-slate-300 rounded-full px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 font-body"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-500 mb-1 font-body font-semibold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    placeholder="name@business.com"
                    className="w-full bg-white border border-slate-300 rounded-full px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 font-body"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-500 mb-1 font-body font-semibold">Product Interest</label>
                <select
                  name="category"
                  value={formState.category}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-300 rounded-full px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors font-body"
                >
                  <option value="Combos">Pink Box Display Combos / LCDs</option>
                  <option value="Frames">Chassis Mid-Frames & Rear Glass</option>
                  <option value="Tempers">Tempered Protectors & Tooling</option>
                  <option value="BulkAll">All Mobile Spares & Accessories</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-500 mb-1 font-body font-semibold">Quantity / Inquiry Note</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows="3"
                  required
                  placeholder="Tell us about your weekly spares requirements..."
                  className="w-full bg-white border border-slate-300 rounded-[1.25rem] px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 font-body resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full py-3 px-6 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-500/10"
              >
                <span>Submit Query</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Right Column: Contact Details */}
        <div className="space-y-8 text-left lg:pl-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Phone numbers card */}
            <div className="liquid-glass rounded-[2rem] p-6 flex items-start gap-4 border border-slate-200/50">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50/50 border border-blue-100/30 shrink-0 text-blue-600 shadow-inner">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs text-slate-500 uppercase font-body font-semibold tracking-wider">Phone Contacts</h4>
                <a href="tel:+919159291522" className="block text-lg font-medium text-slate-900 hover:text-blue-600 hover:underline mt-1 font-body transition-colors">
                  +91 91592 91522
                </a>
                <a href="tel:+914447708560" className="block text-lg font-medium text-slate-900 hover:text-blue-600 hover:underline font-body transition-colors">
                  044 47708560
                </a>
                <span className="text-xs text-slate-400 block mt-1 font-mono">
                  Intercom: 8560
                </span>
              </div>
            </div>

            {/* WhatsApp Contact card */}
            <div className="liquid-glass rounded-[2rem] p-6 flex items-start gap-4 border border-slate-200/50 shadow-sm transition-all duration-300 hover:scale-[1.01]">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50/50 border border-blue-100/30 shrink-0 text-emerald-500 shadow-inner">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.993-1.879-1.879-4.361-2.91-6.993-2.91-5.434 0-9.858 4.417-9.862 9.861-.001 1.77.463 3.5 1.34 5.022l-.99 3.616 3.724-.977zm11.366-6.83c-.095-.157-.348-.252-.729-.443-.38-.19-2.256-1.114-2.604-1.24-.348-.127-.601-.19-.855.19-.253.38-.981 1.24-1.202 1.494-.222.253-.443.285-.824.095-.38-.19-1.602-.59-3.05-1.882-1.127-1.006-1.888-2.25-2.11-2.63-.222-.38-.024-.586.167-.776.171-.172.38-.443.57-.666.19-.222.253-.38.38-.633.127-.253.064-.475-.032-.666-.095-.19-.855-2.06-1.171-2.822-.308-.74-.622-.64-.855-.652-.222-.012-.475-.015-.729-.015-.253 0-.665.095-.981.443-.317.348-1.202 1.173-1.202 2.859 0 1.685 1.23 3.32 1.4 3.542.17.223 2.42 3.7 5.863 5.187.82.353 1.46.564 1.958.723.824.262 1.576.225 2.169.137.662-.098 2.256-.922 2.572-1.815.317-.892.317-1.657.222-1.816z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xs text-slate-500 uppercase font-body font-semibold tracking-wider">WhatsApp Orders</h4>
                <a 
                  href="https://wa.me/919159291522?text=Hello%20JEE-TECH%20Chennai%2C%20I%20am%20interested%20in%20mobile%20combos%20and%20accessories." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-lg font-medium text-slate-900 hover:text-emerald-600 mt-1 font-body transition-colors duration-200"
                >
                  +91 91592 91522
                </a>
                <span className="text-[11px] text-slate-400 block mt-1 font-body font-light">
                  Instant Support & Live Ordering
                </span>
              </div>
            </div>

            {/* Address 1 card */}
            <div className="liquid-glass rounded-[2rem] p-6 flex items-start gap-4 border border-slate-200/50">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50/50 border border-blue-100/30 shrink-0 text-blue-600 shadow-inner">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs text-slate-500 uppercase font-body font-semibold tracking-wider">Main Branch Address</h4>
                <p className="text-sm text-slate-600 mt-2 font-body font-light leading-relaxed">
                  Door No.3, Athipattan Street,<br />
                  Gurudev Complex, Shop No.3,<br />
                  Near Metro Parking, Chintadripet,<br />
                  Mount Road, Chennai 600 002.
                </p>
              </div>
            </div>

            {/* Instagram Link Card */}
            <div className="liquid-glass rounded-[2rem] p-6 flex items-start gap-4 border border-slate-200/50">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50/50 border border-blue-100/30 shrink-0 text-blue-600 shadow-inner">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs text-slate-500 uppercase font-body font-semibold tracking-wider">Social Portfolio</h4>
                <a 
                  href="https://instagram.com/jeetech11" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-medium text-slate-900 hover:text-blue-600 hover:underline flex items-center gap-1.5 mt-1 font-body transition-colors"
                >
                  <span>@jeetech11</span>
                  <ArrowUpRight className="h-4 w-4 text-blue-600" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

window.Contact = Contact;

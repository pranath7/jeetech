const { motion } = window.Motion;

const RepairsService = () => {
  const services = [
    {
      emoji: "📱",
      title: "OLED & LCD Screen Replacement",
      desc: "Get your cracked phone screen replaced with premium Pink Box assemblies. We specialize in curved displays, high-refresh-rate OLED panels, and original-spec LCD combos with zero touch latency.",
      keywords: "best screen replacement Chennai, phone folder repair Chintadripet"
    },
    {
      emoji: "🔍",
      title: "Glass & OCA Touch Restoration",
      desc: "If only your front screen glass is cracked but the display works, we perform advanced OCA laminating and touch sensor repairs. This restores the glass while saving your original display panel.",
      keywords: "phone glass replacement Mount Road, OCA screen laminating Chennai"
    },
    {
      emoji: "⚙️",
      title: "Chassis & Frame Realignment",
      desc: "We fix bent mid-frames, cracked rear glass panels, and loose side bezels. Restoring your phone's structural alignment prevents future pressure cracks on the new display.",
      keywords: "mobile frame repair, phone back panel replacement Ritchie Street"
    },
    {
      emoji: "⚡",
      title: "IC & Motherboard Diagnostics",
      desc: "Professional micro-soldering services for charging IC issues, display backlighting failure, water damage recovery, network IC faults, and battery health servicing.",
      keywords: "mobile motherboard repair Chennai, phone IC service shop"
    }
  ];

  return (
    <section 
      id="repairs-service" 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 px-6 md:px-16 lg:px-20 overflow-hidden border-t border-slate-200/50"
    >
      {/* Background ambient lights */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-6 uppercase"
          >
            // Professional Repairs
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading italic text-slate-900 text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-3px]"
          >
            Premium phone
            <br />
            repair shop in Chennai
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm text-slate-600 font-body font-light leading-relaxed"
          >
            JEE-TECH is your top-rated mobile phone repair shop in Chennai, located in the heart of Chintadripet (near Mount Road and Ritchie Street). 
            Our expert technicians use advanced alignment laminators and original Pink Box spares to provide factory-standard screen repairs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
          {services.map((svc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="liquid-glass rounded-[2rem] p-8 text-left flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300 group"
            >
              <div>
                <div className="text-4xl mb-6">{svc.emoji}</div>
                <h3 className="font-heading italic text-3xl text-slate-900 tracking-wide mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-600 font-body font-light leading-relaxed">
                  {svc.desc}
                </p>
              </div>
              
              {/* Hidden SEO Keywords helper to reinforce semantic indexing */}
              <div className="mt-6 pt-4 border-t border-slate-200/40 text-[10px] text-slate-400 font-mono italic">
                Tags: {svc.keywords}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA booking section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass-strong rounded-[2rem] p-8 w-full max-w-4xl text-center border border-blue-100/50 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h4 className="font-heading italic text-2xl text-slate-900 leading-none">Need an Instant Repair Quote?</h4>
            <p className="text-xs text-slate-500 font-body mt-2">Chat with our Mount Road workshop technicians directly on WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/919159291522?text=Hello%20JEE-TECH%20Chennai%2C%20I%20am%20inquiring%20about%20mobile%20repair%20services%20for%20my%20phone."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider font-body py-4 px-8 rounded-full shadow-lg shadow-blue-500/15 hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
          >
            💬 Book Repair Appointment
          </a>
        </motion.div>

      </div>
    </section>
  );
};

window.RepairsService = RepairsService;

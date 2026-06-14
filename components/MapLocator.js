const { useState } = React;
const { motion } = window.Motion;

const MapLocator = () => {
  const branch = {
    title: "Chintadripet Main Office",
    address: "Door No.3, Athipattan Street, Gurudev Complex, Shop No.3, Near Metro Parking, Chintadripet, Mount Road, Chennai 600 002.",
    landmark: "Near Chintadripet Metro Parking",
    phone: "+91 91592 91522 / 044 47708560",
    hours: "11:00 AM - 8:30 PM (Sunday Closed)",
    mapUrl: "https://maps.google.com/maps?q=Gurudev%20Complex,%20Chintadripet,%20Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <section 
      id="locator" 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 px-6 md:px-16 lg:px-20 overflow-hidden border-t border-slate-200/50"
    >
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-6 uppercase"
          >
            // Locate Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading italic text-slate-900 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px]"
          >
            Locate us
            <br />
            here
          </motion.h2>
        </div>

        {/* Grid Layout display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch">
          {/* Details Card */}
          <div className="lg:col-span-5 liquid-glass rounded-[2rem] p-8 md:p-10 flex flex-col justify-between text-left border border-slate-200/50">
            <div>
              <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-100/50 px-2.5 py-1 rounded-full font-mono uppercase tracking-wider">
                Main Branch
              </span>
              <h3 className="font-heading italic text-slate-900 mt-4 tracking-[-0.5px]">
                {branch.title}
              </h3>
              
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-body">Address</h4>
                  <p className="mt-2 text-sm text-slate-600 font-body font-light leading-relaxed">
                    {branch.address}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-body">Landmark</h4>
                  <p className="mt-1 text-sm text-slate-800 font-body font-normal">
                    {branch.landmark}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-body">Store Timing</h4>
                  <p className="mt-1 text-sm text-slate-600 font-body font-light">
                    {branch.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200/50 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 w-full flex flex-col gap-4">
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-body">Phone Helpline</h4>
                  <a href={`tel:${branch.phone.split('/')[0].trim()}`} className="text-lg font-medium text-slate-900 hover:text-blue-600 hover:underline mt-1 block font-body">
                    {branch.phone}
                  </a>
                </div>
                <a 
                  href="https://maps.app.goo.gl/cF7ei21saaFSd5Wq7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full py-3 px-6 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/10 hover:scale-[1.01]"
                >
                  <span>Navigate on Google Maps</span>
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>

              {/* QR Code Display for Desktop Scanning */}
              <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white border border-slate-200/60 shadow-sm shrink-0">
                <img 
                  src="./images/qr-code.jpg" 
                  alt="Scan to Locate Us" 
                  className="w-20 h-20 object-contain rounded-lg"
                />
                <span className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase font-body">
                  Scan to Navigate
                </span>
              </div>
            </div>
          </div>

          {/* Map display */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px] rounded-[2rem] overflow-hidden liquid-glass border border-slate-200/50 relative">
            <iframe
              src={branch.mapUrl}
              className="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity duration-300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${branch.title} Google Map`}
            />
            <div className="absolute inset-0 pointer-events-none border border-slate-200/50 rounded-[2rem] shadow-inner" />
          </div>
        </div>
      </div>
    </section>
  );
};

window.MapLocator = MapLocator;

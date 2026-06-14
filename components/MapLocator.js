const { useState } = React;
const { motion } = window.Motion;

const MapLocator = () => {
  const [activeBranch, setActiveBranch] = useState("chintadripet");

  const branches = {
    chintadripet: {
      title: "Chintadripet Main Office",
      address: "Door No.3, Athipattan Street, Gurudev Complex, Shop No.3, Near Metro Parking, Chintadripet, Mount Road, Chennai 600 002.",
      landmark: "Near Chintadripet Metro Parking",
      phone: "+91 91592 91522 / 044 47708560",
      hours: "10:00 AM - 8:30 PM (Sunday Closed)",
      mapUrl: "https://maps.google.com/maps?q=Gurudev%20Complex,%20Chintadripet,%20Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    narasingapuram: {
      title: "Narasingapuram spares Branch",
      address: "No.2/1, First Floor, Narasingapuram Street, Mount Road, Chennai 600 002.",
      landmark: "Narasingapuram Spares Market, Mount Road",
      phone: "+91 91592 91522",
      hours: "10:00 AM - 8:30 PM (Sunday Closed)",
      mapUrl: "https://maps.google.com/maps?q=Narasingapuram%20Street,%20Mount%20Road,%20Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed"
    }
  };

  const branch = branches[activeBranch];

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
            // Store Finder
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading italic text-slate-900 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px]"
          >
            Locate our
            <br />
            branches
          </motion.h2>
        </div>

        {/* Tab Switch Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-4 mb-10 liquid-glass p-1.5 rounded-full"
        >
          {Object.keys(branches).map((key) => (
            <button
              key={key}
              onClick={() => setActiveBranch(key)}
              className={`px-6 py-2.5 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 ${
                activeBranch === key
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-slate-600 hover:text-blue-600"
              }`}
            >
              {branches[key].title}
            </button>
          ))}
        </motion.div>

        {/* Grid Layout display */}
        <motion.div
          key={activeBranch}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch"
        >
          {/* Details Card */}
          <div className="lg:col-span-5 liquid-glass rounded-[2rem] p-8 md:p-10 flex flex-col justify-between text-left border border-slate-200/50">
            <div>
              <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-100/50 px-2.5 py-1 rounded-full font-mono uppercase tracking-wider">
                Active Branch
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

            <div className="mt-10 pt-6 border-t border-slate-200/50 flex flex-col gap-4">
              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-body">Phone Helpline</h4>
                <a href={`tel:${branch.phone.split('/')[0].trim()}`} className="text-lg font-medium text-slate-900 hover:text-blue-600 hover:underline mt-1 block font-body">
                  {branch.phone}
                </a>
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
        </motion.div>
      </div>
    </section>
  );
};

window.MapLocator = MapLocator;

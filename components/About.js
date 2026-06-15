const { motion } = window.Motion;

const SparklesIcon = () => (
  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V15a1 1 0 01-1 1h-2" />
  </svg>
);

const About = () => {
  const highlights = [
    {
      icon: <SparklesIcon />,
      title: "Chennai Main Store",
      desc: "Convenient branch in Chintadripet to support your local workshop."
    },
    {
      icon: <ShieldCheckIcon />,
      title: "Pink Box Certification",
      desc: "Each panel undergoes extensive visual & touch calibration to ensure zero dead pixels."
    },
    {
      icon: <TruckIcon />,
      title: "Bulk Supply Chain",
      desc: "Massive inventory handling thousands of combos, chassis, and spares weekly for bulk dealers."
    }
  ];

  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 px-6 md:px-16 lg:px-20 overflow-hidden border-t border-slate-200/50"
    >
      {/* Background graphic flare */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left text column */}
        <div className="text-left">
          {/* Brand Logo added and blended with the site */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 rounded-full overflow-hidden liquid-glass border border-slate-200/50 mb-6 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,112,246,0.1)] hover:shadow-[0_0_30px_rgba(0,112,246,0.25)] hover:scale-105 transition-all duration-300"
          >
            <img 
              src="./images/logo.png" 
              alt="JEE-TECH Logo" 
              className="w-full h-full object-contain" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-4 uppercase animate-none"
          >
            // The Legacy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading italic text-slate-900 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px]"
          >
            Chennai's
            <br />
            wholesale hub
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-base text-slate-700 font-body font-light leading-relaxed max-w-xl"
          >
            Since our establishment in Mount Road, JEE-TECH has been at the forefront of the mobile spare parts and professional mobile repair industry in Chennai. 
            We specialize in expert smartphone repair services and high-quality display assemblies that deliver exact color calibration, high touch sensitivity, and robust structural chassis matching OEM standards.
          </motion.p>
 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-sm text-slate-500 font-body font-light leading-relaxed max-w-xl"
          >
            Our signature brand line—<strong>PINK BOX</strong>—has set the benchmark for replacement screens in terms of clarity and endurance. 
            Whether you are looking for professional JEETECH screen repair, booking a workbench mobile repair appointment, or sourcing retail spares, JEE-TECH is Chennai's top-rated destination.
          </motion.p>
        </div>

        {/* Right card column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 w-full max-w-lg mx-auto"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="liquid-glass rounded-[1.5rem] p-6 flex items-start gap-5 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-[1rem] flex items-center justify-center bg-blue-50/50 border border-blue-100/30 shrink-0 text-blue-600 shadow-inner">
                {item.icon}
              </div>
              <div className="text-left">
                <h3 className="font-heading italic text-2xl text-slate-900 tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 font-body font-light leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

window.About = About;

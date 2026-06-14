const { motion } = window.Motion;

const Card1Icon = () => (
  <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z" />
  </svg>
);

const Card2Icon = () => (
  <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z" />
  </svg>
);

const Card3Icon = () => (
  <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z" />
  </svg>
);

const Capabilities = () => {
  const { FadingVideo } = window;
  const cards = [
    {
      icon: <Card1Icon />,
      tags: ["True Color", "OEM Calibration", "OLED Tech", "90Hz Smooth"],
      title: "Pink Box LCDs",
      body: "Precision engineered assemblies matching OEM standards. Flawless touch sensitivity, oleophobic coatings, and vibrant color reproduction."
    },
    {
      icon: <Card2Icon />,
      tags: ["Alloy Chassis", "Original Fit", "Secure Seals", "Grade-A Glass"],
      title: "Structural Chassis",
      body: "Mid-frames and rear panel glass crafted with exact tolerances. Restores structural integrity and aesthetics to look brand new."
    },
    {
      icon: <Card3Icon />,
      tags: ["9H Protection", "High Clarity", "Anti-Shatter", "Bulk Pack"],
      title: "Tempered & Spares",
      body: "9H hard protectors, OCA adhesive sheets, testing flex cables, and precision tools to support wholesale workshop workflows."
    }
  ];

  return (
    <section 
      id="capabilities" 
      className="relative w-full min-h-screen overflow-hidden bg-transparent flex flex-col justify-between border-t border-slate-200/50"
    >
      {/* Content Layer: z-10 */}
      <div className="relative z-10 px-6 md:px-16 lg:px-20 pt-32 pb-16 flex flex-col min-h-screen justify-between w-full max-w-7xl mx-auto">
        {/* Header (mb-auto) */}
        <div className="mb-auto text-left">
          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wider font-body text-blue-600 mb-6 uppercase"
          >
            // Catalog
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading italic text-slate-900 text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]"
          >
            Production
            <br />
            evolved
          </motion.h2>
        </div>

        {/* Three cards Grid (mt-16) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-4 w-full">
                {/* Left: 44x44 nested liquid glass square */}
                <div className="w-11 h-11 rounded-[0.75rem] flex items-center justify-center liquid-glass shrink-0">
                  {card.icon}
                </div>
                
                {/* Right: small liquid-glass pill tags */}
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="liquid-glass rounded-full px-2.5 py-0.5 text-[10px] text-blue-600 font-body font-medium whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Middle Spacer */}
              <div className="flex-1" />

              {/* Bottom of Card */}
              <div className="mt-6 text-left">
                <h3 className="font-heading italic text-slate-900 text-3xl md:text-4xl tracking-[-1px] leading-none">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 font-body font-light leading-snug max-w-[32ch]">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

window.Capabilities = Capabilities;

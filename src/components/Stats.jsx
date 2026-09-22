import Reveal from "./Reveal";

function Stats() {
  const stats = [
    { value: "+120", label: "مشروع منفذ" },
    { value: "+80", label: "عميل راضٍ" },
    { value: "24/7", label: "دعم فني" },
    { value: "+5", label: "سنوات خبرة" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-[#111827] dark:to-[#0B1120]">
      <div className="max-w-7xl mx-auto px-8">
        <Reveal>
          <div
            className="rounded-3xl bg-gradient-to-r from-navy to-steel text-white
            grid grid-cols-2 md:grid-cols-4 gap-8 px-10 py-14 shadow-2xl"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-aqua">
                  {s.value}
                </p>
                <p className="mt-2 text-white/80 text-sm md:text-base">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Stats;

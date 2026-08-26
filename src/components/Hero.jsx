import heroImage from "../assets/hero-ai-energy.png";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* صورة الخلفية */}
      <img
        src={heroImage}
        alt="AI & Energy"
        className="absolute inset-0 w-full h-full object-cover scale-110 transition duration-1000 hover:scale-105"
        style={{ objectPosition: "center 20%" }}
      />

      {/* Overlay احترافي */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent dark:from-[#0B1120]/90 dark:via-black/60 dark:to-transparent"></div>

      {/* دوائر ضبابية متحركة */}
      <div className="absolute top-32 left-20 w-72 h-72 bg-aqua/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-steel/20 rounded-full blur-3xl animate-pulse"></div>

      {/* المحتوى */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* العنوان */}
        <h1
          className="text-5xl md:text-8xl font-extrabold
  text-[#0A2540] dark:text-white
  drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]
  tracking-tight animate-fadeIn"
        >
          Smart Office
        </h1>

        {/* الوصف */}
        <p
          className="mt-8 text-lg md:text-2xl
          text-navy/80 dark:text-gray-200
          leading-relaxed animate-fadeIn"
        >
          Smart Engineering Solutions for the Future
        </p>

        {/* الأزرار */}
        <div className="mt-12 flex justify-center gap-5 flex-wrap">
          <button
            onClick={() => scrollToSection("services")}
            className="px-10 py-4 rounded-full
            bg-gradient-to-r from-steel to-aqua
            text-white font-semibold shadow-xl
            hover:scale-110 hover:shadow-2xl transition duration-300"
          >
            Explore Services
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-10 py-4 rounded-full border-2 border-navy
            dark:border-white text-navy dark:text-white
            font-semibold backdrop-blur-md
            hover:bg-navy hover:text-white
            dark:hover:bg-white dark:hover:text-navy
            transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

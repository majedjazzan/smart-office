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
      {/* الصورة */}
      <img
        src={heroImage}
        alt="AI & Energy"
        className="absolute inset-0 w-full h-full object-cover scale-105 transition duration-700 hover:scale-110"
        style={{ objectPosition: "center 20%" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-black/40 to-steel/30"></div>

      {/* المحتوى */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          Smart Office
        </h1>

        <p className="mt-6 text-gray-200 text-lg">
          Smart Engineering Solutions for the Future
        </p>

        <div className="mt-10 flex justify-center gap-4">
          {/* زر الخدمات */}
          <button
            onClick={() => scrollToSection("services")}
            className="px-8 py-3 bg-steel text-white rounded-full hover:scale-105 transition"
          >
            Services
          </button>

          {/* زر التواصل */}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-navy transition"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

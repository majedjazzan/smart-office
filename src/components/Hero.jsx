import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import heroImage from "../assets/hero-ai-energy.png";

function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Parallax: الصورة تتحرك أبطأ من الصفحة، والنص يخف تدريجياً وانت نازل
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduce ? "0%" : "6%"],
  );
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, reduce ? 1 : 0],
  );

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
  };
  const line = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.22, 0.65, 0.3, 1] },
    },
  };

  // نقاط لمعان موزعة على كامل مساحة الألواح الشمسية (منطقة تقريبية، قابلة للتعديل)
  const panelGlints = Array.from({ length: 16 }).map((_, i) => ({
    left: `${4 + (i % 8) * 8}%`,
    top: `${55 + Math.floor(i / 8) * 18 + (i % 3) * 6}%`,
    size: 3 + (i % 3),
    delay: (i % 8) * 0.35,
  }));

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* صورة الخلفية مع parallax بدل hover scale */}
      <motion.img
        src={heroImage}
        alt="AI & Energy"
        style={{ objectPosition: "center 20%", y: imgY }}
        className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
      />

      {/* ===== طبقات الأنيميشن فوق الصورة ===== */}
      {!reduce && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          {/* ١) نبضة ضوء عند عيون الروبوت — يمين الصورة (مؤقتاً أكبر عشان نظبط الموقع بالسكرين شوت) */}
          <motion.div
            className="absolute rounded-full bg-cyan-300"
            style={{
              left: "83%",
              top: "27%",
              width: 18,
              height: 18,
              filter: "blur(3px)",
              boxShadow: "0 0 22px 8px rgba(103,232,249,0.95)",
            }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.25, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full bg-cyan-300"
            style={{
              left: "88%",
              top: "26%",
              width: 16,
              height: 16,
              filter: "blur(3px)",
              boxShadow: "0 0 20px 7px rgba(103,232,249,0.95)",
            }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.25, 1] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.15,
            }}
          />

          {/* ٢) إضاءة تغطي كامل منطقة الألواح الشمسية — يسار/أسفل الصورة */}
          <div
            className="absolute overflow-hidden"
            style={{
              clipPath: "polygon(0% 100%, 0% 50%, 62% 42%, 68% 100%)",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
          >
            {/* موجة ضوء تعبر الألواح بشكل مستمر */}
            <motion.div
              className="absolute h-full w-1/3"
              style={{
                background:
                  "linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent)",
              }}
              animate={{ left: ["-40%", "120%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.2,
              }}
            />

            {/* نقاط لمعان موزعة على كل الألواح */}
            {panelGlints.map((p, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-amber-100"
                style={{
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                  boxShadow: "0 0 10px 3px rgba(253,230,138,0.85)",
                }}
                animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* ٣) خطوط دوائر إلكترونية متوهجة — خلفية الروبوت التقنية، يمين الصورة */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {[
              "M 78 15 L 78 35 L 92 35",
              "M 70 10 L 70 22 L 60 22",
              "M 95 45 L 85 45 L 85 60",
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                fill="none"
                stroke="rgba(103,232,249,0.55)"
                strokeWidth="0.3"
                strokeDasharray="4 3"
                animate={{ strokeDashoffset: [0, -14] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.4,
                }}
              />
            ))}
          </svg>
        </div>
      )}

      {/* Overlay احترافي */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent dark:from-[#0B1120]/90 dark:via-black/60 dark:to-transparent"></div>

      {/* المحتوى */}
      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        {/* العنوان */}
        <motion.h1
          variants={line}
          className="text-5xl md:text-8xl font-extrabold
  text-[#0A2540] dark:text-white
  drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]
  tracking-tight"
        >
          Smart Office
        </motion.h1>

        {/* الوصف */}
        <motion.p
          variants={line}
          className="mt-8 text-lg md:text-2xl
          text-navy/80 dark:text-gray-200
          leading-relaxed"
        >
          Smart Engineering Solutions for the Future
        </motion.p>

        {/* الأزرار */}
        <motion.div
          variants={line}
          className="mt-12 flex justify-center gap-5 flex-wrap"
        >
          <motion.button
            onClick={() => scrollToSection("services")}
            whileHover={reduce ? {} : { scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-10 py-4 rounded-full
            bg-gradient-to-r from-steel to-aqua
            text-white font-semibold shadow-xl"
          >
            Explore Services
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={reduce ? {} : { scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-10 py-4 rounded-full border-2 border-navy
            dark:border-white text-navy dark:text-white
            font-semibold backdrop-blur-md
            hover:bg-navy hover:text-white
            dark:hover:bg-white dark:hover:text-navy
            transition duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;

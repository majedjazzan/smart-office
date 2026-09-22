import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

function CtaBanner() {
  return (
    <section className="relative py-28 overflow-hidden bg-navy dark:bg-[#0B1120]">
      {/* توهج خلفية خفيف */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[500px] h-[500px] bg-aqua/20 blur-[140px] rounded-full"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            جاهز تبدأ مشروعك الذكي؟
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            تواصل معنا اليوم وخلّي فريقنا الهندسي يساعدك تختار الحل الأنسب
            لمكتبك أو مشروعك — طاقة، مراقبة، إنترنت، أو برمجيات.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-steel to-aqua
            text-white font-semibold shadow-xl hover:scale-105 transition"
          >
            تواصل معنا الآن
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default CtaBanner;

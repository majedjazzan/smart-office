import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 overflow-hidden bg-navy dark:bg-[#0B1120]">
      {/* توهج خلفية خفيف */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[500px] h-[500px] bg-aqua/20 blur-[140px] rounded-full"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t("cta.title")}
          </h2>
        </Reveal>

        {/* DESCRIPTION */}
        <Reveal delay={0.1}>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            {t("cta.description")}
          </p>
        </Reveal>

        {/* BUTTON */}
        <Reveal delay={0.2}>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full
            bg-gradient-to-r from-steel to-aqua
            text-white font-semibold shadow-xl
            hover:scale-105 transition"
          >
            {t("cta.button")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default CtaBanner;

import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, Wrench, LifeBuoy } from "lucide-react";

import Reveal, { stagger, item } from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

function ProcessSteps() {
  const { t, isArabic } = useLanguage();

  const steps = [
    {
      icon: <PhoneCall size={26} className="text-aqua" />,
      title: t("home.process.consultation.title"),
      desc: t("home.process.consultation.desc"),
    },
    {
      icon: <ClipboardList size={26} className="text-steel" />,
      title: t("home.process.design.title"),
      desc: t("home.process.design.desc"),
    },
    {
      icon: <Wrench size={26} className="text-navy dark:text-white" />,
      title: t("home.process.implementation.title"),
      desc: t("home.process.implementation.desc"),
    },
    {
      icon: <LifeBuoy size={26} className="text-aqua" />,
      title: t("home.process.support.title"),
      desc: t("home.process.support.desc"),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      {/* SECTION TITLE */}
      <div className="text-center mb-16">
        <Reveal>
          <h3 className="text-4xl font-bold text-navy dark:text-white">
            {t("home.process.title")}
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-3 text-gray-500 dark:text-gray-300">
            {t("home.process.subtitle")}
          </p>
        </Reveal>
      </div>

      {/* STEPS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative bg-white dark:bg-white/5 rounded-2xl p-7
            border border-gray-100 dark:border-white/10 shadow-sm"
          >
            {/* STEP NUMBER */}
            <span
              className={`absolute -top-4 ${
                isArabic ? "-right-4" : "-left-4"
              } w-9 h-9 rounded-full bg-navy dark:bg-aqua
              text-white flex items-center justify-center
              font-bold text-sm`}
            >
              {index + 1}
            </span>

            {/* ICON */}
            <div
              className="w-12 h-12 rounded-xl bg-blue-50
              dark:bg-white/10 flex items-center justify-center mb-4"
            >
              {step.icon}
            </div>

            {/* TITLE */}
            <h4 className="font-bold text-navy dark:text-white mb-2">
              {step.title}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ProcessSteps;

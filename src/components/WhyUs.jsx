import { motion } from "framer-motion";
import { Zap, ShieldCheck, Wifi, Headphones } from "lucide-react";
import Reveal, { stagger, item } from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

function WhyUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Zap className="text-aqua" size={28} />,
      title: t("home.whyUs.fastDeployment.title"),
      desc: t("home.whyUs.fastDeployment.desc"),
    },
    {
      icon: <ShieldCheck className="text-steel" size={28} />,
      title: t("home.whyUs.reliableEngineering.title"),
      desc: t("home.whyUs.reliableEngineering.desc"),
    },
    {
      icon: <Wifi className="text-navy dark:text-white" size={28} />,
      title: t("home.whyUs.integratedSystems.title"),
      desc: t("home.whyUs.integratedSystems.desc"),
    },
    {
      icon: <Headphones className="text-aqua" size={28} />,
      title: t("home.whyUs.ongoingSupport.title"),
      desc: t("home.whyUs.ongoingSupport.desc"),
    },
  ];

  return (
    <section className="py-28 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-8">
        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-5xl font-bold text-navy dark:text-white">
              {t("home.whyUs.title")}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-gray-500 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              {t("home.whyUs.subtitle")}
            </p>
          </Reveal>
        </div>

        {/* FEATURES */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-blue-50/60 dark:bg-white/5
              border border-gray-100 dark:border-white/10 text-center"
            >
              {/* ICON */}
              <div
                className="w-14 h-14 mx-auto mb-5 rounded-2xl
                bg-white dark:bg-white/10
                flex items-center justify-center shadow-md"
              >
                {feature.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-navy dark:text-white mb-2">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUs;

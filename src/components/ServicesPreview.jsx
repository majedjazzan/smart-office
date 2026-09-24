import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sun,
  Satellite,
  Camera,
  Code2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import Reveal, { stagger, item } from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

function ServicesPreview() {
  const { t, isArabic } = useLanguage();

  const services = [
    {
      icon: <Sun size={30} className="text-white" />,
      title: t("home.servicesPreview.solar.title"),
      desc: t("home.servicesPreview.solar.desc"),
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: <Satellite size={30} className="text-white" />,
      title: t("home.servicesPreview.starlink.title"),
      desc: t("home.servicesPreview.starlink.desc"),
      color: "from-aqua to-steel",
    },
    {
      icon: <Camera size={30} className="text-white" />,
      title: t("home.servicesPreview.surveillance.title"),
      desc: t("home.servicesPreview.surveillance.desc"),
      color: "from-navy to-slate-700",
    },
    {
      icon: <Code2 size={30} className="text-white" />,
      title: t("home.servicesPreview.software.title"),
      desc: t("home.servicesPreview.software.desc"),
      color: "from-steel to-aqua",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50 dark:from-[#0B1120] dark:to-[#111827]">
      <div className="max-w-7xl mx-auto px-8">
        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-5xl font-bold text-navy dark:text-white">
              {t("home.servicesPreview.title")}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-gray-500 dark:text-gray-300 text-lg">
              {t("home.servicesPreview.subtitle")}
            </p>
          </Reveal>
        </div>

        {/* SERVICES */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-white/5 rounded-3xl p-8
              border border-gray-100 dark:border-white/10
              shadow-md hover:shadow-xl transition text-center"
            >
              {/* ICON */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color}
                flex items-center justify-center mb-6 mx-auto shadow-lg`}
              >
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-navy dark:text-white mb-2">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* SEE ALL SERVICES */}
        <Reveal>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
              border-2 border-navy dark:border-white
              text-navy dark:text-white font-semibold
              hover:bg-navy hover:text-white
              dark:hover:bg-white dark:hover:text-navy
              transition duration-300"
            >
              {t("home.servicesPreview.button")}

              {isArabic ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ServicesPreview;

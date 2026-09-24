import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import solar from "../assets/solar.png";
import starlink from "../assets/starlink.png";
import camera from "../assets/camera.png";
import software from "../assets/software.png";

import Reveal from "./Reveal";
import ProcessSteps from "./ProcessSteps";
import useScrollDirection from "../hooks/useScrollDirection";

import { useLanguage } from "../context/LanguageContext";

function Services() {
  const direction = useScrollDirection();
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.solar.title"),
      desc: t("services.solar.desc"),
      img: solar,
      border: "border-steel",
      features: t("services.solar.features"),
      buttons: [
        {
          text: t("services.solar.consultation"),
          link: "/solar-consult",
        },
        {
          text: t("services.solar.implementation"),
          link: "/solar",
        },
      ],
    },

    {
      title: t("services.starlink.title"),
      desc: t("services.starlink.desc"),
      img: starlink,
      border: "border-aqua",
      features: t("services.starlink.features"),
      buttons: [
        {
          text: t("services.starlink.button"),
          link: "/starlink",
        },
      ],
    },

    {
      title: t("services.surveillance.title"),
      desc: t("services.surveillance.desc"),
      img: camera,
      border: "border-navy",
      features: t("services.surveillance.features"),
      buttons: [
        {
          text: t("services.surveillance.button"),
          link: "/camera",
        },
      ],
    },

    {
      title: t("services.software.title"),
      desc: t("services.software.desc"),
      img: software,
      border: "border-steel",
      features: t("services.software.features"),
      buttons: [
        {
          text: t("services.software.button"),
          link: "/software",
        },
      ],
    },
  ];

  const stepDelay = (i) =>
    direction === "down" ? i * 0.14 : (services.length - 1 - i) * 0.14;

  return (
    <section
      id="services"
      className="pt-40 pb-20 bg-gradient-to-b from-white to-blue-50
      dark:from-[#0B1120] dark:to-[#111827]"
    >
      <div className="text-center mb-20 px-6">
        <Reveal>
          <h2 className="text-5xl font-bold text-navy dark:text-white">
            {t("services.title")}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-gray-500 dark:text-gray-300 text-lg">
            {t("services.subtitle")}
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{
              duration: 1.2,
              delay: stepDelay(i),
              ease: [0.22, 0.65, 0.3, 1],
            }}
            whileHover={{ y: -10 }}
            className="group relative bg-white dark:bg-white/5 rounded-3xl
            overflow-hidden shadow-lg hover:shadow-2xl
            border border-gray-100 dark:border-white/10"
          >
            <div className="relative overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className={`p-6 border-t-4 ${service.border}`}>
              <h3 className="text-2xl font-bold text-navy dark:text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>

              <ul className="mt-5 space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm
                    text-gray-600 dark:text-gray-300"
                  >
                    <Check size={16} className="text-aqua shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="absolute inset-0 bg-black/75 opacity-0
              group-hover:opacity-100 flex flex-col justify-center
              items-center gap-4 transition duration-400 px-6"
            >
              {service.buttons.map((btn, index) => (
                <Link
                  key={index}
                  to={btn.link}
                  className="w-full text-center bg-white text-navy
                  px-5 py-3 rounded-full font-semibold
                  hover:bg-gray-100 hover:scale-105 transition"
                >
                  {btn.text}
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <ProcessSteps />

      <Reveal>
        <div className="text-center mt-4 px-6">
          <p className="text-gray-500 dark:text-gray-300 mb-6 text-lg">
            {t("services.cta")}
          </p>

          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full
            bg-gradient-to-r from-steel to-aqua text-white
            font-semibold shadow-xl hover:scale-105 transition"
          >
            {t("services.contactUs")}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export default Services;

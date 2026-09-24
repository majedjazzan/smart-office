import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Globe,
  Smartphone,
  Settings2,
  Check,
} from "lucide-react";

import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

function Software() {
  const { t } = useLanguage();

  const [type, setType] = useState("");
  const [option, setOption] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const types = [
    {
      id: "management",
      label: t("servicePages.software.types.management"),
      icon: LayoutDashboard,
    },
    {
      id: "websites",
      label: t("servicePages.software.types.websites"),
      icon: Globe,
    },
    {
      id: "apps",
      label: t("servicePages.software.types.apps"),
      icon: Smartphone,
    },
    {
      id: "custom",
      label: t("servicePages.software.types.custom"),
      icon: Settings2,
    },
  ];

  const optionsMap = {
    management: [
      {
        id: "accounting",
        label: t("servicePages.software.options.accounting"),
      },
      {
        id: "companyManagement",
        label: t("servicePages.software.options.companyManagement"),
      },
      {
        id: "erp",
        label: t("servicePages.software.options.erp"),
      },
    ],

    websites: [
      {
        id: "companyWebsite",
        label: t("servicePages.software.options.companyWebsite"),
      },
      {
        id: "ecommerce",
        label: t("servicePages.software.options.ecommerce"),
      },
      {
        id: "personalWebsite",
        label: t("servicePages.software.options.personalWebsite"),
      },
    ],

    apps: [
      {
        id: "mobileApp",
        label: t("servicePages.software.options.mobileApp"),
      },
      {
        id: "dashboard",
        label: t("servicePages.software.options.dashboard"),
      },
      {
        id: "internalSystem",
        label: t("servicePages.software.options.internalSystem"),
      },
    ],

    custom: [
      {
        id: "customSystem",
        label: t("servicePages.software.options.customSystem"),
      },
      {
        id: "automation",
        label: t("servicePages.software.options.automation"),
      },
      {
        id: "specialSolution",
        label: t("servicePages.software.options.specialSolution"),
      },
    ],
  };

  const step = !type ? 1 : !option ? 2 : 3;

  const stepsMeta = [
    {
      n: 1,
      label: t("servicePages.software.steps.type"),
    },
    {
      n: 2,
      label: t("servicePages.software.steps.service"),
    },
    {
      n: 3,
      label: t("servicePages.software.steps.info"),
    },
  ];

  const selectedType = types.find((item) => item.id === type)?.label || "";

  const selectedOption =
    optionsMap[type]?.find((item) => item.id === option)?.label || "";

  const handleSubmit = () => {
    const message = `
${t("servicePages.software.whatsapp.title")}

${t("servicePages.software.whatsapp.type")}: ${selectedType}
${t("servicePages.software.whatsapp.service")}: ${selectedOption}
${t("servicePages.software.whatsapp.name")}: ${name}
${t("servicePages.software.whatsapp.phone")}: ${phone}
${t("servicePages.software.whatsapp.details")}: ${details}
`;

    const url = `https://wa.me/963937192778?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-[#0B1120] dark:to-[#111827]">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-3">
            {t("servicePages.software.title")}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-gray-500 dark:text-gray-300 text-lg mb-12">
            {t("servicePages.software.subtitle")}
          </p>
        </Reveal>

        <div className="flex items-center justify-center gap-2 md:gap-3 mb-14">
          {stepsMeta.map((s, i) => (
            <div key={s.n} className="flex items-center gap-2 md:gap-3">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition ${
                    step === s.n
                      ? "bg-gradient-to-r from-steel to-aqua text-white shadow-lg scale-110"
                      : step > s.n
                        ? "bg-aqua/20 text-aqua"
                        : "bg-gray-200 dark:bg-white/10 text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {step > s.n ? <Check size={18} /> : s.n}
                </div>

                <span
                  className={`text-xs font-medium hidden sm:block ${
                    step === s.n
                      ? "text-navy dark:text-white"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {s.label}
                </span>
              </div>

              {i < stepsMeta.length - 1 && (
                <div
                  className={`w-10 md:w-20 h-[2px] transition ${
                    step > s.n ? "bg-aqua" : "bg-gray-200 dark:bg-white/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 0.65, 0.3, 1],
              }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {types.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setType(id);
                    setOption("");
                  }}
                  className="group p-8 rounded-2xl border border-gray-200
                  dark:border-white/10 bg-white dark:bg-white/5
                  hover:border-aqua hover:shadow-xl transition text-center"
                >
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl
                    bg-blue-50 dark:bg-white/10 flex items-center justify-center
                    group-hover:bg-gradient-to-br group-hover:from-steel
                    group-hover:to-aqua transition"
                  >
                    <Icon
                      size={28}
                      className="text-steel dark:text-aqua
                      group-hover:text-white transition"
                    />
                  </div>

                  <h3 className="font-bold text-navy dark:text-white">
                    {label}
                  </h3>
                </button>
              ))}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 0.65, 0.3, 1],
              }}
            >
              <button
                onClick={() => setType("")}
                className="text-sm text-aqua hover:underline mb-6"
              >
                {t("servicePages.software.backType")}
              </button>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {optionsMap[type].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setOption(opt.id)}
                    className="p-6 rounded-2xl border bg-white dark:bg-white/5
                    border-gray-200 dark:border-white/10 hover:border-aqua
                    hover:shadow-lg transition"
                  >
                    <h2 className="text-lg font-bold text-navy dark:text-white">
                      {opt.label}
                    </h2>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 0.65, 0.3, 1],
              }}
              className="max-w-xl mx-auto"
            >
              <button
                onClick={() => setOption("")}
                className="text-sm text-aqua hover:underline mb-6"
              >
                {t("servicePages.software.backService")}
              </button>

              <div
                className="bg-blue-50 dark:bg-white/5 border border-aqua/30
                dark:border-white/10 rounded-xl px-5 py-3 mb-6
                text-sm text-navy dark:text-white"
              >
                {t("servicePages.common.yourRequest")}:{" "}
                <span className="font-bold">{selectedType}</span>
                {" — "}
                <span className="font-bold">{selectedOption}</span>
              </div>

              <div
                className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-xl
                border border-gray-100 dark:border-white/10 space-y-4 text-start"
              >
                <input
                  type="text"
                  value={name}
                  placeholder={t("servicePages.common.name")}
                  className="w-full border border-gray-300 dark:border-white/10
                  bg-white dark:bg-white/5 text-navy dark:text-white
                  placeholder:text-gray-400 p-3 rounded-lg focus:outline-none
                  focus:ring-2 focus:ring-aqua transition"
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="tel"
                  value={phone}
                  placeholder={t("servicePages.common.phone")}
                  className="w-full border border-gray-300 dark:border-white/10
                  bg-white dark:bg-white/5 text-navy dark:text-white
                  placeholder:text-gray-400 p-3 rounded-lg focus:outline-none
                  focus:ring-2 focus:ring-aqua transition"
                  onChange={(e) => setPhone(e.target.value)}
                />

                <textarea
                  value={details}
                  placeholder={t("servicePages.software.projectDetails")}
                  rows={4}
                  className="w-full border border-gray-300 dark:border-white/10
                  bg-white dark:bg-white/5 text-navy dark:text-white
                  placeholder:text-gray-400 p-3 rounded-lg focus:outline-none
                  focus:ring-2 focus:ring-aqua transition"
                  onChange={(e) => setDetails(e.target.value)}
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full bg-green-500 hover:bg-green-600
                  text-white py-3 rounded-lg transition font-semibold"
                >
                  {t("servicePages.software.send")}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Software;

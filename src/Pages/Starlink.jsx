import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Satellite, Wifi, Check } from "lucide-react";

import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

function Starlink() {
  const { t } = useLanguage();

  const [service, setService] = useState("");
  const [packageType, setPackageType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const services = [
    { id: "starlink", label: "Starlink", icon: Satellite },
    { id: "adsl", label: "ADSL", icon: Wifi },
  ];

  const packagesMap = {
    starlink: ["Standard", "Mini"],
    adsl: ["Viber", "Public"],
  };

  const step = !service ? 1 : !packageType ? 2 : 3;

  const stepsMeta = [
    {
      n: 1,
      label: t("servicePages.starlink.steps.service"),
    },
    {
      n: 2,
      label: t("servicePages.starlink.steps.package"),
    },
    {
      n: 3,
      label: t("servicePages.starlink.steps.info"),
    },
  ];

  const selectedService =
    services.find((item) => item.id === service)?.label || "";

  const handleSubmit = () => {
    const message = `
${t("servicePages.starlink.whatsapp.title")}

${t("servicePages.starlink.whatsapp.service")}: ${selectedService}
${t("servicePages.starlink.whatsapp.package")}: ${packageType}
${t("servicePages.starlink.whatsapp.name")}: ${name}
${t("servicePages.starlink.whatsapp.phone")}: ${phone}
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
            {t("servicePages.starlink.title")}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-gray-500 dark:text-gray-300 text-lg mb-12">
            {t("servicePages.starlink.subtitle")}
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
              className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto"
            >
              {services.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setService(id);
                    setPackageType("");
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

                  <h3 className="font-bold text-navy dark:text-white text-lg">
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
                onClick={() => setService("")}
                className="text-sm text-aqua hover:underline mb-6"
              >
                {t("servicePages.starlink.backService")}
              </button>

              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {packagesMap[service].map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setPackageType(pkg)}
                    className="p-10 rounded-3xl border bg-white dark:bg-white/5
                    border-gray-200 dark:border-white/10 hover:border-aqua
                    hover:shadow-xl transition text-center"
                  >
                    <h2 className="text-3xl font-extrabold text-navy dark:text-white">
                      {pkg}
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 mt-4">
                      {t("servicePages.starlink.selectPackage")}
                    </p>
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
                onClick={() => setPackageType("")}
                className="text-sm text-aqua hover:underline mb-6"
              >
                {t("servicePages.starlink.backPackage")}
              </button>

              <div
                className="bg-blue-50 dark:bg-white/5 border border-aqua/30
                dark:border-white/10 rounded-xl px-5 py-3 mb-6
                text-sm text-navy dark:text-white"
              >
                {t("servicePages.common.yourRequest")}:{" "}
                <span className="font-bold">{selectedService}</span>
                {" — "}
                <span className="font-bold">{packageType}</span>
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

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full bg-green-500 hover:bg-green-600
                  text-white py-3 rounded-lg transition font-semibold"
                >
                  {t("servicePages.common.sendWhatsapp")}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Starlink;

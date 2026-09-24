import { useState } from "react";
import { motion } from "framer-motion";
import { Factory, Sprout, Stethoscope, Home } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function SolarForm() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
  });

  const usageTypes = [
    {
      id: "industrial",
      label: t("servicePages.solar.form.types.industrial"),
      icon: Factory,
    },
    {
      id: "agricultural",
      label: t("servicePages.solar.form.types.agricultural"),
      icon: Sprout,
    },
    {
      id: "medical",
      label: t("servicePages.solar.form.types.medical"),
      icon: Stethoscope,
    },
    {
      id: "residential",
      label: t("servicePages.solar.form.types.residential"),
      icon: Home,
    },
  ];

  const selectedType =
    usageTypes.find((item) => item.id === form.type)?.label || "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.type) return;

    const message = `
${t("servicePages.solar.form.whatsapp.title")}

${t("servicePages.solar.form.whatsapp.name")}: ${form.name}
${t("servicePages.solar.form.whatsapp.phone")}: ${form.phone}
${t("servicePages.solar.form.whatsapp.usageType")}: ${selectedType}
`;

    const whatsappUrl = `https://wa.me/963937192778?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const inputClass =
    "w-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 " +
    "text-navy dark:text-white placeholder:text-gray-400 rounded-xl p-4 text-start " +
    "focus:outline-none focus:ring-2 focus:ring-aqua transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-white/5 shadow-2xl rounded-3xl p-8 max-w-xl mx-auto space-y-6
      border border-gray-100 dark:border-white/10"
    >
      <h2 className="text-2xl font-bold text-center text-navy dark:text-white">
        {t("servicePages.solar.form.title")}
      </h2>

      <div>
        <p className="text-sm font-semibold text-navy dark:text-white mb-3 text-start">
          {t("servicePages.solar.form.usageType")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {usageTypes.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              type="button"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() =>
                setForm((current) => ({
                  ...current,
                  type: id,
                }))
              }
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition
              ${
                form.type === id
                  ? "border-aqua bg-blue-50 dark:bg-white/10 shadow-md"
                  : "border-gray-200 dark:border-white/10 bg-white dark:bg-transparent"
              }`}
            >
              <Icon
                size={22}
                className={
                  form.type === id
                    ? "text-aqua"
                    : "text-gray-400 dark:text-gray-400"
                }
              />

              <span className="text-xs font-semibold text-navy dark:text-white">
                {label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <input
        type="text"
        required
        value={form.name}
        placeholder={t("servicePages.solar.form.fullName")}
        className={inputClass}
        onChange={(e) =>
          setForm((current) => ({
            ...current,
            name: e.target.value,
          }))
        }
      />

      <input
        type="tel"
        required
        value={form.phone}
        placeholder={t("servicePages.solar.form.phone")}
        className={inputClass}
        onChange={(e) =>
          setForm((current) => ({
            ...current,
            phone: e.target.value,
          }))
        }
      />

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl
        font-bold transition"
      >
        {t("servicePages.solar.form.submit")}
      </motion.button>
    </form>
  );
}

export default SolarForm;

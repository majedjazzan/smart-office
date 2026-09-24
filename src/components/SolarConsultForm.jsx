import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function SolarConsultForm() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
${t("solarConsult.whatsapp.title")}

${t("solarConsult.whatsapp.name")}: ${form.name}
${t("solarConsult.whatsapp.phone")}: ${form.phone}
`;

    const url = `https://wa.me/963937192778?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  const inputClass =
    "w-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 " +
    "text-navy dark:text-white placeholder:text-gray-400 p-3 rounded-lg text-start " +
    "focus:outline-none focus:ring-2 focus:ring-aqua transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-white/5 shadow-xl rounded-2xl p-8 max-w-md mx-auto space-y-4
      border border-gray-100 dark:border-white/10"
    >
      <h2 className="text-xl font-bold text-center text-navy dark:text-white">
        {t("solarConsult.form.title")}
      </h2>

      <input
        type="text"
        required
        value={form.name}
        placeholder={t("solarConsult.form.name")}
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
        placeholder={t("solarConsult.form.phone")}
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
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg
        font-semibold transition"
      >
        {t("solarConsult.form.send")}
      </motion.button>
    </form>
  );
}

export default SolarConsultForm;

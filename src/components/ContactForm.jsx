import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

function ContactForm() {
  const { language, t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "solar",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getServiceName = () => {
    const services = {
      solar: t("contact.form.solar"),
      starlink: t("contact.form.starlink"),
      surveillance: t("contact.form.surveillance"),
      software: t("contact.form.software"),
      other: t("contact.form.other"),
    };

    return services[form.service];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const labels =
      language === "ar"
        ? {
            greeting: "مرحباً، لدي طلب جديد:",
            name: "الاسم",
            phone: "رقم الهاتف",
            service: "الخدمة المطلوبة",
            message: "الرسالة",
          }
        : {
            greeting: "Hello, I have a new request:",
            name: "Name",
            phone: "Phone Number",
            service: "Requested Service",
            message: "Message",
          };

    const text = `${labels.greeting}
${labels.name}: ${form.name}
${labels.phone}: ${form.phone}
${labels.service}: ${getServiceName()}
${labels.message}: ${form.message || "-"}`;

    const url = `https://wa.me/963937192778?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noreferrer");
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 dark:border-white/10 " +
    "bg-white dark:bg-white/5 px-4 py-3 text-navy dark:text-white " +
    "placeholder:text-gray-400 focus:outline-none focus:ring-2 " +
    "focus:ring-aqua transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block mb-2 text-sm font-semibold text-navy dark:text-white">
          {t("contact.form.fullName")}
        </label>

        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder={t("contact.form.namePlaceholder")}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-navy dark:text-white">
          {t("contact.form.phone")}
        </label>

        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder={t("contact.form.phonePlaceholder")}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-navy dark:text-white">
          {t("contact.form.service")}
        </label>

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="solar" className="text-navy bg-white">
            {t("contact.form.solar")}
          </option>

          <option value="starlink" className="text-navy bg-white">
            {t("contact.form.starlink")}
          </option>

          <option value="surveillance" className="text-navy bg-white">
            {t("contact.form.surveillance")}
          </option>

          <option value="software" className="text-navy bg-white">
            {t("contact.form.software")}
          </option>

          <option value="other" className="text-navy bg-white">
            {t("contact.form.other")}
          </option>
        </select>
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-navy dark:text-white">
          {t("contact.form.message")}
        </label>

        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder={t("contact.form.messagePlaceholder")}
          className={inputClass}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full flex items-center justify-center gap-2
        bg-gradient-to-r from-steel to-aqua text-white font-semibold
        px-6 py-4 rounded-full shadow-lg transition"
      >
        <Send size={18} />
        {t("contact.form.send")}
      </motion.button>
    </form>
  );
}

export default ContactForm;

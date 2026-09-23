import { useState } from "react";
import { motion } from "framer-motion";

function SolarConsultForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
طلب استشارة طاقة شمسية

الاسم: ${form.name}
رقم التواصل: ${form.phone}
    `;

    const url = `https://wa.me/963937192778?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  const inputClass =
    "w-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 " +
    "text-navy dark:text-white placeholder:text-gray-400 p-3 rounded-lg text-right " +
    "focus:outline-none focus:ring-2 focus:ring-aqua transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-white/5 shadow-xl rounded-2xl p-8 max-w-md mx-auto space-y-4
      border border-gray-100 dark:border-white/10"
    >
      <h2 className="text-xl font-bold text-center text-navy dark:text-white">
        طلب استشارة
      </h2>

      <input
        type="text"
        required
        placeholder="الاسم"
        className={inputClass}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="text"
        required
        placeholder="رقم التواصل"
        className={inputClass}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg
        font-semibold transition"
      >
        إرسال عبر واتساب
      </motion.button>
    </form>
  );
}

export default SolarConsultForm;

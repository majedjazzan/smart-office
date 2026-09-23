import { useState } from "react";
import { motion } from "framer-motion";
import { Factory, Sprout, Stethoscope, Home } from "lucide-react";

function SolarForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
  });

  const usageTypes = [
    { label: "صناعي", icon: Factory },
    { label: "زراعي", icon: Sprout },
    { label: "طبي", icon: Stethoscope },
    { label: "منزلي", icon: Home },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.type) return;

    const message = `
أريد تركيب منظومة طاقة شمسية

الاسم الثلاثي: ${form.name}
رقم التواصل: ${form.phone}
نوع الاستخدام: ${form.type}
`;

    const whatsappUrl = `https://wa.me/963937192778?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const inputClass =
    "w-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 " +
    "text-navy dark:text-white placeholder:text-gray-400 rounded-xl p-4 text-right " +
    "focus:outline-none focus:ring-2 focus:ring-aqua transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-white/5 shadow-2xl rounded-3xl p-8 max-w-xl mx-auto space-y-6
      border border-gray-100 dark:border-white/10"
    >
      <h2 className="text-2xl font-bold text-center text-navy dark:text-white">
        تنفيذ طلب طاقة شمسية
      </h2>

      {/* نوع الاستخدام */}
      <div>
        <p className="text-sm font-semibold text-navy dark:text-white mb-3 text-right">
          نوع الاستخدام
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {usageTypes.map(({ label, icon: Icon }) => (
            <motion.button
              key={label}
              type="button"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setForm({ ...form, type: label })}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition
              ${
                form.type === label
                  ? "border-aqua bg-blue-50 dark:bg-white/10 shadow-md"
                  : "border-gray-200 dark:border-white/10 bg-white dark:bg-transparent"
              }`}
            >
              <Icon
                size={22}
                className={
                  form.type === label
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
        placeholder="الاسم الثلاثي"
        className={inputClass}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="tel"
        required
        placeholder="رقم التواصل"
        className={inputClass}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl
        font-bold transition"
      >
        تنفيذ الطلب عبر واتساب
      </motion.button>
    </form>
  );
}

export default SolarForm;

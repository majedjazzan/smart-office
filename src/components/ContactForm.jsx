import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "طاقة شمسية",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `مرحباً، معي طلب جديد:
الاسم: ${form.name}
رقم الهاتف: ${form.phone}
الخدمة المطلوبة: ${form.service}
الرسالة: ${form.message || "-"}`;

    const url = `https://wa.me/963937192778?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noreferrer");
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 " +
    "px-4 py-3 text-navy dark:text-white placeholder:text-gray-400 focus:outline-none " +
    "focus:ring-2 focus:ring-aqua transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-right">
      <div>
        <label className="block mb-2 text-sm font-semibold text-navy dark:text-white">
          الاسم الكامل
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="اسمك"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-navy dark:text-white">
          رقم الهاتف
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="09xxxxxxxx"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-navy dark:text-white">
          الخدمة المطلوبة
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option className="text-navy bg-white">طاقة شمسية</option>
          <option className="text-navy bg-white">Starlink</option>
          <option className="text-navy bg-white">أنظمة مراقبة</option>
          <option className="text-navy bg-white">برمجيات</option>
          <option className="text-navy bg-white">غير ذلك</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-navy dark:text-white">
          الرسالة (اختياري)
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="اكتب تفاصيل طلبك..."
          className={inputClass}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-steel to-aqua
        text-white font-semibold px-6 py-4 rounded-full shadow-lg transition"
      >
        <Send size={18} />
        إرسال عبر واتساب
      </motion.button>
    </form>
  );
}

export default ContactForm;

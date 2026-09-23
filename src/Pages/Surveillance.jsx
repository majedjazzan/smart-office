import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Bell, ShieldCheck, Check } from "lucide-react";
import Reveal from "../components/Reveal";

function Surveillance() {
  const [type, setType] = useState("");
  const [option, setOption] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const types = [
    { label: "كاميرات مراقبة", icon: Camera },
    { label: "أنظمة إنذار", icon: Bell },
    { label: "نظام متكامل", icon: ShieldCheck },
  ];

  const optionsMap = {
    "كاميرات مراقبة": ["منزلية", "شركات", "مستودعات"],
    "أنظمة إنذار": ["سرقة", "حريق", "حساسات حركة"],
    "نظام متكامل": ["كاميرات + إنذار", "نظام ذكي", "مراقبة كاملة"],
  };

  const step = !type ? 1 : !option ? 2 : 3;

  const stepsMeta = [
    { n: 1, label: "اختر الخدمة" },
    { n: 2, label: "اختر التفاصيل" },
    { n: 3, label: "بياناتك" },
  ];

  const handleSubmit = () => {
    const message = `
طلب نظام مراقبة

الخدمة: ${type}
التفاصيل: ${option}
الاسم: ${name}
رقم التواصل: ${phone}
    `;

    const url = `https://wa.me/963937192778?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-[#0B1120] dark:to-[#111827]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-3">
            أنظمة المراقبة والحماية
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-gray-500 dark:text-gray-300 text-lg mb-12">
            اختر الخدمة المناسبة وخلّينا نجهزلك عرض سعر مباشر عبر واتساب
          </p>
        </Reveal>

        {/* مؤشر الخطوات */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-14">
          {stepsMeta.map((s, i) => (
            <div key={s.n} className="flex items-center gap-2 md:gap-3">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition
                  ${
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
          {/* الخطوة ١: اختيار النوع */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 0.65, 0.3, 1] }}
              className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {types.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => {
                    setType(label);
                    setOption("");
                  }}
                  className="group p-8 rounded-2xl border border-gray-200 dark:border-white/10
                  bg-white dark:bg-white/5 hover:border-aqua hover:shadow-xl transition text-center"
                >
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-50 dark:bg-white/10
                    flex items-center justify-center group-hover:bg-gradient-to-br
                    group-hover:from-steel group-hover:to-aqua transition"
                  >
                    <Icon
                      size={28}
                      className="text-steel dark:text-aqua group-hover:text-white transition"
                    />
                  </div>
                  <h3 className="font-bold text-navy dark:text-white">
                    {label}
                  </h3>
                </button>
              ))}
            </motion.div>
          )}

          {/* الخطوة ٢: التفاصيل */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 0.65, 0.3, 1] }}
            >
              <button
                onClick={() => setType("")}
                className="text-sm text-aqua hover:underline mb-6"
              >
                ← رجوع لاختيار الخدمة
              </button>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {optionsMap[type].map((opt) => (
                  <div
                    key={opt}
                    onClick={() => setOption(opt)}
                    className="relative cursor-pointer p-6 rounded-2xl border bg-white dark:bg-white/5
                    border-gray-200 dark:border-white/10 hover:border-aqua hover:shadow-lg transition"
                  >
                    <h2 className="text-lg font-bold text-navy dark:text-white">
                      {opt}
                    </h2>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* الخطوة ٣: بيانات التواصل */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 0.65, 0.3, 1] }}
              className="max-w-xl mx-auto"
            >
              <button
                onClick={() => setOption("")}
                className="text-sm text-aqua hover:underline mb-6"
              >
                ← رجوع لاختيار التفاصيل
              </button>

              {/* ملخص الطلب */}
              <div
                className="bg-blue-50 dark:bg-white/5 border border-aqua/30 dark:border-white/10
                rounded-xl px-5 py-3 mb-6 text-sm text-navy dark:text-white"
              >
                طلبك: <span className="font-bold">{type}</span> —{" "}
                <span className="font-bold">{option}</span>
              </div>

              <div
                className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-xl border
                border-gray-100 dark:border-white/10 space-y-4 text-right"
              >
                <input
                  type="text"
                  placeholder="الاسم"
                  className="w-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5
                  text-navy dark:text-white placeholder:text-gray-400 p-3 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-aqua transition"
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="رقم التواصل"
                  className="w-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5
                  text-navy dark:text-white placeholder:text-gray-400 p-3 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-aqua transition"
                  onChange={(e) => setPhone(e.target.value)}
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg
                  transition font-semibold"
                >
                  تنفيذ الطلب عبر واتساب
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Surveillance;

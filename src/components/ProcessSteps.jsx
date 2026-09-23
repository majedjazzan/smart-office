import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, Wrench, LifeBuoy } from "lucide-react";
import Reveal, { stagger, item } from "./Reveal";

function ProcessSteps() {
  const steps = [
    {
      icon: <PhoneCall size={26} className="text-aqua" />,
      title: "تواصل واستشارة",
      desc: "نسمع احتياجك ونحدد أفضل حل هندسي مناسب لمكتبك أو مشروعك",
    },
    {
      icon: <ClipboardList size={26} className="text-steel" />,
      title: "تصميم ودراسة",
      desc: "نجهز خطة فنية ومخطط تنفيذ واضح قبل البدء بأي عمل",
    },
    {
      icon: <Wrench size={26} className="text-navy dark:text-white" />,
      title: "تنفيذ وتركيب",
      desc: "فريقنا الهندسي ينفذ العمل بأعلى معايير الجودة والدقة.",
    },
    {
      icon: <LifeBuoy size={26} className="text-aqua" />,
      title: "دعم ومتابعة",
      desc: "نستمر بمتابعة الأنظمة وصيانتها بعد التسليم مباشرة",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <Reveal>
          <h3 className="text-4xl font-bold text-navy dark:text-white">
            How We Work
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 text-gray-500 dark:text-gray-300">
            من أول اتصال إلى التشغيل الكامل
          </p>
        </Reveal>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {steps.map((s, i) => (
          <motion.div
            key={i}
            variants={item}
            className="relative bg-white dark:bg-white/5 rounded-2xl p-7
            border border-gray-100 dark:border-white/10 shadow-sm"
          >
            <span
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-navy dark:bg-aqua text-white
              flex items-center justify-center font-bold text-sm"
            >
              {i + 1}
            </span>
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-white/10 flex items-center justify-center mb-4">
              {s.icon}
            </div>
            <h4 className="font-bold text-navy dark:text-white mb-2">
              {s.title}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ProcessSteps;

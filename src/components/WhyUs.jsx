import { motion } from "framer-motion";
import { Zap, ShieldCheck, Wifi, Headphones } from "lucide-react";
import Reveal, { stagger, item } from "./Reveal";

function WhyUs() {
  const features = [
    {
      icon: <Zap className="text-aqua" size={28} />,
      title: "Fast Deployment",
      desc: "من الاستشارة إلى التنفيذ الكامل بأسرع وقت ممكن، بدون تعقيد",
    },
    {
      icon: <ShieldCheck className="text-steel" size={28} />,
      title: "Reliable Engineering",
      desc: "حلول مبنية على معايير هندسية دقيقة وأجهزة موثوقة عالمياً",
    },
    {
      icon: <Wifi className="text-navy dark:text-white" size={28} />,
      title: "Integrated Systems",
      desc: "طاقة، مراقبة، إنترنت، وبرمجيات تعمل معاً كمنظومة ذكية واحدة",
    },
    {
      icon: <Headphones className="text-aqua" size={28} />,
      title: "Ongoing Support",
      desc: "متابعة وصيانة مستمرة للأنظمة بعد التسليم مباشرة",
    },
  ];

  return (
    <section className="py-28 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-5xl font-bold text-navy dark:text-white">
              Why Smart Office
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-gray-500 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              لأننا نملك رؤية هندسية متكاملة تخدم مكتبك أو مشروعك من أول استشارة
              لآخر صيانة
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
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-blue-50/60 dark:bg-white/5 border border-gray-100
              dark:border-white/10 text-center"
            >
              <div
                className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white dark:bg-white/10
                flex items-center justify-center shadow-md"
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-navy dark:text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUs;

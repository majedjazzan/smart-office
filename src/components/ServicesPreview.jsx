import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Satellite, Camera, Code2, ArrowLeft } from "lucide-react";
import Reveal, { stagger, item } from "./Reveal";

function ServicesPreview() {
  const services = [
    {
      icon: <Sun size={30} className="text-white" />,
      title: "Solar Energy",
      desc: "أنظمة طاقة شمسية ذكية من الاستشارة للتنفيذ الكامل",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: <Satellite size={30} className="text-white" />,
      title: "Starlink",
      desc: "إنترنت فضائي سريع ومستقر بكل مكان",
      color: "from-aqua to-steel",
    },
    {
      icon: <Camera size={30} className="text-white" />,
      title: "Surveillance",
      desc: "أنظمة مراقبة وإنذار حديثة لحماية مكتبك",
      color: "from-navy to-slate-700",
    },
    {
      icon: <Code2 size={30} className="text-white" />,
      title: "Software",
      desc: "أنظمة برمجية متكاملة تناسب أعمالك",
      color: "from-steel to-aqua",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50 dark:from-[#0B1120] dark:to-[#111827]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-5xl font-bold text-navy dark:text-white">
              What We Offer
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-gray-500 dark:text-gray-300 text-lg">
              أربعة مجالات هندسية، فريق واحد، رؤية متكاملة
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-white/5 rounded-3xl p-8 border border-gray-100
              dark:border-white/10 shadow-md hover:shadow-xl transition text-center"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color}
                flex items-center justify-center mb-6 mx-auto shadow-lg`}
              >
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
              border-2 border-navy dark:border-white text-navy dark:text-white
              font-semibold hover:bg-navy hover:text-white dark:hover:bg-white
              dark:hover:text-navy transition duration-300"
            >
              See All Services
              <ArrowLeft size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ServicesPreview;

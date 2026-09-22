import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal, { stagger, item } from "./Reveal";
import ContactForm from "./ContactForm";

function Contact() {
  const quickContacts = [
    {
      icon: <MessageCircle size={26} className="text-white" />,
      label: "واتساب",
      value: "+963 937 192 778",
      href: "https://wa.me/963937192778",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Phone size={26} className="text-white" />,
      label: "اتصال مباشر",
      value: "+963 5274 5274",
      href: "tel:+96352745274",
      color: "from-steel to-navy",
    },
    {
      icon: <Mail size={26} className="text-white" />,
      label: "البريد الإلكتروني",
      value: "smartofficesmof@gmail.com",
      href: "mailto:smartofficesmof@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <MapPin size={26} className="text-white" />,
      label: "الموقع",
      value: "Aljarmaqani Tower, 5th Floor",
      href: "https://www.google.com/maps?q=32.711396112660466,36.56790067775972",
      color: "from-red-500 to-red-600",
      external: true,
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="pt-40 pb-28 bg-gradient-to-b from-white to-blue-50 dark:from-[#0B1120] dark:to-[#111827]"
      >
        {/* Title */}
        <div className="text-center mb-14 px-6">
          <Reveal>
            <h2 className="text-5xl font-bold text-navy dark:text-white">
              Contact Us
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-gray-500 dark:text-gray-300 text-lg">
              We are here to support your engineering needs
            </p>
          </Reveal>
        </div>

        {/* ساعات العمل */}
        <Reveal delay={0.1}>
          <div className="max-w-3xl mx-auto px-6 mb-16">
            <div
              className="flex items-center justify-center gap-3 rounded-2xl bg-navy/5 dark:bg-white/5
              border border-navy/10 dark:border-white/10 px-6 py-4 text-center"
            >
              <Clock size={20} className="text-aqua shrink-0" />
              <p className="text-navy dark:text-white font-semibold">
                السبت - الخميس: 24 ساعة عمل
                <span className="text-gray-500 dark:text-gray-400 font-normal">
                  {" "}
                  · الجمعة: إجازة
                </span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Quick Contact Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mb-16"
        >
          {quickContacts.map((c, i) => (
            <motion.a
              key={i}
              variants={item}
              href={c.href}
              target={
                c.external || c.href.startsWith("http") ? "_blank" : undefined
              }
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100
              dark:border-white/10 shadow-md hover:shadow-xl transition text-center"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${c.color}
                flex items-center justify-center shadow-lg`}
              >
                {c.icon}
              </div>
              <h4 className="font-bold text-navy dark:text-white mb-1">
                {c.label}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-300 break-words">
                {c.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Form + Map */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {/* Contact Form */}
          <Reveal from="right">
            <div
              className="bg-white/90 dark:bg-white/5 backdrop-blur-xl p-10 rounded-3xl
              shadow-xl border border-gray-100 dark:border-white/10 h-full"
            >
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-8 text-right">
                أرسل طلبك مباشرة
              </h3>
              <ContactForm />
            </div>
          </Reveal>

          {/* Map */}
          <Reveal from="left" delay={0.1}>
            <div
              className="rounded-3xl overflow-hidden shadow-xl border border-gray-100
              dark:border-white/10 h-full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d419.630793461979!2d36.56790067775972!3d32.711396112660466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2KfZhNiz2YjZitiv2KfYoSDYtNin2LHYuSDYp9mE2KjZhNiv2YrYqSA!5e0!3m2!1sar!2sde!4v1777460927889!5m2!1sar!2sde"
                width="100%"
                height="100%"
                className="min-h-[420px]"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/963937192778"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-50 grid place-items-center"
      >
        {/* الحلقة النابضة — خلف الزر، ما بتكبّر الزر نفسه */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{ scale: [1, 1.7], opacity: [0.55, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors duration-300">
          <FaWhatsapp className="text-3xl" />
        </span>
      </motion.a>
    </>
  );
}

export default Contact;

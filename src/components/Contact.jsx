import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Reveal, { stagger, item } from "./Reveal";

function Contact() {
  const rows = [
    {
      icon: <FaEnvelope className="text-blue-500 text-xl" />,
      content: (
        <a
          href="mailto:smartofficesmof@gmail.com"
          className="hover:text-blue-500 transition"
        >
          smartofficesmof@gmail.com
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-xl" />,
      content: <p>Aljarmaqani Tower, 5th Floor, Office No. 4</p>,
    },
    {
      icon: <FaWhatsapp className="text-green-500 text-2xl" />,
      content: (
        <a
          href="https://wa.me/963937192778"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-500 transition font-medium"
        >
          +963 937 192 778
        </a>
      ),
    },
    {
      icon: <FaPhoneAlt className="text-steel text-xl" />,
      content: (
        <a href="tel:+96352745274" className="hover:text-steel transition">
          +963 5274 5274
        </a>
      ),
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="py-28 bg-gradient-to-b from-white to-blue-50 dark:from-[#0B1120] dark:to-[#111827]"
      >
        {/* Title */}
        <div className="text-center mb-16">
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

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {/* Contact Info */}
          <Reveal from="right">
            <div
              className="bg-white/90 dark:bg-white/5 backdrop-blur-xl p-10 rounded-3xl
              shadow-xl border border-gray-100 dark:border-white/10 text-right h-full"
            >
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-8">
                Contact Information
              </h3>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-7 text-gray-700 dark:text-gray-300"
              >
                {rows.map((row, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="flex items-center gap-4 justify-end group"
                  >
                    <motion.span
                      whileHover={{ scale: 1.18 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                      className="flex items-center justify-center"
                    >
                      {row.icon}
                    </motion.span>
                    {row.content}
                  </motion.div>
                ))}
              </motion.div>
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

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function WhatsAppButton() {
  const { isArabic } = useLanguage();

  return (
    <motion.a
      key={isArabic ? "arabic-whatsapp" : "english-whatsapp"}
      href="https://wa.me/963937192778"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className={`fixed bottom-6 z-50 grid place-items-center ${
        isArabic ? "left-6" : "right-6"
      }`}
      aria-label="WhatsApp"
    >
      {/* الحلقة النابضة خلف الزر */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.7],
          opacity: [0.55, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* زر واتساب */}
      <span
        className="relative bg-green-500 hover:bg-green-600
        text-white p-4 rounded-full shadow-2xl
        transition-colors duration-300"
      >
        <FaWhatsapp className="text-3xl" />
      </span>
    </motion.a>
  );
}

export default WhatsAppButton;

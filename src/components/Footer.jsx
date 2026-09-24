import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import logo from "../assets/smart-office-logo.png";
import Reveal, { stagger, item } from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  const links = [
    {
      to: "/",
      label: t("nav.home"),
    },
    {
      to: "/services",
      label: t("nav.services"),
    },
    {
      to: "/contact",
      label: t("nav.contact"),
    },
  ];

  const contacts = [
    {
      icon: <FaEnvelope className="text-aqua" />,
      text: "smartofficesmof@gmail.com",
    },
    {
      icon: <FaWhatsapp className="text-green-400" />,
      text: "+963 937 192 778",
    },
    {
      icon: <FaPhoneAlt className="text-steel" />,
      text: "+963 5274 5274",
    },
  ];

  return (
    <footer
      className="relative bg-gradient-to-b from-navy to-[#08101f]
      text-white pt-20 pb-8 overflow-hidden"
    >
      {/* Glow background */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72
        bg-aqua/20 blur-[120px] rounded-full"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72
        bg-steel/20 blur-[120px] rounded-full"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* FOOTER CONTENT */}
      <div
        className="relative max-w-7xl mx-auto px-8
        grid md:grid-cols-3 gap-12 items-start"
      >
        {/* LOGO + ABOUT */}
        <Reveal>
          <div className="md:-mt-8">
            <motion.img
              src={logo}
              alt="Smart Office"
              whileHover={{
                scale: 1.06,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="w-36 h-auto mb-2 object-contain"
            />

            <p className="text-white/70 leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
          </div>
        </Reveal>

        {/* QUICK LINKS */}
        <Reveal delay={0.1}>
          <div>
            <h3 className="text-xl font-semibold mb-5">
              {t("footer.quickLinks")}
            </h3>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.4,
              }}
              className="flex flex-col gap-3 text-white/70"
            >
              {links.map((link) => (
                <motion.div key={link.to} variants={item} className="w-fit">
                  <Link
                    to={link.to}
                    className="hover:text-aqua transition inline-block"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Reveal>

        {/* CONTACT */}
        <Reveal delay={0.2}>
          <div>
            <h3 className="text-xl font-semibold mb-5">
              {t("footer.contact")}
            </h3>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.4,
              }}
              className="space-y-4 text-white/70"
            >
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-center gap-3"
                >
                  {contact.icon}

                  {/* Keep email and phone numbers LTR */}
                  <span dir="ltr">{contact.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>

      {/* BOTTOM LINE */}
      <Reveal delay={0.15}>
        <div
          className="relative border-t border-white/10
          mt-14 pt-6 text-center text-white/50 text-sm"
        >
          © {new Date().getFullYear()} Smart Office. {t("footer.allRights")}
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;

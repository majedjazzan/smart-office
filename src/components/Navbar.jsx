import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/smart-office-logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const controlNavbar = () => {
      setShowNavbar(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const goTo = (path) => {
    setMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/services", label: t("nav.services") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const handleLanguageToggle = () => {
    toggleLanguage();
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      backdrop-blur-xl bg-white/70 dark:bg-[#0B1120]/70
      border-b border-white/10 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20 md:h-28">
        {/* LOGO */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => goTo("/")}
        >
          <img
            src={logo}
            alt="Smart Office"
            className="w-32 h-32 md:w-44 md:h-44 lg:w-64 lg:h-64
            object-contain drop-shadow-2xl hover:scale-105
            transition duration-300"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-navy dark:text-white text-lg font-semibold">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => goTo(item.path)}
                className={`relative capitalize transition duration-300 pb-1 ${
                  active ? "text-aqua" : "hover:text-aqua"
                }`}
              >
                {item.label}

                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-aqua"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}

          {/* LANGUAGE */}
          <button
            onClick={handleLanguageToggle}
            aria-label={t("nav.language")}
            className="flex items-center gap-2 px-4 py-2 rounded-full
            bg-gradient-to-r from-steel to-aqua text-white shadow-lg
            hover:scale-105 transition duration-300"
          >
            <Languages size={18} />

            <span className="text-sm font-bold">{t("nav.language")}</span>
          </button>

          {/* THEME */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={t("nav.toggleTheme")}
            className="relative w-11 h-11 rounded-full flex items-center
            justify-center overflow-hidden bg-gradient-to-r
            from-steel to-aqua text-white shadow-lg
            hover:scale-110 transition"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={darkMode ? "sun" : "moon"}
                initial={{
                  rotate: -90,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 0.65, 0.3, 1],
                }}
                className="flex items-center justify-center"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-3">
          {/* LANGUAGE */}
          <button
            onClick={handleLanguageToggle}
            aria-label={t("nav.language")}
            className="flex items-center gap-1 px-3 py-2 rounded-full
            bg-gradient-to-r from-steel to-aqua text-white shadow-lg"
          >
            <Languages size={16} />

            <span className="text-xs font-bold">
              {language === "en" ? "AR" : "EN"}
            </span>
          </button>

          {/* THEME */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={t("nav.toggleTheme")}
            className="relative w-10 h-10 rounded-full flex items-center
            justify-center overflow-hidden bg-gradient-to-r
            from-steel to-aqua text-white shadow-lg"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={darkMode ? "sun-m" : "moon-m"}
                initial={{
                  rotate: -90,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 0.65, 0.3, 1],
                }}
                className="flex items-center justify-center"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* MENU */}
          <button
            className="text-navy dark:text-white cursor-pointer relative w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t("nav.toggleMenu")}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 0.65, 0.3, 1],
            }}
            className="md:hidden overflow-hidden backdrop-blur-xl
            bg-white/90 dark:bg-[#0B1120]/95
            border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-5 text-navy dark:text-white">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => goTo(item.path)}
                  className={`block w-full text-start hover:text-aqua ${
                    location.pathname === item.path ? "text-aqua font-bold" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

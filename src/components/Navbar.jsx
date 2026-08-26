import { useState, useEffect } from "react";
import logo from "../assets/smart-office-logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // إخفاء وإظهار النافبار عند السكروول
  useEffect(() => {
    const controlNavbar = () => {
      setShowNavbar(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // معرفة السكشن الحالي
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 150;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smooth
  const scrollToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      backdrop-blur-xl bg-white/70 dark:bg-[#0B1120]/70 border-b border-white/10 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-28">
        {/* LOGO */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src={logo}
            alt="Smart Office"
            className="w-64 h-64 object-contain drop-shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-12 text-navy dark:text-white text-lg font-semibold">
          {["home", "services", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative capitalize transition duration-300
              after:absolute after:bottom-[-6px] after:left-0 after:h-[2px]
              after:bg-aqua after:transition-all
              ${
                active === item
                  ? "text-aqua after:w-full"
                  : "hover:text-aqua after:w-0 hover:after:w-full"
              }`}
            >
              {item === "home"
                ? "Home"
                : item === "services"
                  ? "Services"
                  : "Contact"}
            </button>
          ))}

          {/* زر الثيم */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-11 h-11 rounded-full flex items-center justify-center
            bg-gradient-to-r from-steel to-aqua text-white shadow-lg hover:scale-110 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div
          className="md:hidden text-3xl text-navy dark:text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="md:hidden backdrop-blur-xl bg-white/90 dark:bg-[#0B1120]/95
          border-t border-white/10 px-6 py-6 space-y-5 text-navy dark:text-white"
        >
          <button
            onClick={() => scrollToSection("home")}
            className="block w-full text-right hover:text-aqua"
          >
            الرئيسية
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-right hover:text-aqua"
          >
            خدماتنا
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-right hover:text-aqua"
          >
            تواصل معنا
          </button>

          {/* زر الثيم بالموبايل */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-steel to-aqua text-white"
          >
            {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

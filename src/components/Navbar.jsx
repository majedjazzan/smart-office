import { useState, useEffect } from "react";
import logo from "../assets/smart-office-logo.png";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // التحكم بإظهار/إخفاء النافبار
  useEffect(() => {
    const controlNavbar = () => {
      setShowNavbar(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // تتبع السكشن الحالي
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

  // سكروول ناعم
  const scrollToSection = (id) => {
    setMenuOpen(false);

    // إذا نحن بصفحة غير الرئيسية
    if (location.pathname !== "/") {
      navigate("/");

      // ننتظر تحميل الصفحة ثم ننزل
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      // إذا نحن بالهوم
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300
      backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
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
            className="w-56 h-56 object-contain drop-shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-12 text-navy text-lg font-semibold">
          <button
            onClick={() => scrollToSection("home")}
            className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-aqua after:transition-all
            ${
              active === "home"
                ? "text-aqua after:w-full"
                : "hover:text-aqua after:w-0 hover:after:w-full"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-aqua after:transition-all
            ${
              active === "services"
                ? "text-aqua after:w-full"
                : "hover:text-aqua after:w-0 hover:after:w-full"
            }`}
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-aqua after:transition-all
            ${
              active === "contact"
                ? "text-aqua after:w-full"
                : "hover:text-aqua after:w-0 hover:after:w-full"
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div
          className="md:hidden text-3xl text-navy cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-navy/90 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4 text-white">
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;

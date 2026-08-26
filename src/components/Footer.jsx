import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/smart-office-logo.png";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-navy to-[#08101f] text-white pt-20 pb-8 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-aqua/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-steel/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
        {/* Logo + About */}
        <div>
          <img
            src={logo}
            alt="Smart Office"
            className="w-36 mb-5 object-contain"
          />

          <p className="text-white/70 leading-relaxed">
            Smart Office provides intelligent engineering solutions in solar
            energy, surveillance systems, Starlink internet, and software
            development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <div className="flex flex-col gap-3 text-white/70">
            <a href="#home" className="hover:text-aqua transition">
              Home
            </a>

            <a href="#services" className="hover:text-aqua transition">
              Services
            </a>

            <a href="#contact" className="hover:text-aqua transition">
              Contact
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>

          <div className="space-y-4 text-white/70">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-aqua" />
              <span>smartofficesmof@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400" />
              <span>+963 937 192 778</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-steel" />
              <span>+963 5274 5274</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="relative border-t border-white/10 mt-14 pt-6 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Smart Office. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

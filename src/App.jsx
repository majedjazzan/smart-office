import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import SolarConsult from "./components/SolarConsult";

// الصفحات الرئيسية
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";

// صفحات الخدمات
import Solar from "./Pages/Solar";
import Starlink from "./Pages/Starlink";
import Software from "./Pages/Software";
import Surveillance from "./Pages/Surveillance";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />

        <div className="bg-gradient-to-b from-white via-blue-50 to-white dark:from-[#0B1120] dark:via-[#111827] dark:to-[#0F172A] text-onyx dark:text-white min-h-screen transition-all duration-500">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/camera" element={<Surveillance />} />
            <Route path="/solar-consult" element={<SolarConsult />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/starlink" element={<Starlink />} />
            <Route path="/software" element={<Software />} />
          </Routes>

          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

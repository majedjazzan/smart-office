import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SolarConsult from "./components/SolarConsult";

// الصفحات الرئيسية (كل وحدة أصبحت مستقلة براوت خاص فيها)
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";

// صفحات الخدمات
import Solar from "./Pages/Solar";
import Starlink from "./Pages/Starlink";
import Software from "./Pages/Software";
import Surveillance from "./Pages/Surveillance";

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
    <BrowserRouter>
      <div className="bg-gradient-to-b from-white via-blue-50 to-white dark:from-[#0B1120] dark:via-[#111827] dark:to-[#0F172A] text-onyx dark:text-white min-h-screen transition-all duration-500">
        {/* ثابت بكل الصفحات */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          {/* الصفحة الرئيسية: Hero + قسم تعريفي (WhyUs) */}
          <Route path="/" element={<Home />} />

          {/* صفحة الخدمات المستقلة */}
          <Route path="/services" element={<Services />} />

          {/* صفحة التواصل المستقلة */}
          <Route path="/contact" element={<Contact />} />

          <Route path="/camera" element={<Surveillance />} />
          <Route path="/solar-consult" element={<SolarConsult />} />

          <Route path="/solar" element={<Solar />} />
          <Route path="/starlink" element={<Starlink />} />
          <Route path="/software" element={<Software />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

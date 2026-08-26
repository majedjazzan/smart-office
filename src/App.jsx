import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SolarConsult from "./components/SolarConsult";

// صفحات الخدمات
import Solar from "./Pages/Solar";
import Starlink from "./Pages/Starlink";
import Camera from "./Pages/Camera";
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
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Contact />
              </>
            }
          />

          <Route path="/camera" element={<Surveillance />} />
          <Route path="/solar-consult" element={<SolarConsult />} />

          <Route path="/solar" element={<Solar />} />
          <Route path="/starlink" element={<Starlink />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/software" element={<Software />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

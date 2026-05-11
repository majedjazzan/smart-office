import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SolarConsult from "./components/SolarConsult";
// صفحات الخدمات
import Solar from "./pages/Solar";
import Starlink from "./pages/Starlink";
import Camera from "./pages/Camera";
import Software from "./pages/Software";
import Surveillance from "./pages/Surveillance";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b from-white via-blue-50 to-white text-onyx">
        {/* ثابت بكل الصفحات */}
        <Navbar />

        <Routes>
          {/* الصفحة الرئيسية */}
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
          {/* صفحات الخدمات */}
          <Route path="/solar" element={<Solar />} />
          <Route path="/starlink" element={<Starlink />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/software" element={<Software />} />
        </Routes>

        {/* ثابت بكل الصفحات */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

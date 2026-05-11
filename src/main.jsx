import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

AOS.init({
  duration: 1200, // مدة الحركة بالمللي ثانية
  once: true, // تظهر الحركة مرة واحدة فقط عند النزول
});

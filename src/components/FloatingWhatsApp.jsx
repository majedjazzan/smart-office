import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/963937192778?text=مرحبا%20اريد%20الاستفسار%20عن%20خدمات%20Smart%20Office"
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-500 w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white text-3xl hover:bg-green-600 transition z-50"
      title="تواصل معنا عبر واتساب"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default FloatingWhatsApp;

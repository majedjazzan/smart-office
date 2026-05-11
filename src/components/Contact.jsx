import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="py-28 bg-gradient-to-b from-white to-blue-50"
      >
        {/* عنوان */}
        <h2 className="text-4xl font-bold text-center text-navy mb-16">
          Contact Us
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {/* معلومات التواصل */}
          <div className="bg-white p-10 rounded-2xl shadow-lg text-right">
            <h3 className="text-2xl font-bold text-navy mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-gray-700">
              {/* الإيميل */}
              <div className="flex items-center gap-3 justify-end">
                <span className="text-xl">📧</span>

                <a
                  href="mailto:enghashem06@gmail.com"
                  className="hover:text-blue-500 transition"
                >
                  enghashem06@gmail.com
                </a>
              </div>

              {/* الموقع */}
              <div className="flex items-center gap-3 justify-end">
                <span className="text-xl">📍</span>

                <p>Aljarmaqani Tower, 5th Floor, Office No. 4</p>
              </div>

              {/* واتساب */}
              <div className="flex items-center gap-3 justify-end">
                <FaWhatsapp className="text-green-500 text-xl" />

                <a
                  href="https://wa.me/963937192778"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-600 transition font-medium"
                >
                  +963 937 192 778
                </a>
              </div>

              {/* الهاتف */}
              <div className="flex items-center gap-3 justify-end">
                <span className="text-xl">📞</span>

                <a
                  href="tel:+96352745274"
                  className="hover:text-blue-500 transition"
                >
                  +963 5274 5274
                </a>
              </div>
            </div>
          </div>

          {/* الخريطة */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d419.630793461979!2d36.56790067775972!3d32.711396112660466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2KfZhNiz2YjZitiv2KfYoSDYtNin2LHYuSDYp9mE2KjZhNiv2YrYqSA!5e0!3m2!1sar!2sde!4v1777460927889!5m2!1sar!2sde"
              width="100%"
              height="100%"
              className="min-h-[350px]"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 🚀 زر واتساب العائم */}
      <a
        href="https://wa.me/963937192778"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 z-50 hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </>
  );
}

export default Contact;

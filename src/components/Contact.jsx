import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="py-28 bg-gradient-to-b from-white to-blue-50 dark:from-[#0B1120] dark:to-[#111827]"
      >
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-navy dark:text-white">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300 text-lg">
            We are here to support your engineering needs
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {/* Contact Info */}
          <div
            className="bg-white/90 dark:bg-white/5 backdrop-blur-xl p-10 rounded-3xl
            shadow-xl border border-gray-100 dark:border-white/10 text-right"
          >
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-7 text-gray-700 dark:text-gray-300">
              {/* Email */}
              <div className="flex items-center gap-4 justify-end group">
                <FaEnvelope className="text-blue-500 text-xl group-hover:scale-110 transition" />

                <a
                  href="mailto:smartofficesmof@gmail.com"
                  className="hover:text-blue-500 transition"
                >
                  smartofficesmof@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 justify-end group">
                <FaMapMarkerAlt className="text-red-500 text-xl group-hover:scale-110 transition" />

                <p>Aljarmaqani Tower, 5th Floor, Office No. 4</p>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 justify-end group">
                <FaWhatsapp className="text-green-500 text-2xl group-hover:scale-110 transition" />

                <a
                  href="https://wa.me/963937192778"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-500 transition font-medium"
                >
                  +963 937 192 778
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 justify-end group">
                <FaPhoneAlt className="text-steel text-xl group-hover:scale-110 transition" />

                <a
                  href="tel:+96352745274"
                  className="hover:text-steel transition"
                >
                  +963 5274 5274
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-100
            dark:border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d419.630793461979!2d36.56790067775972!3d32.711396112660466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2KfZhNiz2YjZitiv2KfYoSDYtNin2LHYuSDYp9mE2KjZhNiv2YrYqSA!5e0!3m2!1sar!2sde!4v1777460927889!5m2!1sar!2sde"
              width="100%"
              height="100%"
              className="min-h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/963937192778"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600
        text-white p-4 rounded-full shadow-2xl transition-all duration-300
        z-50 hover:scale-110 animate-pulse"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </>
  );
}

export default Contact;

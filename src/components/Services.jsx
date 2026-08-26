import { Link } from "react-router-dom";
import solar from "../assets/solar.png";
import starlink from "../assets/starlink.png";
import camera from "../assets/camera.png";
import software from "../assets/software.png";

function Services() {
  const services = [
    {
      title: "Solar Energy",
      desc: "Smart solar solutions with advanced engineering systems.",
      img: solar,
      border: "border-steel",
      buttons: [
        { text: "طلب استشارة", link: "/solar-consult" },
        { text: "تنفيذ", link: "/solar" },
      ],
    },
    {
      title: "Starlink",
      desc: "Fast and stable satellite internet solutions.",
      img: starlink,
      border: "border-aqua",
      buttons: [{ text: "أنواع الخدمات", link: "/starlink" }],
    },
    {
      title: "Surveillance",
      desc: "Modern security cameras and alarm systems.",
      img: camera,
      border: "border-navy",
      buttons: [{ text: "اختر النظام", link: "/camera" }],
    },
    {
      title: "Software",
      desc: "Integrated digital systems for smart businesses.",
      img: software,
      border: "border-steel",
      buttons: [{ text: "اطلب نظام", link: "/software" }],
    },
  ];

  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-white to-blue-50 dark:from-[#0B1120] dark:to-[#111827]"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-navy dark:text-white">
          Our Services
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-300 text-lg">
          Smart solutions tailored for modern engineering
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative bg-white dark:bg-white/5 rounded-3xl overflow-hidden
            shadow-lg hover:shadow-2xl border border-gray-100 dark:border-white/10
            hover:-translate-y-3 transition duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className={`p-6 border-t-4 ${service.border}`}>
              <h3 className="text-2xl font-bold text-navy dark:text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>

            {/* Hover Layer */}
            <div
              className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100
              flex flex-col justify-center items-center gap-4 transition duration-400 px-6"
            >
              {service.buttons.map((btn, index) => (
                <Link
                  key={index}
                  to={btn.link}
                  className="w-full text-center bg-white text-navy px-5 py-3 rounded-full
                  font-semibold hover:bg-gray-100 hover:scale-105 transition"
                >
                  {btn.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

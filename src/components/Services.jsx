import { Link } from "react-router-dom";
import solar from "../assets/solar.png";
import starlink from "../assets/starlink.png";
import camera from "../assets/camera.png";
import software from "../assets/software.png";

function Services() {
  const services = [
    {
      title: "Solar Energy",
      desc: "Smart solar solutions",
      img: solar,
      border: "border-steel",
      buttons: [
        {
          text: "طلب استشارة",
          type: "link",
          link: "/solar-consult",
        },
        {
          text: "تنفيذ",
          type: "link",
          link: "/solar",
        },
      ],
    },
    {
      title: "Starlink",
      desc: "Satellite Internet",
      img: starlink,
      border: "border-aqua",
      buttons: [
        {
          text: " أنواع الخدمات",
          type: "link",
          link: "/starlink",
        },
      ],
    },
    {
      title: "Surveillance",
      desc: "Security Systems",
      img: camera,
      border: "border-navy",
      buttons: [
        {
          text: "اختر النظام",
          type: "link",
          link: "/camera",
        },
      ],
    },
    {
      title: "Software",
      desc: "Digital Solutions",
      img: software,
      border: "border-steel",
      buttons: [
        {
          text: "اطلب نظام",
          type: "link",
          link: "/software",
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-white to-blue-50"
    >
      <h2 className="text-4xl font-bold text-center text-navy mb-16">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-8 px-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className={`p-6 border-t-4 ${service.border}`}>
              <h3 className="text-xl font-bold text-navy">{service.title}</h3>
              <p className="mt-3 text-gray-600 text-sm">{service.desc}</p>
            </div>

            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-3 transition duration-300 px-4">
              {service.buttons.map((btn, index) => {
                if (btn.type === "link") {
                  return (
                    <Link
                      key={index}
                      to={btn.link}
                      className="w-full text-center bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200"
                    >
                      {btn.text}
                    </Link>
                  );
                }

                return (
                  <a
                    key={index}
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      btn.msg,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600"
                  >
                    {btn.text}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

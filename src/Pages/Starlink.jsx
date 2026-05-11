import { useState } from "react";

function Starlink() {
  const [service, setService] = useState("Starlink");
  const [packageType, setPackageType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    const message = `
طلب خدمة انترنت

الخدمة: ${service}
الباقة: ${packageType}
الاسم: ${name}
رقم التواصل: ${phone}
`;

    const url = `https://wa.me/963937192778?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  const packages =
    service === "Starlink" ? ["Standard", "Mini"] : ["Viber", "Public"];

  return (
    <div className="min-h-screen pt-56 pb-24 px-6 bg-gradient-to-b from-white to-blue-50 text-center">
      <div className="max-w-5xl mx-auto space-y-12 animate-fadeIn">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy">
            اختر خدمة الإنترنت
          </h1>

          <p className="text-gray-600 text-lg">
            اختر نوع الخدمة والباقه المناسبة، ثم أرسل الطلب مباشرة عبر واتساب
          </p>
        </div>

        <div className="flex justify-center gap-5">
          <button
            onClick={() => {
              setService("Starlink");
              setPackageType("");
            }}
            className={`px-10 py-4 rounded-2xl font-bold transition-all duration-300 shadow-md hover:-translate-y-1 ${
              service === "Starlink"
                ? "bg-blue-600 text-white scale-105"
                : "bg-white text-navy hover:bg-gray-100"
            }`}
          >
            Starlink
          </button>

          <button
            onClick={() => {
              setService("ADSL");
              setPackageType("");
            }}
            className={`px-10 py-4 rounded-2xl font-bold transition-all duration-300 shadow-md hover:-translate-y-1 ${
              service === "ADSL"
                ? "bg-blue-600 text-white scale-105"
                : "bg-white text-navy hover:bg-gray-100"
            }`}
          >
            ADSL
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, i) => (
            <div
              key={i}
              onClick={() => setPackageType(pkg)}
              className={`cursor-pointer p-10 rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                packageType === pkg
                  ? "border-blue-600 bg-blue-50 shadow-2xl scale-105"
                  : "border-gray-200 shadow-md"
              }`}
            >
              <h2 className="text-3xl font-extrabold text-navy">{pkg}</h2>

              <p className="text-gray-500 mt-4">اضغط لاختيار هذه الباقة</p>
            </div>
          ))}
        </div>

        {packageType && (
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-xl mx-auto space-y-5 animate-slideUp">
            <h2 className="text-2xl font-bold text-navy">بيانات الطلب</h2>

            <input
              type="text"
              placeholder="الاسم"
              className="w-full border border-gray-300 p-4 rounded-xl text-right focus:outline-none focus:border-blue-500"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="رقم التواصل"
              className="w-full border border-gray-300 p-4 rounded-xl text-right focus:outline-none focus:border-blue-500"
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 hover:scale-105 transition-all duration-300"
            >
              تنفيذ الطلب عبر واتساب
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Starlink;

import { useState } from "react";

function Software() {
  const [type, setType] = useState("");
  const [option, setOption] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    const message = `
طلب خدمة برمجية

النوع: ${type}
الخدمة: ${option}
الاسم: ${name}
رقم التواصل: ${phone}
تفاصيل: ${details}
    `;

    const url = `https://wa.me/963937192778?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-56 pb-24 px-6 bg-gradient-to-b from-white to-blue-50 text-center">
      <h1 className="text-4xl font-bold text-navy mb-6">
        الحلول الرقمية والبرمجية
      </h1>

      {/* اختيار النوع */}
      <div className="flex flex-wrap justify-center gap-4">
        {["أنظمة إدارية", "مواقع إلكترونية", "تطبيقات", "حل مخصص"].map(
          (item, i) => (
            <button
              key={i}
              onClick={() => {
                setType(item);
                setOption("");
              }}
              className={`px-6 py-3 rounded-xl ${
                type === item ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {item}
            </button>
          ),
        )}
      </div>

      {/* الخيارات */}
      {type && (
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
          {(type === "أنظمة إدارية"
            ? ["محاسبة", "إدارة شركات", "ERP"]
            : type === "مواقع إلكترونية"
              ? ["موقع شركة", "متجر إلكتروني", "موقع شخصي"]
              : type === "تطبيقات"
                ? ["تطبيق موبايل", "Dashboard", "نظام داخلي"]
                : ["نظام مخصص", "أتمتة أعمال", "حل خاص"]
          ).map((opt, i) => (
            <div
              key={i}
              onClick={() => setOption(opt)}
              className={`cursor-pointer p-6 rounded-2xl border transition
              ${
                option === opt
                  ? "border-blue-600 bg-blue-50 shadow-xl"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2 className="text-lg font-bold">{opt}</h2>
            </div>
          ))}
        </div>
      )}

      {/* الفورم */}
      {option && (
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl mx-auto mt-10 space-y-4">
          <input
            type="text"
            placeholder="الاسم"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="رقم التواصل"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="اكتب تفاصيل المشروع..."
            className="w-full border p-3 rounded-lg h-28"
            onChange={(e) => setDetails(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 text-white py-3 rounded-lg"
          >
            إرسال الطلب عبر واتساب
          </button>
        </div>
      )}
    </div>
  );
}

export default Software;

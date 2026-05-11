import { useState } from "react";

function Surveillance() {
  const [type, setType] = useState("");
  const [option, setOption] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    const message = `
طلب نظام مراقبة

الخدمة: ${type}
التفاصيل: ${option}
الاسم: ${name}
رقم التواصل: ${phone}
    `;

    const url = `https://wa.me/963937192778?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-56 pb-24 px-6 bg-gradient-to-b from-white to-blue-50 text-center">
      <h1 className="text-4xl font-bold text-navy mb-6">
        أنظمة المراقبة والحماية
      </h1>

      {/* اختيار النوع */}
      <div className="flex justify-center gap-4 flex-wrap">
        {["كاميرات مراقبة", "أنظمة إنذار", "نظام متكامل"].map((item, i) => (
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
        ))}
      </div>

      {/* الخيارات */}
      {type && (
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
          {(type === "كاميرات مراقبة"
            ? ["منزلية", "شركات", "مستودعات"]
            : type === "أنظمة إنذار"
              ? ["سرقة", "حريق", "حساسات حركة"]
              : ["كاميرات + إنذار", "نظام ذكي", "مراقبة كاملة"]
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

          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 text-white py-3 rounded-lg"
          >
            تنفيذ الطلب عبر واتساب
          </button>
        </div>
      )}
    </div>
  );
}

export default Surveillance;

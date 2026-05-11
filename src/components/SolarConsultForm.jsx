import { useState } from "react";

function SolarConsultForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
طلب استشارة طاقة شمسية

الاسم: ${form.name}
رقم التواصل: ${form.phone}
    `;

    const url = `https://wa.me/963937192778?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 max-w-md mx-auto space-y-4"
    >
      <h2 className="text-xl font-bold text-center">طلب استشارة</h2>

      <input
        type="text"
        required
        placeholder="الاسم"
        className="w-full border p-3 rounded-lg"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="text"
        required
        placeholder="رقم التواصل"
        className="w-full border p-3 rounded-lg"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-3 rounded-lg"
      >
        إرسال عبر واتساب
      </button>
    </form>
  );
}

export default SolarConsultForm;

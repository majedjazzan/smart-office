import { useState } from "react";

function SolarForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
أريد تركيب منظومة طاقة شمسية

الاسم الثلاثي: ${form.name}
رقم التواصل: ${form.phone}
نوع الاستخدام: ${form.type}
`;

    const whatsappUrl = `https://wa.me/963937192778?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-2xl rounded-3xl p-8 max-w-xl mx-auto space-y-5"
    >
      <h2 className="text-2xl font-bold text-center text-navy">
        تنفيذ طلب طاقة شمسية
      </h2>

      <input
        type="text"
        required
        placeholder="الاسم الثلاثي"
        className="w-full border border-gray-300 rounded-xl p-4 text-right focus:outline-none focus:border-aqua"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="tel"
        required
        placeholder="رقم التواصل"
        className="w-full border border-gray-300 rounded-xl p-4 text-right focus:outline-none focus:border-aqua"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <select
        required
        className="w-full border border-gray-300 rounded-xl p-4 text-right focus:outline-none focus:border-aqua"
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="">اختر نوع الاستخدام</option>
        <option value="صناعي">صناعي</option>
        <option value="زراعي">زراعي</option>
        <option value="طبي">طبي</option>
        <option value="منزلي">منزلي</option>
      </select>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition"
      >
        تنفيذ الطلب عبر واتساب
      </button>
    </form>
  );
}

export default SolarForm;

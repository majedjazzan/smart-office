import { useState } from "react";

function ServiceForm({ serviceName }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    details: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const message = `
تنفيذ خدمة: ${serviceName}
الاسم: ${form.name}
رقم الهاتف: ${form.phone}
الموقع: ${form.location}
التفاصيل: ${form.details}
    `;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Request {serviceName}
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="details"
          placeholder="Write your request..."
          onChange={handleChange}
          className="w-full border p-3 rounded-lg h-32"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
        >
          Send via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default ServiceForm;

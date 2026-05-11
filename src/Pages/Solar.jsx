import SolarForm from "../components/SolarForm";

function Solar() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-navy mb-4">
          Solar Energy Services
        </h1>

        <p className="text-gray-600">
          اختر نوع الاستخدام واملأ البيانات، وسيتم إرسال الطلب مباشرة عبر
          واتساب.
        </p>
      </div>

      <SolarForm />
    </div>
  );
}

export default Solar;

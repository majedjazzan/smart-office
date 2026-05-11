import SolarConsultForm from "../components/SolarConsultForm";

function SolarConsult() {
  return (
    <div className="min-h-screen pt-44 pb-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-navy mb-4">
          طلب استشارة طاقة شمسية
        </h1>

        <p className="text-gray-600">
          أدخل بياناتك وسيتم التواصل معك مباشرة عبر واتساب.
        </p>
      </div>

      <SolarConsultForm />
    </div>
  );
}

export default SolarConsult;

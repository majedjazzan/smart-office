import Reveal from "./Reveal";
import SolarConsultForm from "./SolarConsultForm";

function SolarConsult() {
  return (
    <div className="min-h-screen pt-44 pb-20 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-[#0B1120] dark:to-[#111827]">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <Reveal>
          <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">
            طلب استشارة طاقة شمسية
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-gray-500 dark:text-gray-300">
            أدخل بياناتك وسيتم التواصل معك مباشرة عبر واتساب.
          </p>
        </Reveal>
      </div>

      <SolarConsultForm />
    </div>
  );
}

export default SolarConsult;

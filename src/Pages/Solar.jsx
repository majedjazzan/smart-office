import Reveal from "../components/Reveal";
import SolarForm from "../components/SolarForm";

function Solar() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-[#0B1120] dark:to-[#111827]">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <Reveal>
          <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">
            Solar Energy Services
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-gray-500 dark:text-gray-300">
            اختر نوع الاستخدام واملأ البيانات، وسيتم إرسال الطلب مباشرة عبر
            واتساب.
          </p>
        </Reveal>
      </div>

      <SolarForm />
    </div>
  );
}

export default Solar;

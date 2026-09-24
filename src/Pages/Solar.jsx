import Reveal from "../components/Reveal";
import SolarForm from "../components/SolarForm";
import { useLanguage } from "../context/LanguageContext";

function Solar() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-[#0B1120] dark:to-[#111827]">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <Reveal>
          <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">
            {t("servicePages.solar.title")}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-gray-500 dark:text-gray-300">
            {t("servicePages.solar.subtitle")}
          </p>
        </Reveal>
      </div>

      <SolarForm />
    </div>
  );
}

export default Solar;

import { useLanguage } from "../hooks/use-language";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();
  
  return (
    <button
      onClick={toggleLanguage}
      aria-label={t("language.switch")}
      title={t("language.switch")}
      className="p-2 rounded-full hover:bg-red-600/20 text-text-light flex items-center justify-center transition-colors duration-300"
    >
      <Globe size={20} className="text-red-500" />
      <span className="ml-2 text-sm hidden md:inline-block">
        {language === "tr" ? "TR" : "EN"}
      </span>
    </button>
  );
}
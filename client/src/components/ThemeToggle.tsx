import { useTheme } from "../hooks/use-theme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Aydınlık Temaya Geç" : "Karanlık Temaya Geç"}
      className="p-2 rounded-full transition-colors duration-300 bg-background-medium hover:bg-red-600/20 text-text-light flex items-center justify-center"
      title={theme === "dark" ? "Aydınlık Temaya Geç" : "Karanlık Temaya Geç"}
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-blue-400" />
      )}
    </button>
  );
}
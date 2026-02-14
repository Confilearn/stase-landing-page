import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      // Check localStorage first
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      // Fall back to system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    // Save preference to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", dark ? "dark" : "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/80 backdrop-blur-sm text-muted-foreground transition-all hover:text-foreground hover:border-primary/30 hover:shadow-sm"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;

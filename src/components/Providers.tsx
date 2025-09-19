"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import i18n, { initI18n } from "@/i18n/config";

// Role Context
export type UserRole = "guest" | "tourist" | "guide" | "admin";
const RoleContext = createContext<{
  role: UserRole;
  setRole: (r: UserRole) => void;
}>({ role: "guest", setRole: () => {} });

export function useRole() {
  return useContext(RoleContext);
}

// Theme Context (light/dark via html class)
const ThemeContext = createContext<{
  theme: "light" | "dark" | "system";
  setTheme: (t: "light" | "dark" | "system") => void;
}>({ theme: "system", setTheme: () => {} });

export function useThemeMode() {
  return useContext(ThemeContext);
}

export default function Providers({ children }: { children: React.ReactNode }) {
  // Initialize i18n once on client and wait until ready
  const [i18nReady, setI18nReady] = useState(false);
  useEffect(() => {
    initI18n();
    if (i18n.isInitialized) {
      setI18nReady(true);
    } else {
      const onReady = () => setI18nReady(true);
      i18n.on("initialized", onReady);
      return () => {
        i18n.off("initialized", onReady as any);
      };
    }
  }, []);

  const [role, setRole] = useState<UserRole>(() => {
    if (typeof window === "undefined") return "guest";
    return (localStorage.getItem("role") as UserRole) || "guest";
  });
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("role", role);
  }, [role]);

  const [theme, setTheme] = useState<"light" | "dark" | "system">(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as "light" | "dark" | "system") || "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const apply = (mode: "light" | "dark") => {
      root.classList.toggle("dark", mode === "dark");
    };

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      apply(mq.matches ? "dark" : "light");
      const handler = (e: MediaQueryListEvent) => apply(e.matches ? "dark" : "light");
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else {
      apply(theme);
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("theme", theme);
  }, [theme]);

  const roleValue = useMemo(() => ({ role, setRole }), [role]);
  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

  if (!i18nReady) return null;

  return (
    <ThemeContext.Provider value={themeValue}>
      <RoleContext.Provider value={roleValue}>{children}</RoleContext.Provider>
    </ThemeContext.Provider>
  );
}
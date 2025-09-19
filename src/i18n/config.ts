"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      common: {
        appName: "Jharkhand Tourism",
        search: "Search",
        destinations: "Destinations",
        guides: "Guides",
        dashboard: "Dashboard",
        admin: "Admin",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        system: "System",
        language: "Language",
        role: "Role",
        tourist: "Tourist",
        guide: "Guide",
        logout: "Logout",
      },
      hero: {
        title: "Discover the Untamed Beauty of Jharkhand",
        subtitle: "Forests, waterfalls, culture — plan your perfect journey.",
        cta: "Plan Your Trip",
        placeholder: "Search places, experiences, or guides...",
      },
      tiles: {
        nature: "Nature & Waterfalls",
        heritage: "Heritage & Temples",
        adventure: "Adventure & Trekking",
        wildlife: "Wildlife & Parks",
        festivals: "Festivals & Culture",
        cuisine: "Cuisine & Local Food",
      },
      testimonials: {
        title: "What travelers say",
      },
      dashboard: {
        welcome: "Welcome back, {{name}}",
        bookings: "Bookings",
        tripPlanner: "Trip Planner",
        wallet: "Wallet",
      },
    },
  },
  hi: {
    translation: {
      common: {
        appName: "झारखंड पर्यटन",
        search: "खोजें",
        destinations: "गंतव्य",
        guides: "गाइड",
        dashboard: "डैशबोर्ड",
        admin: "प्रशासन",
        theme: "थीम",
        light: "लाइट",
        dark: "डार्क",
        system: "सिस्टम",
        language: "भाषा",
        role: "भूमिका",
        tourist: "पर्यटक",
        guide: "गाइड",
        logout: "लॉगआउट",
      },
      hero: {
        title: "झारखंड की अनछुई खूबसूरती खोजें",
        subtitle: "जंगल, झरने, संस्कृति — अपनी परफेक्ट यात्रा प्लान करें।",
        cta: "यात्रा प्लान करें",
        placeholder: "स्थान, अनुभव या गाइड खोजें...",
      },
      tiles: {
        nature: "प्रकृति और झरने",
        heritage: "धरोहर और मंदिर",
        adventure: "रोमांच और ट्रेकिंग",
        wildlife: "वन्यजीव और पार्क",
        festivals: "त्योहार और संस्कृति",
        cuisine: "खानपान और स्थानीय भोजन",
      },
      testimonials: {
        title: "यात्रियों की बातें",
      },
      dashboard: {
        welcome: "वापसी पर स्वागत है, {{name}}",
        bookings: "बुकिंग्स",
        tripPlanner: "ट्रिप प्लानर",
        wallet: "वॉलेट",
      },
    },
  },
  bn: {
    translation: {
      common: {
        appName: "ঝাড়খণ্ড পর্যটন",
        search: "খোঁজ",
        destinations: "গন্তব্য",
        guides: "গাইড",
        dashboard: "ড্যাশবোর্ড",
        admin: "অ্যাডমিন",
        theme: "থিম",
        light: "লাইট",
        dark: "ডার্ক",
        system: "সিস্টেম",
        language: "ভাষা",
        role: "ভূমিকা",
        tourist: "পর্যটক",
        guide: "গাইড",
        logout: "লগআউট",
      },
      hero: {
        title: "ঝাড়খণ্ডের অজানা সৌন্দর্য আবিষ্কার করুন",
        subtitle: "বন, জলপ্রপাত, সংস্কৃতি — আপনার সেরা ভ্রমণ পরিকল্পনা করুন।",
        cta: "আপনার ট্রিপ পরিকল্পনা করুন",
        placeholder: "স্থান, অভিজ্ঞতা বা গাইড খুঁজুন...",
      },
      tiles: {
        nature: "প্রকৃতি ও জলপ্রপাত",
        heritage: "ঐতিহ্য ও মন্দির",
        adventure: "অ্যাডভেঞ্চার ও ট্রেকিং",
        wildlife: "বন্যপ্রাণী ও পার্ক",
        festivals: "উৎসব ও সংস্কৃতি",
        cuisine: "খাবার ও স্থানীয় রান্না",
      },
      testimonials: {
        title: "ভ্রমণকারীরা কী বলছেন",
      },
      dashboard: {
        welcome: "স্বাগতম ফিরে, {{name}}",
        bookings: "বুকিংস",
        tripPlanner: "ট্রিপ প্ল্যানার",
        wallet: "ওয়ালেট",
      },
    },
  },
};

let initialized = false;
export function initI18n() {
  if (initialized) return i18n;
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      interpolation: { escapeValue: false },
      detection: { order: ["localStorage", "navigator", "htmlTag"], caches: ["localStorage"] },
      returnEmptyString: false,
      react: { useSuspense: false },
    });
  initialized = true;
  return i18n;
}

export default i18n;
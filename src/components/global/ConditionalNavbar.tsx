"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/global/Navbar";

const HIDE_PREFIXES = [
  "/destinations",
  "/events",
  "/festivals",
  "/shop",
  "/login",
  "/register",
  "/sign-in",
];

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const shouldHide = HIDE_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  if (shouldHide) return null;
  return <Navbar />;
}
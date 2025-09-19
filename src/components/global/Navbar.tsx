"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useSession } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Globe className="h-5 w-5" /> Jharkhand Tourism
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/destinations" className="text-sm hover:underline">Destinations</Link>
            <Link href="/events" className="text-sm hover:underline">Events & Fest</Link>
            <Link href="/shop" className="text-sm hover:underline">Shop</Link>
          </nav>
          <Button asChild size="sm" variant="outline">
            <Link href={session?.user ? "/tourist" : "/login"}>{session?.user ? "Profile" : "Sign In"}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
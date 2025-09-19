"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Globe, User2 } from "lucide-react";
import { useState } from "react";

export default function FestivalsPage() {
  const [q, setQ] = useState("");

  return (
    <main className="min-h-screen">
      {/* Page-specific navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Globe className="h-5 w-5" /> Jharkhand Tourism
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/events" className="text-sm hover:underline">Events</Link>
            <Link href="/festivals" className="text-sm hover:underline">Festivals</Link>
            <Link href="/festivals#unique" className="text-sm hover:underline">Unique</Link>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-md border bg-background px-2 md:flex">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search festivals"
                className="h-8 border-0 focus-visible:ring-0"
              />
            </div>
            <Button asChild size="sm" variant="outline">
              <Link href="/login" className="flex items-center gap-2"><User2 className="h-4 w-4" /> Profile</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Festivals</h1>
        <p className="mt-2 text-sm text-muted-foreground">Explore rich tribal and regional festivals across Jharkhand.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="rounded-lg border p-4">
              <div className="aspect-video w-full overflow-hidden rounded bg-muted" />
              <div className="mt-3 font-medium">Festival {i}</div>
              <div className="text-sm text-muted-foreground">Region · Month</div>
              <Button size="sm" className="mt-3">View details</Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
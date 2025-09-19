"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Globe, User2 } from "lucide-react";

const DATA = [
  { id: 1, name: "Dassam Falls", tag: "waterfalls", img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1400&auto=format&fit=crop" },
  { id: 2, name: "Betla National Park", tag: "wildlife", img: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1400&auto=format&fit=crop" },
  { id: 3, name: "Netarhat", tag: "hill", img: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1400&auto=format&fit=crop" },
  { id: 4, name: "Patratu Valley", tag: "valley", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop" },
];

export default function DestinationsPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | "all">("all");

  const filtered = useMemo(() => {
    return DATA.filter((d) => (tag === "all" || d.tag === tag) && d.name.toLowerCase().includes(q.toLowerCase()));
  }, [q, tag]);

  return (
    <main className="min-h-screen">
      {/* Destinations sub-navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Globe className="h-5 w-5" /> Jharkhand Tourism
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/destinations#locations" className="text-sm hover:underline">Locations</Link>
            <Link href="/guide" className="text-sm hover:underline">Guides</Link>
            <Link href="/destinations#hotels" className="text-sm hover:underline">Hotels</Link>
            <Link href="/destinations#safety" className="text-sm hover:underline">Safety</Link>
            <Link href="/login" className="text-sm hover:underline">Profile</Link>
          </nav>
          <Link href="/login" className="md:hidden text-sm underline flex items-center gap-2"><User2 className="h-4 w-4"/>Profile</Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-semibold">Destinations</h1>
          <div className="flex gap-2">
            <Input placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />
            <Select value={tag} onValueChange={(v) => setTag(v as any)}>
              <SelectTrigger className="w-[160px]"><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="waterfalls">Waterfalls</SelectItem>
                <SelectItem value="wildlife">Wildlife</SelectItem>
                <SelectItem value="hill">Hill Stations</SelectItem>
                <SelectItem value="valley">Valleys</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <Card key={d.id} className="overflow-hidden">
              <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url(${d.img})` }} />
              <CardHeader className="py-3"><CardTitle className="text-base">{d.name}</CardTitle></CardHeader>
              <CardContent className="pb-4 text-sm text-muted-foreground">Tag: {d.tag}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
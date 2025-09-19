"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ShoppingCart, Globe, User2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { useState } from "react";

export default function ShopPage() {
  const [q, setQ] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <main className="min-h-screen">
      {/* Shop navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Globe className="h-5 w-5" /> Jharkhand Tourism
          </Link>
          {/* Center search */}
          <div className="hidden w-full max-w-xl items-center gap-2 rounded-md border bg-background px-2 md:flex">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products"
              className="h-9 border-0 focus-visible:ring-0"
            />
          </div>
          <div className="flex items-center gap-3">
            <Link href="/shop?type=all" className="hidden text-sm hover:underline md:inline">Product Type</Link>
            <Button asChild size="sm" variant="outline">
              <Link href="/shop/cart" className="flex items-center gap-2"><ShoppingCart className="h-4 w-4" /> Cart</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline" className="flex items-center gap-2">
                  <User2 className="h-4 w-4" /> {session?.user ? session.user.name || session.user.email : "Profile"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/shop/account")}>Account</DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/shop/orders")}>Orders</DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/shop/become-seller")}>Become Seller</DropdownMenuItem>
                <DropdownMenuSeparator />
                {session?.user ? (
                  <DropdownMenuItem onClick={() => router.push("/tourist")}>Dashboard</DropdownMenuItem>
                ) : (
                  <DropdownMenuItem onClick={() => router.push("/login")}>Sign In</DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* Mobile search bar under navbar */}
        <div className="mx-auto w-full max-w-7xl px-4 pb-3 md:hidden">
          <div className="flex items-center gap-2 rounded-md border bg-background px-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" className="h-9 border-0 focus-visible:ring-0" />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Shop</h1>
        <p className="mt-2 text-sm text-muted-foreground">Browse souvenirs, handicrafts, local art, and travel essentials.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="rounded-lg border p-4">
              <div className="aspect-square w-full overflow-hidden rounded bg-muted" />
              <div className="mt-3 font-medium">Product {i}</div>
              <div className="text-sm text-muted-foreground">Category · ₹ Price</div>
              <Button size="sm" className="mt-3">Add to cart</Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
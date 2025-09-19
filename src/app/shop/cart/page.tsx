"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border p-4 text-sm text-muted-foreground">Your cart is empty.</div>
        </CardContent>
        <CardFooter>
          <Button disabled>Checkout</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShopOrdersPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">Your recent orders will appear here.</div>
          <div className="rounded-md border p-4 text-sm">No orders yet.</div>
        </CardContent>
      </Card>
    </main>
  );
}
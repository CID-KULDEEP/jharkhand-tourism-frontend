"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BecomeSellerPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Become a Seller</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p className="text-muted-foreground">Apply to sell your crafts and travel products in our marketplace.</p>
          <Button>Start application</Button>
        </CardContent>
      </Card>
    </main>
  );
}
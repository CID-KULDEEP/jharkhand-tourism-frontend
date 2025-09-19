"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShopAccountPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>Manage your profile information, addresses, and preferences.</p>
          <p className="text-xs">This section is protected. You may be redirected to sign in.</p>
        </CardContent>
      </Card>
    </main>
  );
}
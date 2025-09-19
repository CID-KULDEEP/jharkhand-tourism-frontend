"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";
import { Calendar, CreditCard, MapPinned, User } from "lucide-react";
import { motion } from "framer-motion";

export default function TouristDashboard() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">{t("dashboard.welcome", { name: "Aditi" })}</h1>
      <Tabs defaultValue="profile">
        <TabsList className="mb-4">
          <TabsTrigger value="profile" className="flex items-center gap-2"><User className="h-4 w-4" />Profile</TabsTrigger>
          <TabsTrigger value="bookings" className="flex items-center gap-2"><Calendar className="h-4 w-4" />{t("dashboard.bookings")}</TabsTrigger>
          <TabsTrigger value="planner" className="flex items-center gap-2"><MapPinned className="h-4 w-4" />{t("dashboard.tripPlanner")}</TabsTrigger>
          <TabsTrigger value="wallet" className="flex items-center gap-2"><CreditCard className="h-4 w-4" />{t("dashboard.wallet")}</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2">
              <Input placeholder="Full Name" defaultValue="Aditi Verma" />
              <Input placeholder="Email" defaultValue="aditi@example.com" />
              <Input placeholder="Phone" defaultValue="+91-9876543210" />
              <Button className="md:col-span-2 w-max">Save</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookings">
          <div className="grid gap-4 md:grid-cols-2">
            {[1,2,3].map((b) => (
              <motion.div key={b} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay: b*0.05}}>
                <Card>
                  <CardHeader><CardTitle>Betla National Park Safari</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Date: 2025-10-1{b} • Travelers: 2</p>
                    <Button size="sm" className="mt-3">View Ticket</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="planner">
          <Card>
            <CardHeader><CardTitle>Trip Planner</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="grid gap-3 md:grid-cols-3">
                <Input placeholder="From (City)" />
                <Input placeholder="To (Destination)" />
                <Input placeholder="Dates" />
              </div>
              <Button>Generate Itinerary</Button>
              <div className="text-sm text-muted-foreground">Suggested: Ranchi → Dassam Falls → Patratu Valley → Netarhat</div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wallet">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader><CardTitle>Balance</CardTitle></CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₹ 2,450</div>
                <Button size="sm" className="mt-3">Add Money</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Recent Transactions</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>Safari Booking - ₹1200</div>
                <div>Guide Advance - ₹500</div>
                <div>Hotel - ₹750</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
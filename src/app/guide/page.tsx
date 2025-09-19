"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, TrendingUp, Wallet, Star, MapPin, Globe } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const earnings = [
  { month: "Jan", amt: 12 },
  { month: "Feb", amt: 18 },
  { month: "Mar", amt: 26 },
  { month: "Apr", amt: 20 },
  { month: "May", amt: 34 },
  { month: "Jun", amt: 30 },
];

// Add 10 dummy guides with rating, price, etc.
const guides = [
  { id: 1, name: "Ravi Kumar", rating: 4.8, price: 1499, location: "Ranchi", languages: ["Hindi", "English"], years: 5 },
  { id: 2, name: "Aditi Singh", rating: 4.6, price: 1299, location: "Jamshedpur", languages: ["Hindi", "English"], years: 3 },
  { id: 3, name: "Manish Verma", rating: 4.9, price: 1799, location: "Netarhat", languages: ["Hindi", "English"], years: 7 },
  { id: 4, name: "Pooja Sinha", rating: 4.5, price: 1199, location: "Deoghar", languages: ["Hindi", "Bengali"], years: 4 },
  { id: 5, name: "Arun Prasad", rating: 4.7, price: 1599, location: "Hazaribagh", languages: ["Hindi", "English"], years: 6 },
  { id: 6, name: "Neha Gupta", rating: 4.4, price: 1099, location: "Dhanbad", languages: ["Hindi", "English"], years: 2 },
  { id: 7, name: "Sanjay Das", rating: 4.8, price: 1699, location: "Betla", languages: ["Hindi", "Bengali"], years: 8 },
  { id: 8, name: "Kiran Patel", rating: 4.3, price: 999, location: "Chaibasa", languages: ["Hindi", "English", "Gujarati"], years: 2 },
  { id: 9, name: "Ananya Roy", rating: 4.6, price: 1399, location: "Parasnath", languages: ["Hindi", "Bengali", "English"], years: 4 },
  { id: 10, name: "Vikram Yadav", rating: 4.7, price: 1499, location: "Palamu", languages: ["Hindi", "English"], years: 5 },
];

export default function GuideDashboard() {
  const [tab, setTab] = useState<string>("guides");
  const [selectedGuideId, setSelectedGuideId] = useState<number | null>(null);
  const [messageInput, setMessageInput] = useState<string>("");
  const [chats, setChats] = useState<Record<number, { sender: "you" | "guide"; text: string }[]>>({
    2: [
      { sender: "you", text: "Hello! I will meet you at the park gate." },
      { sender: "guide", text: "Great, see you at 7 AM." },
    ],
  });

  const currentGuide = selectedGuideId ? guides.find((g) => g.id === selectedGuideId) : null;

  const handleSend = () => {
    if (!selectedGuideId || !messageInput.trim()) return;
    setChats((prev) => ({
      ...prev,
      [selectedGuideId]: [...(prev[selectedGuideId] || []), { sender: "you", text: messageInput.trim() }],
    }));
    setMessageInput("");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5" /> Guide Dashboard</h1>
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="requests">Booking Requests</TabsTrigger>
          <TabsTrigger value="earnings" className="flex items-center gap-2"><Wallet className="h-4 w-4"/>Earnings</TabsTrigger>
          <TabsTrigger value="chat" className="flex items-center gap-2"><MessageSquare className="h-4 w-4"/>Chat</TabsTrigger>
        </TabsList>
        <TabsContent value="guides">
          <div className="mb-4 flex items-center gap-2">
            <Input placeholder="Search guides by name, city or language..." className="max-w-sm" />
            <Button variant="secondary">Filter</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <Card key={g.id} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base font-semibold">{g.name}</CardTitle>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-amber-500" />
                      <span className="text-sm font-medium">{g.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {g.location}
                    <span className="mx-1">•</span>
                    <Globe className="h-4 w-4" /> {g.languages.join(", ")}
                  </div>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Starting from</div>
                      <div className="text-lg font-semibold">₹{g.price}</div>
                      <div className="text-xs text-muted-foreground">Experience: {g.years} yrs</div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary">Verified</Badge>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => { setSelectedGuideId(g.id); setTab("chat"); }}>Chat</Button>
                        <Button size="sm">Book</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="requests">
          <div className="grid gap-4 md:grid-cols-2">
            {[1,2,3].map((id) => (
              <Card key={id}>
                <CardHeader><CardTitle>Safari with Sharma Family</CardTitle></CardHeader>
                <CardContent className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Date: 2025-10-0{id} • 3 pax</div>
                    <Badge variant="secondary" className="mt-2">Pending</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Reject</Button>
                    <Button size="sm">Accept</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="earnings">
          <Card>
            <CardHeader><CardTitle>Earnings (in thousands ₹)</CardTitle></CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={earnings} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="amt" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="chat">
          <div className="grid gap-4 md:grid-cols-[240px_1fr]">
            <Card className="md:col-span-1">
              <CardHeader><CardTitle className="text-base">Guides</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-col gap-1">
                  {guides.map((g) => (
                    <Button
                      key={g.id}
                      variant={selectedGuideId === g.id ? "default" : "ghost"}
                      className="justify-start"
                      onClick={() => setSelectedGuideId(g.id)}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" /> {g.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle className="text-base">
                  {currentGuide ? `Chat with ${currentGuide.name}` : "Select a guide to start chatting"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-64 overflow-y-auto rounded border p-3 text-sm space-y-2 bg-background">
                  {currentGuide ? (
                    (chats[currentGuide.id] || []).length > 0 ? (
                      (chats[currentGuide.id] || []).map((m, i) => (
                        <div key={i} className={m.sender === "you" ? "text-right" : "text-left"}>
                          <span className="font-medium mr-1">{m.sender === "you" ? "You:" : `${currentGuide.name}:`}</span>
                          <span>{m.text}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-muted-foreground">No messages yet. Say hello!</div>
                    )
                  ) : (
                    <div className="text-muted-foreground">Choose a guide from the left list.</div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder={currentGuide ? "Type a message..." : "Select a guide to start chatting"}
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    disabled={!currentGuide}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSend();
                    }}
                  />
                  <Button onClick={handleSend} disabled={!currentGuide || !messageInput.trim()}>
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
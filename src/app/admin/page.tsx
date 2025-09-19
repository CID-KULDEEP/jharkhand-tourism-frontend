"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useThemeMode } from "@/components/Providers";

const users = [
  { id: 1, name: "Aditi", role: "tourist" },
  { id: 2, name: "Ravi", role: "guide" },
];

const destinations = [
  { id: 1, name: "Dassam Falls", tag: "waterfalls" },
  { id: 2, name: "Betla National Park", tag: "wildlife" },
];

export default function AdminPage() {
  const { setTheme } = useThemeMode();
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Admin</h1>
      <Tabs defaultValue="users">
        <TabsList className="mb-4">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="destinations">Destinations</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <Card>
            <CardHeader className="flex-row items-center justify-between"><CardTitle>Manage Users</CardTitle><Button size="sm">Add</Button></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((u) => (
                    <TableRow key={u.id}>
                      <TableCell>{u.id}</TableCell>
                      <TableCell>{u.name}</TableCell>
                      <TableCell>{u.role}</TableCell>
                      <TableCell className="space-x-2"><Button size="sm" variant="outline">Edit</Button><Button size="sm" variant="destructive">Delete</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="destinations">
          <Card>
            <CardHeader className="flex-row items-center justify-between"><CardTitle>Manage Destinations</CardTitle><Button size="sm">Add</Button></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Tag</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {destinations.map((d) => (
                    <TableRow key={d.id}>
                      <TableCell>{d.id}</TableCell>
                      <TableCell>{d.name}</TableCell>
                      <TableCell>{d.tag}</TableCell>
                      <TableCell className="space-x-2"><Button size="sm" variant="outline">Edit</Button><Button size="sm" variant="destructive">Delete</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
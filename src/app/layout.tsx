import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Providers from "@/components/Providers";
import ConditionalNavbar from "@/components/global/ConditionalNavbar";
import Footer from "@/components/global/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Jharkhand Tourism",
  description: "Discover waterfalls, forests, culture, and experiences across Jharkhand. Plan trips, book guides, and explore destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Providers>
          <ConditionalNavbar />
          {children}
          <Footer />
          <Toaster richColors />
        </Providers>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
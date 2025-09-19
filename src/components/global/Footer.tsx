"use client";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-muted-foreground flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Jharkhand Tourism. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
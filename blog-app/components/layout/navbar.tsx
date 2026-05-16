"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          HasanBlogs
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <Button className="rounded-full bg-violet-600 hover:bg-violet-700">
            Get Started
          </Button>
        </div>

        {/* MOBILE MENU */}
        <Sheet>
          <SheetTrigger>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="border-white/10 bg-zinc-950 text-white"
          >
            <div className="mt-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg text-zinc-300 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

              <Button className="mt-4 bg-violet-600 hover:bg-violet-700">
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
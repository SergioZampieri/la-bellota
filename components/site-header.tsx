"use client";

import * as React from "react";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { asset, navLinks } from "@/lib/site";

function Brand() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5 font-heading text-xl">
      <Image src={asset("/img/logo.png")} alt="" width={34} height={34} style={{ height: "auto" }} />
      <span>
        La Bellota <em className="text-primary">B&amp;B</em>
      </span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
        <Brand />

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="h-9 rounded-full px-5">
            <a href="#contacto">Reservar</a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-lg" className="md:hidden" aria-label="Abrir menú">
              <MenuIcon className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="px-6 pt-16">
            <SheetTitle className="sr-only">Menú</SheetTitle>
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a href={link.href} className="border-b py-4 font-heading text-2xl">
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-8 h-12 rounded-full text-base">
                  <a href="#contacto">Reservar</a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

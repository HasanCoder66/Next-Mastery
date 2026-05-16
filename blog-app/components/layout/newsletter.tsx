"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-14">

          {/* HEADING */}
          <div className="text-center">

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Stay Updated
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              Get the latest articles on Next.js, frontend
              development, UI design, and modern web technologies.
            </p>
          </div>

          {/* FORM */}
          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">

            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
            />

            <Button
              size="lg"
              className="h-12 rounded-xl bg-violet-600 px-8 hover:bg-violet-700"
            >
              Subscribe
            </Button>
          </div>

          {/* SMALL TEXT */}
          <p className="mt-6 text-center text-sm text-zinc-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-[250px] w-[250px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        
        {/* BADGE */}
        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
          Modern Blogging Platform
        </div>

        {/* HEADING */}
        <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">
          Share Your Ideas With The{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
            World
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Create beautiful blogs, share your thoughts, and build your audience
          with a modern publishing platform powered by Next.js and shadcn/ui.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          
          <Button
            size="lg"
            className="rounded-full bg-violet-600 px-8 text-white hover:bg-violet-700"
          >
            Start Reading
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/10 bg-white/5 px-8 text-white hover:bg-white/10"
          >
            Explore Blogs
          </Button>
        </div>

        {/* STATS */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          
          <div>
            <h2 className="text-3xl font-bold text-white">10K+</h2>
            <p className="mt-2 text-sm text-zinc-400">Active Readers</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">500+</h2>
            <p className="mt-2 text-sm text-zinc-400">Published Blogs</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">120+</h2>
            <p className="mt-2 text-sm text-zinc-400">Authors</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">1M+</h2>
            <p className="mt-2 text-sm text-zinc-400">Monthly Views</p>
          </div>
        </div>
      </div>
    </section>
  );
}
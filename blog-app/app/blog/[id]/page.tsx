import { blogs } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/navbar";

interface BlogDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {

  const { id } = await params;

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <section className="pb-20 pt-10">
        
        <div className="mx-auto max-w-5xl px-4">

          {/* IMAGE */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="mx-auto mt-12 max-w-3xl">

            {/* CATEGORY */}
            <span className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white">
              {blog.category}
            </span>

            {/* TITLE */}
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {blog.title}
            </h1>

            {/* META */}
            <div className="mt-6 flex items-center gap-4 text-zinc-400">
              
              <p>{blog.author}</p>

              <span>•</span>

              <p>{blog.readTime}</p>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-10 text-xl leading-relaxed text-zinc-300">
              {blog.description}
            </p>

            {/* ARTICLE */}
            <article className="prose prose-invert mt-10 max-w-none prose-zinc">
              
              <p className="text-lg leading-8 text-zinc-300">
                {blog.content}
              </p>

              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Modern frontend development is evolving rapidly with
                server-first rendering patterns, reusable UI systems,
                and optimized React architectures.
              </p>

              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Next.js simplifies routing, layouts, loading states,
                and performance optimization, making it one of the
                best frameworks for production-grade applications.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
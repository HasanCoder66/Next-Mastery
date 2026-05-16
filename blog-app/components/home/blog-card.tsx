import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Blog } from "@/app/types/blog";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({
  blog,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.id}`}>
    <Card className="group overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/30">
      
      {/* IMAGE */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <Badge className="absolute left-4 top-4 bg-violet-600 hover:bg-violet-700">
          {blog.category}
        </Badge>
      </div>

      {/* CONTENT */}
      <CardContent className="p-6">
        
        <h2 className="line-clamp-2 text-2xl font-bold text-white">
          {blog.title}
        </h2>

        <p className="mt-4 line-clamp-3 text-zinc-400">
          {blog.description}
        </p>

        {/* FOOTER */}
        <div className="mt-6 flex items-center justify-between">
          
          <div>
            <p className="text-sm font-medium text-white">
              {blog.author}
            </p>

            <p className="text-sm text-zinc-500">
              {blog.readTime}
            </p>
          </div>

          <button className="text-sm font-medium text-violet-400 transition hover:text-violet-300">
            Read More →
          </button>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
}
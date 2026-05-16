"use client";


import { Input } from "@/components/ui/input";
import BlogCard from "./blog-card";
import { useMemo, useState } from "react";
import { Blog } from "@/app/types/blog";

interface SearchFilterProps {
  blogs: Blog[];
}

const categories = [
  "All",
  "Next.js",
  "UI Design",
  "React",
];

export default function SearchFilter({
  blogs,
}: SearchFilterProps) {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // FILTER LOGIC
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {

      const matchesSearch =
        blog.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory, blogs]);

  return (
    <section className="pb-24">
      
      <div className="mx-auto max-w-7xl px-4">

        {/* FILTER BAR */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* SEARCH */}
          <div className="w-full md:max-w-sm">
            <Input
              placeholder="Search blogs..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="h-12 border-white/10 bg-white/5 text-white placeholder:text-zinc-500"
            />
          </div>

          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {

              const isActive =
                selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                  className={`
                    rounded-full px-5 py-2 text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-violet-600 text-white"
                        : "bg-white/5 text-zinc-300 hover:bg-white/10"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredBlogs.length === 0 && (
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white">
              No blogs found
            </h3>

            <p className="mt-4 text-zinc-400">
              Try searching something else.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
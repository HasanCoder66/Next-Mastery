// import BlogCard from "./blog-card";
// import { blogs } from "@/lib/data";

// export default function FeaturedPosts() {
//   return (
//     <section className="py-24">
      
//       <div className="mx-auto max-w-7xl px-4">
        
//         {/* SECTION HEADER */}
//         <div className="mb-14 text-center">
          
//           <h2 className="text-4xl font-black tracking-tight md:text-5xl">
//             Featured Blogs
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
//             Explore modern web development, UI design, and
//             Next.js architecture tutorials.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {blogs.map((blog) => (
//             <BlogCard
//               key={blog.id}
//               blog={blog}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { blogs } from "@/lib/data";
import SearchFilter from "./search-filter";

export default function FeaturedPosts() {
  return (
    <section className="py-24">

      <div className="mx-auto mb-14 max-w-7xl px-4 text-center">

        <h2 className="text-4xl font-black tracking-tight md:text-5xl">
          Featured Blogs
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          Explore modern web development, UI design,
          and Next.js architecture tutorials.
        </p>
      </div>

      <SearchFilter blogs={blogs} />
    </section>
  );
}
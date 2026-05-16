import { Blog } from "@/app/types/blog";


export const blogs: Blog[] = [
  {
    id: 1,
    title: "Mastering Next.js App Router",
    description:
      "Learn modern routing, layouts, and rendering patterns using the App Router.",
    category: "Next.js",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    author: "Hasan",
    readTime: "5 min read",
    content: `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
...
`,
  },

  {
    id: 2,
    title: "Building Modern UI With shadcn/ui",
    description:
      "Create beautiful interfaces using reusable components and Tailwind CSS.",
    category: "UI Design",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    author: "Hasan",
    readTime: "7 min read",
    content: `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
...
`,
  },

  {
    id: 3,
    title: "Server vs Client Components Explained",
    description:
      "Understand rendering architecture and component boundaries in Next.js.",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    author: "Hasan",
    readTime: "6 min read",
    content: `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
...
`,
  },
];
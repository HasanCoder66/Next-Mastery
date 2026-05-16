import Link from "next/link";

const footerLinks = {
  Product: [
    "Features",
    "Blogs",
    "Resources",
    "Updates",
  ],

  Company: [
    "About",
    "Careers",
    "Contact",
    "Privacy",
  ],

  Socials: [
    "Twitter",
    "GitHub",
    "LinkedIn",
    "Discord",
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      
      <div className="mx-auto max-w-7xl px-4 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <Link
              href="/"
              className="text-3xl font-black tracking-tight"
            >
              HasanBlogs
            </Link>

            <p className="mt-6 max-w-md leading-relaxed text-zinc-400">
              A modern blogging platform built with
              Next.js, TypeScript, Tailwind CSS,
              and shadcn/ui.
            </p>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(
            ([title, links]) => (
              <div key={title}>

                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>

                <div className="mt-5 flex flex-col gap-4">
                  {links.map((link) => (
                    <Link
                      key={link}
                      href="/"
                      className="text-zinc-400 transition hover:text-white"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-sm text-zinc-500">
            © 2026 HasanBlogs. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="/" className="hover:text-white">
              Terms
            </Link>

            <Link href="/" className="hover:text-white">
              Privacy
            </Link>

            <Link href="/" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
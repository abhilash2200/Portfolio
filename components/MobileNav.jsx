"use client";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Resume", href: "/resume" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
    <SheetTrigger className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
      <CiMenuFries className="text-2xl" />
    </SheetTrigger>
  
    <SheetContent className="flex flex-col px-6 py-8" aria-describedby={null}>
    <SheetTitle className="sr-only">Main Menu</SheetTitle>
      {/* Header */}
      <div className="mt-20 mb-20 flex items-center justify-center">
        <Link href="/" className="hover:opacity-90 transition">
          <h1 className="text-3xl font-bold tracking-tight">
            Header<span className="text-blue-500">.dev</span>
          </h1>
        </Link>
      </div>
  
      {/* Navigation */}
      <nav className="flex flex-col gap-5 text-lg font-medium items-center justify-center">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`transition-colors px-2 py-1 rounded-md capitalize
                ${pathname === link.href
                  ? "text-white bg-black underline underline-offset-8 decoration-[1.5px] decoration-blue-500"
                  : "text-gray-100 hover:text-white hover:bg-black hover:underline hover:underline-offset-8 hover:decoration-[1.5px] hover:decoration-blue-500"
                }`}
            >
            {link.label}
          </Link>
        ))}
      </nav>
    </SheetContent>
  </Sheet>  
  );
};

export default MobileNav;

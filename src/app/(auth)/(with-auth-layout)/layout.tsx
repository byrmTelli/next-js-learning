"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="p-4">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={`${
              isActive ? "bg-green-400" : "bg-blue-500"
            } text-white font-semibold p-2  rounded-lg m-1`}
          >
            {link.name}
          </Link>
        );
      })}
      <div className="mt-4">{children}</div>
    </div>
  );
}

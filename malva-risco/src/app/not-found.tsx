"use client";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin") && !pathname.includes("/login")) {
    return (
      <div>
        <h2>Not Found</h2>
        <p>No se puede encontrar la página</p>
        <Link href='/admin'>Return to admin page</Link>
      </div>
    );
  }

  redirect("/home");
}

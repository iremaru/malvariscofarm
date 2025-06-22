"use client";
import { redirect, usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return redirect("/admin/dashboard");
  }

  redirect("/home");
}

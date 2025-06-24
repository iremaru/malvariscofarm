"use client";

import dynamic from "next/dynamic";

export const LazyAdminApp = dynamic(() => import("./reactAdminApp"), {
  ssr: true,
});

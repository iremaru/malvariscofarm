"use client";
import React from "react";
import Link from "next/link";
import StoreIcon from "@mui/icons-material/Store";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import styles from "./adminNav.module.scss";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { usePathname } from "next/navigation";

const adminRoutes = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: SpaceDashboardIcon,
  },
  {
    name: "Finca",
    href: "/admin/farm",
    icon: AgricultureIcon,
  },
  {
    name: "Tienda",
    href: "/admin/shop",
    icon: StoreIcon,
  },
  {
    name: "Etiquetado",
    href: "/admin/labeling",
    icon: LocalOfferIcon,
  },
];

export const AdminNav = () => {
  const pathname = usePathname();

  return (
    <aside className={`${styles.adminAside} ${styles.open}`}>
      <div className={styles.logo}>
        <LocalFloristIcon />
        <p>Malva Admin</p>
      </div>
      <nav className={`${styles.adminNav}`}>
        <ul>
          {adminRoutes.map((route) => (
            <li key={route.name}>
              <Link
                href={route.href}
                className={`${pathname === route.href ? styles.active : ""}`}
              >
                <route.icon /> {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

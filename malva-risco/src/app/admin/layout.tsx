import { Metadata } from "next";
import styles from "./layout.module.scss";
import { AdminNav } from "./components/ui/nav/adminNav";

export const metadata: Metadata = {
  title: "Malva Admin",
  description: "Panel de administración",
};
export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AdminNav />
      <main className={styles.page}>{children}</main>
    </>
  );
}

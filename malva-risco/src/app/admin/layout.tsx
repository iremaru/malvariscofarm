import { Metadata } from "next";
import styles from "./layout.module.scss";
import { AdminNav } from "./components/ui/nav/adminNav";
import { AdminUserProvider } from "./context/user/adminUserProvider";

export const metadata: Metadata = {
  title: "Malva Admin",
  description: "Panel de administración",
};
export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AdminUserProvider>
      <AdminNav />
      <main className={styles.page__admin}>{children}</main>
    </AdminUserProvider>
  );
}

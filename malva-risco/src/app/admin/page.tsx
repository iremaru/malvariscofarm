"use client";

import { LazyAdminApp } from "./components/reactAdminApp/lazyAdminApp";
import styles from "./page.module.scss";

export default function AdminPanel() {
  return (
    <div className={styles.page}>
      <LazyAdminApp />
    </div>
  );
}

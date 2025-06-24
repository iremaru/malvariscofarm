import React from "react";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./logoutBtn.module.scss";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default function LogoutBtn() {
  const onLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = await createClient();
    await supabase.auth.signOut();

    redirect("/admin/login");
  };
  return (
    <Button
      className={styles.logout_btn}
      variant='contained'
      startIcon={<LogoutIcon />}
      onClick={onLogout}
    >
      <p>Cerrar sesión</p>
    </Button>
  );
}

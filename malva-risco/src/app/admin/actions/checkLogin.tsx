"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function checkUserLogin() {
  let isLogin = false;
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    isLogin = !error || !!data?.user;
    if (!isLogin) {
      redirect("/admin/login");
    }
  } catch (e) {
    console.log(e);
  } finally {
    return { isLogin };
  }
}

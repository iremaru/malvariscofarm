"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const supabase = await createClient();
  const userCredentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { data, error } = await supabase.auth.signInWithPassword(
    userCredentials
  );

  if (!!data.user && !error) {
    redirect("/admin/dashboard");
  }

  if (error) {
    console.error("Error:", error);
  }
}

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";
import style from "./page.module.scss";
import {
  Backdrop,
  CircularProgress,
  Input,
  Snackbar,
  TextField,
} from "@mui/material";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /* const handleMagicLinkLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setErrorMsg(`Error logging in: ${error}`);
    else alert("Revisa tu correo para entrar");
  }; */

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log("Data:", data);

      if (error) {
        setErrorMsg("Correo o contraseña incorrectos.");
      } else {
        router.push("/admin"); // Redirige al área protegida
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg("Ha ocurrido un error desconocido.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`page ${style.page}`}>
      <div className={style.loginCard}>
        <h1>Inicia sesión como administrador</h1>
        <form onSubmit={handlePasswordLogin}>
          <TextField
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='TuEmail@mail.com'
            variant='outlined'
            fullWidth
            margin='normal'
            label='Email'
          />
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='contraseña super segura'
            fullWidth
          />
          <p className={style.infoMessage}>
            Si no tiene acceso, contacte con un administrador.
          </p>
          {/* <button onClick={handleMagicLinkLogin}>Enviar link mágico</button> */}
        </form>
        <button type='submit' onClick={handlePasswordLogin}>
          Entrar
        </button>
        <Snackbar
          open={!!errorMsg}
          onClose={() => setErrorMsg("")}
          className={style.errorMessage}
          message={errorMsg}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        />
      </div>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isLoading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  );
}

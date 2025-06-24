"use client";
import { useState } from "react";
import style from "./LoginClientComponent.module.scss";
import {
  Backdrop,
  CircularProgress,
  Input,
  Snackbar,
  TextField,
} from "@mui/material";
import { signup } from "../../actions/auth";

export default function LoginClientComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordLogin = async (formData: FormData) => {
    setIsLoading(true);
    try {
      await signup(formData);
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
        <form action={handlePasswordLogin}>
          <TextField
            id='email'
            name='email'
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='TuEmail@mail.com'
            variant='outlined'
            fullWidth
            margin='normal'
            label='Email'
          />
          <Input
            id='password'
            name='password'
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='contraseña super segura'
            fullWidth
          />
          <p className={style.infoMessage}>
            Si no tiene acceso, contacte con un administrador.
          </p>
          <button type='submit'>Entrar</button>
        </form>
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

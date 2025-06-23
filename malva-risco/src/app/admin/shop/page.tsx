import React from "react";
import styles from "./shop.module.scss";

export default function Shop() {
  return (
    <>
      <h1>Administración de la tienda</h1>
      <div className={styles.main__view}>
        <div>
          <h2>Pedidos</h2>
        </div>
        <div>
          <h2>Productos a la venta</h2>
        </div>
        <div>
          <h2>Precios</h2>
        </div>
      </div>
    </>
  );
}

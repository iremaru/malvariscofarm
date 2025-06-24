"use server";
import React from "react";
import styles from "./dashboard.module.scss";

export default async function AdminDashboard() {
  return (
    <div className={styles.page__dashboard}>
      <h1>Dashboard</h1>
      <div>
        <h2>Gastos</h2>
        <div>
          <ol>
            <li>Materia prima (semillas)</li>
            <li>Recursos (Agua, electricidad, abono...)</li>
            <li>Herramientas (tractor, tijeras...)</li>
            <li>Mano de obra (Obrero X tiempo,...)</li>
          </ol>
        </div>
      </div>
      <div>
        <h2>Producción</h2>
        <div>
          <ol>
            <li>Plantado</li>
            <li>Cosechado</li>
            <li>Elaborado</li>
          </ol>
        </div>
      </div>
      <div>
        <h2>Ventas</h2>
        <div>
          <ol>
            <li>Boca a boca</li>
            <li>Por RRSS</li>
            <li>Por la web</li>
            <li>Consumo propio</li>
            <li>Echado a perder</li>
          </ol>
        </div>
      </div>
      <div>
        <h2>Beneficios</h2>
        <div>
          <ol>
            <li>Gastos - ingresos</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

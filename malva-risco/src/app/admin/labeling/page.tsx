import { Button } from "@mui/material";
import React from "react";

export default function Labeling() {
  return (
    <>
      <h1>Etiquetado</h1>
      <div>
        Selecciona tipo de etiqueta
        <ul>
          <li>Frescos</li>
          <li>Elaborados</li>
          <ul>
            <li>Normal</li>
            <li>Premium</li>
          </ul>
        </ul>
      </div>
      <div>
        <ol>
          <li>Selecciona batchs a etiquetar</li>
          <li>Importar desde un csv</li>
        </ol>
      </div>
      <div>Tabla de batchs a etiquetar</div>
      <div>
        <Button>Generar PDF</Button>
        <Button>Generar csv</Button>
      </div>
    </>
  );
}

import { Button } from "@mui/material";
import styles from "./page.module.scss";
import Labelcard from "./Components/labelcard/labelcard";

enum DesignTypeStyle {
  NORMAL,
  PREMIUM,
}
enum ProductType {
  ELABORATED,
  RAW,
}

export interface LabelCardInfo {
  designName: string;
  description: string;
  style: DesignTypeStyle;
  productTypes: ProductType[];
}
const labelDesigns = [
  {
    designName: "Product Price",
    description:
      "Una etiqueta básica para mostrar el nombre del producto y su precio de venta al público",
    style: DesignTypeStyle.NORMAL,
    productTypes: [ProductType.ELABORATED, ProductType.RAW],
  },
  {
    designName: "Country jar",
    description: "Una etiqueta rústica para colocar en frascos",
    style: DesignTypeStyle.NORMAL,
    productTypes: [ProductType.ELABORATED],
  },
  {
    designName: "Gourmet jar ",
    description: "Una etiqueta elegante para colocar en frascos",
    style: DesignTypeStyle.PREMIUM,
    productTypes: [ProductType.ELABORATED],
  },
  {
    designName: "Little Bouquet Price",
    description:
      "Una etiqueta básica enrollar en torno a un manojo, un paquete de plástico o la boca de un frasco",
    style: DesignTypeStyle.NORMAL,
    productTypes: [ProductType.ELABORATED, ProductType.RAW],
  },
];

export default function Labeling() {
  return (
    <>
      <h1>Etiquetado</h1>
      <div className={styles.label__options}>
        <h2>Tipo de etiqueta</h2>
        <div className={styles.labelcard_displayer}>
          {labelDesigns.map((card, i) => (
            <Labelcard key={card.designName + i} cardInfo={card} />
          ))}
        </div>
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

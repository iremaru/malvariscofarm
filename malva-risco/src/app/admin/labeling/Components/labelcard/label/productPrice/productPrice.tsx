import React from "react";
import styles from "./productPrice.module.scss";

export interface IproductLabelingInfo {
  productName: string;
  productPrice: {
    cuantity: string;
    measure: string;
  };
}

export default function ProductPrice({
  product,
}: {
  product: IproductLabelingInfo;
}) {
  return (
    <div className={styles.printing_label}>
      <p className={styles.product_name}>{product.productName}</p>
      <p className={styles.product_price}>
        {product.productPrice.cuantity}/{product.productPrice.measure}
      </p>
    </div>
  );
}

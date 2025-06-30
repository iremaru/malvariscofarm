"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./labelcard.module.scss";
import { LabelCardInfo } from "../../page";
import { Modal } from "@mui/material";
import ProductPrice, {
  IproductLabelingInfo,
} from "./label/productPrice/productPrice";

const fakeProductInfo: IproductLabelingInfo = {
  productName: "Lechuga batavia",
  productPrice: {
    cuantity: "0.38€",
    measure: "ud.",
  },
};

export default function Labelcard({ cardInfo }: { cardInfo: LabelCardInfo }) {
  const [previewIsOpen, setPreviewIsOpen] = useState(false);
  return (
    <>
      <button
        className={styles.labelcard}
        onClick={() => setPreviewIsOpen(true)}
      >
        <Image src='/' alt={cardInfo.description} width={190} height={190} />
        <p className={styles.card__title}>{cardInfo.designName}</p>
        <div className={styles.card__description}>
          <p>{cardInfo.description}</p>
        </div>
      </button>

      <Modal open={previewIsOpen} onClose={() => setPreviewIsOpen(false)}>
        <div className={styles.label_preview}>
          <ProductPrice product={fakeProductInfo} />
        </div>
      </Modal>
    </>
  );
}

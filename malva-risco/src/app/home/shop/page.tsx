"use client";

import React, { Suspense } from "react";
import { ProductCard } from "@/app/home/components/store/productCard/productCard";
import { useAvailableBatches } from "@/hook/useAvailableBatches";
import style from "./page.module.scss";

export default function Page() {
  const { batches } = useAvailableBatches();

  return (
    <div className={style.page__store}>
      <h1 className={style.page__title}>Tienda</h1>
      <div className={style.productGrid}>
        <Suspense fallback={<p>Cargando productos disponibles...</p>}>
          {batches.map((batch) => (
            <ProductCard key={batch.id} batch={batch} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

import React from "react";
import { productData } from "../mocks/Product_Data";
import ProductCard from "../components/ProductCard";

function Store() {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center mt-6">
        Welcome to the Store
      </h1>
      <div className="grid grid-flow-row lg:grid-flow-col gap-2 xl:gap-8 m-8">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Store;

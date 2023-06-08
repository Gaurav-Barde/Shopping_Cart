import React from "react";
import { productData } from "../mocks/Product_Data";
import ProductCard from "../components/ProductCard";

function Store() {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center mt-6">Products Page</h1>
      <div className="flex justify-between m-8">
        {productData.map((product, index) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Store;

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import useFetch from "../utils/useFetch";

function Store() {
  const { products } = useFetch();

  return (
    <div>
      <h1 className="font-semibold text-3xl text-center mt-6">
        Welcome to the Store
      </h1>
      <div className="grid lg:grid-cols-4 gap-2 xl:gap-8 m-8">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Store;

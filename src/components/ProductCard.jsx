import React from "react";

function ProductCard({ product }) {
  return <div className="w-1/4 text-center border-2 border-gray-750  p-4 py-8">
    <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
    <h3>${product.price}</h3>
    <button className="text-white bg-blue-500 p-2 mt-6 rounded-md">Add to Cart</button>
    </div>;
}

export default ProductCard;

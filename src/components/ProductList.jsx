import ProductCard from "./ProductCard";
import useFetch from "../utils/useFetch";
import ShimmerUI from "./ShimmerUI";

const ProductList = () => {
  const { products } = useFetch();

  if (!products.length) {
    return <ShimmerUI />;
  }

  return (
    <div className="grid lg:grid-cols-4 gap-2 xl:gap-8 m-8">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

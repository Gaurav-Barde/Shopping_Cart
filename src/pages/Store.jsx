import ProductList from "../components/ProductList";

function Store() {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center mt-6">
        Welcome to the Store
      </h1>
      <ProductList />
    </div>
  );
}

export default Store;

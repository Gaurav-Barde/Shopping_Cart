export const productData = [
  {
    id: 1,
    name: "Coffee",
    price: 4.99,
  },
  {
    id: 2,
    name: "Sunglasses",
    price: 9.99,
  },
  {
    id: 3,
    name: "Camera",
    price: 24.99,
  },
];

export const getProduct = (id) => {
  return productData.find((product) => product.id === id);
};

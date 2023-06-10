// Coffee: price_1NHA4WSGdFX7eI9iy4vHpo2q
// Sunglasses: price_1NHA5YSGdFX7eI9i0vOPIWQd
// Camera: price_1NHA7FSGdFX7eI9i5tzRTYG8

export const productData = [
  {
    id: "price_1NHA4WSGdFX7eI9iy4vHpo2q",
    name: "Coffee",
    price: 99,
  },
  {
    id: "price_1NHA5YSGdFX7eI9i0vOPIWQd",
    name: "Sunglasses",
    price: 1499,
  },
  {
    id: "price_1NHA7FSGdFX7eI9i5tzRTYG8",
    name: "Camera",
    price: 9999,
  },
];

export const getProduct = (id) => {
  return productData.find((product) => product.id === id);
};

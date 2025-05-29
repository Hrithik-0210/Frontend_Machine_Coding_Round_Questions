import { useEffect, useState } from "react";
import "./App.css";
import ProductContainer from "./components/ProductContainer";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItems] = useState([]);

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data?.products);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const isAlreadyPresent = prev.find((item) => item.id === product.id);
      if (isAlreadyPresent) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <div className="main-container">
      <ProductContainer products={products} addToCart={addToCart} />
      <Cart cartItem={cartItem} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;

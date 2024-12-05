import { useState } from "react";
import "./App.css";
import { ProductList } from "./components/product_list";
import { BasketList } from "./components/basket_list";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      price: 49.99,
      category: "Electronics",
      photo: "",
    },
    {
      id: 2,
      title: "Yoga Mat",
      price: 19.99,
      category: "Fitness",
      photo: "",
    },
    {
      id: 3,
      title: "Desk Lamp",
      price: 29.99,
      category: "Home Decor",
      photo: "",
    },
    {
      id: 4,
      title: "Running Shoes",
      price: 59.99,
      category: "Footwear",
      photo: "",
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 39.99,
      category: "Electronics",
      photo: "",
    },
    {
      id: 6,
      title: "Cooking Utensil Set",
      price: 24.99,
      category: "Kitchen",
      photo: "",
    },
    {
      id: 7,
      title: "Notebook",
      price: 4.99,
      category: "Stationery",
      photo: "",
    },
    {
      id: 8,
      title: "Gaming Mouse",
      price: 34.99,
      category: "Gaming",
      photo: "",
    },
    {
      id: 9,
      title: "Sunglasses",
      price: 14.99,
      category: "Accessories",
      photo: "",
    },
    {
      id: 10,
      title: "Portable Charger",
      price: 25.99,
      category: "Electronics",
      photo: "",
    },
  ]);

  const [basket, setBasket] = useState([]);

  const moveToCart = (product) => {
    const found = basket.find((item) => item.id === product.id);
    if (found) {
      found.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...product, count: 1 }]);
    }
  };

  const quantityUp = (product) => {
    const found = basket.find((item) => item.id === product.id);
    found.count++;
    setBasket([...basket]);
  };

  const quantityDown = (product) => {
    const found = basket.find((item) => item.id === product.id);

    if (found.count > 1) {
      found.count--;
      setBasket([...basket]);
    } else {
      deleteItem(product);
    }
  };

  const deleteItem = (product) => {
    const filtreted = basket.filter((item) => item.id !== product.id);
    setBasket(filtreted);
  };

  return (
    <>
      <header className="bg-red-200 p-4">
        <h1 className="text-center text-3xl font-bold">Shopping App</h1>
      </header>

      <ProductList data={products} onAdd={moveToCart} />
      <BasketList
        data={basket}
        onUp={quantityUp}
        onDown={quantityDown}
        onDelete={deleteItem}
      />
    </>
  );
}

export default App;

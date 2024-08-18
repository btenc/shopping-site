import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box, Text } from "@chakra-ui/react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingProduct) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
    console.log("Cart Items:", cartItems);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.product.id !== productId));
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box bg="teal.800" color="white" py={4} textAlign="center">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            _hover={{
              animation: "wiggle 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite",
            }}
          >
            Phake Store
          </Text>
        </Link>
      </Box>
      <Navbar
        cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
      />
      <Box flex="1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Box, SimpleGrid, Text, Spinner, Center } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <Box p={4}>
      {loading ? (
        <Center>
          <Spinner size="md" color="teal.500" />
          <Text ml={4}>Loading...</Text>
        </Center>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={6} mt={6}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default Shop;

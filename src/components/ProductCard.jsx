import { useState } from "react";
import { Box, Image, Text, Button, Input, HStack } from "@chakra-ui/react";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      transition="all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)"
      _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
    >
      <Image
        src={product.image}
        alt={product.title}
        boxSize="150px"
        objectFit="cover"
        mb={4}
      />
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        {product.title}
      </Text>
      <Text mb={4} color="teal.600">
        ${product.price}
      </Text>
      <HStack mb={4}>
        <Button onClick={handleDecrement} size="sm">
          -
        </Button>
        <Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          maxW="50px"
          textAlign="center"
          size="sm"
        />
        <Button onClick={handleIncrement} size="sm">
          +
        </Button>
      </HStack>
      <Button
        colorScheme="teal"
        width="full"
        onClick={() => addToCart(product, quantity)}
      >
        Add to Cart
      </Button>
    </Box>
  );
}

export default ProductCard;

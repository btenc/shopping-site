import { Box, Text, Button, SimpleGrid } from "@chakra-ui/react";

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("This is not a real site lol");
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Your Cart
      </Text>
      {cartItems.length > 0 ? (
        <>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {cartItems.map(({ product, quantity }) => (
              <Box
                key={product.id}
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                boxShadow="md"
                transition="all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)"
                _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
              >
                <Text fontWeight="bold">{product.title}</Text>
                <Text mt={2}>Quantity: {quantity}</Text>
                <Text mt={2}>
                  Price: ${(product.price * quantity).toFixed(2)}
                </Text>
                <Button
                  mt={2}
                  colorScheme="red"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </Button>
              </Box>
            ))}
          </SimpleGrid>
          <Box mt={6}>
            <Text fontSize="xl" fontWeight="bold">
              Total: ${totalPrice.toFixed(2)}
            </Text>
            <Button mt={4} colorScheme="teal" onClick={handleCheckout}>
              Checkout
            </Button>
          </Box>
        </>
      ) : (
        <Text mt={4}>Your cart is empty</Text>
      )}
    </Box>
  );
}

export default Cart;

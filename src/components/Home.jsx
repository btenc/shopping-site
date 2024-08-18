import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box
      p={4}
      textAlign="center"
      mt={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Welcome to the Phake Store!
      </Text>
      <Text fontSize="lg" mb={8}>
        Browse our shop and add items to your cart.
      </Text>
      <Image
        src="https://via.placeholder.com/600x300"
        alt="Shopping"
        borderRadius="md"
        boxShadow="lg"
        mb={8}
      />
      <Image
        src="https://via.placeholder.com/800x300"
        alt="Shopping"
        borderRadius="md"
        boxShadow="lg"
        mb={8}
      />
      <Link to="/shop">
        <Button
          colorScheme="teal"
          size="lg"
          transition="all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)"
        >
          Start Shopping Now
        </Button>
      </Link>
    </Box>
  );
}

export default Home;

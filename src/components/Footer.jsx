import { Box, Text, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="teal.600" color="white" py={4} textAlign="center" mt="auto">
      <Text fontSize="sm">
        Data provided by{" "}
        <Link href="https://fakestoreapi.com" isExternal color="blue.200">
          Fake Store API
        </Link>
      </Text>
    </Box>
  );
}

export default Footer;

import { NavLink } from "react-router-dom";
import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import { FaHome, FaShoppingCart, FaStore } from "react-icons/fa";

function Navbar({ cartCount }) {
  const linkStyles = {
    display: "flex",
    alignItems: "center",
    color: "white",
    transition: "all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)",
  };

  const hoverStyles = {
    transform: "scale(1.1)",
    color: "yellow",
  };

  return (
    <Box bg="teal.600" p={4} boxShadow="md">
      <Flex align="center">
        <NavLink
          to="/"
          style={linkStyles}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = hoverStyles.transform;
            e.currentTarget.style.color = hoverStyles.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.color = "white";
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            transition="all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)"
          >
            <FaHome style={{ marginRight: "8px" }} />
            <Text fontSize="xl">Home</Text>
          </Box>
        </NavLink>
        <Spacer />
        <NavLink
          to="/shop"
          style={linkStyles}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = hoverStyles.transform;
            e.currentTarget.style.color = hoverStyles.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.color = "white";
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            transition="all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)"
          >
            <FaStore style={{ marginRight: "8px" }} />
            <Text fontSize="xl">Shop</Text>
          </Box>
        </NavLink>
        <Spacer />
        <NavLink to="/cart" style={linkStyles}>
          <Button
            colorScheme="orange"
            variant="solid"
            display="flex"
            alignItems="center"
            transition="all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)"
            _hover={{ transform: "scale(1.1)", color: "yellow" }}
          >
            <FaShoppingCart style={{ marginRight: "8px" }} />
            Cart ({cartCount})
          </Button>
        </NavLink>
      </Flex>
    </Box>
  );
}

export default Navbar;

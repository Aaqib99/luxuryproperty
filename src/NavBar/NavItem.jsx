// NavItem.jsx
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavItem({ to, children }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        justify="center"
        px={{ base: 2, md: 10 }}
        py={{ base: 2, md: 2 }}
        // my={{ base: 2, md: 0 }}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={"#CFB05C"}
        _hover={{ bg: "#CFB05C", color: "white" }}
      >
        {children}
      </Flex>
    </Link>
  );
}

export default NavItem; // Add default export here

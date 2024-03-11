import React from "react";
import {
  Box,
  Flex,
  Image,
  Center,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TiWorld } from "react-icons/ti";
import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";
import ReactCountryFlag from "react-country-flag"
import NavItem from "./NavItem";

function NavBar() {
  return (
    <>
      <Box>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          align="center"
          p={{ base: 2, md: 4 }}
          borderBottomWidth={{ base: "1px", md: "0px" }}
          borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Link to={"/"}>
            <Image
              src={logo}
              alt="ViaCyber-Logo"
              width={{ base: "6rem", md: "9rem" }}
              marginLeft={"3rem"}
            />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            flexDir="row"
            align="center"
            justifyContent="center"
            flex="1"
          >
            <Center>
              <NavItem to="/" mx={4}>
                Home
              </NavItem>
              <NavItem to="/app-design" mx={4}>
                Buy
              </NavItem>
              <NavItem to="/website-design" mx={4}>
                Auctions
              </NavItem>
              <NavItem to="/about-me" mx={4}>
                Rent
              </NavItem>
              <NavItem to="/contact-me" mx={4}>
                Sell
              </NavItem>
            </Center>
          </Flex>
          <Box ml="auto" mr="3" display="flex" alignItems="center">
            <Menu>
              <TiWorld _hover={{ color: "blue.500" }} style={{ fontSize: "1.5rem", marginRight: "0.5rem" }} />
              <MenuButton
                as={Flex}
                align="center"
                cursor="pointer"
                _hover={{ color: "blue.500" }}
              >
                <Icon as={ChevronDownIcon} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Flex alignItems="center">
                    {/* <Box> */}
                    <ReactCountryFlag countryCode="US" svg style={{
                      width: '2em',
                      height: '2em',
                      marginRight: "1rem"
                    }} />
                    {/* </Box> */}
                    English
                  </Flex>
                </MenuItem>
                <MenuItem>
                  <Flex alignItems="center">
                    <ReactCountryFlag countryCode="AE" svg style={{
                      width: '2em',
                      height: '2em',
                      marginRight: "1rem"
                    }} />
                    Arabic
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export { NavBar };

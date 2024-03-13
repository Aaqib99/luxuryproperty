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
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TiWorld } from "react-icons/ti";
import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";
import ReactCountryFlag from "react-country-flag";
import NavItem from "./NavItem";

function NavBar({ onLanguageChange, language }) {
  return (
    <>
      <Box
        backgroundColor={"#fafaf5"}
        borderRadius={"8px"}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="999"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          align="center"
          p={{ base: 1, md: 1 }}
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
                {language === "en" ? "Home" : "الصفحة الرئيسية"}
              </NavItem>
              <NavItem to="/app-design" mx={4}>
                {language === "en" ? "Buy" : "شراء"}
              </NavItem>
              <NavItem to="/website-design" mx={4}>
                {language === "en" ? "Auctions" : "مزادات"}
              </NavItem>
              <NavItem to="/about-me" mx={4}>
                {language === "en" ? "Rent" : "تأجير"}
              </NavItem>
              <NavItem to="/contact-me" mx={4}>
                {language === "en" ? "Sell" : "بيع"}
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
                <MenuItem onClick={() => onLanguageChange("en")}>
                  <Flex alignItems="center" >
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
                <MenuItem onClick={() => onLanguageChange("ar")}>
                  <Flex alignItems="center" >
                    <ReactCountryFlag countryCode="AE" svg style={{
                      width: '2em',
                      height: '2em',
                      marginRight: "1rem"
                    }} />
                    العربية
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

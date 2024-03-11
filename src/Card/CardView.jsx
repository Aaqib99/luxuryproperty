import React from "react";
import { Box, Center, Flex, Grid, Image, Link, Text, Button, Icon } from "@chakra-ui/react";
import dream from "../assets/4a.jpg";
import realestate from "../assets/realestate.jpg";
import smeicon from "../assets/smeicon.svg";
import homeloan from "../assets/homeloan.jpg";
import laptopicon from "../assets/laptop.svg";
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import bedicon from "../assets/bed.svg";
import land from "../assets/land.svg";
import newicon from "../assets/new.svg";
import bathroom from "../assets/bathroom.svg";
import { FaHeart } from 'react-icons/fa';
import { Navigate, useNavigate } from "react-router-dom";




export default function CardView() {
    const navigate = useNavigate();
    const titleclick = () => {
        navigate("/detail-product-page");
    }
    return (
        <Box mt={16} px={[4, 8, 16, 20]}>
            <Box
                mb={12}
                fontSize={["3xl", "4xl"]}
                color="darkslategray.200"
                textAlign="left"
                position="relative"
            >
                <Flex alignItems="center">
                    <Text fontWeight="medium" color="dark">
                        {" "}
                        Listed Property{" "}
                    </Text>
                    <Box ml={2}>
                        <Image h="auto" ml="1rem" maxW="40px" src={laptopicon} alt="" />
                    </Box>
                </Flex>
            </Box>

            <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 1fr 1fr"]} gap="7rem">
                <Box
                    display="inline-block"
                    mt={0}
                    bg="white"
                    borderWidth="1px"
                    borderColor="gray.200"
                    rounded="lg"
                    shadow="md"
                    _dark={{ bg: "gray.800", borderColor: "gray.700" }}
                >
                    {/* <Box borderTopRadius="lg" overflow="hidden">
                        <Image mx="auto" w="100%" h="auto" src={dream} alt="" />
                    </Box> */}
                    <Box position="relative" borderTopRadius="lg" overflow="hidden">
                        {/* Featured Plus text */}
                        <Box
                            position="absolute"
                            top="3"
                            left="0"
                            bg="#FFEFD5"
                            color="black"
                            py={1}
                            px={2}
                            borderTopRightRadius="lg"
                            fontSize="xs"
                            fontWeight="bold"
                            zIndex="1"
                        >
                            FEATURED PLUS
                        </Box>
                        {/* Villa text */}
                        <Box
                            position="absolute"
                            top="13rem"
                            left="0"
                            bg="#FFEFD5"
                            color="black"
                            py={1}
                            px={2}
                            borderTopRightRadius="lg"
                            fontSize="xs"
                            fontWeight="bold"
                            zIndex="1"
                        >
                            VILLA
                        </Box>
                        {/* Heart icon */}
                        <Box
                            position="absolute"
                            top="2"
                            right="2"
                            // transform="translate(50%, -50%)"
                            bg="#FFEFD5"
                            color="blue"
                            p={2}
                            borderRadius="full"
                            zIndex="1"
                        >
                            <Icon as={FaHeart} />
                        </Box>
                        {/* Image */}
                        <Image mx="auto" w="100%" h="auto" src={dream} alt="" />
                    </Box>

                    <Box p={5}>
                        <Text
                            mb={2}
                            fontSize="2xl"
                            fontWeight="bold"
                            letterSpacing="tight"
                            color="gray.800"
                            _dark={{ color: "white" }}
                            onClick={titleclick}
                        >
                            570 SQM Facing South on 18m Width Street
                        </Text>
                        <Box
                            bg="#FFEFD5" // Light yellow background color
                            rounded="md" // Rounded corners
                            p={1} // Padding
                            display="inline-block" // Ensure inline display
                        >
                            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
                                Al Rimal, East Riyadh, Riyadh
                            </Text>
                        </Box>
                        <Flex alignItems="center" mt={5}>
                            <Box
                                rounded="md"
                                p={1}
                                // ml={2}
                                display="flex"
                                alignItems="center"
                            >
                                <img src={bedicon} alt="Bed Icon" width="30" height="30 " />
                                <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                    3
                                </Text>
                            </Box>
                            <Box
                                rounded="md"
                                p={1}
                                ml={8}
                                display="flex"
                                alignItems="center"
                            >
                                <img src={land} alt="Bed Icon" width="25" height="25" />
                                <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                    370
                                </Text>
                            </Box>
                            <Box
                                rounded="md"
                                p={1}
                                ml={8}
                                display="flex"
                                alignItems="center"
                            >
                                <img src={newicon} alt="Bed Icon" width="25" height="25" />
                                <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                    New
                                </Text>
                            </Box>
                            <Box
                                rounded="md"
                                p={1}
                                ml={8}
                                display="flex"
                                alignItems="center"
                            >
                                <img src={bathroom} alt="Bed Icon" width="25" height="25" />
                                <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                    3
                                </Text>
                            </Box>
                        </Flex>

                        <Text fontSize="12px" color="gray.500" mt={3}>
                            Updated Few Hours ago
                        </Text>
                        <Text fontSize="lg" color="gray.700" mt={3}>
                            Rs. <Box as="span" fontWeight="bold">4M</Box>
                        </Text>
                        <Flex mt={3}>
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                mr={3}
                                display={{ base: "none", md: "flex" }}
                            >
                                Request Call Back
                            </Button>
                            <Button
                                variant="outline"
                                bg="#006400"
                                mr={3}
                                display={{ base: "none", md: "flex" }}
                                style={{ color: "white" }}
                            >
                                <FaWhatsapp />
                            </Button>
                            <Button
                                variant="outline"
                                bg="#1E90FF"
                                mr={3}
                                display={{ base: "none", md: "flex" }}
                                style={{ color: "white" }}
                            >
                                <FaPhone />
                            </Button>
                        </Flex>

                    </Box>
                </Box>
                <Box
                    display="inline-block"
                    mt={0}
                    bg="white"
                    borderWidth="1px"
                    borderColor="gray.200"
                    rounded="lg"
                    shadow="md"
                    _dark={{ bg: "gray.800", borderColor: "gray.700" }}
                >
                    <Box borderTopRadius="lg" overflow="hidden">
                        <Image mx="auto" w="100%" h="auto" src={realestate} alt="" />
                    </Box>
                    <Box p={5}>
                        <Text
                            mb={2}
                            fontSize="2xl"
                            fontWeight="bold"
                            letterSpacing="tight"
                            color="gray.800"
                            _dark={{ color: "white" }}
                        >
                            {" "}
                            Favourite Plus{" "}
                        </Text>
                        <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
                            {" "}
                            Discover a wide range of masterplans, view the available plots with their prices, and start investing now.
                        </Text>
                        <Center mt={3}>
                            <Link href="/preparing-cyber" display="inline-flex" py={2}>
                                <Image src={smeicon} alt="preparing-cyber" />
                            </Link>
                        </Center>
                    </Box>
                </Box>{" "}
                <Box
                    display="inline-block"
                    mt={0}
                    bg="white"
                    borderWidth="1px"
                    borderColor="gray.200"
                    rounded="lg"
                    shadow="md"
                    _dark={{ bg: "gray.800", borderColor: "gray.700" }}
                >
                    <Box borderTopRadius="lg" overflow="hidden">
                        <Image mx="auto" w="100%" h="auto" src={homeloan} alt="" />
                    </Box>
                    <Box p={5}>
                        <Text
                            mb={2}
                            fontSize="2xl"
                            fontWeight="bold"
                            letterSpacing="tight"
                            color="gray.800"
                            _dark={{ color: "white" }}
                        >
                            {" "}
                            Heart icon{" "}
                        </Text>
                        <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
                            Following the issue of the Net Systems <br /> (NIS) Regulations...
                        </Text>
                        <Center mt={3}>
                            <Link href="/certification-process" display="inline-flex" py={2}>
                                <Image src={smeicon} alt="certification-process" />
                            </Link>
                        </Center>
                    </Box>
                </Box>{" "}
            </Grid>
        </Box>
    );
}

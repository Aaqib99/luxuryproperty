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


export default function CardView({ language }) {
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
                        {language === "en" ? "Listed Property" : "الملكية المدرجة"}
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
                    <Box position="relative" borderTopRadius="lg" overflow="hidden" onClick={titleclick}
                        _hover={{ cursor: "pointer" }}>
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
                            {language === "en" ? "FEATURED PLUS" : "ميزة إضافية"}
                        </Box>
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
                            {language === "en" ? "VILLA" : "فيلا"}
                        </Box>
                        {/* Heart icon */}
                        <Box
                            position="absolute"
                            top="2"
                            right="2"
                            bg="#FFEFD5"
                            color="blue"
                            p={2}
                            borderRadius="full"
                            zIndex="1"
                        >
                            <Icon as={FaHeart} />
                        </Box>
                        <Image mx="auto" w="100%" h="auto" src={dream} alt="" />
                    </Box>

                    <Box p={5} >
                        <Box onClick={titleclick}
                            _hover={{ cursor: "pointer" }}>
                            <Text
                                mb={2}
                                fontSize="2xl"
                                fontWeight="bold"
                                letterSpacing="tight"
                                color="gray.800"
                                _dark={{ color: "white" }}
                            >
                                {language === "en" ? "570 SQM Facing South on 18m Width Street" : "570 متر مربع تطل على الجنوب على شارع عرضه 18 متر"}
                            </Text>
                            <Box
                                bg="#FFEFD5"
                                rounded="md"
                                p={1}
                                display="inline-block"
                            >
                                <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
                                    {language === "en" ? "Al Rimal, East Riyadh, Riyadh" : "الرمال، الرياض الشرقية، الرياض"}
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
                                        {language === "en" ? "New" : "جديد"}
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
                                {language === "en" ? "Updated Few Hours ago" : "تم التحديث قبل ساعات قليلة"}
                            </Text>
                            <Text fontSize="lg" color="gray.700" mt={3}>
                                Rs. <Box as="span" fontWeight="bold">4M</Box>
                            </Text>
                        </Box>
                        <Box>

                            <Flex mt={3}>
                                <Button
                                    variant="outline"
                                    colorScheme="blue"
                                    mr={3}
                                    display={{ base: "none", md: "flex" }}
                                >
                                    {language === "en" ? "Request Call Back" : "طلب مكالمة"}
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
                            {language === "en" ? "Favourite Plus" : "المفضلة زائد"}
                        </Text>
                        <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
                            {" "}
                            {language === "en" ? "Discover a wide range of masterplans, view the available plots with their prices, and start investing now." : "اكتشف مجموعة واسعة من المخططات الرئيسية، واطلع على قطع الأراضي المتاحة بأسعارها، وابدأ الاستثمار الآن."}

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
                            {language === "en" ? "Luxury Property" : "عقارات فاخرة"}
                        </Text>
                        <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
                            {language === "en" ? "Some key features of a luxury house include spaciousness, premium location, top-quality construction materials." : "تشمل بعض الميزات الرئيسية للمنزل الفاخر الرحابة والموقع المتميز ومواد البناء عالية الجودة."}
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

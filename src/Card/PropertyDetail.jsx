import React, { useState, useEffect } from "react";
import { Box, Text, Image, Button, Flex, Heading, IconButton } from "@chakra-ui/react";
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { CarouselDefault } from "../Customer/CarouselDefault";
import propertylogo from "../assets/property.png";
import { FaSave, FaShareAlt } from 'react-icons/fa';
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import property3 from "../assets/property3.jpg";
import property4 from "../assets/property4.jpg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavBar } from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import RoomIncluded from "../Customer/RoomIncluded";
import PropertyType from "../Customer/PropertyType";

export default function PropertyDetail({ onLanguageChange, language }) {
    const [selectedImage, setSelectedImage] = useState(0);

    const images = [
        { id: 1, url: property1 },
        { id: 2, url: property2 },
        { id: 3, url: property3 },
        { id: 3, url: property4 },
        { id: 1, url: property1 },
        { id: 2, url: property2 },
        { id: 3, url: property3 },
        { id: 3, url: property4 },
    ];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // const selectedImage = 1;
    return (
        <>
            <NavBar onLanguageChange={onLanguageChange} language={language} />
            <Flex
                flexDir={["column", "row"]}
                alignItems="center"

                justifyContent={["center", "space-between"]}
                overflow="hidden"
                marginTop={"8rem"}
            >
                <Box>
                    <Box position="relative" mb={4} ml={"5rem"}>
                        <IconButton
                            aria-label="Previous Image"
                            icon={<FaChevronLeft />}
                            variant="outline"
                            bg={"white"}
                            onClick={() => setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)}
                            position="absolute"
                            left="0"
                            top="50%"
                            transform="translateY(-50%)"
                        />
                        <Box
                            position="absolute"
                            top="4"
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
                            top="4"
                            right="0"
                            bg="#FFEFD5"
                            color="black"
                            py={1}
                            px={2}
                            borderTopLeftRadius="lg"
                            fontSize="xs"
                            fontWeight="bold"
                            zIndex="1"
                        >
                            {selectedImage + 1}/{images.length}
                        </Box>
                        <Image src={images[selectedImage].url} alt="Property" width="800px" height={"500"} objectFit="cover" style={{ borderRadius: "10px" }} />
                        <IconButton
                            aria-label="Next Image"
                            icon={<FaChevronRight />}
                            variant="outline"
                            bg={"white"}
                            onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
                            position="absolute"
                            right="0"
                            top="50%"
                            transform="translateY(-50%)"
                        />
                    </Box>
                    <Flex justifyContent="center" position="relative" bg="#291f2e" py={4} width={"50%"} mt={"-60px"} left="28%" style={{ borderRadius: "10px" }}>

                        {images.map((image, index) => (
                            <Box key={image.id} display="inline-block" mx={1} onClick={() => setSelectedImage(index)} cursor="pointer">
                                <Image src={image.url} alt="iamgename" boxSize="50px" objectFit="cover" style={{ borderRadius: "5px" }} border={index === selectedImage ? "2px solid white" : "none"} />
                            </Box>
                        ))}
                    </Flex>
                </Box>

                {/* right side */}
                <Box
                    maxW={["100%", "50%"]}
                    px={[4, 6, 12]}
                    py={12}
                    textAlign={["center", "left"]}
                    borderWidth="2px"
                    borderColor="gray.300"
                    rounded="lg"
                    shadow="md"
                    my={4}
                    mx="auto"
                    bg="white"
                    p={4}
                >
                    <Flex mt={3}>
                        <Button
                            variant="outline"
                            colorScheme="blue"
                            mr={3}
                            display={{ base: "none", md: "flex" }}
                        >
                            <FaSave />
                            <Text ml={2}>{language === "en" ? "Save" : "حفظ"}</Text>
                        </Button>
                        <Button
                            variant="outline"
                            colorScheme="blue"
                            mr={3}
                            display={{ base: "none", md: "flex" }}
                        >
                            <FaShareAlt />
                            <Text ml={2}>{language === "en" ? "Share" : "مشاركة"}</Text>
                        </Button>
                        <Button
                            variant="outline"
                            colorScheme="blue"
                            mr={3}
                            display={{ base: "none", md: "flex" }}
                        >
                            <MdOutlineReportGmailerrorred />
                            <Text ml={2}>{language === "en" ? "Report Project" : "الإبلاغ عن المشروع"}</Text>
                        </Button>
                    </Flex>
                    <Flex alignItems="center">
                        <Image src={propertylogo} alt="Logo" style={{ width: "110px", height: "110px" }} />
                        <Text ml={2}>{language === "en" ? "Listed by" : "مدرج من طرف"}</Text>
                        <Button
                            variant="outline"
                            colorScheme="gray"
                            mr={3}
                            display={{ base: "none", md: "flex" }}
                            size="sm"
                            borderColor="gray.200"
                        >
                            {language === "en" ? "Authorized Broker" : "وسيط معتمد"}
                        </Button>
                    </Flex>
                    <Text mb={4} fontWeight={"bold"} fontSize={"22px"}>شركة دار للتطوير العقاري</Text>
                    <Text mb={4}>Ref no. 100196 </Text>
                    <Text mb={4} color={"gray.500"}>{language === "en" ? "Last updated: 62 days ago" : "تم التحديث لآخر مرة: منذ 62 يومًا"}</Text>
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

            </Flex >
            <RoomIncluded language={language} />
            <PropertyType language={language} />
            <Footer language={language} />
        </>
    );
}

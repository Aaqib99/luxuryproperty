import React from 'react'
import bedicon from "../assets/bed.svg";
import land from "../assets/land.svg";
import newicon from "../assets/new.svg";
import bathroom from "../assets/bathroom.svg";
import { Box, Text, Image, Button, Flex, Heading, IconButton } from "@chakra-ui/react";

function RoomIncluded({ language }) {
    return (
        <>
            <Box maxW="92%" mx="auto" my={8} px={4}>
                <Button variant="outline" colorScheme="blue" mr={3}>{language === "en" ? "Project" : "مشروع"}</Button>
                <Button variant="outline" colorScheme="blue" mr={3}>{language === "en" ? "For Sale" : "للبيع"}</Button>
                <Button variant="outline" colorScheme="blue" mr={3}>{language === "en" ? "Ready to Move-in" : "جاهز للسكن"}</Button>
                <Text fontSize="xx-large" fontWeight="bold" mt={4} >{language === "en" ? "Dar Cordoba project - apartments for sale" : "مشروع دار قرطبة - شقق للبيع"}</Text>
                <Text fontSize="lg" fontWeight="sm" mt={"1rem"}>{language === "en" ? "Qurtubah, East, Riyadh" : "قرطبة، الشرق، الرياض"}
                    <a href="#" style={{ color: "blue", marginLeft: "4px" }}>Map view</a>
                </Text>
                <Flex alignItems="center" mt={4}>
                    <Box mr={2}><Image src={bedicon} alt="Logo" style={{ width: "40px", height: "40px" }} /></Box>
                    <Text>{language === "en" ? "3 Bedrooms" : "3 غرف نوم"}</Text>
                    <Flex alignItems="center" mt={2}>
                        <Box mr={2}><Image src={bathroom} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                        <Text>{language === "en" ? "4.5 Bathrooms" : "4.5 حمامات"}</Text>
                    </Flex>
                    <Flex alignItems="center" mt={2}>
                        <Box mr={2}><Image src={land} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                        <Text>{language === "en" ? "1 Living Room" : "1 غرفة معيشة"}</Text>
                    </Flex>
                    <Flex alignItems="center" mt={2}>
                        <Box mr={2}><Image src={newicon} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                        <Text>{language === "en" ? "1 Guest Room" : "1 غرفة ضيوف"}</Text>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default RoomIncluded
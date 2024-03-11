import React from 'react'
import bedicon from "../assets/bed.svg";
import land from "../assets/land.svg";
import newicon from "../assets/new.svg";
import bathroom from "../assets/bathroom.svg";
import { Box, Text, Image, Button, Flex, Heading, IconButton } from "@chakra-ui/react";

function RoomIncluded() {
    return (
        <>
            <Box maxW="92%" mx="auto" my={8} px={4}>
                <Button variant="outline" colorScheme="blue" mr={3}>Project</Button>
                <Button variant="outline" colorScheme="blue" mr={3}>For Sale</Button>
                <Button variant="outline" colorScheme="blue" mr={3}>Ready to Move-in</Button>
                <Text fontSize="xx-large" fontWeight="bold" mt={4}>مشروع دار قرطبة - شقق للبيع</Text>
                <Text fontSize="lg" fontWeight="sm" mt={"1rem"}>Qurtubah, East, Riyadh
                    <a href="#" style={{ color: "blue", marginLeft: "4px" }}>Map view</a>
                </Text>
                <Flex alignItems="center" mt={4}>
                    <Box mr={2}><Image src={bedicon} alt="Logo" style={{ width: "40px", height: "40px" }} /></Box>
                    <Text>3 Bedrooms</Text>
                    <Flex alignItems="center" mt={2}>
                        <Box mr={2}><Image src={bathroom} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                        <Text>4,5 Bathrooms</Text>
                    </Flex>
                    <Flex alignItems="center" mt={2}>
                        <Box mr={2}><Image src={land} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                        <Text>1 Living Room</Text>
                    </Flex>
                    <Flex alignItems="center" mt={2}>
                        <Box mr={2}><Image src={newicon} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                        <Text>1 Guest Room</Text>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default RoomIncluded
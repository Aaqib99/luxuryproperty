import React from 'react';
import { Box, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { FaBuilding, FaUsers } from 'react-icons/fa';
import PropertyFilters from './PropertyFilters';

function PropertyType() {
    return (
        <>
            <Box border="1px solid" width={"60%"} ml={"5rem"} borderColor="gray.300" borderRadius="md" p={4} mt={4}>
                <Flex align="center">
                    <Icon as={FaBuilding} color="gray.500" mr={2} boxSize={6} />
                    <Text fontSize="xx-large">Apartment (20)</Text>
                </Flex>
                <Flex align="center" mt={2}>
                    <Icon as={FaUsers} color="gray.500" mr={2} boxSize={6} />
                    <Text fontSize="x-large" color={"gray.500"}>169 people showed interest in this Project in last 7 days</Text>
                </Flex>
                <Button
                    bg={"#CFB05C"}
                    w="70"
                    mx={{ base: "auto", md: "0" }}
                    _hover={{ bg: "#A07B3F" }}
                    color="white"
                    fontWeight="bold"
                    py="2"
                    px="4"
                    mt={"1rem"}
                    rounded="md"
                // onClick={handleButtonClick}
                >
                    Call Now
                </Button>
            </Box>
            <PropertyFilters />
        </>
    )
}

export default PropertyType
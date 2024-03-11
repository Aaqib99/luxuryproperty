import { Box, Text, Icon, Button, Flex } from "@chakra-ui/react";
import { FaHeart } from 'react-icons/fa';
import { FiCheckCircle } from "react-icons/fi";
import { FaBuilding, FaBed, FaLandmark } from 'react-icons/fa';
import { MdOutlineBathroom } from "react-icons/md";

export default function PropertyInfo() {
    return (
        <>
            <Box
                borderWidth="1px"
                borderRadius="md"
                p={4}
                mt={4}
                width={"60%"}
                ml={"5rem"}
                position="relative"
            >

                <Button size="sm" variant="outline" borderRadius="md">Available</Button>
                <Button ml={"2rem"} size="sm" variant="outline" borderRadius="md">For Sale</Button>
                <Icon as={FaHeart} color="red.500" position="absolute" top={6} right={6} />
                <Text fontSize="xl" position="absolute" top={10} right={7} fontWeight="bold">883,499 SAR</Text>
                <Text fontSize="x-large" mt={"1rem"}>Apartment 169 SQM with 3 Bedrooms</Text>
                <Text mt={"1rem"} color={"gray.500"}>Unit No: $B2</Text>
                <Flex alignItems="center" mt={"1rem"}>
                    <FaBed fontSize="1.5rem" />
                    <Text fontSize="1.5rem" ml={"0.5rem"}>3</Text>

                    <Flex alignItems="center" ml={"1rem"}>
                        <MdOutlineBathroom fontSize="1.5rem" />
                        <Text fontSize="1.5rem" ml={"0.5rem"}>4</Text>
                    </Flex>
                    <Flex alignItems="center" ml={"1rem"}>
                        <FaLandmark fontSize="1.5rem" />
                        <Text fontSize="1.5rem" ml={"0.5rem"}>1</Text>
                    </Flex>
                </Flex>

                <Flex alignItems="center" mt={"1rem"}>
                    <FiCheckCircle />
                    <Text color={"green"} ml={"1rem"}>صالة طعام - حوش - موقف خارجي</Text>
                </Flex>
            </Box>
        </>
    );
}

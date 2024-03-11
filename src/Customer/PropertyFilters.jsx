import { Box, Text, Icon, Button, Flex, Select, Switch } from "@chakra-ui/react";
import { FaBuilding, FaFilter, FaUsers } from 'react-icons/fa';
import PropertyInfo from "./PropertyInfo";
import StreetInformation from "./StreetInformation";

export default function PropertyFilters() {
    return (
        <>

            <Box
                borderWidth="1px"
                borderRadius="md"
                width={"60%"}
                ml={"5rem"}
                p={4}
                mt={4}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Flex alignItems="center">
                    <Icon as={FaBuilding} color="gray.500" mr={2} boxSize={6} />
                    <Text fontSize="x-large">Units (20)</Text>
                </Flex>
                <Flex alignItems="center">
                    <Select variant="outline" placeholder="Buy" mr={2}>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </Select>
                    <Select variant="outline" placeholder="Type" mr={2}>
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                        <option value="townhouse">Townhouse</option>
                    </Select>
                    <Select variant="outline" placeholder="Bedroom" mr={2}>
                        <option value="1">1 Bedroom</option>
                        <option value="2">2 Bedrooms</option>
                        <option value="3">3 Bedrooms</option>
                        <option value="4">4 Bedrooms</option>
                    </Select>
                    <Select variant="outline" placeholder="Filters" mr={2}>
                        <option value="feature1">Feature 1</option>
                        <option value="feature2">Feature 2</option>
                        <option value="feature3">Feature 3</option>
                    </Select>
                    Available <Switch colorScheme="blue" size="sm" />
                </Flex>
            </Box>
            <PropertyInfo />
            <PropertyInfo />
            <PropertyInfo />
            <StreetInformation />
        </>
    );
}

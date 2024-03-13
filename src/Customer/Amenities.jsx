import { Box, Flex, Text } from "@chakra-ui/react";
import { FaWifi, FaCar, FaArrowUp } from 'react-icons/fa';
import LocationNearby from "./LocationNearBy";

export default function Amenities({ language }) {
    return (
        <>
            <Box
                borderWidth="1px"
                borderRadius="md"
                width={"60%"}
                ml={"5rem"}
                p={4}
                mt={4}
            >
                <Text fontSize="x-large" mt={"1rem"}>{language === "en" ? "Amenities" : "الميزات"}</Text>
                <Flex alignItems="center" mt={"1rem"}>
                    <Flex alignItems="center">
                        <FaWifi />
                        <Text ml={2}>{language === "en" ? "Smart Home System" : "نظام منزل ذكي"}</Text>
                    </Flex>
                    <Flex alignItems="center" ml={"2rem"}>
                        <FaCar />
                        <Text ml={2}>{language === "en" ? "Underground Parking" : "موقف سيارات تحت الأرض"}</Text>
                    </Flex>
                    <Flex alignItems="center" ml={"2rem"}>
                        <FaArrowUp />
                        <Text ml={2}>{language === "en" ? "Elevator" : "مصعد"}</Text>
                    </Flex>
                </Flex>
            </Box>
            <LocationNearby language={language}/>
        </>
    );
}

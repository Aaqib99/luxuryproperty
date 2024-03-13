import { Box, Flex, Text } from "@chakra-ui/react";
import Amenities from "./Amenities";

export default function AdditionalInformation({ language }) {
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
                <Text fontSize="x-large" mt={"1rem"}>{language === "en" ? "Additional Information" : "معلومات إضافية"}</Text>
                <Flex alignItems="center" mb={2} mt={"1rem"}>
                    <Text>{language === "en" ? "Building Year" : "سنة البناء"}</Text>
                    <Text ml={2} fontWeight={"bold"}>2023</Text>
                    <Flex alignItems="center" ml={"5rem"}>
                        <Text>{language === "en" ? "Electricity" : "الكهرباء"}</Text>
                        <Text ml={2} fontWeight={"bold"}>{language === "en" ? "Yes" : "نعم"}</Text>
                    </Flex>
                </Flex>
                <Flex alignItems="center" mb={2} mt={"1rem"}>
                    <Flex alignItems="center">
                        <Text>{language === "en" ? "Water" : "الماء"}</Text>
                        <Text fontWeight={"bold"} ml={"1rem"}>{language === "en" ? "Yes" : "نعم"}</Text>
                    </Flex>
                    <Flex alignItems="center" ml={"5rem"}>
                        <Text>{language === "en" ? "Residency Type" : "نوع الإقامة"}</Text>
                        <Text ml={2} fontWeight={"bold"}>{language === "en" ? "Family" : "عائلي"}</Text>
                    </Flex>
                </Flex>
            </Box>
            <Amenities language={language}/>
        </>
    );
}

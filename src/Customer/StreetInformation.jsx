import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaRoad } from "react-icons/fa";
import { TbNavigationNorth, TbNavigationSouth } from "react-icons/tb";
import AdditionalInformation from "./AdditionalInformation";

export default function StreetInformation({ language }) {
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
                <Text fontSize="x-large" mt={"1rem"}>{language === "en" ? "Street Information" : "معلومات الشارع"}</Text>
                <Flex alignItems="center" mb={2} mt={"1rem"}>
                    <TbNavigationSouth fontSize="1.5rem" />
                    <Text ml={"1rem"}>{language === "en" ? "Street 1 | width 36m | Facing South" : "الشارع 1 | عرض 36 متر | تواجه الجنوب"}</Text>
                </Flex>
                <Flex alignItems="center">
                    <TbNavigationNorth fontSize="1.5rem" />
                    <Text ml={"1rem"}>{language === "en" ? "Street 2 | width 20m | Facing North" : "الشارع 2 | عرض 20 متر | تواجه الشمال"}</Text>
                </Flex>
            </Box>
            <AdditionalInformation language={language} />
        </>
    );
}

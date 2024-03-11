
// import "../App.css";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CarouselDefault } from "./CarouselDefault";
import verifiedicon from "../assets/verifiedicon.jpg"

function HeroSection() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("dsljfhsdj");
    navigate("/verified-property");
  };

  return (
    <Flex
      flexDir={["column", "row"]}
      alignItems="center"
      justifyContent={["center", "space-between"]}
      overflow="hidden"
    >
      <Box
        maxW={["100%", "50%"]}
        px={[4, 6, 12]}
        py={12}
        textAlign={["center", "left"]}
      >
        <Flex alignItems="center">
          <Heading
            mb={6}
            fontSize={["4xl", "6xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            color={"#CFB05C"}
            as="h3"
          >
            Verified Property
          </Heading>
          <Box ml={2}>
            <img src={verifiedicon} alt="Verified Icon" style={{ width: "70px", height: "70px", marginLeft: "20px" }} />
          </Box>
        </Flex>
        <Text mb={6} color="blackAlpha.700">
          At website-name, our mission is to significantly improve the experience of finding properties in Dubai.
          The problems we faced inspired us to put our heads together to develop the ‘bigger picture’ that would
          lead you on an immersive journey to learn about Dubai's communities and properties.
        </Text>
        <Button
          bg={"#CFB05C"}
          w="70"
          mx={{ base: "auto", md: "0" }}
          _hover={{ bg: "#A07B3F" }}
          color="white"
          fontWeight="bold"
          py="2"
          px="4"
          rounded="md"
          onClick={handleButtonClick}
        >
          Explore All Properties
        </Button>
      </Box>
      <Box w={["100%", "50%"]} position="relative">
        <CarouselDefault />
      </Box>
    </Flex>
  );
}

export default HeroSection;

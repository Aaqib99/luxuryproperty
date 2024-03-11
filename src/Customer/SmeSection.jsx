// import React from "react";
// @ts-ignore
import dream from "../assets/dream.jpeg";
// @ts-ignore
import realestate from "../assets/realestate.jpg";
import smeicon from "../assets/smeicon.svg";
// @ts-ignore
import homeloan from "../assets/homeloan.jpg";
// @ts-ignore
import laptopicon from "../assets/laptop.svg";
import { Box, Center, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";

export default function SmeSection() {
  return (
    <Box mt={16} px={[4, 8, 16, 20]}>
      <Box
        mb={12}
        fontSize={["3xl", "4xl"]}
        color="darkslategray.200"
        // fontFamily="mulish"
        textAlign="left"
        position="relative"
      >
        <Flex alignItems="center">
          <Text fontWeight="medium" color="dark">
            {" "}
            Best Auctions{" "}
          </Text>
          <Box ml={2}>
            <Image h="auto" ml="1rem" maxW="40px" src={laptopicon} alt="" />
          </Box>
        </Flex>
      </Box>

      <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 1fr 1fr"]} gap="7rem">
        <Box
          display="inline-block"
          mt={0}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          rounded="lg"
          shadow="md"
          _dark={{ bg: "gray.800", borderColor: "gray.700" }}
        >
          <Box borderTopRadius="lg" overflow="hidden">
            <Image mx="auto" w="100%" h="auto" src={dream} alt="" />
          </Box>
          <Box p={5}>
            <Text
              mb={2}
              fontSize="2xl"
              fontWeight="bold"
              letterSpacing="tight"
              color="gray.800"
              _dark={{ color: "white" }}
            >
              {" "}
              Dream Property{" "}
            </Text>
            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
              {" "}
              Just share your requirements and connect directly with our brokers
            </Text>
            <Center mt={3}>
              <Link href="/mastery-hub" display="inline-flex" py={2}>
                <Image src={smeicon} alt="cyber-essentials" />
              </Link>
            </Center>
          </Box>
        </Box>
        <Box
          display="inline-block"
          mt={0}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          rounded="lg"
          shadow="md"
          _dark={{ bg: "gray.800", borderColor: "gray.700" }}
        >
          <Box borderTopRadius="lg" overflow="hidden">
            <Image mx="auto" w="100%" h="auto" src={realestate} alt="" />
          </Box>
          <Box p={5}>
            <Text
              mb={2}
              fontSize="2xl"
              fontWeight="bold"
              letterSpacing="tight"
              color="gray.800"
              _dark={{ color: "white" }}
            >
              {" "}
              Real Estate Investment{" "}
            </Text>
            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
              {" "}
              Discover a wide range of masterplans, view the available plots with their prices, and start investing now.
            </Text>
            <Center mt={3}>
              <Link href="/preparing-cyber" display="inline-flex" py={2}>
                <Image src={smeicon} alt="preparing-cyber" />
              </Link>
            </Center>
          </Box>
        </Box>{" "}
        <Box
          display="inline-block"
          mt={0}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          rounded="lg"
          shadow="md"
          _dark={{ bg: "gray.800", borderColor: "gray.700" }}
        >
          <Box borderTopRadius="lg" overflow="hidden">
            <Image mx="auto" w="100%" h="auto" src={homeloan} alt="" />
          </Box>
          <Box p={5}>
            <Text
              mb={2}
              fontSize="2xl"
              fontWeight="bold"
              letterSpacing="tight"
              color="gray.800"
              _dark={{ color: "white" }}
            >
              Homes Loans Alinma Bank
            </Text>
            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
              Following the issue of the Net Systems <br /> (NIS) Regulations...
            </Text>
            <Center mt={3}>
              <Link href="/certification-process" display="inline-flex" py={2}>
                <Image src={smeicon} alt="certification-process" />
              </Link>
            </Center>
          </Box>
        </Box>{" "}
      </Grid>
    </Box>
  );
}

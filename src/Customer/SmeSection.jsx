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

export default function SmeSection({ language }) {
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
            {language === "en" ? "Best Auctions" : "أفضل المزادات"}
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
              {language === "en" ? "Dream Property" : "حلم الملكية"}
            </Text>
            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
              {language === "en" ? "Just share your requirements and connect directly with our brokers" : "ما عليك سوى مشاركة متطلباتك والتواصل مباشرة مع وسطاءنا"}
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
              {language === "en" ? "Real Estate Investment" : "استثمار عقاري"}
            </Text>
            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
              {" "}
              {language === "en" ? "Discover a wide range of masterplans, view the available plots with their prices, and start investing now." : "اكتشف مجموعة واسعة من المخططات الرئيسية، واطلع على قطع الأراضي المتاحة بأسعارها، وابدأ الاستثمار الآن."}
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
              {language === "en" ? "Homes Loans Alinma Bank" : "القروض السكنية مصرف الإنماء"}
            </Text>
            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
              {language === "en" ? "In Dubai, the financial landscape is stringent when it comes to loans. To qualify for a home loan in Dubai, you need to have a salary of at least 10,000 AED as a national, and 15,000 AED if you're an expat." : "في دبي، يتسم المشهد المالي بالصرامة عندما يتعلق الأمر بالقروض. للتأهل للحصول على قرض سكني في دبي، يجب أن يكون لديك راتب لا يقل عن 10,000 درهم إماراتي كمواطن، و15,000 درهم إماراتي إذا كنت وافداً."}
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

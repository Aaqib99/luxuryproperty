// @ts-ignore
import tourismapp from "../assets/assuranceapp1.png";
// @ts-ignore
import assuranceapp from "../assets/assuranceapp1.png";
import secondhandapp from "../assets/secondhandapp1.png";
// @ts-ignore
import mobileicon from "../assets/mobile.svg";
import FeaturedPost from "../Customer/FeaturedPost";
import SmeSection from "../Customer/SmeSection";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

const PublicFeature = () => {
  const featuredPosts = [
    {
      title: "AI Powered Platform",
      description:
        "Our AI-powered platform revolutionizes the property market by leveraging advanced algorithms to streamline buying and selling processes.",
      image: tourismapp,
      challenge: "Major Points",
      challenge1: "Advanced Algorithms",
      challenge2: "Predictive Pricing",
      imageLabel: "password",
      buttonText: "Explore",
    },
    {
      title: "Verified Listings",
      description:
        "Explore our collection of verified listings, offering a curated selection of properties that meet our stringent quality standards.",
      image: assuranceapp,
      challenge: "Project Goals",
      challenge1: "Stringent Verification Process",
      challenge2: "Transparent and Reliable",
      imageLabel: "vulnerable",
      buttonText: "Explore",
    },
    {
      title: "Professional Real Estate Agents",
      description:
        "Connect with professional real estate agents who bring expertise, integrity, and personalized service to every transaction.",
      image: secondhandapp,
      challenge: "Challenges",
      challenge1: "Expertise and Integrity",
      challenge2: "Personalized Service",
      imageLabel: "vulnerable",
      buttonText: "Explore",
    },
    {
      title: "Apartments, Villas, Homes",
      description:
        "Discover a diverse range of apartments, villas, and homes that cater to your lifestyle and budget requirements.",
      image: assuranceapp,
      challenge: "Objectives",
      challenge1: "Diverse Property Selection",
      challenge2: "Tailored to Your Needs",
      imageLabel: "vulnerable",
      buttonText: "Explore",
    },
  ];
  return (
    <Box
      position="relative"
      mt={16}
      w="full"
      display="flex"
      flexDir="column"
      alignItems="start"
      justifyContent="start"
      gap="56px"
      textAlign="left"
      fontSize="36px"
      color="darkslategray.200"
    // fontFamily="mulish"
    >
      <Flex alignItems="center">
        <Text ml="5rem" fontWeight="medium" color="dark">
          What's New
        </Text>
        <Box ml="2">
          <Image h="auto" ml="1rem" maxW="40px" src={mobileicon} alt="" />
        </Box>
      </Flex>
      <Grid
        templateColumns={["1fr", "repeat(2, 1fr)"]}
        gap={8}
        padding={["20px", "20px 80px"]}
      >
        {featuredPosts.map((post) => (
          <FeaturedPost
            key={post.title}
            post={post}
          // buttonText={post.buttonText}
          />
        ))}
      </Grid>
      <SmeSection />
    </Box>
  );
};

export default PublicFeature;

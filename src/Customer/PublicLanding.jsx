// import React from "react";
import HeroSection from "./HeroSection";
import PublicFeature from "../Customer/PublicFeature";
import Footer from "../Footer/Footer";
import { NavBar } from "../NavBar/Navbar";
import { Box } from "@chakra-ui/react";
import CardView from "../Card/CardView";

export const PublicLanding = () => {
  return (
    <>
      <Box p="6">
        <NavBar />
        <HeroSection />
        <CardView />
        <PublicFeature />
      </Box>
      <Footer />
    </>
  );
};

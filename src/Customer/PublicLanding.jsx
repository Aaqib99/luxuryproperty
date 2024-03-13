import React, { useState } from "react";
import HeroSection from "./HeroSection";
import PublicFeature from "../Customer/PublicFeature";
import Footer from "../Footer/Footer";
import { NavBar } from "../NavBar/Navbar";
import { Box } from "@chakra-ui/react";
import CardView from "../Card/CardView";

export const PublicLanding = ({ onLanguageChange, language }) => {

  return (
    <>
      <Box p="6">
        <NavBar onLanguageChange={onLanguageChange} language={language} />
        <HeroSection language={language} />
        <CardView language={language} />
        <PublicFeature language={language} />
      </Box>
      <Footer language={language} />
    </>
  );
};

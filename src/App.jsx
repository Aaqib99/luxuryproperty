import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HeroSection from "../src/Customer/HeroSection";
// import PublicFeature from "../src/Customer/PublicFeature";
// import Footer from "../src/Footer/Footer";
// import { Box } from "@chakra-ui/react";
// import { NavBar } from "./NavBar/Navbar";
// import CardView from "./Card/CardView";
import PropertyDetail from "./Card/PropertyDetail";
import { PublicLanding } from "./Customer/PublicLanding";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicLanding />} />
          <Route path="/detail-product-page" element={<PropertyDetail />} />
        </Routes>
      </Router>
    </>
    //   <>
    // <Router>
    //     <NavBar />
    //     <Routes>
    //       <Route path="/" element={<CardView />} />
    //       <Route path="/detail-product-page" element={<PropertyDetail />} />
    //     </Routes>
    //     <Box p="6">
    //       <HeroSection />
    //       <PublicFeature />
    //     </Box>
    //     <Footer />
    // </Router>
    //   </>
  );
}

export default App;

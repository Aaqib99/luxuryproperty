import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import PropertyDetail from "./Card/PropertyDetail";
import { PublicLanding } from "./Customer/PublicLanding";

function App() {
  const [language, setLanguage] = useState("en");
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicLanding onLanguageChange={handleLanguageChange} language={language} />} />
          <Route
            path="/detail-product-page"
            element={<PropertyDetail onLanguageChange={handleLanguageChange} language={language} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

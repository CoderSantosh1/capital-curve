import "./App.css";
import CapitalCurvAppInfo from "./components/CapitalCurvAppInfo/CapitalCurvAppInfo";
import Hero from "./components/Hero/Hero";
import ProcessSteps from "./components/ProcessSteps/ProcessSteps";
import PricingPlans from "./components/PricingPlans/PricingPlans";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Capital from "./components/WCU/Capital";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import TermsAndConditions from "./components/pages/TermsofUse";
import FAQPage from "./components/pages/Faq";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout/>} />
         <Route path="/" element={<Hero/>} />
          <Route path="/termsAndConditions" element={<TermsAndConditions/>} />
         <Route path="/faqs" element={<FAQPage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<ProcessSteps />} />
        <Route path="/pricing" element={<PricingPlans />} />
        <Route path="/capital" element={<Capital />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

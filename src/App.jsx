import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ViewPlane from "./components/PricingPlans/ViewPlane";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsofUse from "./components/pages/TermsofUse";
import TermsConditions from "./components/pages/TermsConditions";
import RefundCancellationPolicy from "./components/pages/RefundCancellationPolicy";
import ContactUs from "./components/pages/ContactUs";
import Payment from './components/Payment';
import PaymentStatus from './components/PaymentStatus';

// Lazy load components
const Faq = lazy(() => import('./components/pages/Faq'));
const Hero = lazy(() => import("./components/Hero/Hero"));
const Layout = lazy(() => import("./Layout"));
const ProcessSteps = lazy(() => import("./components/ProcessSteps/ProcessSteps"));
const PricingPlans = lazy(() => import("./components/PricingPlans/PricingPlans"));
const About = lazy(() => import("./components/pages/About"));
const SignUp = lazy(() => import("./components/LogIn/SignUp"));
const Login = lazy(() => import("./components/LogIn/Login"));
const ComingSoon = lazy(() => import("./ComingSoon"));
const MB = lazy(() => import("./components/CapitalCurvAppInfo/MB"));
const Capital = lazy(() => import("./components/WCU/Capital"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
          </Route>
          <Route path="/termsofUse" element={<TermsofUse/>} />
          <Route path="/Refundandcancellationpolicy" element={<RefundCancellationPolicy/>} />
           <Route path="/termsconditions" element={<TermsConditions/>} />
          <Route path="/faqs" element={<Faq/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/ComingSoon" element={<ComingSoon />} />
          <Route path="/app" element={<MB />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<ProcessSteps />} />
          <Route path="/pricing" element={<PricingPlans />} />
          <Route path="/capital" element={<Capital />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
           <Route path="/viewplane" element={<ViewPlane />} />
           <Route path="/contactUs" element={<ContactUs />} />
           <Route path="/payment" element={<Payment />} />
           <Route path="/payment/status" element={<PaymentStatus />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;

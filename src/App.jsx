import './App.css'
import CapitalCurvAppInfo from './components/CapitalCurvAppInfo/CapitalCurvAppInfo';
import Hero from './components/Hero/Hero';
import ProcessSteps from "./components/ProcessSteps/ProcessSteps";
import PricingPlans from "./components/PricingPlans/PricingPlans";

import Footer from './Footer';
import Navbar from './Navbar';
import Whychooseus from './components/Chooseus/WhyChooseUs';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <CapitalCurvAppInfo/>
      <ProcessSteps/>
      <PricingPlans/>
     <Whychooseus/>
     <Footer/> 
    </div>
  )
}

export default App

import './App.css'
import CapitalCurvAppInfo from "./components/CapitalCurvAppInfo/CapitalCurvAppInfo"
import Hero from './components/Hero/Hero';
import ProcessSteps from "./components/ProcessSteps/ProcessSteps";
import PricingPlans from "./components/PricingPlans/PricingPlans";

import Footer from './Footer';
import Navbar from './Navbar';
import Capital from './components/WCU/Capital';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <CapitalCurvAppInfo/>
      <ProcessSteps/>
      <PricingPlans/>
     <Capital/>
     <Footer/> 
    </div>
  )
}

export default App

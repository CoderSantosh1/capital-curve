import './App.css'
import CapitalCurvAppInfo from './components/CapitalCurvAppInfo'
import Hero from './components/Hero'
import PricingPlans from './components/PricingPlans'
import ProcessSteps from './components/ProcessSteps'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CapitalCurvAppInfo/>
      {/* <ProcessSteps/>
      <PricingPlans/>
      <WhyChooseUs/> */}
     <Footer/>
    </div>
  )
}

export default App

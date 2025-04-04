import React from 'react'
import CapitalCurvAppInfo from './components/CapitalCurvAppInfo/CapitalCurvAppInfo'
import ProcessSteps from './components/ProcessSteps/ProcessSteps'
import Hero from './components/Hero/Hero'
import PricingPlans from './components/PricingPlans/PricingPlans'
import Capital from './components/WCU/Capital'

const Layout = () => {
  return (
    <div>
        <Hero />
        <CapitalCurvAppInfo />
        <ProcessSteps />
        <PricingPlans />
        <Capital />
    </div>
  )
}

export default Layout
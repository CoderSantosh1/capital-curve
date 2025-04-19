import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load heavy components
const CapitalCurvAppInfo = lazy(() => import('./components/CapitalCurvAppInfo/CapitalCurvAppInfo'));
const ProcessSteps = lazy(() => import('./components/ProcessSteps/ProcessSteps'));
const PricingPlans = lazy(() => import('./components/PricingPlans/PricingPlans'));
const Capital = lazy(() => import('./components/WCU/Capital'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const Faq = lazy(() => import('./components/pages/Faq'));
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Hero />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <CapitalCurvAppInfo />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <ProcessSteps />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <PricingPlans />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Capital />
        </motion.div>
         <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Faq/>
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Layout;

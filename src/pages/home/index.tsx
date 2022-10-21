import React from 'react';
import Announcement from './components/Announcement';
import HowItWorks from './components/HowItWorks';
import Landing from './components/Landing';
import ReviewSlider from './components/ReviewSlider';
import ServiceSlider from './components/SeviceSlider';
import WhyEpic from './components/WhyEpic';

const Home = () => {
  return (
    <>
      <Landing />
      <HowItWorks />
      <WhyEpic />
      <ServiceSlider />
      <ReviewSlider />
      <Announcement />
    </>
  );
};

export default Home;

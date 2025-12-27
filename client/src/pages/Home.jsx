import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedSection from '../components/FeaturedSection'
import TrailerSections from '../components/TrailerSections' 

const Home = () => {
  scrollTo(0, 0);
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <TrailerSections /> 
    </>
  )
}

export default Home
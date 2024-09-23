import React from 'react'
import HeroTagline from '../components/HeroTagline'
import HeroAnimation from '../components/HeroAnimation'

const Hero = () => {
  return (
   <section className="overflow-hidden w-full container grid grid-cols-1 lg:grid-cols-2 min-h-[120vh] lg:min-h-screen lg:py-0 pt-[13rem] pb-[18rem]">
    <HeroTagline/>
    <HeroAnimation/>
   </section>
  )
}

export default Hero
import React from 'react'
import HeroTagline from '../components/HeroTagline'
import HeroAnimation from '../components/HeroAnimation'

const Hero = () => {
  return (
   <section className="container grid grid-cols-1 lg:grid-cols-2 h-[86vh]">
    <HeroTagline/>
    <HeroAnimation/>
   </section>
  )
}

export default Hero
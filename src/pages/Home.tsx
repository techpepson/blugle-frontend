import Hero from '@/components/Home/Hero'
import HeroBtn from '@/components/Home/HeroBtn'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HeroBtn/>
    </div>
  )
}

export default Home
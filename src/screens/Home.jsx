import React from 'react'
import Header from '../comonents/Header'
import Hero from '../comonents/Hero'
import Aboutme from '../comonents/Aboutme'
import Resume from '../comonents/Resume'
import Portfolio from '../comonents/Portfolio'
import Contact from '../comonents/Contact'
import Footer from '../comonents/Footer'
const Home = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Aboutme/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home

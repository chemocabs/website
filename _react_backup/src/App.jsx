import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import StickyDonationBar from './components/StickyDonationBar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhatWeDo from './components/WhatWeDo'
import TheProblem from './components/TheProblem'
import DonationWidget from './components/DonationWidget'
import GivingTiers from './components/GivingTiers'
import CorporatePartners from './components/CorporatePartners'
import ComfortBags from './components/ComfortBags'
import HowItWorks from './components/HowItWorks'
import RideRequest from './components/RideRequest'
import PatientStories from './components/PatientStories'
import Volunteer from './components/Volunteer'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Re-observe on route changes / re-renders
  useEffect(() => {
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 100)
    return () => clearTimeout(timeout)
  })

  return (
    <div className="app" id="main-content">
      <Navbar />
      <StickyDonationBar />
      <Hero />
      <TrustBar />
      <WhatWeDo />
      <TheProblem />
      <DonationWidget />
      <GivingTiers />
      <CorporatePartners />
      <ComfortBags />
      <HowItWorks />
      <RideRequest />
      <PatientStories />
      <Volunteer />
      <Footer />
    </div>
  )
}

export default App

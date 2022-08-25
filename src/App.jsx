import React from 'react'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Graphicsdesign from './components/Graphicsdesign/Graphicsdesign'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <Header/>
    <Navigation/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Graphicsdesign/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
import React from 'react'
import Navbar from './components/navbar/NavbarComponent'
import Header from './components/header/HeaderComponent'
import Programs from './components/programs/ProgramsComponent'
import Title from './components/title/TitleComponent'
import About from './components/about/AboutComponent'
import Campus from './components/campus/CampusComponent'
import Testimonials from './components/testimonials/TestimonialsComponent'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <Title subtitle="Our Programs" title="What We Offer"/>
        <Programs />
        <About />
        <Title subtitle="Gallery" title="Campus Photos"/>
        <Campus />
        <Title subtitle="TESTIMONIALS" title="What Students Say"/>
        <Testimonials />
      </div>
    </div>
  )
}

export default App

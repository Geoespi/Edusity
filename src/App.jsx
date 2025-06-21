import React from 'react'
import Navbar from './components/navbar/NavbarComponent'
import Header from './components/header/HeaderComponent'
import Programs from './components/programs/ProgramsComponent'
import Title from './components/title/TitleComponent'
import About from './components/about/AboutComponent'
import Campus from './components/campus/CampusComponent'

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
      </div>
    </div>
  )
}

export default App

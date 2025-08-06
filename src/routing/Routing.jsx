import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import NavigationSection from '../layout/NavigationSection'
import Home from '../components/Home'
import Error_404 from '../components/Error_404'
import FooterSection from '../layout/FooterSection'

const Routing = () => {
  return (
    <Router>
      <NavigationSection />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='*' element={<Error_404 />} />
      </Routes>
      <FooterSection />
    </Router>
  )
}

export default Routing
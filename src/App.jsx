
import './App.css'
import HeroRoutes from './Components/HomePageComponents/HeroRoutes'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Components/AboutUs/About'
import JourneyPhotos from './Components/JourneyPhotos/JourneyPhotos'
import LatestUpdates from './Components/LatestUpdates/LatestUpdates'

function App() {

  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HeroRoutes />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey-photos" element={<JourneyPhotos />} />
          <Route path="/latest-updates" element={<LatestUpdates />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import LandingPage from './pages/LandingPage'
import CommandCenter from './pages/CommandCenter'
import ImageEnhancementWorkspace from './pages/ImageEnhancementWorkspace'
import ObjectInterpretation from './pages/ObjectInterpretation'
import AnalyticsDashboard from './pages/AnalyticsDashboard'
import ReportGeneration from './pages/ReportGeneration'
import Navigation from './components/Navigation'

function App() {
  const location = useLocation()
  const [uploadedImage, setUploadedImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [detectionResults, setDetectionResults] = useState(null)
  const [thermalData, setThermalData] = useState(null)

  const sharedState = {
    uploadedImage,
    setUploadedImage,
    enhancedImage,
    setEnhancedImage,
    detectionResults,
    setDetectionResults,
    thermalData,
    setThermalData,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-iris-black via-iris-navy to-iris-black digital-grid">
      {location.pathname !== '/' && <Navigation />}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/command-center" element={<CommandCenter {...sharedState} />} />
            <Route path="/enhancement" element={<ImageEnhancementWorkspace {...sharedState} />} />
            <Route path="/interpretation" element={<ObjectInterpretation {...sharedState} />} />
            <Route path="/analytics" element={<AnalyticsDashboard {...sharedState} />} />
            <Route path="/reports" element={<ReportGeneration {...sharedState} />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App

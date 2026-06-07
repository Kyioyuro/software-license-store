import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Contacto from './pages/Contacto.jsx'
import FAQ from './pages/FAQ.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SpeechToText from './SpeechToText.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpeechToText />
  </StrictMode>,
)

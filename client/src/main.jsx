import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SlideTemplate from './components/SlideTemplate.jsx'
import SlideContainer from './components/SlideContainer.jsx'
import './index.css'

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SlideContainer/>
  </StrictMode>,
)

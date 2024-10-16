import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Main_card from './main_card.jsx'
import Card from './Components/Card.jsx'
import Router from './Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router/>
    {/* <Card title="lets start" desc="Ajju learniing"/> */}
  </StrictMode>,
)

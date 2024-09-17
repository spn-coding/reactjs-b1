import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardOne from './components/CardOne.jsx'
import CardTwo from './components/CardTwo.jsx'
import CardThree from './components/CardThree.jsx'
import CardFour from './components/CardFour.jsx'
import CardFive from './components/CardFive.jsx'
import CardSix from './components/CardSix.jsx'
import CardSeven from './components/CardSeven.jsx'
import CardEight from './components/CardEight.jsx'
import CardNine from './components/CardNine.jsx'
import CardTen from './components/CardTen.jsx'
import CardEleven from './components/CardEleven.jsx'
import CardTwelve from './components/CardTwelve.jsx'
import CardThirteen from './components/CardThirteen.jsx'
import CardFourteen from './components/CardFourteen.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <CardOne />
    <CardTwo />
    <CardThree />
    <CardFour />
    <CardFive />
    <CardSix />
    <CardSeven />
    <CardEight />
    <CardNine />
    <CardTen />
    <CardEleven />
    <CardTwelve />
    <CardThirteen />
    <CardFourteen />

  </StrictMode>
)

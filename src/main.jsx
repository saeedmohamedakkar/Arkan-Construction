import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './fix.css'
import './arkan-overrides.css'

createRoot(document.getElementById('root')).render(<App />)

import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById('root')!).render(
  
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
<Navbar/>
<Hero/>
  </ThemeProvider>
)

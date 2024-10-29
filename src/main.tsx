import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import { ThemeProvider } from "@/components/theme-provider"
import Featured from './pages/Featured';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Promotion from './pages/promotion';
// ..
AOS.init();

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Navbar />
    <Hero />
    <Featured/>
    <Promotion/>
  </ThemeProvider>
);

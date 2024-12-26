// library
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import "remixicon/fonts/remixicon.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// pagess
import Featured from "./pages/Featured";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Promotion from "./pages/Promotion";
import Analytics from "./pages/Analytics";
import Splash from "./pages/Splash";
import Velocity from "./pages/Velocity";
import Releases from "./pages/Releases";
import Motto from "./pages/Motto";
import Footer from "./pages/Footer";
// ..
AOS.init();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Splash />
    <Navbar />
    <Hero />
    <Featured />
    <Promotion />
    <Velocity />
    <Analytics />
    <Releases />
    <Motto />
    <Footer />
  </ThemeProvider>
);

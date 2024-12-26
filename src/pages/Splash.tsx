import { useEffect } from "react";
import gsap from "gsap";
import logo from "../assets/images/logo.png";

function Splash() {
  useEffect(() => {
    // GSAP animation for splash screen
    gsap.fromTo(
      "#splash",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 4,
        delay: 2,
        onComplete: () => {
          // Menghapus z-index setelah animasi selesai
          const splash = document.getElementById("splash");
          if (splash) {
            splash.style.zIndex = "-1";
          }
        },
      }
    );

    gsap.fromTo(
      "#logo",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      "#logoname",

      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
      }
    );
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div
      id="splash"
      className="splash absolute z-50 w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="brand flex items-center justify-center flex-col gap-3">
        <img
          id="logo"
          src={logo}
          alt="Neptune Music Logo"
          className="w-16 h-16"
        />
        <p id="logoname" className="text-white font-medium text-lg">
          Hello, There!
        </p>
      </div>
    </div>
  );
}

export default Splash;

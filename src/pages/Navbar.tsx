"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
function Navbar(){
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
  
    useEffect(() => {
      setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);
    return(
        <>
        <div className="container font-sans bg-white text-black flex items-center justify-between mx-auto px-64 py-5">
            <div className="brandmenu inline-flex items-center gap-12">
                <a href="#" className="font-semibold text-2xl">NeptuneMusic</a>
                <ul className="inline-flex items-center gap-5">
                    <li className="font-base text-xs "><a href="#">Distribution</a></li>
                    <li className="font-base text-xs "><a href="#">Promotion</a></li>
                    <li className="font-base text-xs "><a href="#">Analytics</a></li>
                    <li className="font-base text-xs "><a href="#">Earning</a></li>
                    <li className="font-base text-xs "><a href="#">Blog</a></li>
                    <li className="font-base text-xs "><a href="#">Help</a></li>
                </ul>
            </div>
            <div className="action language flex justify-center gap-5 items-center">
                    <a className="text-xs font-medium">EN</a>
                    <a href="#" className="text-xs ">Log in</a>
                    <a href="" className="text-xs  bg-black text-white py-2 px-4 rounded-full">Sign up</a>
            </div>
        </div>
        </>
    )
}

export default Navbar
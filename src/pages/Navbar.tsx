"use client";

// import { ModeToggle } from "@/components/mode-toggle";

function Navbar(){

    return(
        <div data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000" className="container relative w-full font-sans bg-black text-white flex items-center justify-between mx-auto px-7 lg:px-72 py-5 ">
            <div className="brandmenu inline-flex items-center gap-12 ">
                <a href="#home" className="font-semibold text-xl lg:text-2xl">NeptuneMusic</a>
                <ul className="inline-flex items-center gap-5">
                    <li className="font-base text-xs "><a href="#distribution">Distribution</a></li>
                    <li className="font-base text-xs "><a href="#promotion">Promotion</a></li>
                    <li className="font-base text-xs "><a href="#">Analytics</a></li>
                    <li className="font-base text-xs "><a href="#">Earning</a></li>
                    <li className="font-base text-xs "><a href="#">Blog</a></li>
                    <li className="font-base text-xs "><a href="#">Help</a></li>
                </ul>
            </div>
            <div className="action language flex justify-center gap-5 items-center">
                {/* <ModeToggle/> */}
                    <a className="text-xs font-medium">EN</a>
                    <a href="#" className="text-xs ">Log in</a>
                    <a href="" className="text-xs  bg-white text-black py-2 px-4 rounded-full">Sign up</a>
            </div>
        </div>
    )
}

export default Navbar



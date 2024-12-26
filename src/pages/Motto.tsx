import ShimmerButton from "@/components/ui/shimmer-button";
function Motto() {
  return (
    <div
      className="container relative bg-custompink py-10 lg:py-24 mx-auto px-4 lg:px-72 flex flex-col justify-center items-center gap-6  overflow-hidden"
      id="promotion"
    >
      <h1
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        className="font-bold text-3xl lg:text-5xl text-white text-center leading-tight"
      >
        Bro, what are you <br />
        waiting for?
      </h1>
      <ShimmerButton
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-delay="500"
        className="shadow-2xl"
      >
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 ">
          <a href="https://wa.me/6282133289048?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda">
            Join Us Now
          </a>
        </span>
      </ShimmerButton>
    </div>
  );
}
export default Motto;

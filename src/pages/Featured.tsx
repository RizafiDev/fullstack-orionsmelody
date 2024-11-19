import cardImg from "../assets/images/card-feature.jpg";
import fbImg from "../assets/images/platform-logo/facebook.png";
import ttImg from "../assets/images/platform-logo/tiktok.png";
import igImg from "../assets/images/platform-logo/instagram.png";
import ytImg from "../assets/images/platform-logo/video.png";
import itImg from "../assets/images/platform-logo/itunes.png";
import scImg from "../assets/images/platform-logo/soundcloud.png";
import spImg from "../assets/images/platform-logo/social.png";
import dzImg from "../assets/images/platform-logo/deezer.png";

function Featured() {
  return (
    <div
  className="container relative bg-[#f3f3f1] py-11 lg:py-24 mx-auto lg:px-72 flex flex-col items-center gap-8" // Kurangi gap dari 12 ke 8
  id="distribution"
>
      <div
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        className="brand text-center text-3xl lg:text-5xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:leading-[5rem]"
      >
        Distribute your music globally
      </div>

      {/* card */}
      <div className="card-collection w-full grid grid-rows-2 gap-6 px-4 lg:px-0"> {/* Sesuaikan gap */}
    {/* card 1 */}
    <div
      data-aos="flip-left"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      className="card-overview h-auto bg-white w-full rounded-3xl px-10  lg:py-10 inline-flex lg:flex-row flex-col lg:items-center items-start justify-center gap-3 lg:gap-36"
    >
          <img
            src={cardImg}
            alt=""
            className="lg:max-w-48 max-w-40 rounded-xl  lg:ml-24"
          />
          <div className="article flex flex-col items-start gap-3 text-black">
            <h1 className="font-semibold text-2xl lg:text-4xl max-w-64">
              Powered by TikTok's ecosystem
            </h1>
            <p className="font-medium lg:text-base text-sm max-w-96">
              Inspire creators worldwide to use your music in their videos.
              Share your sound with a global community and gain enhanced
              monetization opportunities through TikTok's Commercial Music
              Library.
            </p>
          </div>
        </div>

        {/* card freatt */}
        <div className="card-feat grid grid-cols-1 lg:grid-cols-2 w-full gap-4"> {/* Ganti space-y dan space-x dengan gap */}
      {/* card 1 */}
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="card-1 h-auto lg:h-[500px] bg-white rounded-3xl relative overflow-hidden flex items-center justify-center p-10" // Kurangi height dan tambah padding
      >
            <div className="icons">
              {/* top image */}
              <img
                src={fbImg}
                alt="Facebook Icon"
                className="max-w-10 absolute top-6 -left-2"
              />
              <img
                src={ttImg}
                alt="Tiktok Icon"
                className="max-w-14 absolute top-0 right-44 lg:flex hidden"
              />
              <img
                src={igImg}
                alt="Instagram Icon"
                className="max-w-10 absolute -top-6 right-8"
              />
              <img
                src={ytImg}
                alt="Youtube Icon"
                className="max-w-10 absolute top-28 -right-4"
              />
              {/* bottom image */}
              <img
                src={itImg}
                alt="itunes Icon"
                className="max-w-16 absolute bottom-20 -left-10"
              />
              <img
                src={scImg}
                alt="SoundCloud Icon"
                className="max-w-10 absolute bottom-0 left-40"
              />
              <img
                src={spImg}
                alt="Spotify Icon"
                className="max-w-14 absolute -bottom-11 right-16"
              />
              <img
                src={dzImg}
                alt="Deezer Icon"
                className="max-w-10 absolute bottom-20 -right-5"
              />
            </div>
            <article className="flex flex-col items-center justify-center max-w-96 gap-3 text-black">
              <h1 className="font-bold  text-3xl lg:text-4xl flex text-center flex-col">
                Distribute your music across multiple platforms
              </h1>
              <p className="font-medium flex flex-col text-center">
                Help your music to reach millions of listeners on all major
                streaming platforms.
                <a href="" className="text-blue-700">
                  Check all stores
                </a>
              </p>
            </article>
          </div>

          {/* card 2 */}
          <div
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="card-2 h-auto lg:h-[500px] bg-custompink rounded-3xl relative flex items-center justify-center p-10" // Kurangi height dan tambah padding
      >
            <div className="circle w-[460px] h-[460px]  rounded-full absolute bg-white opacity-20"></div>
            <article className="flex flex-col items-center justify-center max-w-80 gap-3 z-20 text-white">
              <h1 className="font-bold text-4xl flex text-center flex-col">
                Stay in control with 100% ownership
              </h1>
              <p className="font-medium flex flex-col text-center">
                Retain master rights ownership whilst enjoying competitive
                royalties.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

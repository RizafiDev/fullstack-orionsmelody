import NumberTicker from "@/components/ui/number-ticker";
import capcut from '../assets/images/platform-logo/capcut.png';
import album from '../assets/images/platform-logo/album.png';
import preview from '../assets/images/platform-logo/preview.png';
import { BorderBeam } from "@/components/ui/border-beam";

function Promotion() {
  return (
    <div
      className="container relative bg-pagesbg py-24 mx-auto px-72 flex flex-col justify-center items-center gap-12"
      id="promotion"
    >
      <h1 className="font-bold text-5xl text-white text-center leading-tight">
        Amplify your music
        <br />
        with TikTok
      </h1>
      <div className="card-collection w-full h-fit grid grid-rows-2 space-y-4">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          className="h-[520px] relative card-overview bg-black w-full rounded-3xl p-16 inline-flex flex-col items-start justify-between"
        >
          {/*  */}
          <header className="w-full items-start flex justify-between">
            <article className="max-w-[350px] flex flex-col items-start gap-4">
                <h1 className="text-white font-bold text-4xl">Partner with <span className="text-greentext">TikTok creators</span></h1>
                <p className="font-medium text-gray-400">Save time and money by getting direct access to TikTok's creators. Leverage TikTok's range of artist-first promotional tools, including editorial programming and track optimization, to help your music go viral.</p>
            </article>
            <div className="figure"></div>
          </header>
          <div className="stat flex items-center gap-24">
            <div className="stat1 flex flex-col">
            <p className="whitespace-pre-wrap text-4xl font-semibold tracking-tighter text-white">
      <NumberTicker value={3000000} /> +
    </p>
    <p className="font-medium text-gray-400">creator <br />partnering with us</p>
            </div>
            <div className="stat2 flex flex-col">
            <p className="whitespace-pre-wrap text-4xl font-semibold tracking-tighter text-white">
      <NumberTicker value={10000} /> +
    </p>
    <p className="font-medium text-gray-400">creator <br />partnering with us</p>
            </div>
          </div>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
        <div className="card-feat grid grid-cols-3 w-full space-x-4 h-[400px]">
          {/* card-1 */}
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            className="card-1 h-full bg-white rounded-3xl relative overflow-hidden flex flex-col p-8"
          >
            <div className="header flex flex-col gap-4">
                <h1 className="text-black font-bold text-3xl max-w-48">Promote on CapCut exclusively</h1>
                <p className="text-gray-500 font-medium text-xs max-w-56">Reach millions of creators through editorial opportunities on the world's most downloaded free video editing app.</p>
            </div>
            <img src={capcut} alt="" className="w-24 border border-gray-400 rounded-2xl absolute bottom-8 right-8" />
          </div>
          {/* card-1 */}
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
            data-aos-duration="500"
            className="card-1 h-full bg-bluecard rounded-3xl relative overflow-hidden flex flex-col p-8"
          >
              <div className="header flex flex-col gap-4 text-white">
                <h1 className=" font-bold text-3xl max-w-56">Get marketing support across DSPs</h1>
                <p className=" font-medium text-xs max-w-56">Pitch your music for editorial playlists, enable pre-saves, and enjoy pre-release solutions across major streaming services.</p>
            </div>
            <img src={album} alt="" className="w-28 absolute bottom-8 right-8" />
          </div>
          {/* card-1 */}
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
            data-aos-duration="500"
            className="card-1 h-full bg-graycard rounded-3xl relative overflow-hidden flex flex-col p-8"
          >
              <div className="header flex flex-col gap-4 text-white">
                <h1 className=" font-bold text-3xl max-w-48">Receive expert guidance</h1>
                <p className=" font-medium text-xs max-w-56">Amplify your growth with expert guidance* from our in-house team.</p>
            </div>
            <img src={preview} alt="" className="w-36  absolute bottom-8 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Promotion;

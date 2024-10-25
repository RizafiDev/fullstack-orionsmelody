import cardImg from '../assets/images/card-feature.jpg'

function Featured(){
    return(
       <div className="container relative bg-[#f3f3f1] py-24 mx-auto px-72 flex flex-col items-center gap-12">
            <div className="brand text-center text-5xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:leading-[5rem]">
            Distribute your music globally
            </div>
            <div className="card-collection w-full min-h-64">
                <div className="card-overview bg-white w-full rounded-3xl p-10 inline-flex items-center justify-center gap-36">
                    <img src={cardImg} alt="" className='max-w-48 rounded-xl ml-24' />
                    <div className="article flex flex-col items-start gap-3">
                        <h1 className="font-semibold text-4xl max-w-64">Powered by TikTok's ecosystem</h1>
                        <p className="font-medium max-w-96">Inspire creators worldwide to use your music in their videos. Share your sound with a global community and gain enhanced monetization opportunities through TikTok's Commercial Music Library.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
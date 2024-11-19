import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

function Velocity(){
    return(
        <div className="container bg-black py-10">
        <VelocityScroll
        text="- Grow Your Carrer - Increase Your Royalties - Get More Fans "
        default_velocity={2}
        className="font-display text-center py-2 text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm  md:text-7xl md:leading-[5rem]"
      />
      </div>
    )
}

export default Velocity;
// import Globe from "@/components/ui/globe";

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { AnimatedList } from "@/components/ui/animated-list";
import logo from "../assets/images/logo.png";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Channel Whitelist",
    description: "Exclude your channel from Content ID",
    time: "",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Analytics",
    description: "Show your stream data from DSPs",
    time: "",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Music Publising",
    description: "Register you as Writter",
    time: "",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Usage Discovery",
    description: "Claim your music from Social Media",
    time: "",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const reviews = [
  {
    name: "Firza",
    username: "@firza",
    body: "Seamless and efficient music distribution!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Orion's Melody makes it so easy!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "Perfect for independent artists!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Alan",
    username: "@alan",
    body: "Quick and reliable service!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "BeatKing",
    username: "@beatking",
    body: "Love the user-friendly dashboard!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Rida",
    username: "@rida",
    body: "Great platform for my releases!",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function Analytics() {
  return (
    <div
      className="container relative bg-[#f3f3f1] py-10 lg:py-24 mx-auto px-4 lg:px-72 flex flex-col justify-center items-center gap-6 lg:gap-12"
      id="promotion"
    >
      <header className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-3xl lg:text-5xl text-black text-center leading-tight">
          Use Profesional <br />
          Tools from Us!
        </h1>
        <p className="font-medium text-center max-w-[720px] text-black text-sm lg:text-base">
          Orion's Melody has many professional tools to support artists' needs.
        </p>
      </header>
      <div className="card-container w-full flex flex-col gap-4 lg:gap-3 lg:flex-row lg:h-[550px]">
        {/* Card 1 */}
        <div className="card-1 w-full lg:w-2/5 bg-custompink rounded-3xl h-64 lg:h-full flex items-center justify-center p-4">
          <div className="content flex flex-col items-center justify-center gap-4 text-center">
            <img src={logo} alt="logo" className="w-24 h-24 lg:w-32 lg:h-32" />
            <h1 className="font-semibold text-xl lg:text-2xl">
              Orion's Melody
            </h1>
            <p className="-mt-2 lg:-mt-4 italic font-medium text-sm lg:text-base">
              Release & License
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-2 w-full lg:w-3/5 flex flex-col gap-4 lg:gap-3">
          {/* Sub 1 */}
          <div className="sub-1 h-52 lg:h-1/2 bg-white rounded-3xl overflow-hidden text-black p-3">
            <Marquee pauseOnHover className="[--duration:15s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:15s] mt-2">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>

          {/* Sub 2 */}
          <div className="sub-2 h-52 lg:h-1/2 bg-white rounded-3xl overflow-hidden p-4 text-black">
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

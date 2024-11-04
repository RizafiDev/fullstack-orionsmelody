// import Globe from "@/components/ui/globe";

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
  }
   
  let notifications = [
    {
      name: "Payment received",
      description: "Magic UI",
      time: "15m ago",
   
      icon: "💸",
      color: "#00C9A7",
    },
    {
      name: "User signed up",
      description: "Magic UI",
      time: "10m ago",
      icon: "👤",
      color: "#FFB800",
    },
    {
      name: "New message",
      description: "Magic UI",
      time: "5m ago",
      icon: "💬",
      color: "#FF3D71",
    },
    {
      name: "New event",
      description: "Magic UI",
      time: "2m ago",
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
          "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
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
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
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
})=> {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
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
      className="container relative bg-[#f3f3f1] py-24 mx-auto px-72 flex flex-col justify-center items-center gap-12"
      id="promotion"
    >
      <header className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-5xl text-black text-center leading-tight">
          Amplify your music
          <br />
          with TikTok
        </h1>
        <p className="font-medium text-center max-w-[720px]">
          SoundOn helps you understand TikTok videos and creators through rich
          data analytics. With insights into video categories and creator
          demographics, you can see how your music creates trends and resonates
          with the audience on TikTok.
        </p>
      </header>
      <div className="card-container w-full h-[550px] flex gap-3">
        <div className="card-1 w-2/5 bg-custompink rounded-3xl h-full"></div>
        <div className="card-2 w-3/5 h-full flex flex-col gap-3">
            <div className="sub-1 h-1/2 bg-white rounded-3xl overflow-hidden">
            {/* <Globe className="top-56 flex left-96" /> */}
            <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
            </div>

            <div className="sub-2 h-1/2 bg-white rounded-3xl overflow-hidden p-3">
            <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList></div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

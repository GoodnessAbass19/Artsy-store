import Breadcrumb from "../components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { drops } from "../components/constants";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "../components/home/Timer";

const breadcrumbList = [
  {
    title: "auction",
    href: "#",
    color: "text-[#BCB7B7]",
  },
  {
    title: "live bid",
    href: "#",
    color: "text-[#BCB7B7]",
  },
  {
    title: "drop",
    href: "#",
    color: "text-black",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Drops`,
    description: "List of upcoming drops",
  };
}

const page = () => {
  return (
    <main className="max-w-7xl mx-auto px-5 my-10 space-y-10">
      <Breadcrumb breadcrumbList={breadcrumbList} />

      <div className="flex flex-col justify-center items-center gap-y-6">
        <h2 className="md:text-5xl text-3xl font-medium">Upcoming drops</h2>
        <p className="md:text-2xl text-xl text-center font-normal">
          Turn on notifications so that no drops will miss you.
        </p>
        <Button
          variant={"outline"}
          className="md:text-3xl text-xl font-medium border-2 border-[#BCB7B7] w-[300px]"
        >
          Notify me
        </Button>
      </div>

      <div className="gap-y-16 grid pt-10">
        {drops.map((item, idx) => (
          <div
            key={idx}
            className="grid lg:grid-cols-3 gap-x-10 gap-y-5 relative"
          >
            <div className="col-span-2 relative w-full">
              <Image
                alt={item.title}
                src={item.image}
                width={500}
                height={500}
                loading="lazy"
                className="w-full rounded-2xl h-[450px] object-cover"
              />

              <div className="absolute w-full bottom-5 left-0">
                <div className="bg-white/30 text-white mx-5 rounded-2xl p-5">
                  {item.upcoming && (
                    <div className="space-y-3">
                      <h2 className="text-2xl font-normal capitalize">
                        time remaining
                      </h2>
                      <div className="flex gap-5 justify-between items-center">
                        <div className="text-2xl md:text-4xl font-normal">
                          <CountdownTimer targetDate={item.time} />
                        </div>
                        <Button className="bg-[#4693ED] text-white text-2xl w-[120px] py-1 font-medium rounded-full capitalize hidden md:block">
                          join
                        </Button>
                      </div>
                    </div>
                  )}

                  {item.live && (
                    <div className="space-y-3">
                      <h2 className="text-2xl font-normal capitalize">
                        time remaining
                      </h2>
                      <div className="flex gap-5 justify-between items-center">
                        <div className="text-2xl md:text-4xl font-normal">
                          <CountdownTimer targetDate={item.time} />
                        </div>
                        <Button className="bg-[#4693ED] text-white text-2xl w-[120px] py-1 font-medium rounded-full capitalize hidden md:block">
                          join
                        </Button>
                      </div>
                    </div>
                  )}
                  {item.ended && (
                    <div className="space-y-3">
                      <h2 className="text-2xl font-normal capitalize">
                        time remaining
                      </h2>
                      <div className="flex gap-5 justify-between items-center">
                        <div className="text-2xl md:text-4xl font-normal">
                          <CountdownTimer targetDate={item.time} />
                        </div>
                        <Button className="bg-[#999EA5] text-white text-2xl w-[120px] py-1 font-medium rounded-full capitalize hidden md:block">
                          view
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:space-y-6 space-y-4 grid">
              <div className="absolute lg:relative top-0 right-0 m-2">
                {item.upcoming && (
                  <Button
                    variant={"outline"}
                    className="bg-[#4693ED] text-white text-lg font-medium rounded-xl p-2 w-[180px]"
                  >
                    UPCOMING
                  </Button>
                )}

                {item.live && (
                  <Button
                    variant={"outline"}
                    className="bg-[#3EA03B] text-white text-lg font-medium rounded-xl p-2 w-[180px]"
                  >
                    LIVE NOW
                  </Button>
                )}
                {item.ended && (
                  <Button
                    variant={"outline"}
                    className="bg-[#999EA5] text-white text-lg font-medium rounded-xl p-2 w-[180px]"
                  >
                    ENDED
                  </Button>
                )}
              </div>

              <p className="text-lg font-normal">November 21 at 11 am WAT</p>

              <h2 className="text-3xl font-semibold">{item.title}</h2>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                deleniti laborum recusandae architecto? Deserunt quasi quam
                tempora nisi architecto. Incidunt nobis iure facilis omnis
                voluptates, vel repellendus optio voluptatum facere!
              </p>

              <h3 className="text-xl capitalize font-medium flex gap-x-3">
                <span>creator:</span>
                <span className="text-[#006CA2]">{item.creator}</span>
              </h3>
              <div>
                {item.upcoming && (
                  <Link
                    href={"#"}
                    className="text-[#4693ED] text-xl font-medium underline"
                  >
                    Get notified
                  </Link>
                )}

                {item.live && (
                  <Link
                    href={"#"}
                    className="text-[#4693ED] text-xl font-medium underline"
                  >
                    Join now
                  </Link>
                )}
                {item.ended && (
                  <Link
                    href={"#"}
                    className="text-[#4693ED] text-xl font-medium underline"
                  >
                    View
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center">
        <Button
          variant={"outline"}
          className="border-[#333] text-black text-2xl font-medium capitalize"
        >
          See more
        </Button>
      </div>
    </main>
  );
};

export default page;

import { Progress } from "@/components/ui/progress";
import FadeImage from "./FadeImage";

const text = ["Editorials", "Fashion", "lifestyle", "blueprint"];

const Creators = () => {
  return (
    <section className="mt-20 relative">
      <div className="bg-[#E2E2E2] lg:p-10 p-2.5">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="flex flex-col lg:flex-row justify-between items-start">
              <h2 className="md:text-6xl text-3xl w-[80%] font-semibold md:font-bold uppercase basis-2/4 font-sans tracking-[0.2rem]">
                top creators of the week
              </h2>

              <div className="hidden lg:block basis-1/2">
                <div className="flex flex-row justify-end items-center gap-x-7">
                  <Progress value={20} className="h-[300px] w-2 -rotate-180" />
                  <ul className="flex flex-col space-y-5">
                    {text.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[40px] font-normal capitalize"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <p className="md:text-3xl text-lg font-extralight lg:px-8">
              “Everything always looked better in black and white. Everything
              always as if it were the first time; there’s always more people in
              a black and white photograph. It just makes it seem that there
              were more people at a gig, more people at a football match, than
              with colour photography. Everything looks more exciting.”– Jack
              Lowden
            </p>
            <div className="flex flex-col justify-start gap-y-6 items-end -mt-5">
              <h3 className="text-5xl font-black uppercase text-start">
                circa
              </h3>
              <h1
                className="font-extrabold line-through text-9xl text-end decoration-white"
                style={{ fontFamily: "Libre Baskerville" }}
              >
                1985
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 top-1/3 lg:top-[33%] opacity-95">
        <FadeImage />
      </div>
    </section>
  );
};

export default Creators;

import ArrowLeftIcon from "../ui/custom-icons/ArrowLeftIcon";

const Explore = () => {
  return (
    <section className="mt-20 border-y-2 border-neutral-200 divide-y-2 divide-neutral-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5 md:py-10">
        <h2 className="text-3xl md:text-5xl font-medium">
          Explore marketplace
        </h2>

        <ArrowLeftIcon className="md:w-14 md:h-14 w-10 h-10 border-2 border-black p-2 rounded-full -scale-100" />
      </div>
      <div className="h-[2px] w-full bg-neutral-200" />
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5 md:py-10">
        <h2 className="text-3xl md:text-5xl font-medium">See auctions</h2>

        <ArrowLeftIcon className="md:w-14 md:h-14 w-10 h-10 border-2 border-black p-2 rounded-full -scale-100" />
      </div>
    </section>
  );
};

export default Explore;

import Top from "./Top";
import Bottom from "./Bottom";
import NewsLetter from "../../home/NewsLetter";

const Footer = () => {
  return (
    <div className="mt-10">
      <NewsLetter />
      <div className="max-w-7xl mx-auto px-5 pt-10 pb-6 md:pt-20 md:pb-8 text-black">
        {/* upper part of footer */}
        <Top />

        <hr className="  my-10   border-slate-400 " />

        {/* lower part of footer */}
        <Bottom />
      </div>
    </div>
  );
};

export default Footer;

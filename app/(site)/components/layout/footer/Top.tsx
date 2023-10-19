import Image from "next/image";
import Link from "next/link";
import EmailIcon from "../../ui/custom-icons/EmailIcon";
import LocationIcon from "../../ui/custom-icons/LocationIcon";

const Top = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-start">
      <div className="hidden md:flex md:flex-row flex-col items-center justify-between basis-3/5 gap-10">
        {/*---- Left Hand Side of Footer ----*/}

        <h1 className={`lg:text-6xl text-3xl font-semibold`}>ARTSY.</h1>

        {/*---- Right Hand Side of Footer ----*/}

        <Lists heading="Categories" items={categories} />
        <Lists heading="Collections" items={collections} />
      </div>

      <div className="flex flex-col gap-y-3">
        <h3 className="block md:hidden text-lg font-normal capitalize">
          reach us
        </h3>
        <ul className="space-y-5">
          {links.map((item, idx) => (
            <li
              className="w-fit text-base hover:translate-x-1 md:text-xl capitalize trans-150 flex gap-x-3"
              key={idx}
            >
              {item.icon}
              <Link href={item.href} target={item.blank ? "_blank" : "_self"}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Lists = ({ items }: Props) => {
  return (
    <div className="">
      <ul className="space-y-5">
        {items.map((item, idx) => (
          <li
            className="w-fit text-base hover:translate-x-1 md:text-xl capitalize trans-150"
            key={idx}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface Obj {
  [key: string]: any;
}

interface Props {
  items: Obj[];
  heading: string;
}

type Category = {
  name: string;
  slug: string;
};

const categories = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/marketplace",
    name: "Marketplace",
  },
  {
    href: "/auctions",
    name: "Auctions",
  },
  {
    href: "/drops",
    name: "Drops",
  },
];
const collections = [
  {
    href: "#",
    name: "Blog",
  },
  {
    href: "#",
    name: "Wallets",
  },
  {
    href: "#",
    name: "Rates",
  },
  {
    href: "#",
    name: "High bid",
  },
];
const links = [
  {
    href: "#",
    name: "artsystudios@gmail.com",
    icon: <EmailIcon className="w-6 h-6 lg:w-10 lg:h-10" />,
    blank: true,
  },
  {
    href: "#",
    name: "Lagos, Nigeria.",
    icon: <LocationIcon className="w-6 h-6 lg:w-10 lg:h-10" />,
    blank: true,
  },
];

export default Top;

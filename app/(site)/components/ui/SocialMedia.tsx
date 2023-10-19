import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./custom-icons";
import EmailIcon from "./custom-icons/EmailIcon";

const SocialMedia = () => {
  return (
    <>
      {icons.map((icon, index) => (
        <div
          key={index}
          className="rounded-2xl bg-accent p-2.5 hover:-translate-y-1 
         transition duration-300 ease-in-out
         "
        >
          <Link href={icon.href} target="_blank">
            <icon.Icon
              className={` block 
                  w-5 h-5 text-black hover:text-black primary`}
            />
            <span className="sr-only text-black">{icon.name}</span>
          </Link>
        </div>
      ))}
    </>
  );
};

const icons = [
  {
    Icon: EmailIcon,
    href: "mailto:toluladejobi@yahoo.com",
  },
  {
    Icon: InstagramIcon,
    href: "https://instagram.com/tees_gadgetplug",
    name: "Instagram",
  },
  {
    Icon: FacebookIcon,
    href: "https://m.facebook.com/teesgadgetplug",
  },
];

export default SocialMedia;

import CustomButton from "./CustomButton";
// import imgSrc from "../../../public/assets/addidas.jpg";
import Link from "next/link";
import Image from "next/image";
import { formatCurrencyValue } from "@/app/utils/format-currency-value";
import { ItemSkeleton } from "./ItemSkeleton";

const ItemCard = ({
  name,
  price,
  href,
  onAddToCart,
  imageUrl,
  loading,
}: {
  name: string;
  price: number;
  href: string;
  loading: boolean;
  onAddToCart: () => void;
  imageUrl?: any;
}) => {
  if (loading) {
    return (
      <div>
        <div>
          <ItemSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="grid text-[rgb(30,30,30)] w-full min-h-full">
      <div className="w-full grid grid-rows-3">
        <div className="bg-[#b0bbca] rounded-md overflow-hidden shadow row-span-2 sm:max-w-[350px] max-h-[200px]">
          <Link href={href} className="w-full h-fit">
            <Image
              src={imageUrl}
              width={500}
              height={500}
              alt="item"
              className="w-full h-[240px]  object-cover  hover:scale-105 transition-transform duration-150"
              placeholder="blur"
              blurDataURL={imageUrl}
              priority
            />
          </Link>
        </div>

        <div className="flex flex-col mt-6 text-sm">
          <h4 className=" font-semibold text-base">
            <Link href={href} className=" capitalize line-clamp-1">
              {name}
            </Link>
          </h4>

          <span className="capitalize font-semibold text-base">
            {formatCurrencyValue(price)}
          </span>
        </div>

        <div className="sm:mt-4 md:max-w-[300px] grow flex items-end">
          <CustomButton
            className=" w-full h-10 text-sm  text-black hover:bg-violet-950/70 hover:text-white border border-black rounded-md trans-150"
            onClick={onAddToCart}
          >
            Add to Cart
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

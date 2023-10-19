import Link from "next/link";
import Image from "next/image";
import { FormatCurrencyValue } from "@/utils/formatCurrency";

const ItemCard = ({
  name,
  price,
  href,
  imageUrl,
}: {
  name: string;
  price: number;
  href: string;
  imageUrl?: any;
}) => {
  return (
    <Link href={`/marketplace/${href}`} className="shadow-lg shadow-black">
      <Image
        src={imageUrl}
        alt={name}
        loading="lazy"
        width={500}
        height={500}
        className="lg:w-[245px] lg:h-[280px] md:w-[358px] md:h-[385px] w-full h-[400px] object-cover md:rounded-md"
      />
      <div className="flex flex-row lg:flex-col justify-between items-start gap-y-2 py-1">
        <h2>{name}</h2>
        <strong>{FormatCurrencyValue(price)}</strong>
      </div>
    </Link>
  );
};

export default ItemCard;

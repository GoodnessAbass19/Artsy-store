import { getOneProduct, getProductsByCategory } from "@/sanity/sanity.query";
import { ProductType } from "@/types";
import Image from "next/image";
import Breadcrumb from "../../components/ui/Breadcrumb";
import ProductDetail from "../../components/marketplace/ProductDetails";
import { Metadata } from "next";
import SimilarProduct from "../../components/marketplace/SimilarProduct";

type Props = {
  params: {
    market: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.market;
  const project: ProductType = await getOneProduct(slug);
  return {
    title: `${project.title}`,
    description: project.description,
    metadataBase: new URL("https://cdn.sanity.io/"),
    openGraph: {
      images: project.thumbnail,
      title: project.title,
      description: project.description,
    },
  };
}

const page = async ({ params }: { params: { market: string } }) => {
  const title = params.market;
  const product: ProductType = await getOneProduct(title);
  const similar: ProductType[] = await getProductsByCategory(
    product.category.name
  );
  const breadcrumbList = [
    {
      title: "marketplace",
      href: "/marketplace",
      color: "text-[#BCB7B7]",
    },
    {
      title: product?.category?.name,
      href: "#",
      color: "text-[#BCB7B7]",
    },
    {
      title: product.title,
      href: "#",
      color: "text-black",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto py-10 px-5">
      <Breadcrumb breadcrumbList={breadcrumbList} />
      <div className="pt-20">
        <div className="lg:border-2 border-[#BCB7B7] grid lg:grid-cols-2 lg:divide-x-2 divide-[#BCB7B7] gap-y-7">
          <div className=" md:p-5">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={1000}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 py-5">
            <ProductDetail
              name={product.title}
              price={product.price}
              image={product.thumbnail}
              description={product.description}
              made={product.made}
              creator={product.creator}
              views={product.views}
              slug={product.slug}
              id={product._id}
            />
          </div>
        </div>
      </div>

      <SimilarProduct product={similar} />
    </main>
  );
};

export default page;

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 space-y-10 flex justify-center flex-col items-center">
      <Image src={"/thanks.png"} alt="thanks" width={500} height={500} />

      <h1 className="font-medium md:text-3xl text-xl">
        Hey There, thank you for your purchase.
      </h1>
      <p className="md:text-3xl text-xl font-normal">
        You are amazing. Cheers to being{" "}
        <span className="md:text-3xl text-xl font-medium text-[#006CA2]">
          ARTSY!
        </span>
      </p>
    </div>
  );
};

export default page;

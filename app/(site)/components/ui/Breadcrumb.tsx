import Link from "next/link";

interface Item {
  title: string;
  href: string;
  color: string;
}

function Breadcrumb({ breadcrumbList }: { breadcrumbList?: Item[] }) {
  return (
    <div className="">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center md:gap-x-2 ">
          <li className="flex items-center  text-[#BCB7B7]">
            <Link
              className="mr-1 md:text-xl text-sm capitalize hover:text-black "
              href="/"
            >
              Home
            </Link>
            {"/"}
          </li>
          {breadcrumbList?.map((item, idx) => {
            return (
              <li
                className={`flex items-center mr-1 md:text-xl text-sm capitalize hover:text-black ${item.color} trans-150`}
                key={idx}
              >
                <Link
                  className="mr-1 md:text-xl text-sm capitalize"
                  href={item.href}
                >
                  {item.title}
                </Link>
                {item.title !== breadcrumbList[breadcrumbList.length - 1].title
                  ? "/"
                  : ""}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;

import Link from "next/link";


const CustomLink = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <Link
      href="#"
      className={`${className} group font-semibold flex items-center justify-center rounded-md shadow-lg transition-all duration-150 ease-linear `}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;

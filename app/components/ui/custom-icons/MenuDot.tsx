const MenuDot = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path d="M10.5 19C10.5 20.1 11.4 21 12.5 21C13.6 21 14.5 20.1 14.5 19C14.5 17.9 13.6 17 12.5 17C11.4 17 10.5 17.9 10.5 19Z" />
      <path d="M10.5 5C10.5 6.1 11.4 7 12.5 7C13.6 7 14.5 6.1 14.5 5C14.5 3.9 13.6 3 12.5 3C11.4 3 10.5 3.9 10.5 5Z" />
      <path
        d="M12.5 14C13.6 14 14.5 13.1 14.5 12C14.5 10.9 13.6 10 12.5 10C11.4 10 10.5 10.9 10.5 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuDot;

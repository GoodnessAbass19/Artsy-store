const CaretDownIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="5"
      viewBox="0 0 9 5"
      // fill="none"
      className={className}
      {...props}
    >
      <path
        d="M3.60955 3.75115C4.00295 4.15999 4.6573 4.15999 5.0507 3.75116L8.00847 0.677351C8.253 0.42323 8.07291 0 7.72024 0H0.940011C0.587348 0 0.407252 0.423229 0.65178 0.67735L3.60955 3.75115Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CaretDownIcon;

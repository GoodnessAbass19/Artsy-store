const CustomButton = ({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <button
      className={`${className} relative flex items-center justify-center `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;

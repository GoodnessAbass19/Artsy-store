const SettingsIcon = ({
  className,
  ...props
}: {
  className?: string;
  props?: any;
}) => {
  return (
    <svg
      width="24"
      height="24"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={1.5}
      {...props}
    >
      <path
        d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.88086 20.5803L7.97086 21.2103C8.76086 21.6803 9.78086 21.4003 10.2509 20.6103L10.3609 20.4203C11.2609 18.8503 12.7409 18.8503 13.6509 20.4203L13.7609 20.6103C14.2309 21.4003 15.2509 21.6803 16.0409 21.2103L17.7709 20.2203C18.6809 19.7003 18.9909 18.5303 18.4709 17.6303C17.5609 16.0603 18.3009 14.7803 20.1109 14.7803C21.1509 14.7803 22.0109 13.9303 22.0109 12.8803V11.1203C22.0109 10.0803 21.1609 9.22031 20.1109 9.22031C19.1009 9.22031 18.4209 8.82031 18.1809 8.19031C17.9909 7.70031 18.0709 7.06031 18.4709 6.37031C18.9909 5.46031 18.6809 4.30031 17.7709 3.78031L16.9609 3.32031"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.64 3.5814C12.74 5.1514 11.26 5.1514 10.35 3.5814L10.24 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SettingsIcon;

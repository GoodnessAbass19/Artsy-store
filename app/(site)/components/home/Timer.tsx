"use client";

// import React, { useState, useEffect } from "react";

// interface CountdownTimerProps {
//   targetDate: string;
// }

// const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
//   const [days, setDays] = useState<number>();
//   const [hours, setHours] = useState<number>();
//   const [minutes, setMinutes] = useState<number>();
//   const [seconds, setSeconds] = useState<number>();

//   const calculateTimeLeft = () => {
//     const difference = +new Date(targetDate) - +new Date();
//     setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
//     setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
//     setMinutes(Math.floor((difference / (1000 * 60)) % 60));
//     setSeconds(Math.floor((difference / 1000) % 60));
//   };

//   useEffect(() => {
//     const timer = setInterval(calculateTimeLeft, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div>
//       {days === 0 ? `` : `${days} days :`} {hours}hrs : {minutes}mins :{seconds}{" "}
//       seconds
//     </div>
//   );
// };

// export default CountdownTimer;

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  const [isActive, setIsActive] = useState<boolean>(true);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference >= 0) {
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((difference / (1000 * 60)) % 60));
      setSeconds(Math.floor((difference / 1000) % 60));
    } else {
      setIsActive(false);
      const differenceAgo = +new Date() - +new Date(targetDate);
      setDays(Math.floor(differenceAgo / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((differenceAgo / (1000 * 60 * 60)) % 24));
    }
  };

  useEffect(() => {
    if (isActive) {
      const timer = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(timer);
    }
  }, [isActive]);

  return (
    <div>
      {isActive
        ? `${
            days === 0 ? `` : `${days}days:`
          } ${hours}hrs: ${minutes}mins: ${seconds}seconds left`
        : `${days === 0 ? `` : `${days}days and`}  ${hours} hours ago`}
    </div>
  );
};

export default CountdownTimer;

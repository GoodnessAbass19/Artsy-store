"use client";

import React, { useEffect, useState, useRef, FC } from "react";
import HeartIcon from "../ui/custom-icons/HeartIcon";

interface BubbleProps {
  id: number;
  onAnimationEnd: Function;
}

const Like: FC = () => {
  const [likes, setLikes] = useState<number[]>([]);
  const cleanLike = useRef((id: number) => {
    setLikes((currentLikes) => currentLikes.filter((like) => like !== id));
  });

  return (
    <div className="border-2 rounded-full p-2 w-14 h-14  relative inline-block mx-auto">
      <button
        onClick={() =>
          setLikes((prevLikes) => [...prevLikes, new Date().getTime()])
        }
      >
        <HeartIcon className="w-10 h-10 fill-[#F44336] stroke-none" />
      </button>

      {likes.map((id) => (
        <Bubble onAnimationEnd={cleanLike.current} key={id} id={id} />
      ))}
    </div>
  );
};

function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

const opacityDuration = 1;

const emojis: string[] = ["💚", "❤️", "💜", "💙 ", "💛 "];

const Bubble: FC<BubbleProps> = ({ id, onAnimationEnd }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [opacity, setOpacity] = useState(1);
  const size = useRef(random(0.7, 1.5));

  const element = useRef<HTMLDivElement>(null);
  const emoji = useRef(Math.floor(random(0, emojis.length - 1)));

  const initialOptions = useRef<{
    animationDuration: number;
    element: HTMLDivElement | null;
    onAnimationEnd: Function;
    id: number;
  }>({
    animationDuration: random(2, 5),
    element: element.current,
    onAnimationEnd,
    id,
  });

  useEffect(() => {
    const { animationDuration, element, onAnimationEnd, id } =
      initialOptions.current;

    if (element) {
      element.addEventListener("transitionend", (event: any) => {
        if (event.propertyName === "opacity") {
          onAnimationEnd(id);
        }
      });
    }

    setTimeout(() => {
      setPosition((prevState) => ({
        ...prevState,
        x: random(-40, 40),
        y: random(-100, -200),
      }));
    }, 5);

    setTimeout(() => {
      setOpacity(0);
    }, (animationDuration - opacityDuration) * 1000);
  }, []);

  return (
    <div
      style={{
        top: 0,
        color: "red",
        fontSize: "1em",
        left: "50%",
        opacity,
        pointerEvents: "none",
        position: "absolute",
        transform: `translate(calc(-50% + ${position.x}px), calc(-100% + ${position.y}px)) scale(${size.current})`,
        textShadow: "0 0 5px rgba(0, 0, 0, .25)",
        transition: `transform ${initialOptions.current.animationDuration}s linear, opacity ${opacityDuration}s ease-in-out`,
        stroke: `none`,
      }}
      ref={element}
    >
      {emojis[emoji.current]}
    </div>
  );
};

export default Like;

const desktopImages = [
  {
    image: [
      "/assets/Slide-image/image-1.png",
      "/assets/Slide-image/image-2.png",
      "/assets/Slide-image/image-3.png",
      "/assets/Slide-image/image-4.png",
      "/assets/Slide-image/image-5.png",
    ],
  },
  {
    image: [
      "/assets/Slide-image/image-2.png",
      "/assets/Slide-image/image-3.png",
      "/assets/Slide-image/image-4.png",
      "/assets/Slide-image/image-5.png",
      "/assets/Slide-image/image-1.png",
    ],
  },
  {
    image: [
      "/assets/Slide-image/image-3.png",
      "/assets/Slide-image/image-4.png",
      "/assets/Slide-image/image-5.png",
      "/assets/Slide-image/image-1.png",
      "/assets/Slide-image/image-2.png",
    ],
  },
  {
    image: [
      "/assets/Slide-image/image-4.png",
      "/assets/Slide-image/image-5.png",
      "/assets/Slide-image/image-1.png",
      "/assets/Slide-image/image-2.png",
      "/assets/Slide-image/image-3.png",
    ],
  },
];

const mobileImage = [
  {
    Image: [
      "/assets/Mobile-slide/image-1.png",
      "/assets/Mobile-slide/image-2.png",
      "/assets/Mobile-slide/image-3.png",
    ],
  },
];

const FeaturedProduct = [
  {
    image: "/assets/Home-Image/image-1.png",
    header: "The Boolean Egyptian",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nisi fugiat quis expedita pariatur non alias sunt repellatneque delectus! Eius provident minima doloremque cumque?Autem.",
  },
  {
    image: "/assets/Home-Image/image-2.png",
    header: "Are We There Yet?",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nisi fugiat quis expedita pariatur non alias sunt repellatneque delectus! Eius provident minima doloremque cumque?Autem.",
  },
  {
    image: "/assets/Home-Image/image-3.jpg",
    header: "Oloibiri 1997",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nisi fugiat quis expedita pariatur non alias sunt repellatneque delectus! Eius provident minima doloremque cumque?Autem.",
  },
];

const creators = [
  {
    image: "/assets/Creator-image/image-1.png",
    style: "md:w-10 w-7",
  },
  {
    image: "/assets/Creator-image/image-2.png",
    style: "lg:ml-6 ml-3 md:w-10 w-7",
  },
  {
    image: "/assets/Creator-image/image-3.png",
    style: "lg:ml-12 ml-6 md:w-10 w-7",
  },
  {
    image: "/assets/Creator-image/image-4.png",
    style: "lg:ml-[72px] ml-9 md:w-10 w-7",
  },
  {
    image: "/assets/Creator-image/image-5.png",
    style: "lg:ml-24 md:w-10 ml-12 w-7",
  },
];

const fadeImage = [
  "/assets/Fade-Images/Top Creators Animation.png",
  "/assets/Fade-Images/Rectangle 302.png",
  "/assets/Fade-Images/Rectangle 301.png",
];

const category = ["editorial", "fashion", "optic", "art & nature", "nature"];

const comments = [
  {
    image: "/assets/comments/samy.png",
    name: "samy allen",
    text: "i love this. $20.00 for me",
  },
  {
    image: "/assets/comments/allen.png",
    name: "Opeyemi Tiwalope",
    text: "$45.00",
  },
  {
    image: "/assets/comments/celestina.png",
    name: "Celestina Quinn",
    text: "gm frens! ready to bidddd",
  },
  {
    image: "/assets/comments/luca.png",
    name: "uncle luca",
    text: "instant bid",
  },
  {
    image: "/assets/comments/ella.png",
    name: "ella flynn",
    text: "tight bid",
  },
];

const topBid = [
  {
    title: "Out of the box",
    creator: "Dan Murray",
    date: "12/08/22",
    highestBid: "0.57 ETH",
    currentBid: "0.987 ETH",
    image: "/assets/topBid/box.jpeg",
  },
  {
    title: "Falling apart",
    creator: "Jacob Banks",
    date: "12/08/22",
    highestBid: "0.34 ETH",
    currentBid: "0.99 ETH",
    image: "/assets/topBid/falling.jpeg",
  },
];

const drops = [
  {
    title: "Eyo : Eko For Show",
    creator: "Aliya Minat",
    time: "2023-10-25",
    upcoming: true,
    live: false,
    ended: false,
    image: "/assets/drops/eyo.jpeg",
  },
  {
    title: "Ginger Suburbs",
    creator: "Tina Benson",
    time: "2023-10-24",
    upcoming: false,
    live: true,
    ended: false,
    image: "/assets/drops/ginger.jpeg",
  },
  {
    title: "Sink",
    creator: "Aliya Minat",
    time: "2023-10-20",
    upcoming: false,
    live: false,
    ended: true,
    image: "/assets/drops/sink.jpeg",
  },
  {
    title: "Warped ‘99",
    creator: "Tina Benson",
    time: "2023-10-23",
    upcoming: false,
    live: false,
    ended: true,
    image: "/assets/drops/warped.jpeg",
  },
];

export {
  mobileImage,
  desktopImages,
  FeaturedProduct,
  creators,
  fadeImage,
  category,
  comments,
  topBid,
  drops,
};

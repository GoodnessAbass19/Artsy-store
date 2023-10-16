const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96],
    },
  }),
};

const fadeInBottom = {
  hidden: {
    opacity: 0,
    y: "10px",
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: "0px",
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: [0.48, 0.15, 0.25, 0.96],
    },
  }),
};
const slideInLeft = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.5,
      // delay: 0.1,
      ease: [0.645, 0.045, 0.01, 0.6],
    },
  },
};
const slideInRight = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: (i = 0) => ({
    opacity: 1,
    x: "0%",
    transition: {
      duration: 1,
      // delay: i * 0.1,
      ease: [0.645, 0.045, 0.01, 0.6],
    },
  }),
};

const slideOutRight = {
  hidden: {
    x: "0%",
  },
  visible: (i = 0) => ({
    opacity: 1,
    x: "100%",
    transition: {
      duration: 1.5,
      delay: i * 0.1,
      ease: [0.645, 0.045, 0.01, 1],
    },
  }),
};

export { fadeIn, fadeInBottom, slideInRight, slideInLeft, slideOutRight };

/* eslint-disable no-param-reassign */
const MouseIconInitiator = {
  init: (mouseDownIcon) => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      const hidePosition = 100;

      if (scrollPosition >= hidePosition) {
        mouseDownIcon.style.opacity = '0';
        mouseDownIcon.style.transitionDuration = '800ms';
      } else {
        mouseDownIcon.style.opacity = '0.5';
        mouseDownIcon.style.transitionDuration = '800ms';
      }
    });
  },
};

export default MouseIconInitiator;

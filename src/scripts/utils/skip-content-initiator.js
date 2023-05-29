const SkipContentInitiator = {
  init: (skipButton) => {
    document.addEventListener('DOMContentLoaded', () => {
      const targetId = 'main';

      skipButton.addEventListener('click', (event) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  },
};

export default SkipContentInitiator;

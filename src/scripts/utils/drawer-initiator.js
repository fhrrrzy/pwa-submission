/* eslint-disable no-param-reassign */
const drawerInitiator = {
  init({ button, drawer, closeDrawerButton }) {
    button.addEventListener('click', (event) => {
      this._openDrawer(event, drawer);
    });

    closeDrawerButton.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _openDrawer(event, drawer) {
    event.stopPropagation();
    drawer.style.transform = 'translateX(0)';
    document.documentElement.style.overflow = 'hidden';
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.style.transform = 'translateX(-100%)';
    document.documentElement.style.overflow = 'auto';
  },
};

export default drawerInitiator;

/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import 'boxicons';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.getElementById('mobile-menu-button'),
  drawer: document.getElementById('drawer-nav'),
  closeDrawer: document.getElementById('close-drawer'),
  content: document.querySelector('#main'),
  mouseIcon: document.getElementById('mouse-down-icon'),
  skipContent: document.getElementById('skip-link'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

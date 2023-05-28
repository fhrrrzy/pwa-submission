import DrawerInitiator from '../utils/drawer-initiator';
import MouseIconInitiator from '../utils/mouse-icon-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, closeDrawer, mouseIcon,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._closeDrawer = closeDrawer;
    this._mouseIcon = mouseIcon;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      closeDrawerButton: this._closeDrawer,
    });

    MouseIconInitiator.init(this._mouseIcon);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;

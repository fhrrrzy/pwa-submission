import DrawerInitiator from '../utils/drawer-initiator';
import MouseIconInitiator from '../utils/mouse-icon-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import SkipContentInitiator from '../utils/skip-content-initiator';

class App {
  constructor({
    button, drawer, content, closeDrawer, mouseIcon, skipContent,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._closeDrawer = closeDrawer;
    this._mouseIcon = mouseIcon;
    this._skipContent = skipContent;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      closeDrawerButton: this._closeDrawer,
    });

    MouseIconInitiator.init(this._mouseIcon);

    SkipContentInitiator.init(this._skipContent);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;

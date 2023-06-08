// eslint-disable-next-line no-unused-vars
import FavoriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import '../custom-element/restaurant-list';

const Favourite = {
  async render() {
    return `
      <h3 class="page-title">Favourite restaurant</h3>

      <div id="not-found">
        <img src="./svg/404.svg" alt="not found" aria-label="not-found" tabindex="0">
      </div>

      <div class="circular-container-absolute top-right">
        <div class="circular-container">
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <div class="circle-3"></div>
            <div class="circle-4"></div>
        </div>
      </div>

      <restaurant-list id="restaurant-list"></restaurant-list>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantList = document.querySelector('restaurant-list');
    const notFoundElement = document.getElementById('not-found');

    if (restaurants.length > 0) {
      restaurantList.restaurants = restaurants;
      if (notFoundElement) {
        notFoundElement.remove();
      }
    } else if (notFoundElement) {
      notFoundElement.style.display = 'flex';
    }
  },
};

export default Favourite;

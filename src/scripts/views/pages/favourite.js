// eslint-disable-next-line no-unused-vars
import FavoriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import '../custom-element/restaurant-list';

const Favourite = {
  async render() {
    return `
    <h3 class="page-title">Favourite restaurant</h3>

    <div class="circular-container-absolute top-right">
          <div class="circular-container">
              <div class="circle-1"></div>
              <div class="circle-2"></div>
              <div class="circle-3"></div>
              <div class="circle-4"></div>
          </div>
      </div>

      <restaurant-list id="restaurant-list">
      </restaurant-list>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restaurants);
    const restaurantList = document.querySelector('restaurant-list');
    restaurantList.restaurants = restaurants;
  },
};

export default Favourite;

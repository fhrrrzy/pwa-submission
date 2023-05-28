/* eslint-disable no-useless-constructor */
import './restaurant-card';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    const restaurantItems = this._restaurants
      .map((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.restaurant = restaurant;
        return restaurantItem.outerHTML;
      })
      .join('');

    this.innerHTML = `
        ${restaurantItems}
    `;
  }
}

customElements.define('restaurant-list', RestaurantList);

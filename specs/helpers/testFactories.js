import LoveButtonInitiator from '../../src/scripts/utils/love-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favourite-restaurant-idb';

const createLoveButtonPresenterWithRestaurant = async (restaurant) => {
  await LoveButtonInitiator.init({
    loveButtonInitiator: document.querySelector('#love-button'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLoveButtonPresenterWithRestaurant };

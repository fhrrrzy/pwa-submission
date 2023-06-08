import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favourite-restaurant-idb';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<button id="love-button" aria-label="add this restaurant to favorite"></button>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('box-icon[type="regular"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('box-icon[type="solid"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#love-button').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('#love-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a movie when it has no id', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({});

    document.querySelector('#love-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});

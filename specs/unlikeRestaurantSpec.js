import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favourite-restaurant-idb';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<button id="love-button" aria-label="add this restaurant to favorite"></button>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {});

  it('should show the unlike button when the restaurant has been liked before', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('box-icon[type="solid"]')).toBeTruthy();
  });

  it('should not show the like button when the restaurant has been liked before', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('box-icon[type="regular"]')).toBeFalsy();
  });

  it('should be able to unlike the restaurant', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#love-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('#love-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});

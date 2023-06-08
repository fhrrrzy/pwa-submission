const assert = require('assert');

Feature('unLiking Restaurants');

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);
  I.scrollTo(0, 1000);
  I.seeElement('.card-image h3 a.restaurant-name-card');

  const firstRestaurant = locate('.card-image h3 a.restaurant-name-card').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);
  I.scrollTo(0, 1000);

  I.seeElement('#love-button');
  I.click('#love-button');

  I.amOnPage('/#/favourite');
  I.wait(3);
  I.scrollTo(0, 1000);
  I.seeElement('section.card');

  const likedRestaurant = locate('.card-image h3 a.restaurant-name-card').first();
  const likedRestaurantName = await I.grabTextFrom(likedRestaurant);

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurant);

  I.seeElement('#love-button');
  I.click('#love-button');

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.scrollTo(0, 1000);
  I.dontSeeElement('.card-image h3 a.restaurant-name-card');
});

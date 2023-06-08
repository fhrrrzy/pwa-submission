const assert = require('assert');

Feature('Liking Restaurants');

Scenario('liking one restaurant', async ({ I }) => {
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
  const likedRestaurantName = await I.grabTextFrom('.card-image h3 a.restaurant-name-card');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

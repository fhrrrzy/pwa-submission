const assert = require('assert');

Feature('Adding Reviews');

Scenario('adding a review and comparing the latest comment', async ({ I }) => {
  I.amOnPage('/');
  I.wait(1.5);
  I.scrollTo(0, 1000);
  I.seeElement('.card-image h3 a.restaurant-name-card');

  I.click(locate('.card-image h3 a.restaurant-name-card').first());
  I.wait(1.5);
  I.scrollTo(0, 2100);

  const reviewerName = 'John Doe';
  const comment = 'This restaurant is amazing!';

  I.wait(3)
  I.seeElement('form')
  I.fillField('#name', reviewerName);
  I.fillField('#comment', comment);
  I.click('Submit');

  // Wait for the review to appear in the list
  I.waitForElement(`//li[contains(.//div[@class="review-comment"], "${comment}")]`);

  // Get the latest review details
  const latestReviewName = await I.grabTextFrom(`(//div[@class="review-name"])[last()]`);
  const latestReviewComment = await I.grabTextFrom(`(//div[@class="review-comment"])[last()]`);

  // Compare the latest review details with the input
  assert.strictEqual(latestReviewName, reviewerName);
  assert.strictEqual(latestReviewComment, comment);
});

/* eslint-disable no-useless-constructor */
import './review-card';

class ReviewList extends HTMLUListElement {
  constructor() {
    super();
  }

  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    const reviewItems = this._reviews
      .map((review) => {
        const reviewItem = document.createElement('review-item');
        reviewItem.review = review;
        return reviewItem.outerHTML;
      })
      .join('');

    this.innerHTML = reviewItems;
  }
}

customElements.define('review-list', ReviewList, { extends: 'ul' });

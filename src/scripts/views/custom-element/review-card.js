/* eslint-disable no-useless-constructor */
class ReviewItem extends HTMLElement {
  constructor() {
    super();
  }

  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { name, review, date } = this._review;

    this.innerHTML = `
      <li tabindex="0">
          <div class="review-name" aria-label="reviewer-name">${name}</div>
          <div class="review-date" aria-label="review-date">${date}</div>
          <div class="review-comment" aria-label="review-message">${review}</div>
      </li>`;
  }
}

customElements.define('review-item', ReviewItem);

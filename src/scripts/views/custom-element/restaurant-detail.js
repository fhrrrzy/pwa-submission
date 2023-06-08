/* eslint-disable no-useless-constructor */
import CONFIG from '../../globals/config';
import './review-list';

class Detail extends HTMLElement {
  constructor() {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const {
      name,
      description,
      city,
      address,
      pictureId,
      categories,
      menus,
      rating,
      customerReviews,
    } = this._restaurant;

    const { foods, drinks } = menus;
    const pictureUrl = `${CONFIG.BASE_IMAGE_URL('large')}/${pictureId}`;
    let formattedRating;
    if (Number.isInteger(rating)) {
      formattedRating = `${rating}.0`;
    } else {
      formattedRating = rating.toString();
    }

    const foodList = foods.map((food) => `<li>${food.name}</li>`).join('');
    const drinkList = drinks.map((drink) => `<li>${drink.name}</li>`).join('');
    const categoryList = categories.map((category) => `<li>${category.name}</li>`).join('');

    this.innerHTML = `
      <div id="restaurant-detail">
        <div class="restaurant-general-detail-container">
          <div id="restaurant-image" tabindex="0">
              <img src="${pictureUrl}" alt="photo of ${pictureUrl}" aria-label="photo of ${pictureUrl}">
          </div>
          <div class="restaurant-general-detail">
            <div id="restaurant-name" tabindex="0">
                <h4 aria-label="restaurant-name">${name}</h4>
            </div>
            <ul class="categories">
                  ${categoryList}
              </ul>
            <div id="restaurant-rating-city" tabindex="0">
                <div class="">
                    <span aria-label="rating" id="rating">Rating : ${formattedRating}</span>
                    <span> - </span>
                    <span aria-label="address">${city}, ${address}</>
                </div>
            </div>
            <div id="restaurant-description" tabindex="0">
              ${description}
            </div>
          </div>
        </div>
        <div id="restaurant-menu" tabindex="0">
            <h4>Menu</h4>
            <div class="menu-container">
                <div class="food-container">
                    <h5>Food</h5>
                    <ul id="food-list">
                    ${foodList}
                    </ul>
                </div>
                <div class="drink-container">
                    <h5>Drink</h5>
                    <ul id="drink-list">
                    ${drinkList}
                    </ul>
                </div>
            </div>
        </div>
        <div id="restaurant-review" tabindex="0">
            <h4>Review</h4>
            <form action="" id="review-form">
                <div class="form-group">
                    <label for="ame">Nama</label>
                    <input id="name" type="text" placeholder="masukan nama anda">
                </div>
                <div class="form-group">
                    <label for="comment">Comment</label>
                    <textarea name="" id="comment" cols="30" rows="10"  placeholder="masukan komentar anda"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <ul is="review-list" id="ReviewList"></ul>
        </div>
    </div>`;

    const reviewListElement = document.getElementById('ReviewList');
    reviewListElement.reviews = customerReviews;
  }
}

customElements.define('restaurant-detail', Detail);

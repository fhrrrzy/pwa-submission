/* eslint-disable no-useless-constructor */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { id, name, description, city, pictureId, rating } = this._restaurant;

    let formattedRating;
    if (Number.isInteger(rating)) {
      formattedRating = `${rating}.0`;
    } else {
      formattedRating = rating.toString();
    }

    const pictureUrlSmall = `${CONFIG.BASE_IMAGE_URL('small')}/${pictureId}`;

    this.innerHTML = `
    <section class="card" tabindex="0" aria-label="Restaurant Card">
        <div class="card-image">
            <img data-src="${pictureUrlSmall}" class="restaurant-card-image lazyload" width="100%" height="auto" aria-label="Photo of ${name}" alt="${name}"/>
            <div class="low-brightness-layer"></div> aria-label="rating"
            <h3><a href="/#/detail/${id}" class="restaurant-name-card">${name}</a></h3>
        </div>
        <div class="card-body">
            <p>
                <span role="text aria-label="rating">${formattedRating} <box-icon name='star' type='solid' color='white' size='xs'></box-icon></span>
                <span role="text aria-label="city">${city}</span>
            </p>
            <p class="description">
                ${description}
            </p>
        </div>
    </section>`;
  }
}

customElements.define('restaurant-item', RestaurantItem);

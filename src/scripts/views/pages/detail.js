import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import '../custom-element/restaurant-detail';
import ReviewFormInitiator from '../../utils/review-form-initiator';
import LoveButtonInitiator from '../../utils/love-button-initiator';

const Detail = {
  async render() {
    return `
    <h3 class="page-title">Detail restaurant</h3>

    <div class="circular-container-absolute top-right">
          <div class="circular-container">
              <div class="circle-1"></div>
              <div class="circle-2"></div>
              <div class="circle-3"></div>
              <div class="circle-4"></div>
          </div>
      </div>

    <restaurant-detail></restaurant-detail>
    <button id="love-button" aria-label="add this reastaurant to favourite"></button>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = document.querySelector('restaurant-detail');
    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      const {
        id, name, city, description, rating, pictureId,
      } = restaurant;

      restaurantDetail.restaurant = restaurant;
      ReviewFormInitiator.init(document.getElementById('review-form'));
      LoveButtonInitiator.init({
        loveButtonInitiator: document.querySelector('#love-button'),
        restaurant: {
          id,
          name,
          city,
          description,
          rating,
          pictureId,
        },
      });
    } catch (e) {
      restaurantDetail.innerHTML = `<div id="not-found">
        <img src="./images/404.svg" alt="not found" aria-label="not-found" tab-index=0>
      </div>`;
    }
  },
};

export default Detail;

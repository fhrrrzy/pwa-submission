import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';
import '../views/custom-element/review-list';

const ReviewFormInitiator = {
  init: async (form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const { id } = url;
      const nameInput = form.querySelector('input[type="text"]');
      const commentInput = form.querySelector('textarea');

      const name = nameInput.value;
      const comment = commentInput.value;

      const data = {
        id,
        name,
        review: comment,
      };

      const reviewReponse = await RestaurantSource.addReview(data);
      const reviewListElement = document.getElementById('ReviewList');
      reviewListElement.reviews = reviewReponse;
      form.reset();
    });
  },
};

export default ReviewFormInitiator;

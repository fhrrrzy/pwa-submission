import API_ENDPOINT from '../globals/api-endpoint';
import fetchWithAlert from '../utils/fetch-helper';

class RestaurantSource {
  static async all() {
    const response = await fetchWithAlert(API_ENDPOINT.GET_ALL);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetchWithAlert(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetchWithAlert(API_ENDPOINT.REVIEW, options);
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantSource;

const LoveButtonInitiator = {
  async init({ loveButtonInitiator, favoriteRestaurants: FavoriteRestaurantIdb, restaurant }) {
    this._loveButtonInitiator = loveButtonInitiator;
    this._restaurant = restaurant;
    this._favoriteRestaurants = FavoriteRestaurantIdb;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._loveButtonInitiator.innerHTML = "<box-icon name='heart' color='red' type='regular'></box-icon>";

    this._loveButtonInitiator.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._loveButtonInitiator.innerHTML = "<box-icon name='heart' color='red' type='solid'></box-icon>";

    this._loveButtonInitiator.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LoveButtonInitiator;

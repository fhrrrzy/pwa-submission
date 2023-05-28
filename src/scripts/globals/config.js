const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  CACHE_NAME: 'restaurant-V1',
  DATABASE_NAME: 'restaurant-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
  BASE_IMAGE_URL(size) {
    return `https://restaurant-api.dicoding.dev/images/${size}`;
  },
};

export default CONFIG;

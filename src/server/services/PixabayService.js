const apiHelper = require("../utils/apiHelper");

/**
 * Class for the Pixabay Service
 */
class PixabayService {
  // the base url for the pixabay service
  baseUrl = `https://pixabay.com/api/`;

  /**
   * Create a new instance of Pixabay Service
   * @param config The configuration with the api key for the Pixabay Service
   */
  constructor(config) {
    this.api_key = config.api_key;
  }

  /**
   * Function to get images for a given query
   * @param query The query itself
   * @returns an object with a list of images
   */
  async fetchImages(query) {
    const verb = "get";
    const path = `${this.baseUrl}?key=${this.api_key}&image_type=photo&q=${query}`;

    // Send the request
    const images = await apiHelper.sendRequest(verb, path);

    return images;
  }
}

module.exports = PixabayService;

const apiHelper = require("../utils/apiHelper");

/**
 * Class for the GeoNames Service
 */
class GeoNamesService {
  // Base url for the geonames api
  baseUrl = `http://api.geonames.org`;

  /**
   * Create a new instance of the GeoNames Service
   * @param config The configuration with the username for the GeoNames Service
   */
  constructor(config) {
    this.username = config.geonames_username;
  }

  /**
   * Function to get information about a given city
   * @param city The name of the city
   * @returns information about the city
   */
  async fetchCityInfo(city) {
    const verb = "get";
    const path = `${this.baseUrl}/searchJSON?name=${city}&maxRows=1&username=${this.username}`;

    // Send the request
    const cityInfo = await apiHelper.sendRequest(verb, path);

    return cityInfo;
  }
  /**
   * Function to fetch information about a city from wikipedia
   * @param city The name of the city
   * @returns information about the city from wikipedia
   */
  async fetchCityInfoWiki(city) {
    const verb = "get";
    const path = `${this.baseUrl}/wikipediaSearchJSON?q=${city}&maxRows=5&username=${this.username}`;
    const cityInfo = await apiHelper.sendRequest(verb, path);

    return cityInfo;
  }
}

module.exports = GeoNamesService;

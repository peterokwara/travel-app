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
   * Function to get information about a given country
   * @param country The name of the country
   * @returns information about the country
   */
  async fetchCountryInfo(city) {
    const verb = "get";
    const path = `${this.baseUrl}/searchJSON?name=${city}&maxRows=1&username=${this.username}`;

    // Send the request
    const cityInfo = await apiHelper.sendRequest(verb, path);

    return cityInfo;
  }
}

module.exports = GeoNamesService;

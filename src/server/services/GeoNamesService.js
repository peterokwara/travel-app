const apiHelper = require("../utils/apiHelper");

/**
 * Class for the GeoNames Service
 */
class GeoNamesService {
  baseUrl = `http://api.geonames.org`;
  /**
   * Create a new instance of the GeoNames Service
   * @param config The configuration with the username for the GeoNames Service
   */
  constructor(config) {
    this.username = config.username;
  }

  /**
   * Function to get information about a given country
   * @param country The name of the country
   * @returns information about the country
   */
  async fetchCountryInfo(country) {
    const verb = "get";
    const path = `${this.baseUrl}/countryInfo?username=${this.username}&country=${country}`;

    // Send the request
    const countryInfo = await apiHelper.sendRequest(verb, path);

    return countryInfo;
  }
}

module.exports = GeoNamesService;

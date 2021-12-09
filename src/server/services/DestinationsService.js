/**
 * Class for the GeoNames Service
 */
class DestinationsService {
  constructor() {}

  /**
   * Function to get information about a given country
   * @param country The name of the country
   * @returns information about the country
   */
  async fetchCountryInfo() {
    return countryInfo;
  }
}

module.exports = DestinationsService;

import ServiceFactory from "../factory/ServiceFactory";

/**
 * Class to handle Travel Data Information
 */
class DestinationsService {
  async fetchDestinations(searchTerm) {
    const ApiClient = ServiceFactory.get("api-client");
    const city = {
      city: searchTerm,
    };
    const results = await ApiClient.fetchDestination(city);

    return results;
  }
}

module.exports = DestinationsService;

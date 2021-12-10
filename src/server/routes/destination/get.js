// const DestinationsService = require("../../services/DestinationsService");
const ServiceFactory = require("../../factory/ServiceFactory");

/**
 * Get destinations
 * @param  request the request
 * @returns the response
 */
async function get(request) {
  // Check to see if the response is there
  // const destinationsService = new DestinationsService();
  // const response = await destinationsService.fetchDestinationInfo("ke");
  const destinationsService = ServiceFactory.get("destinations");
  const response = await destinationsService.fetchDestinationInfo("ke");
  return response;
}

module.exports = { get };

const ServiceFactory = require("../../factory/ServiceFactory");

/**
 * Get destinations
 * @param  request the request
 * @returns the response
 */
async function get(request) {
  // Fetch the destinations service
  const destinationsService = ServiceFactory.get("destinations");

  if (!request.city) {
    throw new Error("There is no city name in the request");
  }

  // Get information about the destination
  const response = await destinationsService.fetchDestinationInfo(request.city);
  return response;
}

module.exports = { get };

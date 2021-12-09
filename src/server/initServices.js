const ServiceFactory = require("./factory/ServiceFactory");
const DestinationsService = require("./services/DestinationsService");
const GeoNamesService = require("./services/GeoNamesService");
const PixabayService = require("./services/PixabayService");
const WeatherBitService = require("./services/WeatherBitService");

/**
 * Initialize all the services
 * @param config The configuration to initialize the service with
 */
initServices = async (config) => {
  // Register the GeoNames service
  ServiceFactory.register("geonames", () => new GeoNamesService(config));

  // Register the PixaBay service
  ServiceFactory.register("pixabay", () => new PixabayService(config));

  // Register the WeatherBit service
  ServiceFactory.register("weatherbit", () => new WeatherBitService(config));

  // Register the Destinations service
  ServiceFactory.register(
    "destinations",
    () => new DestinationsService(config)
  );
};

module.exports = { initServices };

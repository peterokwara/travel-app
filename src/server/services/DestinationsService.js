const ServiceFactory = require("../factory/ServiceFactory");
const dotenv = require("dotenv").config();

// Set up the configuration
const config = {
  geonames_username: process.env.GEONAMES_USERNAME,
  pixabay_api_key: process.env.PIXABAY_API_KEY,
  weatherbit_api_key: process.env.WEATHERBIT_API_KEY,
};

/**
 * Class for the Destination Service
 */
class DestinationsService {
  /**
   * Function to get information about a given city
   * @param city The name of the city
   * @returns information about the city
   */
  async fetchDestinationInfo(city) {
    // Fetch information about the city
    const geoNamesService = ServiceFactory.get("geonames");
    const locationInfo = await geoNamesService.fetchCountryInfo(city);

    if (!locationInfo) {
      throw new Error(
        "Unable to fetch location information from the geonames api."
      );
    }

    // Fetch current weather
    const weatherBitService = ServiceFactory.get("weatherbit");
    const currentWeatherInfo = await weatherBitService.fetchCurrentWeather(
      locationInfo.geonames[0].lng,
      locationInfo.geonames[0].lat
    );

    if (!currentWeatherInfo) {
      throw new Error(
        "Unable to fetch current weathers information from the weatherbit api."
      );
    }

    // Fetch weather forecast
    const weatherForecastInfo = await weatherBitService.fetchForecast(
      locationInfo.geonames[0].lng,
      locationInfo.geonames[0].lat
    );

    if (!weatherForecastInfo) {
      throw new Error(
        "Unable to fetch the weather forecast from the weatherbit api."
      );
    }

    // Fetch image from location
    const pixaBayService = ServiceFactory.get("pixabay");
    const imageLinks = await pixaBayService.fetchImages(city);

    if (!imageLinks) {
      throw new Error("Unable to fetch any images from the pixabay service.");
    }

    return {
      location: locationInfo.geonames,
      currentWeather: currentWeatherInfo,
      weatherForecast: weatherForecastInfo,
      images: imageLinks,
    };
  }
}

module.exports = DestinationsService;

const ServiceFactory = require("../factory/ServiceFactory");
const GeoNamesService = require("../services/GeoNamesService");
const PixabayService = require("../services/PixabayService");
const WeatherBitService = require("../services/WeatherBitService");
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
   * Function to get information about a given country
   * @param country The name of the country
   * @returns information about the country
   */
  async fetchDestinationInfo(destination) {
    const geoNamesService = ServiceFactory.get("geonames");
    const locationInfo = await geoNamesService.fetchCountryInfo("ke");
    console.log(locationInfo);

    const pixaBayService = ServiceFactory.get("pixabay");
    const imageLinks = await pixaBayService.fetchImages("ke");
    console.log(imageLinks);

    const weatherBitService = ServiceFactory.get("weatherbit");
    const currentWeatherInfo = await weatherBitService.fetchCurrentWeather(
      "nairobi",
      "ke"
    );
    const weatherForecastInfo = await weatherBitService.fetchForecast(
      "nairobi",
      "ke"
    );
    console.log(currentWeatherInfo);
    console.log(weatherForecastInfo);
    return "manamana";
  }
}

module.exports = DestinationsService;

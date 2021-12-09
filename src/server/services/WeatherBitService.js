const apiHelper = require("../utils/apiHelper");

/**
 * Class for the WeatherBit Service
 */
class WeatherBitService {
  // The base url for the service
  baseUrl = `https://api.weatherbit.io/v2.0`;

  /**
   * Create a new instance of the WeatherBit Service
   * @param config The configuration with api key for the WeatherBit Service
   */
  constructor(config) {
    this.api_key = config.weatherbit_api_key;
  }

  /**
   * Fetch the current weather for a given city
   * @param country The country
   * @param city The city
   * @returns the current weather information
   */
  async fetchCurrentWeather(city, country) {
    const verb = "get";
    const path = `${this.baseUrl}/current?city=${city}&country=${country}&key=${config.api_key}`;
    const headers = {
      "Content-Type": "application/json",
      "keep-alive": "timeout=5",
    };

    // Send the request to the api
    const currentWeather = await apiHelper.sendRequest(verb, path, headers);

    return currentWeather;
  }

  /**
   * Fetch the current weather for a given city
   * @param country The country
   * @param city The city
   * @returns the weather information for the next 16 days
   */
  async fetchForecast(city, country) {
    const verb = "get";
    const path = `${this.baseUrl}/forecast/daily?city=${city}&country=${country}&key=${config.api_key}`;
    const headers = {
      "Content-Type": "application/json",
      "keep-alive": "timeout=5",
    };

    // Send the request to the api
    const weatherForecast = await apiHelper.sendRequest(verb, path, headers);

    return weatherForecast;
  }
}

module.exports = WeatherBitService;

/**
 * Class to mock the Destinations Service
 */
class MockDestinationsService {
  // Shortened captured response
  capturedResponse = {
    location: [
      {
        lng: "30.5238",
        name: "Kyiv",
        countryName: "Ukraine",
        lat: "50.45466",
      },
    ],
    locationWiki: {
      geonames: [
        {
          summary:
            "Kiev . Random House Webster's Unabridged Dictionary. or Kyiv is the capital and largest city of Ukraine, located in the north central part of the country on the Dnieper River. The population in July 2013 was (though higher estimated numbers have been cited in the press),The most recent Ukrainian (...)",
        },
      ],
    },
    currentWeather: {
      data: [
        {
          weather: { icon: "c04d", code: 804, description: "Overcast clouds" },
          datetime: "2021-12-21:13",
          temp: -8.9,
        },
      ],
      count: 1,
    },
    weatherForecast: {
      data: [
        {
          weather: { icon: "s01d", code: 600, description: "Light snow" },
          datetime: "2021-12-21",
          temp: -7.5,
        },
        {
          weather: { icon: "s01d", code: 600, description: "Light snow" },
          datetime: "2021-12-22",
          temp: -9.6,
        },
        {
          weather: { icon: "c02d", code: 801, description: "Few clouds" },
          datetime: "2021-12-23",
          temp: -10,
        },
        {
          weather: { icon: "s01d", code: 600, description: "Light snow" },
          datetime: "2021-12-24",
          temp: -6,
        },
        {
          weather: { icon: "s04d", code: 610, description: "Mix snow/rain" },
          datetime: "2021-12-25",
          temp: 1.4,
        },
        {
          weather: { icon: "s04d", code: 610, description: "Mix snow/rain" },
          datetime: "2021-12-26",
          temp: 0.6,
        },
        {
          weather: { icon: "s03d", code: 602, description: "Heavy snow" },
          datetime: "2021-12-27",
          temp: -4.9,
        },
        {
          weather: { icon: "s02d", code: 601, description: "Snow" },
          datetime: "2021-12-28",
          temp: -7.2,
        },
        {
          weather: { icon: "s02d", code: 601, description: "Snow" },
          datetime: "2021-12-29",
          temp: -1.6,
        },
        {
          weather: { icon: "r02d", code: 501, description: "Moderate rain" },
          datetime: "2021-12-30",
          temp: 1.3,
        },
        {
          weather: {
            icon: "r04d",
            code: 520,
            description: "Light shower rain",
          },
          datetime: "2021-12-31",
          temp: -0.3,
        },
        {
          weather: { icon: "c04d", code: 804, description: "Overcast clouds" },
          datetime: "2022-01-01",
          temp: -9.7,
        },
        {
          weather: { icon: "s01d", code: 600, description: "Light snow" },
          datetime: "2022-01-02",
          temp: -7.2,
        },
        {
          weather: { icon: "s01d", code: 600, description: "Light snow" },
          datetime: "2022-01-03",
          temp: -8.6,
        },
        {
          weather: { icon: "c03d", code: 803, description: "Broken clouds" },
          datetime: "2022-01-04",
          temp: -7.7,
        },
        {
          weather: { icon: "s02d", code: 601, description: "Snow" },
          datetime: "2022-01-05",
          temp: -0.7,
        },
      ],
      city_name: "Kiev",
      lon: 30.52,
      timezone: "Europe/Kiev",
      lat: 50.45,
      country_code: "UA",
      state_code: "12",
    },
    images: {
      total: 1,
      totalHits: 1,
      hits: [
        {
          previewURL:
            "https://cdn.pixabay.com/photo/2019/10/14/22/58/ukraine-4550155_150.jpg",
          webformatURL:
            "https://pixabay.com/get/gc094afd8196da331ca07305256c880f018b1323fc9de8948164242e6f102dfcb762ae49980d3fc2a2c1896e870776584c115f044cfe340f433219c18f8707de9_640.jpg",
        },
      ],
    },
  };

  /**
   * Function to get information about a given city
   * @param city The name of the city
   * @returns information about the city
   */
  async fetchDestinationInfo(city) {
    // If there is no city in the response, return an empty response object
    if (typeof city == "undefined") {
      return;
    }

    // Otherwise return the city/destination information
    return this.capturedResponse;
  }
}
module.exports = MockDestinationsService;

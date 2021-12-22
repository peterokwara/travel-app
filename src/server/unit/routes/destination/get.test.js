const ServiceFactory = require("../../../factory/ServiceFactory");
const MockDestinationsService = require("../../mocks/mockDestinationService.js");
const { get } = require("../../../routes/destination/get");

describe("The get destination api", () => {
  const mockDestinationsService = new MockDestinationsService();

  beforeEach(() => {
    // Register the mock destinations service
    ServiceFactory.register("destinations", () => mockDestinationsService);
  });

  afterEach(() => {
    // De-register the mock destinations service
    ServiceFactory.unregister("destinations");
  });

  it("should return a response if the user has defined a city", async () => {
    const request = { city: "nairobi" };

    // call the get route with a request
    const response = await get(request);
    // Expect a response
    expect(response).toBeDefined();

    // Expect a longitude to be defined
    expect(response.location[0].lng).toBeDefined();

    // Expect some wikipedia information
    expect(response.locationWiki.geonames[0].summary).toBeDefined();

    // Expect some current weather information
    expect(response.currentWeather.data[0].temp).toBeDefined();

    // Expect some forecast information
    expect(response.weatherForecast.data[5].temp).toBeDefined();

    // Expect an image url
    expect(response.images.hits[0].previewURL).toBeDefined();
  });

  it("should throw an error if the user has not defined a city", async () => {
    const request = {};

    // Expect it to throw an error
    await expect(get(request)).rejects.toThrow(
      "There is no city name in the request"
    );
  });
});

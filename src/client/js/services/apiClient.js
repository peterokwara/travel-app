/**
 * Class to handle api communications.
 */
class ApiClient {
  // Base url for the backend api
  baseUrl = `http://localhost:3000`;

  options = {
    method: "",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: "",
  };

  /**
   * Function to fetch information about a destination
   * @param city the city to fetch information about
   * @returns Information about the city and images
   */
  async fetchDestination(city) {
    const path = `${this.baseUrl}/destinations`;
    this.options["method"] = "POST";
    this.options["body"] = JSON.stringify(city);

    // Send the request
    const cityInfo = await this.postData(path, this.options);

    return cityInfo;
  }

  /**
   * Function to do fetch request
   * @param url the url to make requests to
   * @param options this may include whether it's get or post, with data or no data
   * @returns the response from openweatherapi or from the backend
   */
  async postData(url = "", options = {}) {
    const response = await fetch(url, options);
    try {
      const newData = await response.json();
      return newData;
    } catch (error) {
      console.log("Something went wrong!", error);
    }
  }
}

module.exports = ApiClient;

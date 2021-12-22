const axios = require("axios");

/**
 * Function to send a request and handle errors
 * @param verb The HTTP verb to make the request
 * @param path The path to send the request to
 * @param headers The headers of the request
 * @returns The response from the request
 */
const sendRequest = async (verb, path, headers = {}) => {
  let fetchResponse;
  try {
    fetchResponse = await axios(path, {
      method: verb,
      headers,
    });

    if (!fetchResponse) {
      throw new Error("No data was returned from the API.");
    }
  } catch (error) {
    throw new Error("The application is not able to complete the request");
  }
  return fetchResponse.data;
};

module.exports = { sendRequest };

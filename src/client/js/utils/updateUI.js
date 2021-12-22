/**
 * Class to handle all user interface functions
 */
class UpdateUI {
  results;
  /**
   * Function to load search results to the main user interface
   * @param results The search results from calling the backend api
   */
  async updateSearchResults(results) {
    // Store results in a global variable
    this.results = results;

    // Create UI card to display results
    let card = document.createElement("div");
    card.setAttribute("class", "list-class");
    card.innerHTML = `
      <div class="list-card" id="class">
        <img
          id="card-image"
          src="${results.images.hits[0].previewURL}"
          alt="Avatar"
        />
        <div>
          <h4>${results.location[0].countryName}</h4>
          <div>
            <p>${results.location[0].name}</p>
            <i class="material-icons">place</i>
          </div>
        </div>
      </div>`;

    // Add event click listener to the card, to load more info about the result
    card.addEventListener("click", this.loadInfo);

    // Add card to the main UI
    let currentDiv = document.getElementsByClassName("search-group")[0];
    currentDiv.appendChild(card);
  }

  /**
   * Function to render search results
   * @param results The results from an api request or local storage data
   * @returns The results on the page
   */
  async loadResults(results) {
    this.results = results;

    // Clear the results by removing the respective class names
    const clearResultsTitle = document.getElementsByClassName("results")[0];
    if (typeof clearResultsTitle !== "undefined") {
      clearResultsTitle.remove();
    }
    const clearResults = document.getElementsByClassName("list-item")[0];
    if (typeof clearResults !== "undefined") {
      clearResults.remove();
    }

    // Create a title called results
    let resultsTitle = document.createElement("div");
    resultsTitle.setAttribute("class", "results");
    resultsTitle.innerHTML = `          
    <h3>Results</h3>
    `;

    // load up the list of search results
    const createdList = await this.createList(this.results);

    // Render title
    let currentDiv = document.getElementsByClassName("search-group")[0];
    currentDiv.appendChild(resultsTitle);

    // Render list
    currentDiv = document.getElementsByClassName("main")[0];
    currentDiv.append(createdList);
  }

  /**
   * Function to load a card containing detailed information about a destination
   * @returns a detailed card with information about the destination
   */
  async loadDetailedResults() {
    // Create the card with base information
    const card = await this.createCard();

    // Render card before rendering the respective forecasts
    let currentDiv = document.getElementsByClassName("main")[0];
    currentDiv.append(card);

    // Create a list of 16 forecasts
    const forecastContents = await this.createForecastList();

    // Render all 16 forecasts
    for (const forecastContent of forecastContents) {
      let currentDiv = document.getElementsByClassName("forecast")[0];
      currentDiv.append(forecastContent);
    }

    // When the user clicks anywhere outside of the card, close it
    window.onclick = function (event) {
      if (event.target == card) {
        card.remove();
      }
    };

    // When the user clicks on the top close button, close it
    const topCloseButton = document.getElementsByClassName("close")[0];
    topCloseButton.onclick = function () {
      card.remove();
    };

    // When the user clicks on the bottom close button, close it
    const bottomCloseButton =
      document.getElementsByClassName("close-button")[0];
    bottomCloseButton.onclick = function () {
      card.remove();
    };
  }

  /**
   * Function to render a list card with basic information about a destination
   * @param results The results from an api request or local storage data
   * @returns the list element
   */
  async createList(results) {
    // Create the list element
    let list = document.createElement("div");
    list.setAttribute("class", "list-item");

    // Start populating the html with content from the backend api request
    list.innerHTML = `
    <div class="list-card" id="class">
        <img
          id="card-image"
          src="${results.images.hits[0].previewURL}"
          alt="Avatar"
        />
        <div class="card-country-name">
          <h4>${results.location[0].countryName}</h4>
          <div class="card-location-name">
            <p>${results.location[0].name}</p>
            <i class="material-icons">place</i>
          </div>
        </div>
    </div>
    `;

    // Add event listener if the user clicks on the list element, run the function to display the very detailed card
    list.addEventListener("click", () => {
      this.loadDetailedResults();
    });

    // Return the populated list item
    return list;
  }

  /**
   * Function to render a card with all detailed information about a location
   * @returns a detailed card element without forecast info
   */
  async createCard() {
    // Create a div for the card
    let card = document.createElement("div");
    card.setAttribute("class", "card-item");

    // Start populating the card with results from the backend api
    card.innerHTML = `
    <div class="location-card">
      <span class="close">&times;</span>
      <img
        src="${this.results.images.hits[0].webformatURL}"
        alt="${this.results.location[0].name}"
        style="width: 100%"
      />
      <h2 class="title">${this.results.location[0].name}</h2>
      <h3>${this.results.location[0].countryName}</h3>
      <p>
      ${this.results.locationWiki.geonames[0].summary}
      </p>
      <div class="current-weather">
        <h3 class="title">Current weather</h3>
        <div class="current-weather-info">
          <div>
            <p class="current-weather-temperature">${this.results.currentWeather.data[0].temp}</p>
            <p class="current-weather-description">${this.results.currentWeather.data[0].weather.description}</p>
          </div>
          <img src="https://www.weatherbit.io/static/img/icons/${this.results.currentWeather.data[0].weather.icon}.png" />
        </div>
      </div>
      <div class="forecast">
        <h3>Forecast</h3>
      </div>
      <div class="card-buttons">
        <button class="button close-button"><span>Close</span></button>
      </div>
    </div>`;

    // Return a populated card
    return card;
  }

  /**
   * Function to render the 16 day forecast
   * @returns an array of div elements, each having forecasts and totaling up to 16
   */
  async createForecastList() {
    // Create an empty array to store the forecast divs
    const forecastDivs = [];

    // Get the array of the forecast results we will loop through
    const forecasts = this.results.weatherForecast.data;

    // Start populating each div respectively
    for (const forecast of forecasts) {
      // Get the day of the week for the date of forecast
      const date = new Date(forecast.datetime);
      const forecastDate = date.toLocaleDateString(window.navigator.language, {
        weekday: "long",
      });

      // Create a div for each forecast item
      const div = document.createElement("div");
      div.setAttribute("class", "forecast-item");

      // Populate the div
      div.innerHTML = `
        <div class="forecast-info">
          <p>${forecastDate}</p>
          <p>${forecast.temp}</p>
          <p>${forecast.weather.description}</p>
        </div>
        <img src="https://www.weatherbit.io/static/img/icons/${forecast.weather.icon}.png" />`;

      // Add the created div into an array
      forecastDivs.push(div);
    }

    // Return an array of forecast divs
    return forecastDivs;
  }
}

module.exports = UpdateUI;

class UpdateUI {
  results;
  /**
   * Function to load search results to the main user interface
   * @param results The search results from calling the backend api
   */
  async updateSearchResults(results) {
    this.results = results;
    // Create UI card
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

    // Add event click listener to the card
    card.addEventListener("click", this.loadInfo);

    // Add card to the main UI
    let currentDiv = document.getElementsByClassName("search-group")[0];
    currentDiv.appendChild(card);
  }

  /**
   * Function to load saved destinations from local storage and populate it in the UI
   */
  async loadSavedDestinations() {}

  /**
   * Function to load more information about the destination from search results
   */
  async loadInfo(results) {
    // Create UI card with more info
    let card = document.createElement("div");
    card.setAttribute("class", "list-class");
    card.innerHTML = `
    <div class="card">
      <img src="https://cdn.pixabay.com/photo/2021/03/03/14/55/rhino-6065480_150.jpg" alt="Avatar" style="width:100%">
      <div class="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>`;

    // Add event click listener to the card
    card.addEventListener("click", this.loadInfo);

    // Add card to the main UI
    let currentDiv = document.getElementsByClassName("main")[0];
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

    // Create a title
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
   * Function to load a modal containing detailed information about a destination
   * @param results The results from an api request or local storage data
   * @returns a detailed card with information about the destination
   */
  async loadDetailedResults() {
    const card = await this.createCard();

    // Render card
    let currentDiv = document.getElementsByClassName("main")[0];
    currentDiv.append(card);

    const forecastContents = await this.createForecastList();

    // Render all 16 forecasts
    for (const forecastContent of forecastContents) {
      let currentDiv = document.getElementsByClassName("forecast")[0];
      currentDiv.append(forecastContent);
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == card) {
        card.remove();
      }
    };

    // Get the close button for the card which resides at the top of the card
    const topCloseButton = document.getElementsByClassName("close")[0];
    topCloseButton.onclick = function () {
      card.remove();
    };

    // Get the close button for the card which resides at the bottom of the card
    const bottomCloseButton =
      document.getElementsByClassName("close-button")[0];
    bottomCloseButton.onclick = function () {
      card.remove();
    };
  }

  /**
   * Function to render a list card with information about a destination
   * @param results The results from an api request or local storage data
   * @returns the list element
   */
  async createList(results) {
    let list = document.createElement("div");
    list.setAttribute("class", "list-item");
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
    list.addEventListener("click", () => {
      this.loadDetailedResults();
    });
    return list;
  }

  /**
   * Function to render a card with all the information about a location
   * @param results The results from an api request or local storage data
   * @returns a card element
   */
  async createCard() {
    let test = await this.createForecastList();

    let card = document.createElement("div");
    card.setAttribute("class", "card-item");
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
        <button class="button save-button"><span>Save</span></button>
      </div>
    </div>`;

    return card;
  }

  async createForecastList() {
    const forecastDivs = [];
    const forecasts = this.results.weatherForecast.data;
    for (const forecast of forecasts) {
      // Get the day of the week for the date of forecast
      const date = new Date(forecast.datetime);
      const forecastDate = date.toLocaleDateString(window.navigator.language, {
        weekday: "long",
      });

      const div = document.createElement("div");
      div.setAttribute("class", "forecast-item");
      div.innerHTML = `
        <div class="forecast-info">
          <p>${forecastDate}</p>
          <p>${forecast.temp}</p>
          <p>${forecast.weather.description}</p>
        </div>
        <img src="https://www.weatherbit.io/static/img/icons/${forecast.weather.icon}.png" />`;

      forecastDivs.push(div);
    }

    return forecastDivs;
  }
}

module.exports = UpdateUI;

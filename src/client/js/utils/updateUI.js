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
    let currentDiv = document.getElementsByClassName("main")[0];
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
}

module.exports = UpdateUI;

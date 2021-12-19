class UpdateUIService {
  async updateSearchResults(results) {
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

    // Add card to the main UI
    let currentDiv = document.getElementsByClassName("main")[0];
    currentDiv.appendChild(card);
  }

  async createCard() {}
}

module.exports = UpdateUIService;

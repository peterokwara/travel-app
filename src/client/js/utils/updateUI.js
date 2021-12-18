const handleSearchResults = async () => {};

// Create a list of saved desinations (with min info)

// Create a list of saved desinations (with max info)

// Create a list of destinations from search (with min info)
const createList = () => {
  for (const iterator of object) {
  }
  let list = document.createElement("div");
  list.setAttribute("class", "list-class");
  list.innerHTML = `
  <div class="list-card" id="class">
  <img
    id="card-image"
    src="${destination.image}"
    alt="Avatar"
  />
  <div>
    <h4>${destination.country}</h4>
    <div>
      <p>Architect & Engineer</p>
      <i class="material-icons">${destination.city}</i>
    </div>
  </div>
</div>`;
};

// Create a list of destinations from search (with max info)

export { createList };

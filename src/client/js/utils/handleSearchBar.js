import ServiceFactory from "../factory/ServiceFactory";

/**
 * Handle submit events on the search bar, when someone clicks search on the search bar
 * @param event The event to handle
 */
const handleSearchBar = async (event) => {
  event.preventDefault();

  // Get the loader
  const loader = document.getElementsByClassName("loader")[0];

  let results;

  // Get the search bar
  const searchBar = document.getElementsByClassName("search-text-bar")[0];
  const searchTerm = searchBar.value;

  // Activate loader
  loader.style.display = "block";

  // Fetch information about the destination from the backend api
  const ApiClient = ServiceFactory.get("api-client");
  const city = {
    city: searchTerm,
  };
  results = await ApiClient.fetchDestination(city);

  // Update UI
  const UpdateUI = ServiceFactory.get("update-ui");
  await UpdateUI.loadResults(results);

  // Deactivate loader
  loader.style.display = "none";
};

export { handleSearchBar };

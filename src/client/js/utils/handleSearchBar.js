import ServiceFactory from "../factory/ServiceFactory";

/**
 * Handle submit events on the search bar
 * @param event The event to handle
 */
const handleSearchBar = async (event) => {
  event.preventDefault();

  let results;

  // Get the search bar
  const searchBar = document.getElementsByClassName("search-input")[0];
  const searchTerm = searchBar.value;

  // Fetch information about the destination from the backend api
  const ApiClient = ServiceFactory.get("api-client");
  const city = {
    city: searchTerm,
  };
  results = await ApiClient.fetchDestination(city);

  console.log(results);
};

export { handleSearchBar };

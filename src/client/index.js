import "./styles/styles.scss";
import { handleSearchBar } from "./js/utils/handleSearchBar";
import init from "./js/initServices";

// Initialize all the services
init.initServices();

export { handleSearchBar, init };

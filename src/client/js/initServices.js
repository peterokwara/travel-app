const ServiceFactory = require("./factory/ServiceFactory");
const ApiClient = require("./services/apiClient");
const BrowserStorageService = require("./services/BrowserStorageService");

/**
 * Initialize all the services
 */
initServices = async () => {
  // Register the Browser Storage service
  ServiceFactory.register("api-client", () => new ApiClient());

  // Register the Browser Storage service
  ServiceFactory.register("browser-storage", () => new BrowserStorageService());
};

module.exports = { initServices };

const ServiceFactory = require("./factory/ServiceFactory");
const ApiClient = require("./services/apiClient");
const UpdateUI = require("./utils/updateUI");

/**
 * Initialize all the services
 */
initServices = async () => {
  // Register the Browser Storage service
  ServiceFactory.register("api-client", () => new ApiClient());

  // Register the Update UI Service
  ServiceFactory.register("update-ui", () => new UpdateUI());
};

module.exports = { initServices };

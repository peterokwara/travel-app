/**
 * Class to use local browser storage.
 */
class BrowserStorageService {
  /**
   * The name of the container.
   */
  _container = "";

  /**
   * Create a new instance of LevelStorageService.
   * @param container The container name;
   */
  constructor(container) {
    this._container = container;
  }

  /**
   * Load an item from local storage.
   * @param id The id of the item to load.
   * @returns The item loaded.
   */
  async get(id) {
    let obj;
    if (window.localStorage) {
      try {
        const json = window.localStorage.getItem(`${this._container}/${id}`);

        if (json) {
          obj = JSON.parse(json);
        }
      } catch {
        // Nothing to do
      }
    }

    return obj;
  }

  /**
   * Save an item to local storage.
   * @param id The id of the item to store.
   * @param item The item to store.
   */
  async set(id, item) {
    if (window.localStorage) {
      try {
        const json = JSON.stringify(item);
        window.localStorage.setItem(`${this._container}/${id}`, json);
      } catch {
        // Nothing to do
      }
    }
  }

  /**
   * Remove an item from storage.
   * @param id The id of the item to store.
   */
  async remove(id) {
    if (window.localStorage) {
      try {
        window.localStorage.removeItem(`${this._container}/${id}`);
      } catch {
        // Nothing to do
      }
    }
  }
}

module.exports = BrowserStorageService;

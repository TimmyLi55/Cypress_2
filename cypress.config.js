const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://qamid.tmweb.ru",
    viewportWidth: 1280,
    viewportHeight: 720,
    projectId: "j8ep9i",
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w3y9ef',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

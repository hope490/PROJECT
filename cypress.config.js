const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://demo.seleniumeasy.com/",
    testIsolation:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
 e2e: {
   specPattern: "**/*.feature",
   setupNodeEvents(on, config) {
     on("file:preprocessor", cucumber());
   },
 },
});

/*  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});*/
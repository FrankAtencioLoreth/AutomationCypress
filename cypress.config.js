const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default
const fs = require('fs');

module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {

    baseUrl: "https://automationexercise.com",

    "specPattern": "**/*.feature",

    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber()),
      on('after:run', (results) => {
        if (results) {
          fs.mkdirSync("cypress/.run", { recursive: true });
          fs.writeFile("cypress/.run/results.json", JSON.stringify(results));
        }
      })
    }
  },
  
  env: {

    endpoints: {
      homepage: "/",
      products: "/products",
      authentication: "/login",
      cart: "/cart"
    }

  }
});

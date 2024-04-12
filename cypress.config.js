const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {

    baseUrl: "https://automationexercise.com",

    "specPattern": "**/*.feature",

    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
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

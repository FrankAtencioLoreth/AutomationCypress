const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require('fs');

module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    baseUrl: "https://automationexercise.com",
    specPattern: "**/*.feature",
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videoCompression: false,
    videosFolder: 'cypress/videos',

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      on('after:run', (results) => {
        if (results) {
          fs.mkdirSync("cypress/.run", { recursive: true });
          fs.writeFile("cypress/.run/results.json", JSON.stringify(results));
        }
      });
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          )
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video)
          }
        }
      })
      return config;
    }
  },
  
  env: {

    endpoints: {
      homepage: "/",
      products: "/products",
      productDetail: "product_details",
      authentication: "/login",
      signup: "/signup",
      accountCreated: "/account_created",
      cart: "/cart",
      contactUsForm: "/contact_us"
    }
  }
});

const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
async function setupNodeEvents(on, config) {

  on('file:preprocessor', cucumber())

  return config;
  // implement node event listeners here
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //specPattern:('cypress/pagetest/test.js')
    specPattern:('cypress/integration/*/*.js')
    //specPattern:"cypress/UAT/features/*.feature"
    

    
  },
  // reporter: 'mochawesome',
  //   reporterOptions: {
  //     reportDir: 'cypress/reports/mochawesome-report',
  //     overwrite: false,
  //     html: true,
  //     json: true,
  //     charts: true
  //   }
});

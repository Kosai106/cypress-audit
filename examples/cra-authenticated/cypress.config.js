const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y } = require("@cypress-audit/pa11y");

module.exports = {
  baseUrl: "http://localhost:3000",
  video: false,
  lighthouse: {
    options: {
      formFactor: "desktop",
      screenEmulation: {
        width: 500,
        height: 940,
        deviceScaleRatio: 1,
        mobile: false,
        disable: false,
      },
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });
    },
  },
};

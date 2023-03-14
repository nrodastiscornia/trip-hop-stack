/**
 * @type {import('@remix-run/dev').AppConfig}
 */
// remix.config.js looks a bit different on the MUI example
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  future: {
    v2_routeConvention: true,
  },
};

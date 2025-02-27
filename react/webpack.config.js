const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { merge } = require("webpack-merge");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe",
    projectName: "react",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 8081,
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};

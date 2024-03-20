const path = require("path");

// next.jsのpathで@を使えるようにする

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "../src"),
  };
  return config;
};

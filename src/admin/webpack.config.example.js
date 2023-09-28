"use strict";

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // This is due to tippy.js doesn't have an ES6 module,
  // and a tiptap depencency imports it
  config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(
      /^tippy\.js$/,
      "tippy.js/dist/tippy-bundle.umd.min.js"
    )
  );

  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  return config;
};

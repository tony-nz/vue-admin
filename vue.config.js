const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const webpack = require("webpack");

module.exports = defineConfig({
  // devServer: {
  //   https: true,
  // },
  transpileDependencies: true,
  lintOnSave: false,
  // fix console warning in dev mode
  chainWebpack: (config) => {
    config.resolve.alias.set("vue-i18n", "vue-i18n/dist/vue-i18n.cjs.js");
    config.resolve.symlinks(false);
    config.resolve.alias.set("vue", path.resolve("./node_modules/vue"));
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // Vue CLI is in maintenance mode, and probably won't merge my PR to fix this in their tooling
        // https://github.com/vuejs/vue-cli/pull/7443
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      }),
    ],
  },
});

module.exports = {
  css: {
    modules: true,
    sourceMap: true
  },
  pwa: {
    name: "Beautus S. Gumede",
    themeColor: "#ffa000",
    msTileColor: "#ffa000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "white",
    workboxOptions: {
      exclude: [/\.html$/]
    }
  }
};

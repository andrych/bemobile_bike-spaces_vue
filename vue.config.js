module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "^/api": {
        target: "https://data.stad.gent",
        ws: true,
        changeOrigin: true
      }
    }
  }
};

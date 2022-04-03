const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'innercontainer02',
      filename: 'remoteEntry.js',
      exposes: {
        './InnerContainer02': './src/index',
      },
    }),
  ],
};

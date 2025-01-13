const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  
  remotes: {
    // mfePolicy: 'http://localhost:4201/remoteEntry.js',
    // mfePayment: 'http://localhost:4202/remoteEntry.js',
    mfePolicy: 'https://insurance-app-mfe1.netlify.app/remoteEntry.js',
    mfePayment: 'https://insurance-app-mfe2.netlify.app/remoteEntry.js'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

'use strict';

import merge from 'webpack-merge';

import PATHS from './webpack-paths';
import loaders from './webpack-loaders';

const common = {
  entry: { // The entry file is index.js in /client/src
    app: PATHS.src
  },
  output: { // The output defines where the bundle output gets created
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      loaders.babel, // Transpiler
      loaders.css, // Our bundle will contain the css
      loaders.font, // Load fonts
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // the extensions to resolve
  }
};

let config;
// The switch defines the different configuration as development requires webpack-dev-server
switch (process.env.NODE_ENV) {
case 'build':
  config = merge(
    common,
    { devtool: 'source-map' } // SourceMaps on separate file
  );
  break;
case 'development':
  config = merge(
    common,
    { devtool: 'eval-source-map' }, // Default value
    loaders.devServer({
      host: process.env.host,
      port: 3000
    })
  );
  break;
}

module.exports = config;

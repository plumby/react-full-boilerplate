import nodeExternals from 'webpack-node-externals';
var path = require('path');


export default {
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve(__dirname)
    ],
    alias: {
      api:'src/mockApi',
      actions: 'src/actions',
      components: 'src/components',
      containers: 'src/containers',
      reducers: 'src/reducers',
      sagas:'src/sagas',
      store: 'src/store'
    }
  }
};

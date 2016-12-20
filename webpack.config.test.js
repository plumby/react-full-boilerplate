import nodeExternals from 'webpack-node-externals';
var path = require('path');

console.log(__dirname)

// xexclude: /node_modules/,
// x2exclude: path.resolve(__dirname, 'node_modules/'),


export default {
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [
      // {
      //   test: /\.js$/,
      //   loader: "babel-loader"
      // },
      {
        test: /\.(js|jsx)?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel',
        query: {
          "presets": ["react", "es2015", "stage-0", "react-hmre"],
          "compact" : false
        }
      },
      { test: /\.json?$/,loader: 'json'},
      { test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'},
      { test: /\.2png$/, loader: 'url?prefix=images/&limit=8000&mimetype=image/png' },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: 'url?prefix=images/&limit=8000&mimetype=image/jpeg' },
      { test: /\.woff$/, loader: 'url?prefix=fonts/&limit=8000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file?prefix=fonts/' },
      { test: /\.eot$/, loader: 'file?prefix=fonts/' },
      { test: /\.svg$/, loader: 'raw' },
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
  },
}

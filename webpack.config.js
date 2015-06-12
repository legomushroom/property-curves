var path = require('path');

module.exports = {
  watch: true,
  context: __dirname,
  entry: [
    __dirname + '/app.es6'
  ],
  module: {
    loaders: [
      { test: /\.(jsx|es6)$/, exclude: /node_modules/, loaders: ['6to5-loader?optional=coreAliasing'] },
      { test: /\.coffee$/, exclude: /node_modules/, loaders: ['coffee-loader?bare=true'] },
      { test: /\.cjsx$/, loaders: ['coffee', 'cjsx']},
      { test: /\.jade$/, loaders: ['jade'] },
      { test: /\.styl$/, loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 4 version!stylus-loader?paths=node_modules/' },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.(eot|woff|ttf|svg|png|jpg|wav|mp3)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
        // paths: ['/app/css/i/']
      }
    ]
  },
  output: {
    path:     __dirname + '/dist',
    filename: 'app.js',
    publicPath: 'dist/'
  },
  moduleDirectories: ['node_modules'],
  resolve: {
    // root: path.resolve('app/js/'),
    extensions: [
      '', '.js', '.jsx', '.es6',
      '.styl',   '.jade',
      '.coffee', '.cjsx',
      '.html',
      ]
  }
};

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'eval-source-map',

    context: __dirname,

    entry: {

        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
    },

    resolve: {
      extensions: ['', '.js', '.jsx']
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [

          // React is necessary for the client rendering
          { test: require.resolve('jquery-ujs'), loader: 'imports?jQuery=jquery' },
          { test: require.resolve('jquery'), loader: 'expose?jQuery' },
          { test: require.resolve('jquery'), loader: 'expose?$' },

          // Use one of these to serve jQuery for Bootstrap scripts:
          // Bootstrap 3
          { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },

          // Bootstrap 4
          { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },

            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'react-hot!babel'
            },

            {
                test: /\.css$/,
                loader: 'style!css'
            },

            {
                test: /\.scss$/,
                // include: path.join(__dirname, 'src'),
                loader: 'style!css!sass'
            },

            // Font and images
            { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file' },
            { test: /\.(jpe?g|png|gif|svg|ico)$/, loader: 'url?limit=10000' }
        ]
    }
}

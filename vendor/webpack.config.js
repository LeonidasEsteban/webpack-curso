const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      // Aquí van los loaders
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        },
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
          }
        }
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
          // fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        }),
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
          // fallback: 'style-loader',
          use: ["css-loader", "sass-loader"]
        }),
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
          // fallback: 'style-loader',
          use: ["css-loader", {
            loader: 'less-loader',
            options: {
              noIeCompat: true,
            }
          }]
        }),
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
          // fallback: 'style-loader',
          use: [
            "css-loader",
            {
              loader: 'stylus-loader',
              options: {
                use: [
                  require('nib'),
                  require('rupture')
                ],
                import: [
                  '~nib/lib/nib/index.styl',
                  '~rupture/rupture/index.styl'
                ]
              }
            }
          ]
        }),
      }
    ]
  },
  plugins: [
    // aquí van los plugins
    new ExtractTextPlugin("css/[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    })
  ]
}

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProd = env.mode === "development";
  const isDev = !isProd;

  const filename = (ext) => (isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`);

  const jsLoaders = () => {
    return [
      {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime",
          ],
        },
      },
    ];
  };

  const styleLoaders = () => {
    return [
      isProd
        ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          }
        : "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[name]__[local]--[hash:base64:5]",
          },
        },
      },
    ];
  };

  return {
    entry: "./src/index.js",
    mode: env.mode,
    output: {
      filename: filename("js"),
      path: path.resolve(__dirname, "public"),
      // publicPath: isDev ? "/" : "",
      // publicPath: "requestum",
    },
    resolve: {
      extensions: [".jsx", ".js"],
    },
    devtool: isDev ? "source-map" : false,
    devServer: {
      contentBase: path.join(__dirname, "public"),
      port: 8000,
      compress: true,
      historyApiFallback: true,
      hot: isDev,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({
        template: "./src/assets/templates/index.html",
        minify: {
          removeComments: isProd,
          collapseWhitespace: isProd,
        },
        filename: "index.html",
        favicon: "./src/assets/static/favicon.ico",
      }),
      new MiniCssExtractPlugin({
        filename: filename("css"),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(html)$/i,
          use: {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        },
        {
          test: /\.(s[ca]ss)$/,
          use: [...styleLoaders(), 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          use: jsLoaders(),
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "./assets/images",
              },
            },
          ],
        },
      ],
    },
  };
};

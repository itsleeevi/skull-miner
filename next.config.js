/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\^(?!tailwind.css).(le|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
        },
        {
          loader: "less-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "static/css/[name].css",
        chunkFilename: "static/css/[contenthash].css",
      })
    );

    return config;
  },
};

module.exports = nextConfig;

const path = require("path");
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    },
                },
            },

        ],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        devServer: {
            allowedHosts: 'auto',
            host: '0.0.0.0'
          },
        compress: true,
        port: 9000,
      },
};
const HtmlWebpackClient = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: "./src/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "main.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackClient({
            template: "./src/index.html"
        })
    ]
}
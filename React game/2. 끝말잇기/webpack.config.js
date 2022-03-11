const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
    name: "wordrelay-setting",
    mode: "development", // 실서비스: production
    devtool: "eval",
    // 알아서 entry의 client의 js나 jsx의 파일 찾아준다.
    resolve: {
        extensions: [".js", ".jsx"],
    },

    entry: {
        // WordRelay.jsx는 client.jsx에서 이미 불러오고 있기때문에
        // webpack이 알아서 해준다.
        app: ["./client"],
    }, //입력

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: {
                                    browsers: ["> 1% in KR"], // browserslist
                                },
                                debug: true,
                            },
                        ],
                        "@babel/preset-react",
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "react-refresh/babel",
                    ],
                },
            },
        ],
    },

    plugins: [new RefreshWebpackPlugin()],

    output: {
        // __dirname: 현재 파일
        path: path.join(__dirname, "dist"),
        filename: "app.js",
        // 가상경로
        publicPath: "/dist",
    }, //출력

    devServer: {
        devMiddleware: { publicPath: "/dist" },
        // index.html이 있는 경로
        static: { directory: path.resolve(__dirname) },
        hot: true,
    },
};

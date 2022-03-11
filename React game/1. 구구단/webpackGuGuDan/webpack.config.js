const path = require("path");

module.exports = {
    mode: "development",
    devtool: "eval", // hidden-source-map
    resolve: {
        extensions: [".js", ".jsx"],
    },

    entry: {
        app: "./client",
    },

    //로더
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        // perset(플러그인의 모음)의 설정:preset-env의 안을 설정 ['@babel/preset-env', {설정}]
                        [
                            "@babel/preset-env",
                            {
                                target: {
                                    browsers: ["> 1% in KR"], //browserslist github
                                },
                                debug: true,
                            },
                        ],
                        "@babel/preset-react",
                    ],
                    plugins: ["@babel/plugin-proposal-class-properties"],
                },
            },
        ],
    },

    //추가적인 플러그인
    plugins: [
        // 로더에 모두 debug를 넣어보는것
        // new webpack.LoaderOptionsPlugin({debug: true}),
    ],

    output: {
        filename: "app.js",
        path: path.join(__dirname, "dist"),
    },
};

module.exports = {
    entry: "./src//app.ts",

    output: {
        filename: "app.js"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {test: /\.tsx?$/, loader: "ts-loader"}
        ]
    }
};
const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'App.tsx')
    },

    mode: 'production',
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    output: {
        library: 'ActivateKeyPass',
        libraryTarget: 'umd',
        filename: 'ActivateKeyPass.js',
    },

    externals: {
        react: 'React',
    },

    module: {
        rules: [{
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}
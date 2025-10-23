const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    // tell webpack where the starting point of our application is: index.js inside a folder called src. Which file to use to create dependency graph, resolve modules that one depends on the other --> so we need to build the module that required by the other modules first
    entry: './src/index.js',
    output :{
        path: path.join(__dirname,'/dist'),
        filename: 'bundle.js'
    },
    //inject the bundle file webpack generates into index.html file and we need to create a div with id = root so our component can be loaded
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    //inform webpack the loader that we will be using, specifically we are going to use the babel loader
    //what we pass here will decide how different modules in our project will be treated
    //use babel to transpile all files that ended in .js exclude those in node_modules
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use :{
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    }
}
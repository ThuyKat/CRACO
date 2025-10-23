# CRACO

This tutorial focuses on create react app from scratch with transpiler ( babel) and module bundler. This is to aim at understanding how React config is constructed and able to customize

## STEP 1: Create package.json file and install dependencies

Dependencies required for this project are: 
1. React and ReactDOM: ReactDOM treats html as a document of tree structure and each node represents each part of the document. It also provides method to use at top level of document.
2. "@babel/core" : this is the transpiler. Its task is to convert es5 and es6 to language of browser of old and current versions so that it can understand. This is installed as a dev devpendency
3. Module bundler which is used to load dependencies in correct order. These are dev dependencies:
    - "webpack": takes fe front end assest files and packages them into group of smaller files, dependencies graph, most widely used for react
    - "webpack-cli": interface and set of commands to increase speed when setting up custom webpack project - for instance, provide commands to run webpack
    - "webpack-dev-server": hot reload page when we change the code
4. "babel-loader": this dictates format of different files type, how it should be pre-processed before loaded -for example from sass to css
5. "@babel/preset-react": preset for all react plug-ins, preset es2015 to support es6, preset esReact to support for jsx. 
6. "babel/preset-env": dev dependency allowing us to use the latest js without syntax intepretation, make js bundle smaller 
7. " html-webpack-plugin": add bundled file to index.html file

## STEP 2: Create webpack.config.js

- The purpose of this file is : 
1. Tell webpack where our application starts, which is index.js or wherever our React DOM's root is rendered
2. When we produce our app, which file webpack needs to generate in which folder path. In this app, it's bundle.js file in dist folder of current directory. 
3. Inject the bundle.js file into index.html in which we have div component with id="root"
4. Inform webpack the loader we will be using. We use babel to transpile all files that ended in .js exclude those in node_modules

## STEP 3: Create index.js and index.html file

## STEP 4: Create App.js file

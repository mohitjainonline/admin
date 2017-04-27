const path = require('path');


module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: '',//path.join(__dirname, '/client/dist/js'),
    filename: '/js/app.js',
  },
 devServer: {
      inline: true,
	    host: 'localhost',
      port:8081,//,
	    historyApiFallback: true	  
   },
  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      //include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"]
      }
    },,
		 {
			test: /\.css$/,
			loaders: ['style', 'css']
		 }],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};

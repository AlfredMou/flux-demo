var path = require('path');
var rootPath=path.join(__dirname,'src');

module.exports = {
  entry: {
  	person:"./src/js/page/person.js",
  	index:"./src/js/page/index.js",
  },
  output: {
    path: __dirname + "/build",
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'jsx-loader?harmony?sourceMap'
    },{
      test: /\.css$/, 
      loader: 'style-loader!css-loader'
    },{ 
      test: /\.less$/, loader: 'style-loader!css-loader!less-loader?sourceMap'
    }]
  },
  resolve: {  
    //查找module的话从这里开始查找 
    root: [rootPath], //绝对路径  
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名 
    extensions: ['', '.js', '.json', '.scss'],  
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址 
    alias: {  
      react:"js/lib/react/react.js"
    }
  }
};
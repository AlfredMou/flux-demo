// 引入gulp 及配置参数
var gulp = require('gulp'),
	path = require('path'),
	config=require('./gulpconfig.js'),
	webpackConfig=require('./webpack.config.js');

// 引入gulp组件（插件）
var uglify = require('gulp-uglify'),
  	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	webpack=require('gulp-webpack'),
	react = require('gulp-react'),
    rev = require('gulp-rev'),
    less=require('gulp-less'),
	//- 对文件名加MD5后缀

	revCollector = require('gulp-rev-collector');
	//- 路径替换

//开发模式
gulp.task("develop",function(){
	gulp.watch("src/js/**/*",["js"]);
	gulp.watch("src/less/**/*.less",['less']);
});

gulp.task("js",function(){
	gulp.src('./src/js')
	.pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./src/build'));
});

gulp.task('less',function(){
	console.log('start less');
	gulp.src(['src/less/*.less','src/less/**/*.less'])
	.pipe(less())
	.pipe(gulp.dest('./src/style'))
})

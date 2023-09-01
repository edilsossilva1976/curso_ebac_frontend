const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function comprimeImg(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}


function jsCompressor(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

function compileSass(){
    return gulp.src('./source/styles/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

function TarefaDefault(callback){
    console.log("Tarefa padrão");
    callback();
}


exports.default = function(){
    gulp.watch('./source/styles/*.sass', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(jsCompressor));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImg));
}

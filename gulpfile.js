const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
 
function css(done){
    src('sass/app.scss')
    //.pipe( sass({outputStyle:'expanded'}) )
    .pipe( sass({outputStyle: 'compressed'}) )
    .pipe( postcss([ autoprefixer() ]) )
    .pipe( rename('style.css'))
    .pipe( dest('css') );
    done();
}
 
function dev() {
    watch('sass/**/*.scss', css);
    watch('sass/app.scss', css);
}
 
exports.css     = css;
exports.dev     = dev;
exports.default = series(css, dev);
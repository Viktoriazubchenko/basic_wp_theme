
import pkg from 'gulp';
const { src, dest, watch, series, parallel } = pkg;
import yargs from 'yargs';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass);
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
const PRODUCTION = yargs.argv.prod;
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
import {deleteAsync} from 'del';
import webpack from 'webpack-stream';

export const styles = () => {
  return src('src/scss/bundle.scss')
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest('dist/css'));
}

export const images = () => {
  return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest('dist/images'));
}

export const copy = () => {
  return src(['src/**/*','!src/{images,js,scss}','!src/{images,js,scss}/**/*'])
    .pipe(dest('dist'));
}

export const clean = () => deleteAsync(['dist']);

export const scripts = () => {
  return src('src/js/bundle.js')
  .pipe(webpack({
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: []
            }
          }
        }
      ]
    },
    mode: PRODUCTION ? 'production' : 'development',
    devtool: !PRODUCTION ? 'inline-source-map' : false,
    output: {
      filename: 'bundle.js'
    },
  }))
  .pipe(dest('dist/js'));
}

export const watchForChanges = () => {
  watch('src/scss/**/*.scss', styles);
  watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', images);
  watch(['src/**/*','!src/{images,js,scss}','!src/{images,js,scss}/**/*'], copy);
  watch('src/js/**/*.js', scripts);
}

export const dev = series(clean, parallel(styles, images, copy, scripts), watchForChanges);
export const build = series(clean, parallel(styles, images, copy, scripts));
export default dev;
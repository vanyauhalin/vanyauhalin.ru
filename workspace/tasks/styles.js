import autoprefixer from 'autoprefixer';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import csso from 'postcss-csso';
import imp from 'postcss-import';
import { FS_CONTENT, FS_PATHS } from '../constants/fs';

export default () => (
  gulp.src(FS_CONTENT.SRC_ASSETS_STYLES_INDEX)
    .pipe(postcss([imp, autoprefixer, csso]))
    .pipe(gulp.dest(FS_PATHS.DIST_ASSETS_STYLES))
);

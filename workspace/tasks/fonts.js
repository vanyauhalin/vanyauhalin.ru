import gulp from 'gulp';
import { FS_CONTENT, FS_PATHS } from '../constants/fs';

export const fonts = () => (
  gulp.src(FS_CONTENT.SRC_ASSETS_FONTS)
    .pipe(gulp.dest(FS_PATHS.DIST_ASSETS_FONTS))
);

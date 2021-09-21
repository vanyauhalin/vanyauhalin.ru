import gulp from 'gulp';
import cache from './cache';
import clean from './clean';
import fonts from './fonts';
import styles from './styles';
import watch from './watch';

const assets = gulp.parallel(fonts, styles);

export const serve = gulp.series(
  assets,
  gulp.parallel(watch),
);

export const build = gulp.series(
  assets,
  cache,
  clean,
);

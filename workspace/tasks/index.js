import gulp from 'gulp';
import { cache } from './cache';
import { cleanPrevious, cleanResult } from './clean';
import { eleventyBuild, eleventyServe } from './eleventy';
import { fonts } from './fonts';
import { styles } from './styles';
import { watch } from './watch';

const assets = gulp.parallel(fonts, styles);

export const serve = gulp.series(
  cleanPrevious,
  assets,
  gulp.parallel(watch, eleventyServe),
);

export const build = gulp.series(
  cleanPrevious,
  eleventyBuild,
  assets,
  cache,
  cleanResult,
);

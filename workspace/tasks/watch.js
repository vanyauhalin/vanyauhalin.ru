import gulp from 'gulp';
import { fonts } from './fonts';
import { styles } from './styles';
import { FS_CONTENT } from '../constants/fs';

export const watch = () => {
  [
    [FS_CONTENT.SRC_ASSETS_FONTS, fonts],
    [FS_CONTENT.SRC_ASSETS_DEEP_STYLES, styles],
  ].forEach(([path, task]) => {
    gulp.watch(path, gulp.parallel(task));
  });
};

import gulp from 'gulp';
import fonts from './fonts';
import styles from './styles';
import { FS_DIRS, FS_EXTENSIONS, FS_PATHS } from '../constants/fs';

export default () => {
  [
    [FS_DIRS.FONTS, `.${FS_EXTENSIONS.FONT}`, fonts],
    [FS_DIRS.STYLES, `.${FS_EXTENSIONS.STYLE}`, styles],
  ].forEach(([dir, ext, task]) => {
    gulp.watch(`${FS_PATHS.SRC_ASSETS}/${dir}/**/*${ext}`, gulp.parallel(task));
  });
};

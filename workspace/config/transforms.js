import minifier from 'html-minifier';
import { FS_EXTENSIONS } from '../constants/fs';

export default (config) => (
  config.addTransform('htmlmin', (content, outputPath) => (
    outputPath && outputPath.endsWith(`.${FS_EXTENSIONS.PAGE}`)
      ? minifier.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
      })
      : content
  ))
);

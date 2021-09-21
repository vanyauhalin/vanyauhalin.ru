import sync from './sync';
import transforms from './transforms';
import { FS_DIRS, FS_EXTENSIONS } from '../constants/fs';

export default (config) => {
  transforms(config);
  sync(config);

  return {
    dataTemplateEngine: FS_EXTENSIONS.TEMPLATE_PRIMARY,
    dir: {
      data: FS_DIRS.DATA,
      includes: FS_DIRS.INCLUDES,
      input: FS_DIRS.SRC,
      layouts: FS_DIRS.LAYOUTS,
      output: FS_DIRS.DIST,
    },
    htmlTemplateEngine: FS_EXTENSIONS.TEMPLATE_PRIMARY,
    markdownTemplateEngine: false,
    templateFormats: [
      FS_EXTENSIONS.TEMPLATE_PRIMARY,
    ],
  };
};

import { FS_CONTENT } from '../constants/fs';

export default (config) => (
  config.setBrowserSyncConfig({
    files: [FS_CONTENT.DIST_ASSETS_DEEP_ALL],
    open: false,
  })
);

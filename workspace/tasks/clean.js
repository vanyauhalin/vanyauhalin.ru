import fs from 'fs';
import { FS_CONTENT, FS_DIRS } from '../constants/fs';

export const cleanPrevious = async () => {
  try {
    await fs.promises.access(FS_DIRS.DIST);
    await fs.promises.rm(FS_DIRS.DIST, {
      recursive: true,
    });

    // eslint-disable-next-line no-empty
  } finally {}
};

export const cleanResult = async () => {
  await fs.promises.unlink(FS_CONTENT.DIST_ASSETS_MANIFEST);
};

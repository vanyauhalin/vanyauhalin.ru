import fs from 'fs';
import { FS_CONTENT, FS_DIRS } from '../constants/fs';

export default async () => {
  await Promise.all([
    FS_CONTENT.ASSETS_MANIFEST,
  ].map(async (path) => {
    await fs.promises.unlink(`${process.cwd()}/${FS_DIRS.DIST}/${path}`);
  }));
};

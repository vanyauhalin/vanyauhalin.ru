import { spawn } from 'child_process';
import { FS_COMMANDS, FS_FLAGS, FS_PATHS } from '../constants/fs';

const options = {
  shell: true,
  stdio: 'inherit',
};

export const eleventyServe = () => (
  spawn(FS_COMMANDS.ESM, [FS_PATHS.ELEVENTY, FS_FLAGS.ELEVENTY_SERVE], options)
);

export const eleventyBuild = () => (
  spawn(FS_COMMANDS.ESM, [FS_PATHS.ELEVENTY], options)
);

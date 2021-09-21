import fs from 'fs';
import gulp from 'gulp';
import rev from 'gulp-rev';
import rewrite from 'gulp-rev-rewrite';
import through2 from 'through2';
import {
  FS_CONTENT,
  FS_DIRS,
  FS_FILES,
  FS_PATHS,
} from '../constants/fs';

const hash = () => (
  gulp.src(FS_CONTENT.DIST_ASSETS_DEEP_ALL, {
    base: FS_DIRS.DIST,
  })
    .pipe((() => through2.obj(async (chunk, end, cb) => {
      await fs.promises.unlink(chunk.path);
      cb(null, chunk);
    }))())
    .pipe(rev())
    .pipe(gulp.dest(FS_DIRS.DIST))
    .pipe(rev.manifest(FS_FILES.MANIFEST))
    .pipe(gulp.dest(FS_PATHS.DIST_ASSETS))
);

const replace = async () => {
  const result = await fs.promises.readFile(
    `${process.cwd()}/${FS_CONTENT.DIST_ASSETS_MANIFEST}`,
  );
  const manifest = JSON.stringify(JSON.parse(result));

  return (
    gulp.src(FS_CONTENT.DIST_DEEP_PAGES)
      .pipe(rewrite({ manifest }))
      .pipe(gulp.dest(FS_DIRS.DIST))
  );
};

export default gulp.series(hash, replace);

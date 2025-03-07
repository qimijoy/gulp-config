import gulp from 'gulp';
import paths from '../paths.js';
import config from '../configs.js';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gulpif from 'gulp-if';

export default () => {
	// All images except svg
	return (
		gulp
			.src(paths.src.images, {
				encoding: false,
			})
			.pipe(
				plumber({
					errorHandler: notify.onError((error) => ({ title: 'IMAGES', message: error.message })),
				}),
			)
			.pipe(newer(paths.build.images))
			.pipe(webp())
			.pipe(gulpif(config.isProduction, imagemin(config.imagemin)))
			.pipe(gulp.dest(paths.build.images))

			// Only compress SVG
			.pipe(gulp.src(paths.src.svg))
			.pipe(gulpif(config.isProduction, imagemin(config.imagemin)))
			.pipe(gulp.dest(paths.build.images))
	);
};

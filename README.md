# gulp-config

## Description

This is my personal gulp-configuration for development in order to quickly start build and creating a project.

## Project Setup

```sh
npm ci
```

## Commands

``npm run dev`` - start Gulp with dev-server and watching

``npm run build`` - build project with minified files

``npm run deploy`` - build project and deploy to GitHub Pages

## Project structure requirements
This Gulp configuration is intended for the following project file structure:

```
project
├── gulp-utils
│  └── ...
├── src
│  └── assets
│     └── fonts
│     └── images
│  └── data
│  └── scripts
│  └── styles
│  └── templates
│  └── index.html
├── .browserslistrc
├── babel.config.js
├── gulpfile.babel.js
└── package.json
```

## Paths
In `gulp-utils/paths.js` you should specify paths to assets files of your project.

## Plugins configuration
In `gulp-utils/config.js` you should specify plugin configuration from their documentation.


## Gulp tasks
### clean
Remove dist folder before starting dev-server or build.

### html
1. `plumber` - for error notification & resuming pipeline if error occurs
2. `include` - html-files to serve, allow to include one html-file into another
3. `size` - log sizes of html-files before and after minification
4. `htmlmin` - minification of html-files

### styles
1. `plumber` - for error notification & resuming pipeline if error occurs
2. `size` - log sizes of css-files before and after minification
3. `less` - for less-files handling
4. `autoprefixer` - adding vendor-prefixes if needed
5. `groupCssMediaQueries` - grouping CSS media-queries for better readability
6. `concat` - join css files into one file
7. `rename` - make new minified version of CSS-files
8. `cleanCSS` - minification of CSS-files

### scripts
1. `plumber` - for error notification & resuming pipeline if error occurs
2. `size` - log sizes of js-files before and after minification
3. `babel` - transpilation with Babel
4. `webpack` - minification & creating sourcemaps with help of webpack
5. `concat` - join js files into one file

### fonts
1. `plumber` - for error notification & resuming pipeline if error occurs
2. `newer` - processing only new fonts
3. `ttf2woff2` - ttf to woff2 fonts transformation

### images
1. `plumber` - for error notification & resuming pipeline if error occurs
2. `newer` - processing only new images
3. `webp` - convert images to webp-format
4. `gulpif + imagemin` - images are minified in production mode

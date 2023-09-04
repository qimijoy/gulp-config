# gulp-config
This is my personal gulp-configuration for development in order to quickly start build and creating a project.

Commands: 

``npm run serve`` - Start Gulp with dev-server and watching

``npm run build`` - Build project with minified files

``npm run deploy`` - Build project and deploy to GitHub Pages

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

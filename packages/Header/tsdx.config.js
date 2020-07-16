const url = require('@rollup/plugin-url');
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('rollup-plugin-postcss')
const path = require('path');

module.exports = {
  output: {
    dir: 'output',
    format: 'cjs'
  },
  rollup(config, options) {
    config.plugins = [
      url({
        limit: 10 * 1024,
        include: ['**/*.png', '**/*.jpg'],
        fileName: '[dirname][hash][extname]',
        sourceDir: path.join(__dirname, 'src'),
        destDir: path.join(__dirname, 'assets')
      }),
      // typescript({lib: ["es5", "es6", "dom"], target: "es5"}),
      postcss({
        preprocessor: (content, id) => new Promise((resolve, reject) => {
          const result = sass.renderSync({ file: id })
          resolve({ code: result.css.toString() })
        }),
        plugins: [
          autoprefixer
        ],
        sourceMap: true,
        extract: true,
        extensions: ['.scss', '.css']
      }),
      ...config.plugins,
    ];

    return config;
  },
};

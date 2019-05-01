module.exports = {
  presets: [
    [require('@babel/preset-env'), {
      targets: {
        browsers: ['safari >= 10'],
      },
    }],
  ],
  plugins: [
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-transform-regenerator'),
    require('@babel/plugin-transform-async-to-generator'),
    // require('@babel/plugin-transform-arrow-functions'),
    // require('@babel/plugin-transform-runtime'),
    // [require('babel-plugin-module-resolver'), {
    //   'root': ['./static/js/common'],
    //   'alias': {
    //     'common': ([, path]) => `./static/js/common${path}`,
    //   },
    // }, 'resolve-common'],
    // [require('babel-plugin-module-resolver'), {
    //   'root': ['./static/js/components'],
    //   'alias': {
    //     'components': ([, path]) => `./static/js/components${path}`,
    //   },
    // }, 'resolve-components'],
    // [require('babel-plugin-module-resolver'), {
    //   'root': ['./static/js'],
    //   'alias': {
    //     'js': ([, path]) => `./static/js${path}`,
    //   },
    // }, 'resolve-static'],
  ],
}

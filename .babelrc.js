module.exports = {
  presets: [
    [require('@babel/preset-env'), {
      targets: {
        browsers: ['safari >= 10'],
      },
    }],
    require('@babel/preset-react'),
  ],
  plugins: [
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-transform-regenerator'),
    require('@babel/plugin-transform-async-to-generator'),
    [require('babel-plugin-module-resolver'), {
      'root': ['./stories'],
      'alias': {
        'stories': ([, path]) => `./stories${path}`,
      },
    }, 'resolve-common'],
  ],
}

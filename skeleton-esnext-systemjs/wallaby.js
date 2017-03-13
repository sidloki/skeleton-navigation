/* eslint-disable no-var, no-shadow, dot-notation */

module.exports = function(wallaby) {
  return {
    files: [

      {pattern: 'node_modules/systemjs/dist/system.js', instrument: false},
      {pattern: 'systemjs.config.js', instrument: false},

      {pattern: 'src/**/*.js', load: false},
      {pattern: 'test/unit/setup.js', load: false}

    ],

    tests: [
      {pattern: 'test/unit/**/*.spec.js', load: false}
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: [ 'es2015-loose', 'stage-1'],
        plugins: [
          'syntax-flow',
          'transform-decorators-legacy',
          'transform-flow-strip-types'
        ]
      })
    },

    middleware: (app, express) => {
      app.use('/node_modules', express.static(require('path').join(__dirname, 'node_modules')));
    },

    bootstrap: function(wallaby) {
      var promises = [];
      var i = 0;
      var len = wallaby.tests.length;

      wallaby.delayStart();

      System.config({
        paths: {
          '*': '*.js'
        }
      });
      for (; i < len; i++) {
        promises.push(System['import'](wallaby.tests[i].replace(/\.js$/, '')));
      }

      System.import('test/unit/setup')
        .then(function () {
          return Promise.all(promises);
        })
        .then(function() {
          wallaby.start();
        }).catch(function (e) { setTimeout(function (){ throw e; }, 0); });
    },

    debug: false
  };
};

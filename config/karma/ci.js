const path = require('path');

export default config => {
  const single = require('./single').default(config);

  config.set({
    ...single,
    reporters: [...single.reporters, 'coverage'],
    plugins: [...single.plugins, 'karma-coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'lcov', subdir: '.', file: 'lcov.info' },
      ],
    },
    webpack: {
      ...single.webpack,
      isparta: {
        embedSource: true,
        noAutoWrap: true,
      },
      module: {
        ...single.webpack.module,
        preLoaders: [
          ...single.webpack.module.preLoaders,
          // transpile and instrument testing files with isparta
          {
            test: /\.js$/,
            include: path.resolve('src/js/'),
            exclude: /test.js$/,
            loader: 'isparta',
          },
        ],
      },
    },
  });

  return config;
};

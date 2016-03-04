export default config => {
  const base = require('./_base').default(config);

  config.set({
    ...base,
    autoWatch: true,
    singleRun: false,
    reporters: ['mocha'],
    mochaReporter: {
      output: 'autowatch',
      showDiff: true,
    },
  });

  return config;
};

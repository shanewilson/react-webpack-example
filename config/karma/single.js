export default config => {
  const base = require('./_base').default(config);

  config.set({
    ...base,
    autoWatch: false,
    singleRun: true,
    reporters: ['progress'],
  });

  return config;
};

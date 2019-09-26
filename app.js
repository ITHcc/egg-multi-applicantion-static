'use strict';

module.exports = app => {
  const index = app.config.coreMiddleware.indexOf('bodyParser');
  /* istanbul ignore next */
  if (index === -1) {
    app.config.coreMiddleware.push('multiApplicationStatic');
  } else {
    app.config.coreMiddleware.splice(index, 0, 'multiApplicationStatic');
  }
};

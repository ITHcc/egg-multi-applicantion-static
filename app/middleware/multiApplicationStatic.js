'use strict';
const compose = require('koa-compose');
const serveStatic = require('koa-static');
module.exports = (options, app) => {

  function staticMiddlWare(ctx, next) {
    if (!options) {
      console.warning('plugin multiApplicationStatic options not defined');
      return next();
    }
    if (!options.length) {
      console.warning('plugin multiApplicationStatic options is empty object');
      return next();
    }
    const host = ctx.host.toLowerCase();
    const application = app.config.multiApplicationStatic;
    for (let i = 0; i < application.length; i++) {
      const isMatch = host.startsWith(application[i].prefix);
      if (isMatch) {
        // merge options
        const options = Object.assign({}, application[i].options);
        const middleware = serveStatic(application[i].dir, options);

        return middleware(ctx, next);
      }
    }
    return next();
  }
  const middlewares = [ staticMiddlWare ];
  return compose(middlewares);
};

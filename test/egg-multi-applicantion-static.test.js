'use strict';

const mock = require('egg-mock');

describe('test/egg-multi-applicantion-static.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-multi-applicantion-static-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggMultiApplicantionStatic')
      .expect(200);
  });
});

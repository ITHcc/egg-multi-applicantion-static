# egg-egg-multi-applicantion-static

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-egg-multi-applicantion-static.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-egg-multi-applicantion-static
[travis-image]: https://img.shields.io/travis/eggjs/egg-egg-multi-applicantion-static.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-egg-multi-applicantion-static
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-egg-multi-applicantion-static.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-egg-multi-applicantion-static?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-egg-multi-applicantion-static.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-egg-multi-applicantion-static
[snyk-image]: https://snyk.io/test/npm/egg-egg-multi-applicantion-static/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-egg-multi-applicantion-static
[download-image]: https://img.shields.io/npm/dm/egg-egg-multi-applicantion-static.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-egg-multi-applicantion-static

<!--
Description here.
-->

## Install

```bash
$ npm i egg-egg-multi-applicantion-static --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.multiApplicantionStatic = {
  enable: true,
  package: 'egg-multi-applicantion-static',
};
```

## Configuration

```js
/**
   * 多应用静态资源入口配置
   *
   * @param {string} prefix 二级域名 (根据域名来区分)
   * @param {string} dir 静态资源路径
   * @param {object} options
   * @see https://github.com/koajs/static#readme
   */
  config.multiApplicationStatic = [
    {
      prefix: 'idm',
      dir: path.join(appInfo.baseDir, 'app/static/idm'),
      options: {},
    },
    {
      prefix: 'draft',
      dir: path.join(appInfo.baseDir, 'app/static/draft'),
      options: {},
    },
  ];
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

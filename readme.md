# be-of-type

[![build status](http://img.shields.io/travis/chiefbiiko/be-of-type.svg?style=flat)](http://travis-ci.org/chiefbiiko/be-of-type) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/be-of-type?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/be-of-type)

Basic type assertions.

***

## Get it

```js
npm install --save be-of-type
```

***

## Usage

Most useful as a set of building blocks for setting up narrow and targeted type assertions.

```js
const be = require('be-of-type')
const is = {
  bool: be.boolean,
  buffer: be.buffer,
  nonEmptyStringArray: x => be.array(x) && x.length && x.every(be.string),
  pojo: be.plainObject,
  uInt: x => be.number(x) && x >= 0 && x % 1 === 0
}

/*...*/
```

## License

[MIT](./license.md)
# is-set [![Build Status](https://travis-ci.org/arthurvr/is-set.svg?branch=master)](https://travis-ci.org/arthurvr/is-set)

> Node module to easily check if an object is [an ES6 `Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

## Installation

```
$ npm install --save is-set
```

## Usage

```javascript
var isSet = require('is-set');

isSet(new Set());
//=> true

isSet({});
//=> false
```

## License

MIT © Arthur Verschaeve

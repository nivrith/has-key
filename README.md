# has-key

[![CircleCI](https://circleci.com/gh/nivrith/has-key/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/has-key/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/has-key.svg)](https://www.npmjs.com/package/has-key)
[![node](https://img.shields.io/node/v/has-key.svg)](https://www.npmjs.com/package/has-key)
[![License MIT](https://img.shields.io/github/license/nivrith/has-key.svg)](https://github.com/nivrith/has-key/blob/master/LICENSE)

Check if Object has Property, super fast

## Highlights

- Super Fast

- Written in Typescript

## Usage

> Get an array of common unique values that are included in all given arrays

```js

import hasKey from 'has-key';

const greet = {
  hello: 'world',
  bonjour: 'le monde'
  };

hasKey(greet, 'hello'); // true
hasKey(greet, 'bye'); // false

```

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)

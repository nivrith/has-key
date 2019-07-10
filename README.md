# key-exists

[![CircleCI](https://circleci.com/gh/nivrith/key-exists/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/key-exists/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/key-exists.svg)](https://www.npmjs.com/package/key-exists)
[![node](https://img.shields.io/node/v/key-exists.svg)](https://www.npmjs.com/package/key-exists)
[![License MIT](https://img.shields.io/github/license/nivrith/key-exists.svg)](https://github.com/nivrith/key-exists/blob/master/LICENSE)

Check if Object has Property, super fast

## Highlights

- Super Fast

- Written in Typescript

## Usage

```js

import keyExists from 'key-exists';

const greet = {
  hello: 'world',
  bonjour: 'le monde'
  };

keyExists(greet, 'hello'); // true
keyExists(greet, 'bye'); // false

```

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)

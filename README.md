# handlebars-pluralize

Handlebars helper for pluralizing any words in any language.

## Installation

```
npm i handlebars-pluralize --save
```

## Usage

Use `pluralize` helper for pluralization. There are three reserved keys for determining phrases:
*   one — 1, 21, 101 etc.
*   few — 2, 3, 4, 22, 102 etc.
*   many — 5, 6, 7, 25, 105 etc.

Also you can provide explicit rule for value. See the example below.

```javascript
const hbs = require("handlebars");
const pluralize = require("handlebars-pluralize");
hbs.registerHelper("pluralize", pluralize);
const template = hbs.compile("I want {{pluralize beers one='# beer' 2='two beers' few='# beers' many='# beers'}}");

let str = template({ beers: 1 });
// "I want 1 beer"

str = template({ beers: 2 });
// "I want two beers"

str = template({ beers: 5 });
// "I want 5 beers"
```

## Tests
```
npm install
npm test
```

## Dev Dependencies
*   [handlebars](https://www.npmjs.com/package/handlebars)
*   [mocha](https://www.npmjs.com/package/mocha)

## License
MIT

## Contributors
*   [ivahaev](https://github.com/ivahaev)
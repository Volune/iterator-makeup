# iterator-makeup

[![Build Status](https://travis-ci.org/Volune/iterator-makeup.svg?branch=master)](https://travis-ci.org/Volune/iterator-makeup)

"iterator-makeup" is a javascript library providing utility functions to work with iterators.

"iterator-makeup" is made to be efficiently used with the new [function bind syntax](https://github.com/zenparsing/es-function-bind) (This is still a proposal).

## Examples

```
anArray::valuesRight()::filter(Boolean)::map(item => item.name)::toArray()
```

## TODO

- Generate distribuable files
- Documentation (and find some good doc generator)
- Missing tests
- Iterable mirroring without buffer
- More tests in non-ES6 environments with missing polyfills
- Any missing useful functions
- Check compatibility for conversion to streams (Node streams, RxJS)

## License

See the LICENSE file.

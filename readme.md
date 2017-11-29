# Berries

![alt tag](https://raw.githubusercontent.com/sterjakovigor/berries/master/logo.jpg)

### how to install

```bash
npm i berries
```

### how to use

```javascript
const B = require('berries')

const items = B.flatten([1,[2,3,[4]],5])
// => [1,2,3,4,5]
```

[More examples here](https://github.com/sterjakovigor/berries/tree/master/lib/__tests)

### utils

- asyncMap
- capitalize
- uncapitalize
- classNames
- clone
- compose
- findRightIndex
- first
- flatten
- htmlQuotes
- include
- intersect
- kindOf
- last
- nth
- omit
- pick
- range
- times
- union
- move

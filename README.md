[![CircleCI](https://circleci.com/gh/sepalang/lintpad/tree/master.svg?style=shield)](https://circleci.com/gh/sepalang/lintpad/tree/master)
[![Greenkeeper badge](https://badges.greenkeeper.io/sepalang/lintpad.svg)](https://greenkeeper.io/)

# Lintpad
run lint quickly

## install
```js
// project
npm i --save-dev lintpad

// global
npm i -g lintpad
```

## run
### basic
```
// lint
lintpad src/path

// lint auto fix
lintpad src/path --fix
```

### mode
- semi : app, web
- no-semi : node, lib
```
lintpad src/path --mode lib
lintpad src/path -m lib
```

### multi path
```
lintpad 'src/path/one src/path/two'
lintpad 'src/path/one, src/path/two'
```

### filter
```

lintpad src/path --filter lib
lintpad src/path -f lib
```

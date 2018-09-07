[![CircleCI](https://circleci.com/gh/sepalang/lintpad/tree/master.svg?style=shield)](https://circleci.com/gh/sepalang/lintpad/tree/master)

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
```
// remove semicolone mode
lintpad src/path --mode lib
lintpad src/path -m lib
```

### filter
```

lintpad src/path --filter lib
lintpad src/path -f lib
```
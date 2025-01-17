---
title: JavaScript 字符串方法 split()
description: 思维误区
duration: "1min"
date: "2025-01-16"
---

在处理文本过程中，碰到了一个理解不深的问题，就是如何将字符串分割成数组。在查阅了相关资料后，发现了 JavaScript 中的 split() 方法，它可以将字符串分割成数组，非常方便。

与此同时犯了一个错误，那就是如果在字符串中，没有找到分隔符的返回值是什么，相当然的理解成了返回一个空数组，但是实际上是返回一个包含原字符串的数组。

- 能找到分隔符的例子
```javascript
const str = 'hello world';
const arr = str.split(' ');
console.log(arr); // ['hello', 'world']
```

- 找不到分隔符的例子
```javascript
const str = '';
const arr = str.split(' ');
console.log(arr); // 返回的值 ['']，而不是 []
```

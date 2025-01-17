---
title: scrollIntoView() 兼容性问题
description: 浏览器兼容性
duration: "1min"
date: "2024-11-10"
---

排查一个滚动导致页面内容偏移的问题，最终发现 `scrollIntoView` 方法存在兼容性问题， 导致了内容偏移

```typescript
const taskEl = document.getElementById('taskBox')
taskEl?.scrollIntoView({
  behavior: 'smooth', // 平滑滚动
  block: 'end', // 垂直方向的对齐方式
})
// 火狐不兼容 inline 这个属性
// inline: 'start', // 水平方向的对齐方式
// 不加 requestAnimationFrame 滚动不了

// 完整代码
requestAnimationFrame(() => {
  const taskEl = document.getElementById('taskBox')
  taskEl?.scrollIntoView({
    behavior: 'smooth', // 平滑滚动
    block: 'end', // 垂直方向的对齐方式
  })
})
```

[参考](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#specifications)

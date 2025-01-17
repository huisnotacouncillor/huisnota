---
title: 光标 cursor 设置之后不生效的问题
description: CSS
duration: "1min"
date: "2024-11-20"
---

以下代码，光标的手势是不生效的

```css
.element {
  cursor: not-allowed; /* 写成其它的值，也是不生效的 */
  pointer-events: none;
}
```

### 解决办法

- 去除  pointer-events: none;

```css
.element {
  cursor: not-allowed; /* 写成其它的值，也是不生效的 */
  /* pointer-events: none; */
}
```

- 套一层 div

```css
.wrap {
  cursor: not-allowed;
}
.element {
  cursor: not-allowed; /* 写成其它的值，也是不生效的 */
  pointer-events: none;
}
```

**错误示例**

使用 !important (虽然看着好像很正确，但不生效)

```css
.element {
  cursor: not-allowed !important; /* 不生效 */
  pointer-events: none;
}
```

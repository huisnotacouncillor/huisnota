---
title: 深入理解 `z-index` 及其生效条件
description: CSS z-index
duration: "2min"
date: "2025-02-07"
---

### 深入理解 `z-index` 及其生效条件

`z-index` 是 CSS 中用于控制元素堆叠顺序的属性。它决定了元素在垂直于屏幕方向（Z 轴）上的显示顺序。然而，`z-index` 的生效条件较为复杂，涉及堆叠上下文、定位属性以及 HTML 结构等因素。本文将对 `z-index` 的核心概念和生效条件进行总结。

---

## 1. **`z-index` 的基本概念**
- **作用**：控制元素在 Z 轴上的堆叠顺序，值越大，元素越靠前。
- **默认值**：`auto`，表示元素不会创建新的堆叠上下文，堆叠顺序由文档流决定。
- **取值范围**：整数（正数、负数或 0）。

---

## 2. **`z-index` 的生效条件**
`z-index` 仅在以下条件下生效：

### 2.1 **定位属性**
- `z-index` 只在元素的 `position` 属性为 `relative`、`absolute`、`fixed` 或 `sticky` 时生效。
- 默认的 `position: static` 不会使 `z-index` 生效。

  ```css
  .element {
      position: relative; /* 或其他非 static 值 */
      z-index: 10;
  }
  ```

---

### 2.2 **堆叠上下文（Stacking Context）**
- `z-index` 只在同一个堆叠上下文中比较。
- 堆叠上下文是一个独立的层级环境，内部的 `z-index` 值只在该环境中比较。
- 以下情况会创建新的堆叠上下文：
  - 元素的 `position` 为非 `static`，且 `z-index` 不为 `auto`。
  - 元素的 `opacity` 小于 1。
  - 元素使用了 `transform`、`filter`、`will-change` 等属性。

  ```css
  .parent {
      position: relative;
      z-index: 1; /* 创建新的堆叠上下文 */
  }
  .child {
      position: absolute;
      z-index: 10; /* 只在父元素的堆叠上下文中生效 */
  }
  ```

---

### 2.3 **父级堆叠上下文**
- 子元素的 `z-index` 受限于父元素的堆叠上下文。
- 如果两个元素属于不同的堆叠上下文，它们的 `z-index` 值不会直接比较，而是由父级堆叠上下文的 `z-index` 决定显示顺序。

  ```html
  <div style="position: relative; z-index: 1;">
      <div style="position: absolute; z-index: 100; background: red;"></div>
  </div>
  <div style="position: relative; z-index: 2;">
      <div style="position: absolute; z-index: 5; background: blue;"></div>
  </div>
  ```
  - 蓝色方块会覆盖红色方块，因为父级堆叠上下文的 `z-index: 2 > 1`。

---

### 2.4 **HTML 结构**
- 如果两个元素都没有设置 `position`（即 `position: static`），`z-index` 不会生效。
- 此时，后面的元素会覆盖前面的元素（遵循 HTML 的默认堆叠规则）。

  ```html
  <div style="z-index: 10; background: red;"></div>
  <div style="z-index: 5; background: blue;"></div>
  ```
  - 蓝色方块会覆盖红色方块，因为 `z-index` 未生效。

---

## 3. **`z-index` 的默认值与特殊值**
- **`z-index: auto`**：
  - 默认值，元素不会创建新的堆叠上下文。
  - 堆叠顺序由文档流决定。
- **`z-index: 0`**：
  - 元素会创建新的堆叠上下文。
  - 影响子元素的堆叠顺序。

---

## 4. **常见问题与解决方案**

### 4.1 **`z-index` 不生效**
- **原因**：
  - 元素未设置 `position` 为非 `static`。
  - 父级堆叠上下文的 `z-index` 限制了子元素的堆叠顺序。
- **解决方案**：
  - 确保元素设置了 `position` 为非 `static`。
  - 检查父级堆叠上下文的 `z-index`。

---

### 4.2 **跨堆叠上下文的 `z-index` 比较**
- **原因**：
  - 两个元素属于不同的堆叠上下文，`z-index` 值不会直接比较。
- **解决方案**：
  - 确保需要比较的元素在同一个堆叠上下文中。
  - 调整父级堆叠上下文的 `z-index`。

---

### 4.3 **`z-index` 值过大导致混乱**
- **原因**：
  - 随意设置过大的 `z-index` 值（如 `9999`），导致后续维护困难。
- **解决方案**：
  - 使用合理的 `z-index` 值，避免过度依赖高值。
  - 采用分层管理（如基础层、内容层、弹窗层等）。

---

## 5. **总结**
- `z-index` 仅在设置了非 `static` 的 `position` 时生效。
- 堆叠上下文是 `z-index` 生效的核心机制，子元素的 `z-index` 受限于父级堆叠上下文。
- 默认值 `z-index: auto` 不会创建新的堆叠上下文，而 `z-index: 0` 会创建。
- 在实际开发中，应合理规划 `z-index` 的使用，避免堆叠顺序混乱。

通过理解 `z-index` 的生效条件和堆叠上下文机制，可以更好地控制元素的显示顺序，避免常见的布局问题。

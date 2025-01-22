---
title: 中文输入法和回车键兼容性问题
description: 输入法兼容性
duration: "1min"
date: "2025-01-22"
---

在处理中文输入法时，按下回车键会遇到一个常见的兼容性问题：在输入法组合状态下，回车键触发的 `keydown` 事件可能会导致发送请求的逻辑提前执行，与预期不符。

### 问题背景

在不同浏览器中，中文输入法的回车键行为表现不一：
- Chrome: 输入法组合状态下会触发 `keydown` 事件
- Firefox: 输入法组合状态下不会触发 `keydown` 事件
- Safari: 输入法组合状态下会触发 `keydown` 事件

为了解决这个问题，我们需要用到以下两个关键事件：
- compositionstart: 输入法组合输入开始
- compositionend: 输入法组合输入结束

### 解决方案演进过程：
#### 方案一：基础版本
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>输入框处理</title>
  </head>
  <body>
    <input id="input-box" type="text" placeholder="请输入内容后按回车..." />
    <script>
      const inputBox = document.getElementById("input-box");
      let isComposing = false; // 用于标识是否为输入法组合状态

      // 监听输入法的组合开始
      inputBox.addEventListener("compositionstart", () => {
        isComposing = true; // 标记输入法组合状态
      });

      // 监听输入法的组合结束
      inputBox.addEventListener("compositionend", (event) => {
        isComposing = false; // 输入法组合结束状态
        console.log("输入法确认后的内容:", event.target.value);
      });

      // 监听按键事件
      inputBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          if (!isComposing) {
            // 输入法状态结束后才能发送请求
            console.log("发送请求，输入内容：", inputBox.value);
            // 执行发送请求的逻辑，比如调用 API
            // sendRequest(inputBox.value);
          } else {
            console.log("正在输入法组合状态中，回车未发送请求");
          }
        }
      });
    </script>
  </body>
</html>
```

**存在问题**：
在 Safari 浏览器中，即使在输入法组合状态下，回车键仍会触发 `keydown` 事件，导致请求逻辑提前执行。

#### 方案二：优化版本
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Safari Composition Fix</title>
  </head>
  <body>
    <input id="input-box" type="text" placeholder="输入内容后按回车发送请求..." />
    <script>
      const inputBox = document.getElementById("input-box");

      let isComposing = false; // 是否处于输入法组合状态
      let compositionEndTime = 0; // 存储 `compositionend` 的时间

      inputBox.addEventListener("compositionstart", () => {
        isComposing = true;
      });

      inputBox.addEventListener("compositionend", (event) => {
        isComposing = false;
        compositionEndTime = Date.now(); // 记录组合输入结束的时间
        console.log("组合输入完成，当前值:", event.target.value);
      });

      inputBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const now = Date.now();

          // 如果处于组合输入中，直接跳过
          if (isComposing) {
            console.log("输入法组合中，跳过");
            return;
          }

          // 判断是否刚刚结束组合输入
          console.log("当前时间:", now, "组合结束时间:", compositionEndTime);
          if (now - compositionEndTime < 50) {
            console.log("刚结束组合输入，跳过触发逻辑");
            return;
          }

          // 处理发送请求的逻辑
          console.log("发送请求，输入内容:", inputBox.value);
        }
      });
    </script>
  </body>
</html>
```

**改进点**：
1. 引入时间戳记录组合输入结束时间
2. 增加时间间隔判断，避免组合输入刚结束时的误触发
3. 通过以上改进，成功解决了 Safari 浏览器的兼容性问题

这个优化版本在各主流浏览器中都能正常工作，有效处理了中文输入法的回车键兼容性问题。

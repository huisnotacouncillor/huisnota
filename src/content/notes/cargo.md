---
title: "Cargo"
description: Rust package manager and build system
duration: "3min"
date: "2025-01-15"
---

Cargo 是 Rust 的构建系统和包管理器。大多数 Rustacean 都会使用 Cargo 来构建他们的项目，因为它可以自动处理很多细节，让你可以专注于写代码。

### Cargo 有很多功能，比如：

- 创建项目

```bash
cargo new project_name
```

- 编译和运行生成的可执行文件

```bash
cargo run
```

- 构建和运行项目

```bash
cargo build
```

- 构建发布版本

```bash
cargo build --release
```

- 检查代码,确保可编译

```bash
cargo check
```

- 查看 cargo 版本

```bash
cargo --version
```

- 生成文档

```bash
cargo doc
```

### Cargo 生成的 Cargo.toml 文件

```toml
[package]
name = "hello_cargo"
version = "0.1.0"
edition = "2021"

[dependencies]
rand = "0.8.5"
```

`[package]` 部分是当前项目的一些信息,例如项目的 `name`, 项目的 `version`, 项目的编译器版本 `edition`

#### `edition`
目前可用的版本有 `2015`, `2018`, `2021` 和 `2024`

如果你不指定 `edition` 的话, Rust 会出于后向兼容而使用 `2015` 版本

所有的 Rust 编译器可以支持在该编译器发布之前存在的任何版本的 `edition`

`dependencies` 部分是当前项目的依赖

`rand` 是一个随机数生成库, `0.8.5` 是该库的版本的缩写 `^0.8.5`, 最低版本是 `0.8.5`，低于 `0.9.0`。`0.8.5` 也被称作版本说明符

### 其他用法

- 查看 Cargo 命令列表

```bash
cargo --list
```

- 查看 Cargo 命令帮助

```bash
cargo --help
cargo help <command>
```

- 更新依赖

```bash
cargo update
```

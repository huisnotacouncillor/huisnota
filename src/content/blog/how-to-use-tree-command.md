---
title: "The tree command usage"
description: Use tree command to quickly get the project folder and file relation
duration: "12min"
date: "2024-05-08"
---

## Background:
Today I am going to write technical documentation for a project, but it's stupid to type the folder's name and the file'name one by one.

## How to solve it:
In order to solve the problem, I did those:
- Searching the problem in ***obsidian*** plugin market
- Asking my workmate is there any way get the project file structure, He told me to try the **tree** command. So I tested the command, it did work.

## My gains from the problem

First of all, if your computer does not install tree, just [google it](https://google.com/search?q=how+to+install+tree+command).

1. tree command like this

```bash
tree folderName -options
```

2. if you want to exclude some folders

```bash
tree folderName -I 'folderA|folderB'
```

3. if you want to limit folder level

```bash
tree folderName -L depthNumber
```

4. if you want to know more about the command, or you can check the command usage on this [website](https://linux.die.net/man/1/tree)

```bash
man tree
```

## Conclusions

The **tree** command is really powerful. It saves much of my time.

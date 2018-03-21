---
title: Hexo备份并推送到Github
tags:
  - git
  - github
  - hexo
categories: git
keywords:
  - git
  - github
  - hexo
copyright: true
commits: true
abbrlink: bafc086b
date: 2018-02-26 03:10:54
---
#### 过程
* 创建远程仓库 ...
* 本地初始化 `git init`
* 创建忽略文件 `vi .gitignore`  
 
<!--more-->
* 按需分配
```
    .DS_Store
    Thumbs.db
    db.json  
    *.log
    .deploy*/
    node_modules/
    .npmignore
    public/
```
* ps: Windows10以`gitignore.txt`保存配置，再另存为并改名
* 添加所有文件到寄存区 `git add .`
* 提交 `git commit -m "commit"`
* 添加远程源 `git remote add origin yourname@github.com/example.git`
* 提交远程库master分支 `git push -u origin master`

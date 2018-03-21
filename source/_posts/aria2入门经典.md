---
title: aria2入门经典
tags: aria2
categories: aria2
copyright: true
abbrlink: 8cbf5575
date: 2018-03-01 21:34:04
---
#### 前言
官网有版本介绍，但配置使用官方文档，无法快速入门。
#### aria2入门
* 下载aria2
<a href="https://aria2.github.io/" target="_blank">aria2</a>

* 在aria2根目录下创建如下文件
    - `aria2.session`- 下载历史 (留空)
    - `aria2.log`- 运行日志 (留空)
    - `config.conf`- 配置文件
    - `aria2启动.vbs`
    - `aria2关闭.bat`
* 配置`config.conf`,将如下指令复制粘贴到文件中  

<!--more-->
```
## '#'开头为注释内容, 选项都有相应的注释说明, 根据需要修改 ##
## 被注释的选项填写的是默认值, 建议在需要修改时再取消注释  ##

## 文件保存相关 ##

# 文件的保存路径(可使用绝对路径或相对路径), 默认: 当前启动位置
dir=./downloads
# 启用磁盘缓存, 0为禁用缓存, 需1.16以上版本, 默认:16M
#disk-cache=32M
# 文件预分配方式, 能有效降低磁盘碎片, 默认:prealloc
# 预分配所需时间: none < falloc ? trunc < prealloc
# falloc和trunc则需要文件系统和内核支持
# NTFS建议使用falloc, EXT3/4建议trunc, MAC 下需要注释此项
#file-allocation=none
# 断点续传
continue=true

## 下载连接相关 ##

# 最大同时下载任务数, 运行时可修改, 默认:5
#max-concurrent-downloads=5
# 同一服务器连接数, 添加时可指定, 默认:1
max-connection-per-server=5
# 最小文件分片大小, 添加时可指定, 取值范围1M -1024M, 默认:20M
# 假定size=10M, 文件为20MiB 则使用两个来源下载; 文件为15MiB 则使用一个来源下载
min-split-size=10M
# 单个任务最大线程数, 添加时可指定, 默认:5
#split=5
# 整体下载速度限制, 运行时可修改, 默认:0
#max-overall-download-limit=0
# 单个任务下载速度限制, 默认:0
#max-download-limit=0
# 整体上传速度限制, 运行时可修改, 默认:0
#max-overall-upload-limit=0
# 单个任务上传速度限制, 默认:0
#max-upload-limit=0
# 禁用IPv6, 默认:false
#disable-ipv6=true
# 连接超时时间, 默认:60
#timeout=60
# 最大重试次数, 设置为0表示不限制重试次数, 默认:5
#max-tries=5
# 设置重试等待的秒数, 默认:0
#retry-wait=0

## 进度保存相关 ##

# 从会话文件中读取下载任务
input-file=./aria2.session
# 在Aria2退出时保存`错误/未完成`的下载任务到会话文件
save-session=./aria2.session
# 定时保存会话, 0为退出时才保存, 需1.16.1以上版本, 默认:0
#save-session-interval=60

## RPC相关设置 ##

# 启用RPC, 默认:false
enable-rpc=true
# 允许所有来源, 默认:false
rpc-allow-origin-all=true
# 允许非外部访问, 默认:false
rpc-listen-all=true
# 事件轮询方式, 取值:[epoll, kqueue, port, poll, select], 不同系统默认值不同
event-poll=select
# RPC监听端口, 端口被占用时可以修改, 默认:6800
#rpc-listen-port=6800
# 设置的RPC授权令牌, v1.18.4新增功能, 取代 --rpc-user 和 --rpc-passwd 选项
#rpc-secret=appinn
# 设置的RPC访问用户名, 此选项新版已废弃, 建议改用 --rpc-secret 选项
#rpc-user=<USER>
# 设置的RPC访问密码, 此选项新版已废弃, 建议改用 --rpc-secret 选项
#rpc-passwd=<PASSWD>
# 是否启用 RPC 服务的 SSL/TLS 加密,
# 启用加密后 RPC 服务需要使用 https 或者 wss 协议连接
#rpc-secure=true
# 在 RPC 服务中启用 SSL/TLS 加密时的证书文件,
# 使用 PEM 格式时，您必须通过 --rpc-private-key 指定私钥
#rpc-certificate=/path/to/certificate.pem
# 在 RPC 服务中启用 SSL/TLS 加密时的私钥文件
#rpc-private-key=/path/to/certificate.key

## BT/PT下载相关 ##

# 当下载的是一个种子(以.torrent结尾)时, 自动开始BT任务, 默认:true
#follow-torrent=true
# BT监听端口, 当端口被屏蔽时使用, 默认:6881-6999
listen-port=51413
# 单个种子最大连接数, 默认:55
#bt-max-peers=55
# 打开DHT功能, PT需要禁用, 默认:true
enable-dht=false
# 打开IPv6 DHT功能, PT需要禁用
#enable-dht6=false
# DHT网络监听端口, 默认:6881-6999
#dht-listen-port=6881-6999
# 本地节点查找, PT需要禁用, 默认:false
#bt-enable-lpd=false
# 种子交换, PT需要禁用, 默认:true
enable-peer-exchange=false
# 每个种子限速, 对少种的PT很有用, 默认:50K
#bt-request-peer-speed-limit=50K
# 客户端伪装, PT需要
peer-id-prefix=-TR2770-
user-agent=Transmission/2.77
# 当种子的分享率达到这个数时, 自动停止做种, 0为一直做种, 默认:1.0
seed-ratio=0
# 强制保存会话, 即使任务已经完成, 默认:false
# 较新的版本开启后会在任务完成后依然保留.aria2文件
#force-save=false
# BT校验相关, 默认:true
#bt-hash-check-seed=true
# 继续之前的BT任务时, 无需再次校验, 默认:false
bt-seed-unverified=true
# 保存磁力链接元数据为种子文件(.torrent文件), 默认:false
bt-save-metadata=true

daemon=true
```
* `aria2启动.vbs`配置,复制如下代码到文件中
```
'object.Run(strCommand, [intWindowStyle], [bWaitOnReturn])
CreateObject("WScript.Shell").Run "aria2c.exe --conf-path=config.conf",0
```
* `aria2关闭.bat`配置，复制如下命令到文件中
```
:: 具体查阅taskkill /?
taskkill /im aria2c.exe /t /f
```
#### 基于百度网盘下载测试
* 下载百度网盘助手
<a href="https://github.com/acgotaku/BaiduExporter/">BaiduExporter</a>

* 安装百度网盘助手（chrome为例）
由于chrome高版本已不直接支持非chrome商店的插件，便如下调整：
    * 将已下载好的`.crx`插件更名为`.zip`格式以及解压
    * 更多工具->扩展程序->开发者模式√
    * 加载已解压扩展程序
* 开启`aria2启动.vbs`
* 打开百度网盘分享链接，导出下载->aria2 rpc
* 在配置下载目录查看文件下载位置

#### aria2图形化控制台安装
* 可以使用网上提供好的例如:
<a href="https://aria2c.com/" target="_blank">aria2c</a>

* 也可以使用自己手动配置的
    * 下载[aria2-ng](https://github.com/mayswind/AriaNg)
    * 解压整个文件夹放置到web服务器的站点目录
* 打开aria2界面控制台，再下载其他应用便能看到下载流程

_ps:`错误: Aria2 RPC 服务器错误`,原因可能是地址、端口不正确，或是没打开aria2_
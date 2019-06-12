# Magpie

[![Github Release](https://img.shields.io/github/release/geekeren/Magpie-LuckyDraw.svg)](https://github.com/geekeren/Magpie-LuckyDraw/releases)
[![Github Release Downloads](https://img.shields.io/github/downloads/geekeren/Magpie-LuckyDraw/total.svg)](https://github.com/geekeren/Magpie-LuckyDraw/releases)
[![Dockerhub](https://img.shields.io/docker/automated/bywang/magpie.svg)](https://hub.docker.com/r/bywang/magpie/)
[![Dockerhub](https://img.shields.io/docker/build/bywang/magpie.svg)](https://hub.docker.com/r/bywang/magpie/)
[![Github Release Downloads](https://img.shields.io/badge/Platforms-win%7Cmac%7Clinux%7Cdocker%7Cweb-red.svg)](https://github.com/geekeren/Magpie-LuckyDraw/releases)
[![License](https://img.shields.io/github/license/geekeren/Magpie-LuckyDraw.svg)](https://github.com/geekeren/Magpie-LuckyDraw/blob/master/LICENSE)

Magpie，“喜鹊”，取其“报喜”之意，本系统是一款免费开源的滚动抽奖系统，适用于公司年会、大型聚会等各种场景。Magpie-LuckyDraw支持多平台运行，已经支持在Web、Windows、Mac、Linux、Docker等多平台同步发布。

### 支持特性

- [x] 3D标签云显示参与者姓名
- [x] 获奖者不重复中奖
- [x] 奖项编辑：奖项数设置、奖项的编辑以及抽取的出场顺序
- [x] 灾难恢复，意外退出浏览器页面时，二次访问时可以恢复上次抽奖信息
- [x] 支持Windows、Linux、MacOSX、网页端、Docker等多平台

## 一、 使用

### 1. Web端在线使用

[点击使用：https://magpie.wangbaiyuan.cn](https://magpie.wangbaiyuan.cn)

### 2. 桌面版下载安装

下载软件包在本地运行
- [Windows版](https://github.com/geekeren/Magpie-LuckyDraw/releases)
- [MAC版](https://github.com/geekeren/Magpie-LuckyDraw/releases)
- [Linux版](https://github.com/geekeren/Magpie-LuckyDraw/releases)

### 3. 使用Docker本地运行

本项目已Docker化并托管于Docker hub平台，您可以在安装了Docker环境的情况下执行：

`docker run -p 80:80 bywang/magpie`启动Magpie抽奖服务

你也可以clone本项目，在本地使用`yarn start` 启动服务


### 4. 下载源代码构建运行
```
git clone git@github.com:geekeren/Magpie-LuckyDraw.git
yarn install
yarn start
```
- 构建命令：`yarn build`

## 二、预览
![预览](assets/image/drawing.gif)

## 三、关注与交流

目前这个项目只有@geekeren一个人在维护，本着“人人享受，人人奉献”的开源精神和“社区靠大家”的号召，或者你发现代码写得太挫想重构，欢迎更多的同学提issue和pull request成为项目的参与者, 让Magpie更加完善😜😜😜。

<div style="text-align:center">
<h4>关注我的微信<h4>
<img src="./assets/image/mp.jpg" width="200"/> 
</div>

# Magpie

![Github Release](https://img.shields.io/github/release/geekeren/Magpie-LuckyDraw.svg)
[![Dockerhub](https://img.shields.io/docker/automated/bywang/magpie.svg)](https://hub.docker.com/r/bywang/magpie/)
[![Dockerhub](https://img.shields.io/docker/build/bywang/magpie.svg)](https://hub.docker.com/r/bywang/magpie/)
[![License](https://img.shields.io/github/license/geekeren/Magpie-LuckyDraw.svg)](https://github.com/geekeren/Magpie-LuckyDraw/blob/master/LICENSE)

Magpie，“喜鹊”，取其“报喜”之意，本系统是一款用于活动、公司年会的抽奖软件。Magpie目前采用纯前端编写而成，主要技术架构是ReactJs+Redux，部分UI的实现使用了React调用Jquery的方案。

### 支持特性

- 3D标签云显示参与者姓名
- 获奖者不重复中奖
- 奖项的增加、编辑以及抽取顺序
- 灾难恢复，二次访问时可以恢复上次抽奖信息

## 一、 使用

### 在线使用

[点击使用：https://magpie.wangbaiyuan.cn](https://magpie.wangbaiyuan.cn)

### 下载源代码运行
```
git clone git@github.com:geekeren/Magpie-LuckyDraw.git
yarn install
yarn start
```
- 构建命令：`yarn build`

### 使用Docker本地运行

本项目已Docker化并托管于Docker hub平台，您可以在安装了Docker环境的情况下执行：

`docker run -p 80:80 bywang/magpie`启动Magpie抽奖服务

你也可以clone本项目，在本地使用`yarn start` 启动服务



## 二、预览
![预览](assets/image/drawing.gif)

## 三、关注与交流

目前这个项目只有@geekeren一个人在维护，本着“人人享受，人人奉献”的开源精神和“社区靠大家”的号召，或者你发现代码写得太挫想重构，欢迎更多的同学提issue和pull request成为项目的参与者, 让Magpie更加完善😜😜😜。

<div style="text-align:center">
<h4>关注我的微信<h4>
<img src="./assets/image/mp.jpg" width="200"/> 
</div>

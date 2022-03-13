Vuepress Template

简体中文 | [English](./README-en.md)

## 介绍

vuepress-template是一个简单的VuePress案例模板，目的是让用户可以直接clone这个仓库，作为初始化一个VuePress网站启动项目，然后在这个项目的基础上新增自定义配置和功能。

## 在线 Demo

http://vuepress-template.jaronnie.com


## 内容

项目中特别展示了一些小众模板、主题、插件，推荐大家关注和使用


## 用法

### 第一步

下载 Vuepress Template 的仓库代码
```sh
git clone https://github.com/jaronnie/vuepress-template.git
```

### 第二步

安装依赖
```sh
cd vuepress-template
yarn # 或者npm i
```

### 第三步

启动项目，随后即可根据自己的需求修改配置、编写文档内容
```sh
npm run docs:dev
```

### 第四步

打包项目
```sh
npm run docs:build
```
结果会在`docs/.vuepress/`目录下生成一个`dist`文件夹，里面就是打包后的代码
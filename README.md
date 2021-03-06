# 前言

1. 为避免vue项目的复杂性，导致调试半天还不能运行起该项目，请在维护该项目前仔细阅读此文件，可确保3分钟能上手该项目;

2. 维护该项目注意保持一致的代码规范;

3. 项目如果改动有需要说明的地方，请修改此文件。

# 环境配置

1. 安装node环境

2. 命令行运行 `npm install -g cnpm --registry=https://registry.npm.taobao.org`, 安装国内淘宝npm镜像

3. 项目根目录运行`cnpm install`安装所有插件


# 项目说明

1. vue组件文件夹: /src/assemblies/components

2. css模块文件夹: /src/static/style/modules

3. 视图页文件夹: /src/pages

4. api接口配置文件: /src/config/api.js

5. pad接口配置文件: /src/config/pad.js (如修改该文件：注意同时兼容android与ios)

6. 前端路由配置文件: /src/config/router.js

7. 全局状态管理: /src/config/store.js


# 图标

+ 因图标用的不是字体图标，需要合成雪碧图， 合成图标命令:

```
npm run icons
```

# 静态资源

因系统中的一部份页面是纯静态页面,如新手指南文章列表，邀请页等，要正常访问这些资源需要配置静态资源地址:
/src/config/api.js中的staticUrl变量

静态文件夹为根目录static文件夹

# 新手指南文章

目录: static/docs文件夹

配置显示的指南: guides.json

docs目录下的markdown文件名要与guides.json中配置的相一致


# 启用开发环境

```
npm run dev
```

注: 所有开发环境的配置请修改/src/config/api.js文件

1. 需要配置cookie【WZ_TOKEN】字段以验证用户身份的有效性，产品环境cookie由原生直接在webview中设置，开发环境可以在api.js文件中临时写一个以联调接口

2. 因为开发环境访问接口会跨域，开发环境接口的url需要配置成本地的ip地址或localhost, 同时修改根目录下的/config/index.js文件中的proxyTable.target属性，以代理的方式指向真实的接口服务器，从而跳过浏览器的跨域限制

# 产品环境打包

```
npm run build

```

注:

1. 不要忘记删除开发环境中配置的临时cookie【WZ_TOKEN】

2. 修改api.js中的接口url为api服务器真实的url地址

3. 如需配置资源公共地址(主要页面与css中引入的静态图片地址)，请修改根目录/config/index.js中的,build.assetsPublicPath属性。

# 布署

运行`npm run build`打包后，会在根目录生成一个dist文件夹，其下会有一个入口index.html文件及相应的js,css文件夹，用tomcat或ngnix启动静态文件服务即可。


# 代码框架

+ JS框架: [Vue](https://vuejs.org)

+ 组件框架: [mint-ui](http://mint-ui.github.io/#!/zh-cn)

+ 代码规范: [re3规范](http://www.rew3c.com)

扩展该项目时，请参照以上官网文档来编写代码，以保持项目的维护性与扩展性。

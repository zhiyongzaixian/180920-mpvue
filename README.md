# mpvue
## mpvue特点
  1. 以vue.js为核心搭建的框架
  2. 支持vue.js语法进行开发小程序
  3. mpvue既支持vue的生命周期函数同时也支持小程序的生命周期函数，但是不推荐小程序的
## mpvue文件特点
  1. app.vue ---> app.js(注册整个小程序应用) + app.wxss(全局样式文件)
  2. main.js ---> 对应文件的入口文件 ---> 注册应用 || 页面
  3. 页面中的main.js === Page()
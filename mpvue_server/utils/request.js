let Fly=require("flyio/src/node")
let fly=new Fly;

/*
* 1. 灵活度高
* 2. 把相同的部分放在函数内部(组件内部)抽取不同的部分放在形参(用户通过标签属性的形式props传递数据到组件内部)
* 3. 功能点明确
* */

exports.get = function (url) {
  return new Promise((resolve, reject) => {
    // new Promise 初始化实例对象的状态为pending 初始化
    // resolve 修改实例对象的状态为成功状态，自动调用后续成功的回调
    // reject 修改实例对象的状态为失败状态，自动调用后续失败的回调
    fly.get(url)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  })
}
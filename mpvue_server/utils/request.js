let Fly=require("flyio/src/node")
let fly=new Fly;

exports.get = function (url) {
  return new Promise((resolve, reject) => {
    fly.get(url)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  })
}
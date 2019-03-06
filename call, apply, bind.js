let obj = {username: 'kobe'}
function test(msg) {
  console.log(this);
  console.log(msg);
}

test(); // window
new test(); // test的实例对象
// call apply 指定完this会直接调用该函数
test.call(obj, 'abc');
test.apply(obj, ['abc']);
// bind绑定完this会返回该函数
let test2 = test.bind(obj, 'abc');
test2();

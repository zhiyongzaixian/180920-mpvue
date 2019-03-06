let Koa = require('koa');
let KoaRouter = require('koa-router');
let {get} = require('./utils/request')

// 生成实例应用
const app = new Koa();

// 生成路由器
const router = new KoaRouter();


router.get('/', async (ctx, next) => {
  ctx.body = '服务器返回的数据'
})

// 搜索图书的接口
router.get('/searchBooks', async (ctx, next) => {
  let req = ctx.query.req;
  let url =  `https://api.douban.com/v2/book/search?q=${req}`;
  let result = await get(url)
  // 返回给前端
  ctx.body = result
});


const appId = 'wx0db5ac6ea2aca4fe'
const appSecret = '4a9ed63ce3ff7701485a2ccb27dd1ba1'

// 获取用户的身份标识： openId
router.get('/getOpenId', async (ctx, next) => {
  // 获取参数code
  let code = ctx.query.code;
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  let result = await get(url)
  console.log(result.data, typeof result.data);
  ctx.body = JSON.parse(result.data).openid;
});

// 声明使用中间键
app
  .use(router.routes())
  .use(router.allowedMethods()) // 允许使用路由方法

// 监听端口号
app.listen('3000', () => {
  console.log('服务器开启成功');
  console.log('服务器地址： http://localhost:3000');
})
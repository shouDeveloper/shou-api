# shou-api
个人代理的urp及部分官网信息接口

## 来源

项目来自于[@garychangcn](https://github.com/GaryChangCN)开发的[ShouMedia](https://github.com/GaryChangCN/ShouMedia)
去除了微信小程序端的api

## 使用

```bash
git clone
npm install
npm run add   //这一步是构建通讯录和课程查询本地数据库
npm run api
```

## 数据库说明

数据库采用mongodb接口默认27017账号密码为空。通讯录和课程的数据库默认没有，需要运行npm run add 来添加。
当提示添加成功即可。

## API文档

[API文档](./api.md)

## MIT

[MIT](./LICENSE)
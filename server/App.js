/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-21 10:06:03
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-15 21:32:20
 * @FilePath: \Vue-wallpapers site\src\App.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:4000',
    credentials: true
};
app.use(cors(corsOptions));
app.use(express.static('upload'))
app.use(express.static('wallpaper'))
const joi = require('joi');
// 解析字符串
const expressJWT = require('express-jwt')
const config = require('./config')
// 解析还原json对象中间件
app.use(expressJWT({ secret: config.jweSecretKey}).unless({path:[/^\/api\//]}))

const router = require('./router/user');
const storeAvatar = require('./router/storeAvatar');


app.use(router)
app.use(storeAvatar)
router.post('/api',router);
router.post('/api',storeAvatar);
app.listen(8000, () => {
    console.log('服务器已经启动,8000端口正在监听...');
})
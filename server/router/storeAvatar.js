/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-13 16:29:44
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-28 18:58:12
 * @FilePath: \Vue-wallpapers site\server\router\storeAvatar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const router = express.Router()
const app = express()

const bodyParser = require('body-parser') 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const storeAvatar=require('../router-handler/storeAvatar')
const fs=require('fs')

const multer = require('multer');
const path = require('path');
// 修改文件
const storage = multer.diskStorage({
  destination: 'upload',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
// 上传头像
router.post('/Url', upload.single('file'), storeAvatar.url);
//上传评论
router.post('/uploadComment',urlencodedParser,storeAvatar.uploadComment);
// 获取每日推荐前十路由
router.post('/api/TopTen',urlencodedParser, storeAvatar.topten);
// 获取动态页面图片信息
router.post('/api/LatestImages',urlencodedParser, storeAvatar.latestImages);
//获取推荐页面的壁纸
router.post('/api/getImages',urlencodedParser, storeAvatar.getImages);
//获取壁纸评论
router.post('/api/Comments',urlencodedParser, storeAvatar.comments);

module.exports = router
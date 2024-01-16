/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-13 16:29:44
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-16 12:22:39
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
const wallpaper = multer.diskStorage({
  destination: 'wallpaper',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });
const uploadWallpaper = multer({ storage: wallpaper });
// 上传头像 
router.post('/Url',upload.single('file'), storeAvatar.url);
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
//获取动态热门页面信息
router.post('/api/Hot',urlencodedParser, storeAvatar.hot);
//获取首页的壁纸分类
router.post('/api/WallpaperCategory',urlencodedParser, storeAvatar.wallpaperCategory);
//发布评论
router.post('/PostComments',uploadWallpaper.fields([
  { name: 'file0', maxCount: 1 },
  { name: 'file1', maxCount: 1 },
  { name: 'file2', maxCount: 1 },
  { name: 'file3', maxCount: 1 },
  { name: 'file4', maxCount: 1 },
  { name: 'file5', maxCount: 1 },
  { name: 'file6', maxCount: 1 },
  { name: 'file7', maxCount: 1 },
]), storeAvatar.postComments);
//查询用户个人壁纸
router.post('/UserImg',urlencodedParser, storeAvatar.userImg);
module.exports = router
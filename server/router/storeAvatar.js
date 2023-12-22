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
// 获取每日推荐前十路由
router.post('/api/TopTen',urlencodedParser, storeAvatar.topten);
// 获取动态页面图片信息
router.post('/api/LatestImages',urlencodedParser, storeAvatar.latestImages);
module.exports = router
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-21 10:42:44
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-13 17:15:18
 * @FilePath: \Vue-wallpapers site\server\router\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-21 10:42:44
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-13 16:28:50
 * @FilePath: \Vue-wallpapers site\server\api\loginApi.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const router = express.Router()
const app = express()

const bodyParser = require('body-parser') 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const user_handler=require('../router-handler/user')

router.post('/api/Login',urlencodedParser,user_handler.login)
router.post('/api/Enroll',urlencodedParser,user_handler.enroll)
router.post('/Forget',urlencodedParser,user_handler.forget) 
router.post('/Token',urlencodedParser,user_handler.token) 


module.exports = router
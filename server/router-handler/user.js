/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-09 12:04:16
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-17 19:00:34
 * @FilePath: \Vue-wallpapers site\server\router-handler\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const sql = require('../db/sql')
const db = require('../db/index')
// 加密密码
const bcrypt=require('bcryptjs')

// 解析字符串
const jwt = require('jsonwebtoken')
// 导入密钥
const config=require('../config')


exports.login = (req, res) => {
    const {name, password} = req.body
    db.query(sql?.user?.queryname,[name],(err, results) => {    
           if(!results.length==0){
            // 验证密码
            const compareResult = bcrypt.compareSync(password,results[0].upassword)
            if(compareResult){
                db.query(sql?.user?.information,results[0].id,(err, results) =>{
                    console.log(results[0]);
                    if(err) res.send('error')
                const user = {...results[0],upassword:'',memory:''}
                const tokenStr=jwt.sign(user,config.jweSecretKey,{expiresIn:config.expiresIn})
                    // 配置token
                    res.send({
                        status:200,
                        message:'登录成功',
                        data:results[0],
                        token:'Bearer ' + tokenStr,
                    })})
            }else{
                 res.send({
                    status:404,
                    message:'密码错误'
                })
            }
           }
           else res.send({
            status:401,
            message:'账号不存在',
        })
    })
}
exports.enroll=(req, res) => {
    const {name, password,memory} = req.body
    console.log(name, password,memory);
    db.query(sql?.user?.queryname,[name],(err, results) => {    
           if(!results.length==0){
               res.send({
                    status:409,
                    message:'注册失败，用户已被注册',
               })
           }
           else {
            const newPassword=bcrypt.hashSync(password,10)
            db.query(sql?.user?.insert,[0,name, newPassword,memory],(err, results) =>{
                if(err) {res.send(err.message)}
                 else {
                     db.query(sql?.user?.userinformation,[0,'/assets/imgs/头像.webp',null,0,'未设置','未设置',],(err, results) =>{
                        if(err) {res.send(err.message)}
                        res.send({
                            status:200,
                            message:'注册成功',
                       })
                     })
            }
            })
        }

    })
}
exports.forget=(req, res) => {
    const {name,forget} = req.body 
    db.query(sql?.user?.queryname,[name],(err, results) => {
        if(results.length==0){
            res.send('error')
        }
        else {
            if(results[0].memory==forget){
                res.send(`${results[0].upasswrod}`)
            }
            else{
                res.send('error')
            }
     }})   
}
exports.token=(req, res) => {
    const {id}=req.body
    console.log(id);
    db.query(sql?.user?.information,id,(err, results) =>{
        console.log(results[0]);
        if(err) res.send('error')
        res.send({
            status:200,
            data:results[0],
            message:'登录成功',
        })
    });
}
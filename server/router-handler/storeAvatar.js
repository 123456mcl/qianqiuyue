/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-13 16:31:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-09 12:04:16
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-05 18:55:41
 * @FilePath: \Vue-wallpapers site\server\router-handler\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const sql = require('../db/sql')
const db = require('../db/index')

exports.url=(req, res) => {
    let {id}=req.body
    console.log(req.file);
    db.query(sql?.user?.updataInformation,['http://localhost:8000/'+req.file.filename,id],(err, results) =>{
        if(results){
            db.query(sql?.user?.information,id,(err, results) =>{
                if(results){
                 res.send({
                     status:200,
                     message:'修改成功',
                     data:results[0],
                 })
                }
                else{
                 res.send({
                     status:404,
                     message:'修改失败',
                 })
                }
             })
        }
        else{
            console.log(res.send({
                status:404,
                message:'修改失败',
            }));
        }
    })

}
exports.uploadComment=(req, res) => {
  let {id,img_id}=req.body
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes().toString().padStart(2, '0');
  const second = currentDate.getSeconds().toString().padStart(2, '0');
  const time = (year+'-'+month+'-'+day+' '+ hour+':'+minute+':'+second)
  db.query(sql?.user?.insertcomments,[Number(img_id),req.body['parameter[textareaValue]'],req.body['parameter[img_avatar]'],req.body['parameter[name]'],Number(id),Number(0),time],(err, results) =>{
    console.log([Number(id),req.body['parameter[textareaValue]'],req.body['parameter[img_avatar]'],req.body['parameter[name]'],Number(img_id)]);
    if(err)res.send({status:404})
    res.send({
      status:200,
      message:'发布成功！',
    })
  })
}
exports.topten=(req, res) => {
    let {id}=req.body
   db.query(sql?.user?.queryid,id,(err, results) =>{
    console.log(results);
    if(err)res.send({status:404})
    db.query(sql?.user?.dailyImg,results[0].uname,(err, results) =>{
        if(err)res.send({status:404})
            const arr=results.map((result,index)=>{
                result.img_url=result.img_url.split(",")
                return result
            })
        res.send({
            status:200,
            message:'查询成功',
            data:arr
        })
    })
   })
}
exports.latestImages=(req, res) => {
    db.query(sql?.user?.newDailyImg,(err, results) =>{
    if(err)res.send({status:404})
    const arr = results.map((result, index) => {
        return new Promise((resolve, reject) => {
          result.img_url = result.img_url.split(",");
          db.query(sql?.user?.information, result.information_id, (err, results) => {
            if (err) {
              reject({ status: 404 });
            } else {
              result.avatar = results;
              resolve(result);
            }
          });
        });
      });
      Promise.all(arr)
        .then((results) => {
            res.send({
                status:200,
                message:'查询成功',
                data:results
            })
        })
        .catch((error) => {
          console.error(error);
        });
   })
}
exports.hot=(req, res) => {
  db.query(sql?.user?.newDailyImg,(err, results) =>{
    if(err)res.send({status:404})
    const arr = results.map((result, index) => {
        return new Promise((resolve, reject) => {
          result.img_url = result.img_url.split(",");
          db.query(sql?.user?.information, result.information_id, (err, results) => {
            if (err) {
              reject({ status: 404 });
            } else {
              result.avatar = results;
              resolve(result);
            }
          });
        });
      });
      Promise.all(arr)
        .then((results) => {
        const arr = results.sort((a,b) => {
          return  b.img_like - a.img_like
         })
            res.send({
                status:200,
                message:'查询成功',
                data:arr
            })
        })
        .catch((error) => {
          console.error(error);
        });
   })
}
exports.getImages=(req, res) => {
    let {img_id,parameter}=req.body
    db.query(sql?.user?.dailyImg,parameter,(err, results) =>{
        if (err) reject({ status: 404,message:'数据错误'});
    const arr = results.map((result, index) => {
        return new Promise((resolve, reject) => {
          result.img_url = result.img_url.split(",");
          db.query(sql?.user?.information, result.information_id, (err, results) => {
            if (err) {
              reject({ status: 404 });
            } else {
              result.avatar = results;
              resolve(result);
            }
          });
        });
      });
      Promise.all(arr)
        .then((results) => {
            const newarr = results.filter((item)=>{
                return item.img_id != (img_id )
            })
            res.send({
                status:200,
                message:'查询成功',
                data:newarr
            })
        })
        .catch((error) => {
          console.error(error);
        });
    })
}
exports.comments=(req, res) => {
    let {img_id,parameter}=req.body
    db.query(sql?.user?.comments,img_id,(err, results) =>{
      if (err) reject({ status: 404,message:'数据错误'});
      res.send({
        status:200,
        message:'获取成功',
        data:results,
    })
    })
}

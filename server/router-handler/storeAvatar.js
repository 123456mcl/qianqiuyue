/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-13 16:31:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-09 12:04:16
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-16 21:17:24
 * @FilePath: \Vue-wallpapers site\server\router-handler\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const sql = require('../db/sql')
const db = require('../db/index')

function time(){
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes().toString().padStart(2, '0');
  const second = currentDate.getSeconds().toString().padStart(2, '0');
  const time = (year+'-'+month+'-'+day+' '+ hour+':'+minute+':'+second)
  return time
}



exports.url=(req, res) => {
    let {id}=req.body
    console.log(req.file.filename,id);
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
  const time = time()
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
exports.wallpaperCategory=(req, res) => {
  let data=[
    {id: 6, name: '美女',url:'http://localhost:8000/file-1705069009730.png'},
    {id: 30, name: '爱情',url:'http://localhost:8000/file-1705068977948.png'},
   {id: 9, name: '风景',url:'http://localhost:8000/file-1702730401451.jpg'},
   {id: 15, name: '小清新',url:'http://localhost:8000/file-1703660872469.jpg'},
   {id: 26, name: '动漫',url:'http://localhost:8000/file-1705068709871.jpg'},
   {id: 11, name: '明星',url:'http://localhost:8000/file-1703660872469.jpg'},
   {id: 5, name: '游戏',url:'http://localhost:8000/file-1702730442086.jpg'},
   {id: 12, name: '汽车',url:'http://localhost:8000/file-1705069017159.png'},
   {id: 10, name: '炫酷',url:'http://localhost:8000/file-1705069028992.png'},
   {id: 7, name: '影视',url:'http://localhost:8000/file-1705069034790.png'},
   {id: 22, name: '军事',url:'http://localhost:8000/file-1705068999929.png'},
  ]
    res.send({
      status:200,
      message:'获取成功',
      data:data,
    })
}
exports.postComments=(req, res) => {
  let {form,id}=req.body
  const files = req.files;
  const newform = JSON.parse(form)
  const arr = Object.entries(JSON.parse(JSON.stringify(req.files)))
  const newArr=[]
  arr.forEach(([key, value]) => {
    newArr.push('http://localhost:8000/'+value[0].filename)
  });
  db.query(sql?.user?.queryid,id,(err, results) =>{
    if(err)res.send({ status: 404,message:'数据错误'});
    db.query(sql?.user?.photogallery,[results[0].uname,(newform.labelData).join(','),newArr,time(),0,0,id,newform.name,0,newform,newform.desc.delivery],(err, results) =>{
      if(err)res.send({ status: 404,message:'数据错误'});
      console.log(results,'2222');
      res.send({
        status:200,
        message:'上传成功',
      })
    })
    
  })
   
}
exports.userImg=(req, res) => {
  const { id } = req.body
  db.query(sql?.user?.queryid,id,(err, results) =>{
    if(err)res.send({ status: 404,message:'数据错误'});
    db.query(sql?.user?.dailyImg,results[0].uname,(err, results) =>{
    const arr = results.map((result, index) => {
      result.img_url = result.img_url.split(",")
      return result
    })
      res.send({
        status:200,
        message:'上传成功',
        data:arr
      })
    });
  })
}
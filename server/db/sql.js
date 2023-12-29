/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-22 16:00:30
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-29 18:05:02
 * @FilePath: \Vue-wallpapers site\server\sql.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let user = {
    insert: "insert into myuser (id,uname,upassword,memory) values (?,?,?,?)",
    queryid: "select * from myuser where id=?",
    delete: "DELETE FROM user WHERE id=?",
    queryuser: "select * from myuser where uname=? and upassword=?",
    queryname: "select * from myuser where uname=?",
    // 查询information_id资料
    information:"select * from information where information_id=? ",
    // 新增资料
    userinformation:"insert into information (information_id,avatar, gender ,vip,signature,name,information_concern,information_followers,information_tsan) values (?,?,?,?,?,?,?,?,?)",
    // 更改头像资料
    updataInformation:"update information set avatar=? where information_id=?",
    // 获取每日推荐图片数据
    dailyImg:"select * from photogallery where name=? ",
    // 获取最新图片
    newDailyImg:"select * from photogallery",
    //获取评论
    comments:"select * from comments where img_id=? ",
    //新增评论
    insertcomments: "insert into comments (img_id,img_comments,img_avatar,name,user_id,reply,time) values (?,?,?,?,?,?,?)",
  };
  
module.exports = {
  user,
}
<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-23 09:40:46
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-15 21:55:34
 * @FilePath: \Vue-wallpapers site\src\views\Login\components\enrollAccount.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
   <div id="box" class="animate__animated animate__fadeIn" >
        <div class="content">
            <div class="login-wrapper">
                <h1>注册</h1>
                <div class="login-form">
                    <div class="username form-item">
                        <span>请输入账号</span>
                        <input type="text" class="input-item" v-model="userAccount.name" @input="fn" placeholder="请输入账号:"/>
                    </div>
                    <div class="password form-item">
                        <span>请输入密码</span>
                        <input type="password" class="input-item" v-model="userAccount.password" @input="fn" placeholder="请输入密码:"/>
                    </div>
                    <div class="password form-item">
                        <span>第二次输入密码</span>
                        <input type="password" class="input-item" v-model="userAccount.password2" @input="fn" placeholder="请输入密码:"/>
                    </div>
                    <div class="password form-item">
                        <span>请输入记忆密码</span>
                        <input type="password" class="input-item" v-model="userAccount.memory" @input="fn" placeholder="请输入密码:"/>
                    </div>
                    <button id="login-btn" class="hvr-pop" @click="login">注册</button>
                </div>
                <div class="divider">
                    <span class="line"></span>
                    <span class="divider-text">已有账号？</span>
                    <span class="line"></span>
                </div>
                <div class="other-login-wrapper">
                    <button class="hvr-pop" id="login-btn" @click="btn">登录账号</button>
                    <button class="hvr-pop" id="login-forget" @click="forget">忘记密码</button>
                </div>
            </div>
        </div>
        </div>
</template>

<script setup lang="ts">
import 'hover.css'
import axios from 'axios' 
import {reactive,watch,getCurrentInstance} from 'vue'
import {loginUluli} from '../../../apis/loginUluli'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
const router = useRouter()
const userAccount=reactive({
    name:'',
    password:'',
    password2:'',
    memory:'',
})
const { proxy } = getCurrentInstance();
const fn=()=>{
        userAccount.name=userAccount.name.replace(/[`~!#$%^&*()_\+=<>?:"{}|~！#￥%……&*（）={}|《》？：“”【】、；‘’，。、\s+]/g, '')
        userAccount.name=userAccount.name.slice(0,10)
        userAccount.password=userAccount.password.slice(0,10)
        userAccount.password=userAccount.password.replace(/[`~!#$%^&*()_\+=<>?:"{}|~！#￥%……&*（）={}|《》？：“”【】、；‘’，。、\s+]/g, '')
        userAccount.password2=userAccount.password2.slice(0,10)
        userAccount.password2=userAccount.password2.replace(/[`~!#$%^&*()_\+=<>?:"{}|~！#￥%……&*（）={}|《》？：“”【】、；‘’，。、\s+]/g, '')
        userAccount.memory=userAccount.memory.slice(0,10)
        userAccount.memory=userAccount.memory.replace(/[`~!#$%^&*()_\+=<>?:"{}|~！#￥%……&*（）={}|《》？：“”【】、；‘’，。、\s+]/g, '')
}
const btn=()=>{
   router.push({
       path:'/Login',
  })
}
const forget=()=>{
  router.push({
       path:'/Forget',
  })
}
function user() {
    userAccount.name=''
    userAccount.password=''
    userAccount.password2=''
    userAccount.memory=''
}
const login=()=>{
  if(userAccount.name.length<8 || userAccount.password.length<8 || userAccount.password2.length<8 || userAccount.memory.length<8){
      user()
      ElNotification({
      title: 'Error',
      message: '请输入正确的账号和密码',
      type: 'error',
  })
  }else if(userAccount.password!=userAccount.password2){
    userAccount.password2=''
      ElNotification({
      title: 'Error',
      message: '两次密码不一样',
      type: 'error',
  })
  } else{
    proxy.$axios
        .post("/Enroll", {
          name: userAccount.name,
          password:userAccount.password,
          memory:userAccount.memory,
        }) .then((res:any) => {
          console.log(res);
          if(res.status!==200){
            user()
            ElNotification({
              title: 'Error',
              message: '账号已被注册',
              type: 'error',
          })
          }else if(res=='unknown'){
            ElNotification({
              title: 'Error',
              message: '发生未知错误',
              type: 'error',
          })
            user()
          }else ElNotification({
            title: 'Success',
            message: '注册成功，快去登录你的账号吧',
            type: 'success',
        })
        }).catch((err:any) => {
            console.log(err);
        })
  }
  }
</script>

<style lang="scss" scope>
.el-message ,.el-message--warning{
  height: .85rem;
  svg{
    width: .6rem;
  }
}
@mixin wh($w,$h){
        width: $w;
        height: $h;
    }
#box {
    position: absolute;
    @include wh(100%,100%);
    background-color: rgb(29, 67, 89);
}
#box .content .login-wrapper h1 {
  text-align: center;
}
#box .content .login-wrapper .login-form .form-item {
  margin: .25rem 0;
}
#box .content .login-wrapper .login-form .form-item span {
  display: block;
  margin: .0625rem .25rem;
  font-weight: 100;
  font-size: .4rem;
}
#box .content .login-wrapper .login-form .form-item .input-item {
  width: 100%;
  border-radius: .5rem;
  box-sizing: border-box;
  font-size: .25rem;
  font-weight: 200;
}
#box .content .login-wrapper .login-form .form-item .input-item:focus {
  outline: none;
}
.input-item::placeholder{
    font-size:.225rem;
    color: rgb(203, 209, 210);
    font-weight: 600;
}
#box .content .login-wrapper .login-form #login-btn {
  width: 100%;
  border-radius: .5rem;
  color: #fff;
  border: 0;
  font-weight: 100;
  margin-top: .125rem;
  cursor: pointer;
}
#box .content .login-wrapper .divider {
  width: 100%;
  margin: .25rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
#box .content .login-wrapper .divider span:nth-child(1) {
  flex: 1;
}
#box .content .login-wrapper .divider span:nth-child(3) {
  flex: 1;
}
#box .content .login-wrapper .divider .line {
  display: inline-block;
  max-width: 30%;
  width: 30%;
}
#box .content .login-wrapper .divider .divider-text {
  vertical-align: middle;
  margin: 0px .25rem;
  line-height: 0rem;
  display: inline-block;
  width: 1.25rem;
  font-size: .225rem;
}
#box .content .login-wrapper .other-login-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#login-btn,#login-forget{
    width: 45%;
    border-radius: .5rem;
    color: #fff;
    border: 0;
    font-weight: 100;
    margin-top: .125rem;
    cursor: pointer;
    height: .625rem;
    font-size: .25rem;
    font-weight: 600;
}

#login-btn{
    background-color: rgb(24, 138, 195);
}
#login-forget{
    background-color: rgb(209, 131, 21);
}
#box .content .login-wrapper .other-login-item {
  border: 1px solid rgb(214, 222, 228);
  padding: .125rem;
  margin: .125rem;
  cursor: pointer;
}
/*一般大于手机的尺寸CSS*/
@media (min-width: 9.5875rem) {
  #box .content {
     @include wh(100%,100%);
    background: url("../../../assets/imgs/登录logo.jpg") no-repeat;
    background-size: 90% 100%;
    position: absolute;
    right: 15%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
  #box .content .login-wrapper {
    width: 6.25rem;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
  #box .content .login-wrapper h1 {
    text-align: center;
    font-size: .5rem;
    color: rgb(81, 100, 115);
    margin-bottom: .5rem;
  }
  #box .content .login-wrapper .login-form {
    line-height: .45rem;
    margin: .125rem 0;
  }
  #box .content .login-wrapper .login-form .form-item span {
    color: rgb(81, 100, 115);
  }
  #box .content .login-wrapper .login-form .form-item .input-item {
    height: .75rem;
    border: .0125rem solid rgb(214, 222, 228);
    padding: .25rem;
  }
  #box .content .login-wrapper .login-form #login-btn {
    height: .625rem;
    background-color: rgb(63, 45, 103);
    font-size: .25rem;
    font-weight: 600;
  }
  #box .content .login-wrapper .divider .line {
    border-bottom: .0125rem solid rgb(214, 222, 228);
  }
  #box .content .login-wrapper .other-login-item {
    border-radius: .25rem;
  }
  #box .content .login-wrapper .other-login-item img {
    width: .5rem;
    height: .5rem;
  }
  
}
/*手机端CSS*/
@media (max-width: 9.6rem) {
  #box .content {
    width: 100vw;
    height: 100vh;
   background: url("../../../assets/imgs/登录logo.jpg") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  #box .content .login-wrapper {
    width: 70%;
    height: 60%;
    padding-top: 15%;
  }
  #box .content .login-wrapper h1 {
    font-size: 30px;
    color: #fff;
  }
  #box .content .login-wrapper .login-form .form-item {
    margin: .125rem 0;
  }
  #box .content .login-wrapper .login-form .form-item span {
    color: rgb(113, 129, 141);
  }
  #box .content .login-wrapper .login-form .form-item .input-item {
    height: .375rem;
    border: 1px solid rgb(113, 129, 141);
    background-color: transparent;
    color: #fff;
    padding: .25rem;
  }
  #box .content .login-wrapper .login-form #login-btn {
    height: .5rem;
    background-color: rgb(235, 95, 93);
    font-size: .2rem;
  }
  #box .content .login-wrapper .divider .line {
    border-bottom: .0125rem solid #fff;
  }
  #box .content .login-wrapper .divider .divider-text {
    color: #fff;
  }
  #box .content .login-wrapper .other-login-item {
    border-radius: .1875rem;
  }
  #box .content .login-wrapper .other-login-item img {
    width: .4375rem;
    height: .4375rem;
  }
}
</style>
<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-12 20:37:28
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-10 09:46:40
 * @FilePath: \Vue-wallpapers site\src\views\layout\components\layoutNode.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layoutNode">
      <ul>
        <li @click="btn(0,0)" class="active"><a href="#"></a></li>
        <li @click="btn(1,2000)"><a href="#"></a></li>
        <li @click="btn(2,3500)"><a href="#"></a></li>
        <li @click="btn(3,5700)"><a href="#"></a></li>
        <li @click="btn(4,10800)"><a href="#"></a></li> 
      </ul>
  </div>
  <span class="login" v-if="number">未登录</span>
</template>

<script setup lang="ts">
import { onMounted,ref } from 'vue'
import { useStore } from '../../../stores/counter'
import { storeToRefs } from 'pinia'
const number = ref(false)
function fn(e:any){
  const liall=document.querySelectorAll('li')
  liall.forEach((item)=>{
      item.classList.remove("active")
  })
  liall[e].classList.add("active")
}
onMounted(()=>{
  window.addEventListener('scroll', ()=>{
    const scrollTop = document.documentElement.scrollTop
  if(scrollTop<800 && scrollTop<=1999) fn(0)
  else if(scrollTop>=2000 && scrollTop<=3499) fn(1)
  else if(scrollTop>=3500 && scrollTop<=5699) fn(2)
  else if(scrollTop>=5700 && scrollTop<=10799) fn(3)
  else if(scrollTop>=10800) fn(4)
  })

})
const btn=(e:any,h:any)=>{
   const liall=document.querySelectorAll('li')
    liall.forEach((item)=>{
    item.classList.remove("active")
  })
  liall[e].classList.add("active")
   document.documentElement.scrollTop=h
}
</script>

<style lang="scss" scope>
   @mixin wh($w,$h){
        width: $w;
        height: $h;
    }
  .layoutNode{
    @include wh(30px,200px);
    position: fixed;
    top:50%;
    transform: translateY(-50%);
    right: 6%;
      ul{
         @include wh(100%,100%);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        li{
          list-style: none;
           @include wh(12px,12px);  
           background-color: rgb(230, 231, 231);
           border-radius: 50%;
          box-shadow: 1px 2px 2px rgb(78, 78, 78);
        }
         .active::after{
      content: "";
      border: 2px solid  rgb(230, 231, 231);
       @include wh(20px,20px);  
       border-radius: 50%;
       display: block;
       position: absolute;
       transform: translate(-24%, -24%);
      box-shadow: 1px 1px 2px rgb(78, 78, 78);
      }
    }
  }
  .login{
    position: fixed;
    right: 10px;
    top:5px;
    background-color: #c0863a;
    color: rgb(255, 255, 255);
    border-radius: 5px;
  }
 
</style>
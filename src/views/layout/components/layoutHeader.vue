<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-26 08:24:25
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-07 14:59:19
 * @FilePath: \Vue-wallpapers site\src\views\layout\components\layoutHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-26 08:24:25
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-30 20:46:36
 * @FilePath: \Vue-wallpapers - 副本\src\views\layout\components\layoutHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="logo" v-if="istrue" 	class="animate__animated animate__fadeInUp">
      <svg t="1695726722029" class="icon" viewBox="0 0 1394 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22726" _mstVisible="1" width="200" height="200"><path d="M0 796.16s627.136-123.776 1002.624 215.68l191.744 7.936c0 0.064-431.36-459.264-1194.368-223.616M1227.328 811.456v-35.008h84.16l-74.048-79.744h53.696l-66.688-79.808h40.576l-56.512-70.976-20.288 29.504-165.504-178.816h121.344l-165.632-200.704h104.96L938.752 0l-137.728 193.6h93.44L740.48 396.608h116.672l-145.92 139.84-43.072-46.528h86.272L647.168 361.6h65.28L621.44 247.232l-81.6 119.04h62.976L495.488 494.592h81.728L451.2 625.152l160.896-4.608v32.704c-113.984 1.792-240.768 18.112-380.352 55.04 0 0 643.136-103.744 990.592 239.744l171.84-4.032c-0.128 0-55.296-64.448-166.848-132.544m-24.64-14.784a1021.632 1021.632 0 0 0-32.768-17.856l32.768-0.96v18.816z m-40.64-183.232l-4.352 6.464h39.232l-66.816 79.68h50.816l-55.232 57.408a1061.44 1061.44 0 0 0-137.984-52.864V613.44h174.336z m-374.912 4.672l-2.176-2.304h121.216l6.912 67.648 0.448 0.832a1220.736 1220.736 0 0 0-261.696-31.168v-35.008h135.296z" p-id="22727" fill="#fefbfb" _mstVisible="2"></path></svg>
  </div>  
  <div id="title">
    <a href="#" class="animate__animated animate__fadeInUp">图琳壁纸网站</a>
    <a href="#" id="text"  class="animate__animated animate__fadeInUp" >TuLin Wallpaper</a>
  </div>
   <el-button id="a" @click="btn" type="Primary" class="animate__animated animate__fadeInUp animate__delay-1s" round>开始</el-button>
</template>

<script lang="ts" setup>
import 'animate.css'
import {ref} from 'vue'
const istrue=ref(true)
const btn=()=>{
   document.documentElement.scrollTop  = document.querySelector('.homeContext')?.getBoundingClientRect().top
}
</script>

<style scope lang="scss">
@import '/src/styles/color.scss';
    #logo{
    @include wh(1.5rem,1.5rem);
    position: absolute;
    z-index: 2;
    top: 27%;
    left: 46%;
      svg{
          @include wh(1.5rem,1.5rem);
        filter: drop-shadow(2px 2px 3px #4e4e4e);
      }
    }
    #title{
      z-index: 2;
      position: absolute;
      @include tl(50%,50%,-50%,-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: .575rem;
      
      a,text{
          color: $white;
          text-decoration: none;
          font-weight: 600;
      }
      a{
          font-size: .7rem;
           letter-spacing: .0625rem;
      }
      #text{
          font-size: .225rem;
      }
    }
    #a{
       position: absolute;
        z-index: 2;
        font-size: .3125rem;
       @include tl(62%,47%,-50%,-50%);
        letter-spacing: .05rem;
        font-weight: 800;
        filter: drop-shadow(.025rem .025rem .0375rem #4e4e4e);
        text-decoration: none;
        border-radius: .225rem;
        padding: .225rem;
    }

</style>
<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-27 15:42:51
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-06 19:59:10
 * @FilePath: \Vue-wallpapers site\src\views\layout\components\layoutHome.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="homeContext">
        <div class="recommendbox">
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft">
                <h1 v-show="isTl1" id="text1">欢迎来到图琳壁纸网站</h1>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft">
                <h1 v-show="isTl2" id="text2">这是一个简单优美的</h1>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft">
                <h1 v-show="isTl3" id="text3">极具个性化的壁纸网站</h1>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft">
                <h1 v-show="isTl4" id="text4">在这里你可以做什么？</h1>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft">
                <h1 v-show="isTl5" id="text5">下载你想要的壁纸</h1>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft">
                <h1 v-show="isTl6" id="text6">展示你自己的作品</h1>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutDown">
                <div id="text7" v-show="isTl7">
                    <h1>如果你已经对图琳有大致的了解</h1>
                    <h1>那就来看看下面的吧</h1>
                    <h3>在壁纸分类里搜寻你想要的壁纸</h3>
                </div>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__rollOut">
                <div id="isdiv" v-show="isimg1"></div>
            </transition>
            <div class="ss" >
                <transition enter-active-class="animate__animated animate__zoomIn"  leave-active-class="animate__animated animate__fadeOutDown">
                    <div id="isdiv2" v-show="isimg1"></div>
                </transition>
            </div>
            <transition enter-active-class="animate__animated animate__rollIn" leave-active-class="animate__animated animate__fadeOutLeft">
                <div id="isdiv3" v-show="isimg1"></div>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft">
                <div id="hr" v-show="isimg1"></div>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight">
                <div id="hr2" v-show="isimg1"></div>
            </transition>
                <div class="imgContext">
                    <transition-group enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
                        <div v-if="isimg4" class="boximg">
                            <h1>丰富的壁纸类别</h1>
                            <h3>数十种壁纸类型，数万张壁纸</h3>
                            <h3>你会找到的</h3>
                        </div>
                        <div v-if="isimg4" class="boximg2">
                            <img src="/src/assets/imgs/图形1.png" alt="">
                            <img src="/src/assets/imgs/图形2.png" alt="">
                             <h1>个人中心</h1>
                             <h3>发布和收藏属于你的壁纸</h3>
                        </div>
                        <div v-if="isimg4" class="boximg3">
                            <h1>个性化设计</h1>
                            <h3>简单、直观的网站界面、人性化的设计</h3>
                            <img src="/src/assets/imgs/卡片1.jpg" alt="">
                            <img src="/src/assets/imgs/卡片2.jpg" alt="">
                            <img src="/src/assets/imgs/卡片3.jpg" alt="">
                            <img src="/src/assets/imgs/卡片4.jpg" alt="">
                            <img src="/src/assets/imgs/卡片5.jpg" alt="">
                            <img src="/src/assets/imgs/卡片6.jpg" alt="">
                        </div>
                        <div v-if="isimg4" class="boximg4">
                            <h1>高分辨率</h1>
                            <div><span>1024_768、</span>
                            <span>1280_800、</span>
                            <span>1280_1024</span><br>
                            <span>1366_768、</span>
                            <span>1440_900、</span>
                            <span>1600_900</span></div>
                             <h3>多种分辨率供你选择</h3>
                        </div>
                        <div v-if="isimg4" class="boximg5">
                            <h1>丰富的功能</h1> 
                            <h3>在后期能推出游戏、聊天等功能</h3>
                        </div>
                    </transition-group>
                </div>
            </div>
        <div class="imgList" v-for="item in arr" :key="item.id" :style="{
            width:'100%',height:'1000px',backgroundImage:'url('+ item.url +')',backgroundSize:'100% 100%'}">
            <router-link class="hvr-buzz-out" :to="{
                path:'/HomeImg',
                query:{
                    id:item.id
                }
            }">{{item.name}}</router-link>
        </div>
    </div>
    <el-backtop :right="40" :bottom="40" visibility-height="900"/>
</template>

<script setup lang="ts">
import 'hover.css'
import {ref,onMounted} from "vue"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const isTl1=ref(false)
const isTl2=ref(false)
const isTl3=ref(false)  
const isTl4=ref(false)  
const isTl5=ref(false)  
const isTl6=ref(false)  
const isTl7=ref(false)
const isimg1=ref(false) 
const isimg2=ref(false) 
const isimg3=ref(false) 
const isimg4=ref(false) 
gsap.registerPlugin(ScrollTrigger)
    let arr=[
    {url:'/src//assets/imgs/4K专区.png',id:36,name:"4K专区"},
    {url:'/src/assets/imgs/美女模特.png',id:6,name:"美女模特"},
    {url:'/src/assets/imgs/爱情美图.png',id:30,name:"爱情美图"},
    {url:'/src/assets/imgs/风景大片.png',id:9,name:"风景大片"},
    {url:'/src/assets/imgs/小清新.png',id:15,name:"小清新"},
    {url:'/src/assets/imgs/动漫卡通.png',id:26,name:"动漫卡通"},
    {url:'/src/assets/imgs/明星风尚.png',id:11,name:"明星风尚"},
    {url:'/src/assets/imgs/萌宠动物.png',id:14,name:"萌宠动物"},
    {url:'/src/assets/imgs/游戏壁纸.png',id:5,name:"游戏壁纸"},
    {url:'/src/assets/imgs/汽车天下.png',id:12,name:"汽车天下"},
    {url:'/src/assets/imgs/炫酷时尚.png',id:10,name:"炫酷时尚"},
    {url:'/src/assets/imgs/月历壁纸.png',id:29,name:"月历壁纸"},
    {url:'/src/assets/imgs/影视剧照.png',id:7,name:"影视剧照"},
    {url:'/src/assets/imgs/节日美图.png',id:13,name:"节日美图"},
    {url:'/src/assets/imgs/军事天地.png',id:22,name:"军事天地"}]
    onMounted(()=>{
    ScrollTrigger.create({
        trigger:".recommendbox",
        start:'top top',
        end:'8300',
        // markers:true,
        pin:true,
    })
     const divs = document.querySelectorAll('.homeContext')[0].children
      Array.from(divs).forEach((div)=> {
        gsap.fromTo(
            div,
            {
                backgroundPositionY: `-${window.innerHeight / 2}px`
            },
            {
                backgroundPositionY: `${window.innerHeight / 2}px`,
                // duration: 4,
                ease: 'none',
                scrollTrigger: {
                    trigger: div,
                    scrub: true
                }
        })
    })
    let time=null
    function throttle(data:any,time:any){
        if(time!=null) {
            clearTimeout(time)
            time=null
            }
        if(time=null){
                time=setTimeout(()=>{
                    data()
                     clearTimeout(time)
                     time = null
            },time)
            }
    }
     window.addEventListener('scroll', function(){
        let scrollTop = document.documentElement.scrollTop
        if(scrollTop>=1300 && scrollTop<=2800){
              isTl1.value=true
        }else isTl1.value=false
        if (scrollTop>=1400 && scrollTop<=2950) {
            isTl2.value=true
        }else isTl2.value=false
        if (scrollTop>=1600 && scrollTop<=3100) {
            isTl3.value=true
        }else isTl3.value=false
        if (scrollTop>=3200 && scrollTop<=4100) {
            isTl4.value=true
        }else isTl4.value=false
        if (scrollTop>=3350 && scrollTop<=4200) {
            isTl5.value=true
        }else isTl5.value=false
        if (scrollTop>=3500 && scrollTop<=4300) {
            isTl6.value=true
        }else isTl6.value=false
         if (scrollTop>=8200) {
            isTl7.value=true
        }else isTl7.value=false
        if (scrollTop>=1300 && scrollTop<=5000) {
            isimg1.value=true
        }else isimg1.value=false
         if (scrollTop>=1600 && scrollTop<=5200) {
            isimg2.value=true
        }else isimg2.value=false
        if (scrollTop>=5200 && scrollTop<=8000) {
            isimg4.value=true
        }else isimg4.value=false  
         if(scrollTop>=5400 && scrollTop<=5999){
           throttle(render1(),100)
          function render1(){
                gsap.to('.boximg',{x:0,y:0,rotation:0,duration:1,})
                gsap.to('.boximg2',{x:0,y:0,rotation:15,duration:1,})
                gsap.to('.boximg3',{x:0,y:100,rotation:15,duration:1,})
                gsap.to('.boximg4',{x:0,y:100,rotation:15,duration:1,})
                gsap.to('.boximg5',{x:0,y:100,rotation:15,duration:1,})
           }
        }
        if(scrollTop>=6000 && scrollTop<=6500){
           throttle(render2(),100)
          function render2(){
                gsap.to('.boximg',{x:-550,y:100,rotation:-15,duration:1,})
                gsap.to('.boximg2',{x:-550,y:-100,rotation:0,duration:1,})
                gsap.to('.boximg3',{x:-550,y:-100,rotation:15,duration:1,})
                gsap.to('.boximg4',{x:-550,y:-100,rotation:15,duration:1,})
                gsap.to('.boximg5',{x:-550,y:-100,rotation:15,duration:1,})
           }
        }
        else if(scrollTop>=6501 && scrollTop<=7000){
            throttle(render3(),100)
            function render3() {
                gsap.to('.boximg',{x:-1100,y:200,rotation:-15,duration:1,})
                gsap.to('.boximg2',{x:-1100,y:0,rotation:-15,duration:1,})
                gsap.to('.boximg3',{x:-1100,y:-200,rotation:0,duration:1,})
                gsap.to('.boximg4',{x:-1100,y:-200,rotation:15,duration:1,})
                gsap.to('.boximg5',{x:-1100,y:-100,rotation:15,duration:1,})
            }
        }
        else if(scrollTop>=7001 && scrollTop<=7500){
            throttle(render4(),200)
            function render4() {
                gsap.to('.boximg',{x:-1550,y:200,rotation:-15,duration:1,})
                gsap.to('.boximg2',{x:-1550,y:100,rotation:-15,duration:1,})
                gsap.to('.boximg3',{x:-1550,y:-100,rotation:-15,duration:1,})
                gsap.to('.boximg4',{x:-1550,y:-300,rotation:0,duration:1,})
                gsap.to('.boximg5',{x:-1550,y:-300,rotation:15,duration:1,})
            }
          
        }
        else if(scrollTop>=7501&& scrollTop<=7999){
            throttle(render5(),200)
            function render5() {
                gsap.to('.boximg',{x:-2100,y:300,rotation:-15,duration:1,})
                gsap.to('.boximg2',{x:-2100,y:200,rotation:-15,duration:1,})
                gsap.to('.boximg3',{x:-2100,y:0,rotation:-15,duration:1,})
                gsap.to('.boximg4',{x:-2100,y:-200,rotation:-15,duration:1,})
                gsap.to('.boximg5',{x:-2100,y:-390,rotation:0,duration:1,})
            }
        }
     })
})
</script>

<style  lang="scss" scope>
 @mixin wh($w,$h){
        width: $w;
        height: $h;
    }
      .homeContext{
        position: absolute; 
        width: 100%;
        height: 35rem;
        top: 100%;
        .recommendbox{
            height: 40rem;
            width: 100%;
           background: linear-gradient(to bottom, #162422, #183430, #18463f, #17584d, #136a5c, #0f766c, #08837d, #008f8e, #0096a5, #009dbc, #00a2d3, #3fc2f6);
        }
        .imgList{
            display: flex;
            flex-direction: column;
            position: relative;
            a{
                position: absolute;
                color: white;
                font-size: .5rem;
                left: 44%;
                top: 50%;
                letter-spacing: 5px;
                font-weight: 800;
                filter: drop-shadow(2px 2px 3px #4e4e4e);
                text-decoration: none;
            }
        }
    }
    
    #text1,#text2,#text3,#text4,#text5,#text6,#text7{
        position: absolute;
        color: white;
        letter-spacing: .0625rem;
        font-size: .4rem;
     }
    #text1,#text4{
        top: 1.25rem;
        left: 2.5rem;
     }
    #text2,#text5{
        top: 2.1875rem;
        left: 3.125rem;
     }
    #text3,#text6{
        top: 3.125rem;
        left:3.75rem;
     }
     #text7{
        position: fixed;
        color: white;
       left: 6rem;
       top: 14em;
        h1:nth-child(2){
        margin-top: .1875rem;
        margin-left: 2rem;
      }
      h3{
        margin-top: .3125rem;
         color: rgb(196, 196, 196);
         margin-left: 2rem;
      }
     }
     #isdiv{
        position: absolute;
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 50%;
        background-image: url(https://uploads-ssl.webflow.com/64234435e1b26d060e67230a/64234435e1b26dcb4767235e_texture.png),linear-gradient(279deg,#275227,#3dd3b0 25%);
        right: -2.7rem;
        top: -5.5%;
        filter: blur(.0075rem);
        opacity: .85!important;
    }
    .ss{
        position: absolute;
        width: 6.25rem;
        height: 11.25rem;
       left: 2.5rem;
        top: 5.25rem;
        border-radius: 3.75rem; 
        transform: rotate(45deg);
    }
    #isdiv2{
        position: absolute;
        width: 6.25rem;
        height: 11.25rem;
        border-radius: 3.75rem;
        background-image: url(https://uploads-ssl.webflow.com/64234435e1b26d060e67230a/64234435e1b26dcb4767235e_texture.png), linear-gradient(to right bottom, #edec96, #fadb93, #ffcb97, #fcbe9f, #f3b3a7, #f0b1a0, #ecaf99, #e8ae92, #dcb97f, #bdc87b, #8bd690, #27e1bc);
        opacity: .85!important;
    }
     #isdiv3{
        position: absolute;
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 3.75rem;
        background-image: url(https://uploads-ssl.webflow.com/64234435e1b26d060e67230a/64234435e1b26dcb4767235e_texture.png),linear-gradient(to right top, #e165e7, #ff68aa, #ff8b7e, #fbb171, #decf89);
        top: 5.975rem;
        left: -1.125rem;
        opacity: .85!important;
    }
    #hr{
        position: fixed;
        background: whitesmoke;
        height: .0375rem;
        width:74%;
        left: 5%;
        top: .1875rem;
        border-radius:.125rem;
    }
    #hr2{
        position: fixed;
        background: whitesmoke;
        height: .0375rem;
        width:40%;
        right: 4%;
        bottom: 10%  ;
        border-radius:.125rem;
    }
    .imgContext{
        position: fixed;
        @include wh(6rem,7.5rem);
        top: 3rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .boximg,.boximg2,.boximg3,.boximg4,.boximg5{
        position: absolute;
        @include wh(6rem,7.5rem);
        border-radius :.375rem;
        border: 1px solid rgb(129, 129, 129);
        backdrop-filter: blur(2px);
        background: rgba(7, 168, 176, 0.246);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        font-size: .3rem;
        box-shadow: inset 1px 1px 3px rgba(255, 255, 255, .15);
        h3{
            color: rgb(196, 196, 196);
        }
    }
    .boximg{
        h1{
            margin-top: 3.125rem;
            font-size: .5rem;
        }
        h3:nth-child(2){
            margin-top: .125rem;
        }
       
    }
    .boximg2{
        left: 8.125rem;
        top:1.25rem;
        rotate: 15deg;
        overflow: hidden;
        position: relative;
        img{
            @include wh(5rem,5rem)
        }
        img:nth-child(1){
            position: absolute;
            left: 40%;
            top:20%;
            transform: rotate(-15deg);
        }
         img:nth-child(2){
            position: absolute;
            bottom: -21%;
            left: -21%;
            transform: rotate(-85deg);
        }
        h1{
            font-size: .5rem;
            margin-top: 1rem;
        }
        h3{
            margin-top: .125rem;
        }
    }
    .boximg3{
        left: 16.25rem;
        top: 2.5rem;
        rotate: 30deg;
        overflow: hidden;
         h1{
            margin-top: 1.25rem;
            font-size: .5rem;
        }
        h3{
            margin-top: .125rem;
        }
        img{
            position: absolute;
            border-radius: .125rem;
            box-shadow: 1px 1px 3px 2px rgb(99, 99, 99);
        }
        img:nth-child(3){
            @include wh(250px,150px);
            top: 70%;
            left: 35%;
        }
        img:nth-child(4){
              @include wh(250px,150px);
              top:44%;
              
        }
        img:nth-child(5){
              @include wh(200px,120px);
              top:49%;
              left: -19.5%;
        }
        img:nth-child(6){
             @include wh(200px,120px);
              top:49%;
              left: 78%;
        }
        img:nth-child(7){
             @include wh(200px,120px);
              top:70%;
              left: -8%;
        }
        img:nth-child(8){
             @include wh(200px,120px);
              top:70%;
              left: 89%;
        }
    }
    .boximg4{
        left: 24.375rem;
        top: 3.75rem;
        rotate: 45deg;
        h1{
            margin-top: 2.5rem;
           
        }
    
        span{
            font-size: .25rem;
        }
        span,h3{
             color: rgb(196, 196, 196);
             margin-top: .125rem;
        }
    }
    .boximg5{
         left: 32.5rem;
        top: 5rem;
        rotate: 60deg;
        h1{
            margin-top: 1.25rem;
        }
        h3{
            margin-top: .125rem;
        }
    }
</style>
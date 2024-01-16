<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-19 11:33:55
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-16 22:25:50
 * @FilePath: \Vue-wallpapers site\src\views\Dynamic\components\main\dynamicPages.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="dynamicPages">
      <div v-if="istrue" class="dynamicPages_box">
        <div id="dynamicImg" v-for="(item,index) in data.slice(num.num1,num.num2)" key="index">
            <div class="dynamicImg_tit">
              <img :src="user.avatar" alt="">
            </div>
            <div class="dynamicImg_main">
              <h1>{{ user.name }}</h1>
              <p>{{ item.img_time }} - 投稿了作品</p>
              <div class="main_box">
                  <div class="main_img">
                   <img :src="item.img_url[0]" alt="">
                  </div>
                  <div class="main_text">
                    <p>{{ item.img_introduce }}</p>
                    <p>{{ item.img_exegesis }}</p>
                  </div>
              </div>
              <p>
                <svg t="1705413645135" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14936" width="200" height="200"><path d="M840.88 330H631.67c-11.17 0-19.3-10.6-16.41-21.38l23.16-86.43c14.45-53.93-17.55-109.36-71.48-123.81A98.616 98.616 0 0 0 541.36 95c-43.88 0-84.3 29.38-96.17 73.66l-19.8 73.88C411.57 294.12 364.82 330 311.41 330H150c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h618.88c30.8 0 57.23-21.94 62.9-52.21l72-384c7.39-39.38-22.82-75.79-62.9-75.79zM182 394h93.63L248.2 778H182V394z m586.88 384H312.37l27.6-386.39c69.97-11.15 128.47-62.44 147.25-132.51l19.8-73.88c4.07-15.2 18.52-26.22 34.35-26.22 3.01 0 6.04 0.4 9.01 1.2 19.76 5.29 31.52 25.68 26.23 45.43l-23.16 86.43c-6.57 24.52-1.47 50.13 13.98 70.26 15.45 20.14 38.87 31.69 64.25 31.69h209.21L768.88 778z" fill="#dbdbdb" p-id="14937"></path></svg>
                总共有99人点赞了</p>
              <div class="information_nav">
                  <div>
                    <svg t="1705413296074" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12254" width="200" height="200"><path d="M512 73.142857v73.142857C310.016 146.285714 146.285714 310.016 146.285714 512s163.730286 365.714286 365.714286 365.714286 365.714286-163.730286 365.714286-365.714286h73.142857c0 242.358857-196.498286 438.857143-438.857143 438.857143S73.142857 754.358857 73.142857 512 269.641143 73.142857 512 73.142857z m354.450286 122.258286l-339.309715 339.309714L475.428571 482.998857 812.141714 146.285714h-201.691428V73.142857h329.142857v329.142857h-73.142857V195.401143z" fill="#dbdbdb" p-id="12255"></path></svg>
                      <span>分享</span>
                  </div>
                  <div>
                    <svg t="1705413319528" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13429" width="200" height="200"><path d="M157.568 751.296c-11.008-18.688-18.218667-31.221333-21.802667-37.909333A424.885333 424.885333 0 0 1 85.333333 512C85.333333 276.362667 276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667a424.778667 424.778667 0 0 1-219.125333-60.501334 2786.56 2786.56 0 0 0-20.053334-11.765333l-104.405333 28.48c-23.893333 6.506667-45.802667-15.413333-39.285333-39.296l28.437333-104.288z m65.301333 3.786667l-17.258666 63.306666 63.306666-17.258666a32 32 0 0 1 24.522667 3.210666 4515.84 4515.84 0 0 1 32.352 18.944A360.789333 360.789333 0 0 0 512 874.666667c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512c0 60.586667 14.848 118.954667 42.826667 171.136 3.712 6.912 12.928 22.826667 27.370667 47.232a32 32 0 0 1 3.338666 24.714667z m145.994667-70.773334a32 32 0 1 1 40.917333-49.205333A159.189333 159.189333 0 0 0 512 672c37.888 0 73.674667-13.173333 102.186667-36.885333a32 32 0 0 1 40.917333 49.216A223.178667 223.178667 0 0 1 512 736a223.178667 223.178667 0 0 1-143.136-51.690667z" fill="#dbdbdb" p-id="13430"></path></svg>
                    <span>99</span>
                  </div>
                  <div>
                    <svg t="1705413352167" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14494" width="200" height="200"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z" fill="#e6e6e6" p-id="14495"></path></svg>
                    <span>99</span>
                  </div>
              </div>
            </div>
        </div>
    </div>
    <div ref="boxLoads" class="boxLoad">
            <img v-if="isLoad" src="/src/assets/imgs/liumangxing.png" alt="">
        </div>
  </div>
</template>

<script setup lang="ts">
import {ref,onMounted,reactive} from 'vue'
import { useStore } from '../../../../stores/counter'
import {getRecommend} from '../../../../apis/getRecommend'
import { warning } from '../../../../apis/messagePrompt'
const istrue=ref(false)
const isLoad=ref(false)
const boxLoads=ref()
const data=ref()
const num=reactive({
    num1:0,
    num2:4,
})
const user=ref()
onMounted(()=>{
  user.value=useStore().$state.information
  if(useStore().$state.login){
    getRecommend({
      url:'/UserImg'
    }).then((result)=>{
    if(result.status==200){
      console.log(result.data);
      data.value=result.data
      istrue.value=true
     setTimeout(()=>{
      const ob:any = new IntersectionObserver(
    (entries:any)=>{
      if(entries[0].isIntersecting){ 
        isLoad.value = true     
        setTimeout(()=>{
          num.num2=num.num2*2
            isLoad.value = false
            if(data.value.length <= data.value.slice(num.num1,num.num2).length){
            warning('已经是极限啦')
        }
        },500)
      }
    },{
        threshold:0,
    }
);
    ob.observe(boxLoads.value)

     },200)
    }
    else{
        warning('获取壁纸信息失败')
    }
  })
  }
})



</script>

<style lang="scss" scoped>
@import '/src/styles/color.scss';
#dynamicPages{
  @include wh3(96%,10rem);
  position: relative;
  .dynamicPages_box{
    margin: .5rem ;
    @include wh3(100%,10rem);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    #dynamicImg{
      background-color: $white;
      @include wh(49.1%,5.7rem);
      margin:.125rem .1rem .125rem;
      display: flex;
      box-shadow: 0 0.025rem 0.05rem rgba(0, 0, 0, 0.0784313725);
      .dynamicImg_tit{
        padding-top: .375rem;
        flex: 1;
        img{
          margin-left: 50%;
          transform: translateX(-50%);
          @include wh(1.2rem,1.2rem);
          border-radius: 50%;
        }
      }
      .dynamicImg_main{
        flex: 5;
        padding: .3rem 0rem .3rem;
        h1{
          @include fontsize($Oversized,$black1);
          line-height: .625rem;
        }
        p{
          @include fontsize($verysmallSize,$graysColor3);
          font-family: '方正幼圆';
        }
        p:nth-child(4){
          display: flex;
          margin-top: .125rem;
          align-items: center;
          svg{
                   @include wh(.4rem,.4rem);
          }
          @include fontsize($verysmallSize,$textColor);
              font-family: '方正幼圆';  
        }
        .main_box{
          @include wh(100%,3.2rem);
          display: flex;
          padding: .25rem .25rem 0rem 0rem; 
          .main_img{
            flex: 1;
            img{
              @include wh(100%,100%);
             border-top-left-radius: .0625rem;
             border-bottom-left-radius: .0625rem;
            }
          }
          .main_text{
            flex:1;
            border: .0125rem solid $textColor;
            border-top-right-radius: .0625rem;
             border-bottom-right-radius: .0625rem;
            span,p{
              padding-left: .375rem;
              line-height: .5rem;
            }
              p{
              @include fontsize($verysmallSize,$graysColor4);
              font-family: '方正幼圆';
              padding-left: .375rem;
              line-height: .4rem;
            }
            p:nth-child(1){
              @include fontsize($middleSize2,$black1);
              line-height: .5rem;
              padding-left: .4rem;
              margin-top: .25rem
            }
          }
          
        }
        .information_nav{
            @include wh(100%,.6rem);
            @include flex9();
            div{
              flex: 1;
              @include flex5();
                svg{
                   @include wh(.4rem,.4rem);
                }
                span{
                  @include fontsize($verysmallSize,$textColor);
                  line-height:.4rem ;
                  margin-left: .1rem; 
                }
                span:hover{
                  color: $blue;
                }
            }
          }
      }
    }
  }
  .boxLoad{
    position: absolute;
    @include wh(1.5rem,1.5rem);
    left: 52%;
    transform: translateX(-50%);
    bottom: -1rem;
    img{
      @include wh3(1.5rem,1.5rem);
      animation: spin 3s linear infinite;
    }
  }
}
@keyframes spin {
 to{
    transform: rotate(0deg);
  }
  from{
    transform: rotate(360deg);
  }
}
</style>
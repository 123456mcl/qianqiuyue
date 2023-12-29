<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-19 23:13:45
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-29 23:55:24
 * @FilePath: \Vue-wallpapers site\src\views\Wallpaper\components\ImageComponent\hottest.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div v-masonry class="imgbox">
        <div v-masonry-tile v-for="item in data" :fit-width="false" :key="item.img_id" style="margin-left: .14rem;margin-top: .3rem;">
            <img :src="item.img_url[0]" alt="" @click="btn([item.img_id,item.name])">
            <div class="information">
                <div class="information1">
                    <img :src="item.avatar[0].avatar" alt="">
                    <h1>{{ item.avatar[0].name }}</h1>
                </div>
                <div class="information2">
                    <h1>{{ item.img_introduce }}</h1>
                </div>
                <div class="information3">
                    <svg style="width:.35rem;height:.35rem;" t="1703140140340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10308" width="200" height="200"><path d="M692 112l-9.472 0.16a264.32 264.32 0 0 0-167.232 67.712L512 182.912l-3.296-3.04A264.224 264.224 0 0 0 332 112C183.712 112 64 234.752 64 385.6c0 217.408 228.864 454.432 432.512 523.84a48 48 0 0 0 30.976 0C731.136 840 960 603.008 960 385.6c0-150.848-119.712-273.6-268-273.6z" fill="#bfbfbf" p-id="10309"></path></svg>
                    <h1>{{ item.img_like }}</h1>
                </div>
            </div>
        </div>
        <wallpaperFooter/>
    </div>
    <router-view/> 
</template>

<script setup lang="ts">
import { onActivated,ref,reactive } from 'vue';
import {getRecommend} from '../../../../apis/getRecommend'
import wallpaperFooter from '../../../../views/Wallpaper/components/ImageComponent/wallpaperFooter.vue'
import { ElNotification } from 'element-plus';
import { useRouter } from 'vue-router'
const router = useRouter()
const data=ref<any>({})
onActivated(()=>{
  getRecommend({
    url:'/api/latestImages'
  }).then((result)=>{
    if(result.status==200){
        data.value = result.data
    }
    else{
        ElNotification({
        title: '提示',
        message: '获取壁纸信息失败',
        type: 'warning',
    })
    }
  })
})
const btn=(e:any)=>{
    const datas = JSON.stringify(data.value)
    router.push({
        path:'/Wallpaper/hottestList',
        query:{
		  data:datas,
          id:e[0],
          name:e[1],
		}
    })
    const body:HTMLBodyElement | null | any =document.querySelector('body')
    body.style.overflowY = 'hidden';
}
</script>
  
<style lang="scss" scope>
    $size:.3125rem;
    @import '/src/styles/color.scss';
    .imgbox{
        position: relative;
        width: 95%;
        margin-top: .5rem;
        border-radius: .1rem;
      div{
        width: 5.5rem;
        background-color: $white;
        overflow: hidden;
        border-radius: .1rem;
        img{
            width: 100%;
            vertical-align: bottom;
        }
        .information{
            margin-top: .05rem;
            height: 1rem;
            display: flex;
            .information1{
                flex: 2.4;
                @include flex2();
                    img{
                        @include wh(.7rem,.7rem);
                        border-radius: 50%;
                    }
                h1{
                    font-size: $size;
                }
                h1:hover{
                    color: rgb(245,199,144);
                }
            }
            .information3{
                flex: 1;
                @include flex2();
                padding-right: .25rem;
                h1{
                    font-size: .3125rem;
                    color: rgb(191,191,191);
                }
                h1:hover{
                    color: rgb(245,199,144);
                }
            }
            .information2{
                flex: 3.5;
                font-size: .14rem;
                display: flex;
                align-items: center;
                color: rgb(98, 97, 97);
                padding-left: .4rem;
            }
        }
      } 
    }
</style>
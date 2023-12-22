<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-19 23:13:45
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-22 22:24:50
 * @FilePath: \Vue-wallpapers site\src\views\Wallpaper\components\ImageComponent\hottest.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div v-masonry transition-duration="0.3s" class="imgbox">
        <div v-masonry-tile v-for="item in data" :key="item.img_id" style="margin-left: .14rem;margin-top: .3rem;">
            <img :src="item.img_url[0]" alt="" @click="btn(item.img_id)" >
            <div class="information">
                <div>
                    <img :src="item.avatar[0].avatar" alt="">
                    <h1>{{ item.avatar[0].name }}</h1>
                </div>
                <div>
                    <h1>{{ item.img_introduce }}</h1>
                </div>
                <div>
                    <svg style="width:.35rem;height:.35rem;" t="1703140140340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10308" width="200" height="200"><path d="M692 112l-9.472 0.16a264.32 264.32 0 0 0-167.232 67.712L512 182.912l-3.296-3.04A264.224 264.224 0 0 0 332 112C183.712 112 64 234.752 64 385.6c0 217.408 228.864 454.432 432.512 523.84a48 48 0 0 0 30.976 0C731.136 840 960 603.008 960 385.6c0-150.848-119.712-273.6-268-273.6z" fill="#bfbfbf" p-id="10309"></path></svg>
                    <h1>{{ item.img_like }}</h1>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted,ref,reactive } from 'vue';
import {getRecommend} from '../../../../apis/getRecommend'
import { ElNotification } from 'element-plus';
import { useRouter } from 'vue-router'
const router = useRouter()
const data=ref({})
const istrue=ref(false)
onMounted(()=>{
  getRecommend('/api/latestImages').then((result)=>{
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
    istrue.value=true
    router.push({
        path:'/Wallpaper/hottestList',
        query:{
		  data:JSON.stringify(data.value),
          id:e
		}
    })
}
</script>
  
<style lang="scss" scope>
    $size:.3125rem;
    @mixin wh($w,$h){
        width: $w;
        height: $h;
    }
    @mixin flex{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .detailed{
        position: absolute;
        top: 0;
        min-width: 90%;
        min-height: 100%;
        background-color: cadetblue;
        z-index: 3;
        left: 50%;
       transform: translateX(-50%);
    }
    .imgbox{
        @include wh(95%,20rem);
        margin-top: .5rem;
        border-radius: .1rem;
      div{
        width: 5.5rem;
        img{
            width: 100%;
            vertical-align: bottom;
            border-radius: .125rem;
        }
        .information{
            margin-top: .05rem;
            height: 1rem;
            display: flex;
            div:first-child{
                flex: 2.4;
                @include flex();
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
            div:last-child{
                flex: 1;
                @include flex();
                padding-right: .25rem;
                h1{
                    font-size: .3125rem;
                    color: rgb(191,191,191);
                }
                h1:hover{
                    color: rgb(245,199,144);
                }
            }
            div:nth-child(2){
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
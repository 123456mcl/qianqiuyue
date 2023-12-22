<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-19 23:13:15
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-22 22:24:24
 * @FilePath: \Vue-wallpapers site\src\views\Wallpaper\components\ImageComponent\latest.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
    <div id="Details">
        <div class="bgcDetails">
            <div class="Details_Img">
                <div v-for="(item,index) in dataimg">
                    <img :src="item" alt="">
                </div>
            </div>
            <div class="Details_Information">
                <div class="Information_avatar"></div>
                <div class="Information_more"></div>
                <div class="Information_wallpaper"></div>
            </div>
            <div class="btn" @click="cliclkBtn">
                <svg t="1703169912951" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5871" width="200" height="200"><path d="M512.001 15.678C237.414 15.678 14.82 238.273 14.82 512.86S237.414 1010.04 512 1010.04s497.18-222.593 497.18-497.18S786.589 15.678 512.002 15.678z m213.211 645.937c17.798 17.803 17.798 46.657 0 64.456-17.798 17.797-46.658 17.797-64.456 0L512.001 577.315 363.241 726.07c-17.799 17.797-46.652 17.797-64.45 0-17.804-17.799-17.804-46.653 0-64.456L447.545 512.86 298.79 364.104c-17.803-17.798-17.803-46.657 0-64.455 17.799-17.798 46.652-17.798 64.45 0l148.761 148.755 148.755-148.755c17.798-17.798 46.658-17.798 64.456 0 17.798 17.798 17.798 46.657 0 64.455L576.456 512.86l148.756 148.755z m0 0" fill="#e6e6e6" p-id="5872"></path></svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted,ref,reactive } from 'vue';
import { useRoute,useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const data=ref()
const dataimg=ref()
const cliclkBtn=()=>{
  router.back();
}
onMounted(()=>{
    data.value = JSON.parse(route.query.data)[route.query.id-1]
    dataimg.value=data.value.img_url
})
</script>
  
<style lang="scss">
  @mixin wh($w,$h){
        width: $w;
        height: $h;
    }
    #Details{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.2);
        z-index: 3;
        overflow-y: scroll ;
        .bgcDetails{
            position: relative;
            @include wh(80%,100%);  
            padding-top: 40px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            .Details_Img{
                flex: 3;
                div{
                    height: 8rem;
                    padding: .125rem .125rem .0625rem;
                    background-color: white;
                    img{
                        border-radius: .07rem;
                        @include wh(100%,100%);
                    }
                }
                div:last-child{
                    padding-bottom: .625rem;
                }
            }
            .Details_Information{
                flex: 1;
                margin-left: .25rem;
                display: flex;
                flex-direction: column;
                div{
                    background-color: white;
                    border-radius: .1rem;
                }
                .Information_avatar{
                    height: 4rem;
                }
                .Information_more{
                    height: 1rem;
                }
                .Information_wallpaper{
                    min-height: 6rem;
                }
                .Information_more,.Information_wallpaper{
                    margin-top: .25rem;
                }
            }
            .btn{
                position: absolute;
                @include wh(.8rem,.8rem);
                top: .4rem;
                right: -1rem;
                svg{
                    @include wh(100%,100%);
                    opacity: .8; 
                    transition: all .5s;
                }
                svg:hover{
                    opacity: 1;
                }
            }
        }
    }
</style>
<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-01 20:26:45
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-05 11:06:43
 * @FilePath: \Vue-wallpapers site\src\views\Home\components\imgContent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <transition v-if="isboxs" enter-active-class="animate__fadeInDown" leave-active-class="animate__fadeOutUp">
        <div class="boxLoad" >
            <img src="/src/assets/imgs/liumangxing.png" alt="">
        </div>
    </transition>
        <div class="contents" v-masonry v-if="isbox" style="width: 100%;min-height: 10rem;">
        <div v-masonry-tile class="images" v-for="items in newimg"> 
            <img :style="{height:225 + Object.keys(items).map(item=>items[item])[2].split('x')[1]/27 + 'px'}"  v-lazy="Object.keys(items).map(item=>items[item])[Math.floor(Math.random() * 6) + 15]" alt="" @click="preview(items.url)">
        </div>
    </div>
    <div id="boximgs" style="margin-top: 1rem;">
        <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="220"
            class="mt-4"
            @current-change="handelCurrentChange"/>
    </div>
</template>

<script setup lang="ts">
import {onMounted,ref,reactive,onDeactivated} from 'vue'
import { useRoute } from 'vue-router';
import {useStore} from '../../../stores/counter'
import { preview } from 'v-preview-image'
const img=ref()
const newimg=ref()
const router= useRoute()
const isbox=ref(false)
const isboxs=ref(true)
const num=reactive({
      num1:0,
      num2:30,
      num3:0
    })
onMounted(()=>{
    const data:any = useStore().$state.data.filter((item:any)=>item.id==Number(router.fullPath.substring(9)))[0]
    data.arrdata.then((result: any) => {
        img.value=result
        num.num3=img.value.length
        newimg.value=img.value.slice(num.num1,num.num2)
        isbox.value=true
    })
    setTimeout(()=>{
        isboxs.value=false
    },500)
})
let time:any=null
const handelCurrentChange=(value:any)=>{
    isbox.value=false
     num.num1=30*value-30
     num.num2=30*value
     newimg.value=img.value.slice(num.num1,num.num2)
     time = setTimeout(()=>{
        isbox.value=true
    },200)
    }
  
</script>

<style lang="scss" scoped>
@import '/src/styles/color.scss';
    .contents{
        position: relative;
        padding-left: .4rem;
        background-color: $white;
    .images{
        margin-left: .05rem;
        margin-top:.05rem ;
        width: 5.7rem;
        border-radius: .03rem;
        overflow: hidden;
        img{
            vertical-align: top;
            width: 100%;
        }
    }
}
.boxLoad{
    background-color: $white;
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: center;
        margin: .125rem 0rem .2rem;
    }
    .boxLoad img {
       @include wh(1.25rem,1.25rem);
        border-radius: 50%;
        animation: spin 3s linear infinite;
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
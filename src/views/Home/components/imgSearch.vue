<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-03 17:26:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-07 16:50:58
 * @FilePath: \Vue-wallpapers site\src\views\Home\components\imgSearch.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="animate__animated animate__fadeIn" id="contents" style=" width: 100%;min-height: 10rem;">
        <div class="wow animate__bounce" data-wow-duration="1s" data-wow-delay=".5s" v-if="isboxs" id="boxLoad">
            <img src="/src/assets/imgs/liumangxing.png" alt="">
        </div>
        <div class="animate__animated animate__fadeIn" v-if="isbox" v-masonry style=" width: 100%;min-height: 10rem;">
            <div  class="wow animate__zoomIn" data-wow-duration="1s" data-wow-delay=".5s" v-masonry-tile id="images" v-for="items in newimg" :key="items.class_id"> 
                <img  class="animate__animated animate__fadeIn" :style="{height:(225 + Object.keys(items).map(item=>items[item])[2].split('x')[1]/27)/80 + 'rem'    }"  v-lazy="Object.keys(items).map(item=>items[item])[Math.floor(Math.random() * 6) + 15]" alt="" @click="preview(items.url)">
                <div class="svg">
                    
                </div>
            </div>
        </div>
    </div>
    <div id="boximgs" style="margin-top: 1rem;margin-left:40%">
        <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="arrdata.length"
            class="mt-4"
            @current-change="handelCurrentChange"/>
    </div>
</template>

<script setup lang="ts">
import { preview } from 'v-preview-image'
import {onMounted,ref,reactive,watch} from 'vue'
import { useRoute } from 'vue-router';
import {useStore} from '../../../stores/counter'
const router= useRoute()
const route= useRoute()
const arrdata:any=ref([])
const newimg:any=ref()
const isbox=ref(false)
const isboxs=ref(true)
const num=reactive({
      num1:0,
      num2:30,
      num3:0
    })
    watch(
      () => router.params,
      () => {
        window.location.reload();
      }
    );
onMounted(() =>{
    arrdata.value = []
    const { data } = useStore().$state
        data.forEach((v:any)=>{
            v.arrdata.then((data:any)=>{
                data.forEach((value:any)=>{
                    if(value.tag?.indexOf(router.query.data)!=-1){
                        arrdata.value.push(value)
                    }
                })
           })
        })
    setTimeout(()=>{
            newimg.value = arrdata.value.slice(num.num1,num.num2)
            isboxs.value=false
            isbox.value=true
    },300)
  
})
let time:any=null
const handelCurrentChange=(value:any)=>{
    isbox.value=false
    isboxs.value=true
     num.num1=30*value-30
     num.num2=30*value
     newimg.value = arrdata.value.slice(num.num1,num.num2)
     time =setTimeout(()=>{
        isbox.value=true
        isboxs.value=false
    },300)
    }
</script>

<style lang="scss" scoped>
@import '/src/styles/color.scss';
#contents{
        position: relative;
        padding-left: .4rem;
        background-color: $white;
    #images{
        position: relative;
        margin-left: .05rem;
        margin-top:.05rem ;
        width: 5.7rem;
        border-radius: .03rem;
        overflow: hidden;
        background-color: $white;
        img{
            vertical-align: top;
            width: 100%;
        }
        .svg{
            position: absolute;
            @include wh(1.25rem,1.25rem);
            background-color: blue;
        }
    }
    #boxLoad{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: center;
        margin-bottom: .25rem;
    }
    #boxLoad img {
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
}

</style>
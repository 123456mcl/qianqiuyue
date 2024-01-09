<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-31 20:07:46
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-07 15:47:21
 * @FilePath: \Vue-wallpapers site\src\views\Home\components\imgTitle.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
   <div id="header">
        <ul class="nav">
            <li v-for="item in data" :key="data.id">
                <router-link active-class="active" :to="`/Homeimg/${item.id}`"
                :key="item.id">{{ item.name }}</router-link>
            </li>
        </ul>
        <div class="search">
          <inputs/>
        </div>
   </div>
   
</template>
  
<script setup lang="ts">
import {onMounted,onActivated,ref,reactive} from 'vue'
import { useRoute } from 'vue-router';
import {useStore} from '../../../stores/counter'
import inputs from '../../../components/input.vue'
const data=ref()
const num=reactive({
      num1:0,
      num2:30,
    })
onMounted(() => {
    data.value = useStore().$state.data
})
</script>

<style lang="scss" scoped>
@import '/src/styles/color.scss';
#header{
    @include wh(100%,1rem);
    background-color: $white;
    box-shadow: $boxShadow;
    z-index: 1;
    display: flex;
    .nav{
        @include flex9();
        flex: 2;
        li{
            list-style: none;
            a{
                display: block;
                @include wh(1.1rem,.55rem);
               font-family: '方正幼圆';
               @include fontsize($middleSize2,$black1);
               text-decoration: none;
               text-align: center;
               line-height: .55rem;
               font-weight: 600;
            }
        }
        li:nth-child(1){
            margin-left: 1rem;
        }
    }
    .search{
        flex: 1;
        @include flex6();
    }
    .active {
        background: $blacks2;
        color: #f7f9fa!important;
        transition: color .1s cubic-bezier(.1,.7,1,.1),background-color .3s;
        border-radius: .4rem;
      }
}
</style>
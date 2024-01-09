<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-28 20:45:41
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-07 16:28:14
 * @FilePath: \Vue-wallpapers site\src\views\Home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
   <imgTitle/>
   <keep-alive>
      <router-view />
   </keep-alive>
   <wallpaperFooter/>
</template>
  
<script setup lang="ts">
import imgTitle from './components/imgTitle.vue'
import { useRoute } from 'vue-router';
import wallpaperFooter from '../../components/wallpaperFooter.vue'
const router= useRoute()
</script>

<style lang="scss">

</style>
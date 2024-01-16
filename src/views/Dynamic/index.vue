<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-11-27 13:06:11
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-13 20:30:15
 * @FilePath: \Vue-wallpapers site\src\views\Dynamic\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
   <div class="dynamic">
        <dynamicTitle/>
        <dynamicMian/>
       <router-view/>
       <wallpaperFooter/>
   </div>
</template>

<script setup lang="ts">
import dynamicTitle from './components/dynamicTitle.vue'
import dynamicMian from './components/dynamicMian.vue'
import wallpaperFooter from '../../components/wallpaperFooter.vue'
</script>

<style lang="scss" scoped>
html, body {
    width: 100%;
    position: relative;
}
    .dynamic{
    width: 100%;
    height: 100%;
    background-color: rgb(244,245,247);
}

</style> 
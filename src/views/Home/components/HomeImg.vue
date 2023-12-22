<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-28 12:35:38
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-19 22:27:43
 * @FilePath: \Vue-wallpapers site\src\views\Home\components\HomeImg.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="imgs">
        <HomeNav/>
    </div>
</template>

<script lang="ts" setup>
 import HomeNav  from './HomeNav.vue'
</script>

<style lang="scss" scope>
 @mixin wh($w,$h){
        width: $w;
        height: $h;
    }
  .imgs{
    position: absolute;
    width: 100%;
    height: 100%;
  
  }
</style>
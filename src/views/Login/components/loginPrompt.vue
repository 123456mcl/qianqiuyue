<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-22 21:35:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-25 11:11:39
 * @FilePath: \Vue-wallpapers site\src\views\Login\components\loginPrompt.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
   <div class="prompt">
          <el-button :plain="true" >success</el-button>
          <el-button :plain="true" >warning</el-button>
          <el-button :plain="true" >message</el-button>
          <el-button :plain="true">error</el-button>
          <el-button plain > Closes automatically </el-button>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scope>
    .prompt{
    position: absolute;
    display: none;
  }
</style>
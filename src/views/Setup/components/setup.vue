<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-06 23:44:44
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-07 13:34:28
 * @FilePath: \Vue-wallpapers site\src\views\Setup\components\setup.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->


<template>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">test</div>
    <div class="wow slideInLeft">test</div>
    <div class="wow slideInLeft">test</div>
    <div class="wow slideInLeft">test</div>
    <div class="wow slideInLeft">test</div>
    <div class="wow slideInLeft">test</div>
    <div class="wow slideInLeft">test</div>
    <div class="wow slideInLeft">test</div>
    <div class="wow slideInLeft">test</div>

</template>

<script  setup lang="ts">
import WOW from 'wow.js'
import { onMounted } from 'vue';
onMounted(()=>{
  const wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box
        :any) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
      });
      wow.init();
})

</script>

<style lang="scss" scoped>
   @import '/src/styles/color.scss';
   .box{
    width: 1500px;
    height: 40rem;
    background-color: cornsilk;
    display: flex;
    flex-direction: column;
    align-items: center;
   }
   div{
        width: 5rem;
        height: 5rem;
        border: 3px solid black;
        background-color: cadetblue;
        margin-top: .25rem;
  }
</style>

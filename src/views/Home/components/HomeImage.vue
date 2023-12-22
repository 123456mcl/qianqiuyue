<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-12 10:20:35
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-08 10:28:30
 * @FilePath: \Vue-wallpapers site\src\views\Home\components\Homeimage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="images" v-if="isbox">
    <div v-for="item in newdata" :key="item.id" v-wave>
        <img v-lazy="item.url" alt="" @click="preview(item.url)">
    </div>
  </div>
  <section class="boximgs">
    <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="230"
        class="mt-4"
        @current-change="handelCurrentChange"
    />
    </section>
  <el-backtop :right="40" :bottom="40" visibility-height="900"/>
</template>

<script lang="ts" setup>
    import { ref,reactive,onMounted,watch,nextTick,inject} from 'vue'
    import {useStore} from '../../../stores/counter'
    import { useRoute } from 'vue-router';
    import { preview } from 'v-preview-image'
    const data=ref([]) as any
    const num=reactive({
      num1:0,
      num2:30,
    })
    const isbox=ref(false)
    const {query}= useRoute()
    const str= ref(useRoute())
    const newdata=ref()
    const isrouterAlive=inject('isrouterAlive',Function,true)
    onMounted(()=>{
      data.value=useStore().$state.data.filter((item:any)=>{
        return item.id==query.id
      })
      newdata.value=data.value[0].arrdata.slice(num.num1,num.num2)
      isbox.value=true
    })
    const handelCurrentChange=(value:any)=>{
     num.num1=30*value-30
     num.num2=30*value
     newdata.value=data.value[0].arrdata.slice(num.num1,num.num2)
    }
</script>

<style lang="scss" scope>
 @mixin wh($w,$h){
        width: $w;
        min-height: $h;
    }
    .images{
        flex-wrap: wrap;
        position: relative;
        display: flex;
        @include wh(98%,820px);
        justify-content: space-around;
        margin: auto;
        gap:10px;
        div{
             img{
                width: 490px;
                 height: 300px;
                 border-radius: 10px;
                 box-shadow:  2px 2px 4px 2px rgb(112, 112, 112);
                 transition: .3s;
                  -webkit-filter: grayscale(0.4);
             }
             img:hover{
                 box-shadow:  2px 2px 5px 3px rgb(76, 76, 76);
                  -webkit-filter: grayscale(0);
                  transform: scale(1.009);
             }
        }
    }
    .boximgs{
        @include wh(100%,100px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-05 10:23:51
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-06 17:44:21
 * @FilePath: \Vue-wallpapers\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import layoutNav from './views/layout/components/layoutNav.vue'
import {setRem } from './utils/rem'
import {useStore} from './stores/counter'
import {getArrImg} from './apis/getArrImg'
import {getToken} from './apis/getToken'
import { useRouter } from 'vue-router'
import {onMounted} from 'vue'
import { log } from 'util'
const router = useRouter()
onMounted(async()=>{
getToken().then((res:any)=>{
   if(res){
      if(res.status==200){
      useStore().$patch((state) => {
          state.login=true
     })
   }
   }
})
getArrImg().then((res:any)=>{
   useStore().$patch((state) => {
       state.data=res
        })
    })
})

</script>

<template>
      <router-view>
      
      </router-view>
   <layoutNav/>
</template>

<style lang="scss">
   @import './styles/color.scss'
</style>

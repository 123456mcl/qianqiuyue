/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-05 10:23:51
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-29 21:55:37
 * @FilePath: \Vue-wallpapers\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import './assets/main.css'
import Elementplus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.ts'
// 瀑布流
import {VueMasonryPlugin} from 'vue-masonry';
// 懒加载
import lazyPlugins from 'vue3-lazy'
// 动画
import VWave from 'v-wave'
import img1 from './assets/imgs/error.jpg'
import img2 from './assets/imgs/snow.gif'

import vPreviewImage from 'v-preview-image'

import VueKinesis from "vue-kinesis";
// 引入屏幕自适应
import './utils/rem.ts'

import axios from './apis/loginUluli.ts'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueMasonryPlugin)
app.use(VueKinesis);
app.use(VWave,{
  color: '#3CF1F7',
  initialOpacity: 0.1,
  easing: 'ease-in',
}) 
app.use(lazyPlugins, {
  loading: img2,
  error: img1,
})
app.use(Elementplus)
app.use(vPreviewImage)
app.mount('#app')
app.config.globalProperties.$axios = axios;


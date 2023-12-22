/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-05 10:41:30
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-14 23:17:51
 * @FilePath: \Vue-wallpapers\src\stores\counter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getArrImg} from '../apis/getArrImg'

export const useStore =  defineStore({
  id: "myState",
  state: ()=> ({
    data:[],
    user_id:null,
    login:false,
    information:{
      avatar:'/src/assets/imgs/头像.webp',
      gender:0,
      information_concern:0,
      information_followers: 0,
      information_id: null,
      information_tsan: 0,
      name:'未设置',
      signature:'登录了才能设置签名哟~',
      vip:0,
    },
  }), 
})

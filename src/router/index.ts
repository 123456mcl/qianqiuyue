/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-05 10:38:48
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-21 20:36:36
 * @FilePath: \Vue-wallpapers\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//路由文件
import { createRouter, createWebHistory,RouteRecordRaw } from 'vue-router'  //将createRouter、createWebHistory引入vue
const routes:Array<RouteRecordRaw> = [
  {
    path:'',
    name:'',
    component: () => import("../components/HelloWorld.vue"),
    meta:{ keepAlive: true},
    children:[
     
    ],
  },
  {
    path:'/HomeImg',
    name:'HomeImg',
    meta:{ keepAlive: true},
    component: () => import("../views/Home/index.vue"),
    children:[
      {
        path:'',
        component: () => import("../views/Home/components/HomeImage.vue"),
      }
    ],
  },
  {
    path:'/Login',
    component: () => import("../views/Login/index.vue"),
    meta:{ keepAlive: true},
    children:[
      
    ],
  },
  {
    path:'/Enroll',
    name:'Enroll',
    component: () => import("../views/Login/components/enrollAccount.vue"),
    meta:{ keepAlive: true},
    children:[
      
    ],
  },
  {
    path:'/Forget',
    name:'Forget',
    component: () => import("../views/Login/components/forgetPassword.vue"),
    meta:{ keepAlive: true},
    children:[
      
    ],
  },
  {
    path:'/Wallpaper',
    name:'Wallpaper',
    component: () => import("../views/Wallpaper/index.vue"),
    meta:{ keepAlive: true},
    children:[
      {
        path:'',
        name:'hottest',
        component: () => import("../views/Wallpaper/components/ImageComponent/hottest.vue"),
        meta:{ keepAlive: true},
        children:[
          {
            path:'hottestList',
            name:'hottestList',
            component: () => import("../views/Wallpaper/components/ImageComponent/hottestList.vue"),
            meta:{ keepAlive: true},
          }
        ]
      },
      // {
      //   path:'latest',
      //   name:'latest',
      //   component: () => import("../views/Wallpaper/components/ImageComponent/latest.vue"),
      // },
    ],
  },
  {
    path:'/Dynamic',
    name:'Dynamic',
    component: () => import("../views/Dynamic/index.vue"),
    meta:{ keepAlive: true},
    children:[
      {
        path:'',
        name:'homePage',
        component: () => import("../views/Dynamic/components/main/homePage.vue"),
      },
      {
        path:'dynamicPages',
        name:'dynamicPages',
        component: () => import("../views/Dynamic/components/main/dynamicPages.vue"),
      }
    ],
  },        
]
let flag = 0

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to,from,next)=>{
  const a=document.querySelector('canvas')
    if(to.fullPath=='/Dynamic' || to.fullPath=='/Wallpaper'){
      if(a){
        a.style.display="none"
      }
    }
    if(to.fullPath=='/'){
      if(a){
        a.style.display="block"
      }
      
    }
	next()
})
 
export default router
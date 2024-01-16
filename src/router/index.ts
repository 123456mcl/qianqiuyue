/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-05 10:38:48
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-13 20:16:06
 * @FilePath: \Vue-wallpapers\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//路由文件
import { log } from 'console'
import { createRouter, createWebHistory,RouteRecordRaw } from 'vue-router'  //将createRouter、createWebHistory引入vue
const routes:Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'',
    component: () => import("../views/Load/index.vue"),
    meta:{ keepAlive: true},
    children:[
     
    ],
  },
  {
    path:'/HelloWorld',
    name:'HelloWorld',
    component: () => import("../components/HelloWorld.vue"),
    meta:{ keepAlive: true},
    children:[
     
    ],
  },
  {
    path:'/Homeimg',
    name:'Homeimg',
    meta:{ keepAlive: true},
    component: () => import("../views/Home/index.vue"),
    children:[
      {
        path:':id',
        name:'imgClassify',
       
        component: () => import("../views/Home/components/imgClassify.vue"),
      },
      {
        path:'imgSearch',
        name:'imgSearch',
    
        component: () => import("../views/Home/components/imgSearch.vue"),
      },
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
        path:'hottest',
        name:'hottest',
        component: () => import("../views/Wallpaper/components/ImageComponent/hottest.vue"),
        children:[ {
          path:'hottestList',
          name:'hottestList',
          component: () => import("../views/Wallpaper/components/ImageComponent/hottestList.vue"),
          
        }]
      },
      {
        path:'hot',
        name:'hot',
        component: () => import("../views/Wallpaper/components/ImageComponent/hot.vue"),
        children:[ {
          path:'hottestListHot',
          name:'hottestListHot',
          component: () => import("../views/Wallpaper/components/ImageComponent/hottestListHot.vue"),
        }]
      }
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
      },{
        path:'PublishPage',
        name:'PublishPage',
        component: () => import("../views/Dynamic/components/main/PublishPage.vue"),
      }
    ],
  },{
    path:'/Setup',
    name:'Setup',
    component: () => import("../views/Setup/index.vue"),
    meta:{ keepAlive: true},
  }        
]
let flag = 0

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to,from,next)=>{
  
	next()
})
export default router
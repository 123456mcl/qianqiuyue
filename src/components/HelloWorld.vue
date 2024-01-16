<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-26 08:24:25
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-12 22:26:00
 * @FilePath: \Vue-wallpapers site\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
       <div id="canvascontainer" class="wow animate__fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
        <div id="logo" class="wow animate__fadeIn" data-wow-duration="1s" data-wow-delay=".4s">
        <svg t="1695726722029" class="icon" viewBox="0 0 1394 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22726" _mstVisible="1" width="200" height="200"><path d="M0 796.16s627.136-123.776 1002.624 215.68l191.744 7.936c0 0.064-431.36-459.264-1194.368-223.616M1227.328 811.456v-35.008h84.16l-74.048-79.744h53.696l-66.688-79.808h40.576l-56.512-70.976-20.288 29.504-165.504-178.816h121.344l-165.632-200.704h104.96L938.752 0l-137.728 193.6h93.44L740.48 396.608h116.672l-145.92 139.84-43.072-46.528h86.272L647.168 361.6h65.28L621.44 247.232l-81.6 119.04h62.976L495.488 494.592h81.728L451.2 625.152l160.896-4.608v32.704c-113.984 1.792-240.768 18.112-380.352 55.04 0 0 643.136-103.744 990.592 239.744l171.84-4.032c-0.128 0-55.296-64.448-166.848-132.544m-24.64-14.784a1021.632 1021.632 0 0 0-32.768-17.856l32.768-0.96v18.816z m-40.64-183.232l-4.352 6.464h39.232l-66.816 79.68h50.816l-55.232 57.408a1061.44 1061.44 0 0 0-137.984-52.864V613.44h174.336z m-374.912 4.672l-2.176-2.304h121.216l6.912 67.648 0.448 0.832a1220.736 1220.736 0 0 0-261.696-31.168v-35.008h135.296z" p-id="22727" fill="#fefbfb" _mstVisible="2"></path></svg>
        </div>  
            <div id="title">
                <a href="#" class="wow animate__fadeIn" data-wow-duration="1s" data-wow-delay=".6s">图琳壁纸网站</a>
                <a href="#" id="text"  class="wow animate__fadeIn" data-wow-duration="1s" data-wow-delay=".8s">TuLin Wallpaper</a>
            </div>
            <el-button id="a" style="height: .6rem;" @click="btn" type="Primary" class="wow animate__fadeIn" data-wow-duration="1s" data-wow-delay="1s" round>开始</el-button>
        </div>
        <indexvue />
</template>
<script setup lang="ts">
import {ref,onUnmounted,onMounted} from "vue"
import indexvue from '../views/layout/index.vue'
import*as THREE from 'three'
const str=ref(['/src/assets/imgs/wallhaven.png'])
const btn=()=>{
   document.documentElement.scrollTop  = document.querySelector('.homeContext')?.getBoundingClientRect().top
}
onMounted(()=>{
 // 创建场景
const scene=new THREE.Scene()
// 创建相机
const camera=new THREE.PerspectiveCamera(
    100,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);
camera.position.set(0,0,6)
// 渲染器
let renderer=new THREE.WebGLRenderer({antialias: true})
const canvasContainer:any = document.querySelector('#canvascontainer');
renderer.setSize(
    canvasContainer?.clientWidth, // 宽度
    canvasContainer?.clientHeight// 高度
);
canvasContainer.appendChild(renderer.domElement)
// 加载纹理
const textureLoader=new THREE.TextureLoader()
const texture=textureLoader.load(str.value[0])
const depthTexture=textureLoader.load('/src/assets/imgs/wallhaven_depth.jpg')
// 创建平面
const geometry=new THREE.PlaneGeometry(34.61,20.8)
// 鼠标坐标 
const mouse=new THREE.Vector2()
const material=new THREE.ShaderMaterial({
    uniforms:{
        uTexture:{value:texture},
        uDepthTexture:{value:depthTexture},
        uMouse:{value:mouse}
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`
    ,
    fragmentShader: `
        uniform sampler2D uTexture;
        uniform sampler2D uDepthTexture;
        uniform vec2 uMouse;
        varying vec2 vUv;
        void main(){
            vec4 color = texture2D(uTexture, vUv);
            vec4 depth = texture2D(uDepthTexture, vUv);
            float depthValue = depth.r;
            float x = vUv.x + uMouse.x*0.01*depthValue;
            float y = vUv.y + uMouse.y*0.01*depthValue;
            vec4 newColor = texture2D(uTexture,vec2(x, y));
            gl_FragColor = newColor; 
        }`
})

const plane=new THREE.Mesh(geometry, material)
scene.add(plane)
// 渲染
requestAnimationFrame(function animate(){
    material.uniforms.uMouse.value=mouse;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
})
window.addEventListener("mousemove",(e)=>{
    mouse.x=(e.clientX/window.innerWidth)*2-1;
    mouse.y=-(e.clientY/window.innerHeight)*2+1;
});

window.addEventListener("resize",handleResize)
})
const handleResize=()=>{
    let div = document.querySelector("#canvascontainer");
    const x = window.innerWidth;
    const y = window.innerHeight;
    const canvas:any = document.querySelector('canvas')
    canvas.style.width = x+'px'
    canvas.style.height = y+'px'
}
onUnmounted(()=>{
    window.removeEventListener("resize",handleResize);
})
</script>
<style lang="scss" scoped>
@import '/src/styles/color.scss';
#canvascontainer{
    @include wh(100%,100vh);
    position: relative;
}
#logo{
    @include wh(1.5rem,1.5rem);
    position: absolute;
    z-index: 2;
    top: 27%;
    left: 46%;
      svg{
          @include wh(1.5rem,1.5rem);
        filter: drop-shadow(2px 2px 3px #4e4e4e);
      }
    }
    #title{
      z-index: 2;
      position: absolute;
      @include tl(50%,50%,-50%,-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: .575rem;
      a,text{
          color: $white;
          text-decoration: none;
          font-weight: 600;
      }
      a{
          font-size: .7rem;
           letter-spacing: .0625rem;
      }
      #text{
          font-size: .225rem;
      }
    }
    #a{
       position: absolute;
        z-index: 2;
        font-size: .3125rem;
       @include tl(62%,50%,-50%,-50%);
        letter-spacing: .05rem;
        font-weight: 800;
        filter: drop-shadow(.025rem .025rem .0375rem #4e4e4e);
        text-decoration: none;
        border-radius: .225rem;
        padding: .225rem;
    }

</style>

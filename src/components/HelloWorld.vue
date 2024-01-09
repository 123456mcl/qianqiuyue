<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-26 08:24:25
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-07 22:03:37
 * @FilePath: \Vue-wallpapers site\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
       <div id="canvascontainer" class="wow animate__fadeIn" data-wow-duration="1s" data-wow-delay=".1s"></div>
        <layoutHeader />
        <indexvue />
</template>
<script setup lang="ts">
import {ref,onUnmounted,onMounted} from "vue"
import indexvue from '../views/layout/index.vue'
import*as THREE from 'three'
import layoutHeader from '../views/layout/components/layoutHeader.vue'
const str=ref(['/src/assets/imgs/wallhaven.png'])

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
window.addEventListener("resize",(e)=>{
    let x=window.innerWidth
    let y=window.innerHeight
    const canvas:any=document.querySelector('canvas')
    canvas.style.width = x+'px'
    canvas.style.height = y+'px'
})
})

</script>
<style lang="scss" scoped>
@import '/src/styles/color.scss';
#canvascontainer{
    @include wh(100%,100vh);
}
</style>

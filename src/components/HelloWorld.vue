<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-26 08:24:25
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-01 17:01:24
 * @FilePath: \Vue-wallpapers site\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <indexvue/>
</template>
<script setup lang="ts">
import {ref} from "vue"
import indexvue from '../views/layout/index.vue'
const str=ref(['/src/assets/imgs/wallhaven.png'])
import*as THREE from 'three'
import { log } from "util"
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
renderer.setSize(
       window.innerWidth, // 宽度
        window.innerHeight // 高度
    );
document.body.appendChild(renderer.domElement)
// 加载纹理
const textureLoader=new THREE.TextureLoader()
const texture=textureLoader.load(str.value[0])
const depthTexture=textureLoader.load('/src/assets/imgs/wallhaven_depth.jpg')
// 创建平面
const geometry=new THREE.PlaneGeometry(34.61,20.8)
// const  material=new THREE.MeshBasicMaterial({map:textrue})
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
</script>
<style >

</style>

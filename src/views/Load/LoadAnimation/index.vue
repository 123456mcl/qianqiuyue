<template>
    <div class="loader-wrapper">
        <div class="loader">
            <img src="/src/assets/imgs/头像.webp" alt="">
        </div>
        <div class="loader-text">
            <div>L</div>
            <div>O</div>
            <div>A</div>
            <div>D</div>
            <div>I</div>
            <div>N</div>
            <div>G</div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import {onMounted} from 'vue'
const router = useRouter()
onMounted(()=>{
   setTimeout(()=>{
    router.push('/HelloWorld')
   },2000)
})
</script>

<style lang="scss" scope>
@import '/src/styles/color.scss';
    *{
        margin: 0;
        padding: 0;
    }
    body{
        height: 100%;
    }
    .loader-wrapper{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: linear-gradient(45deg,rgb(90,54,148) 0%,rgb(19,189,206) 33%,
        rgb(0,148,217) 66%,rgb(111,199,181) 100%,);
        background-size: 400%;
        background-position: 0% 100%;
        animation:gardient 7.5s ease-in-out infinite ;
    }
    .loader{
        width: 1.875rem;
        height: 1.875rem;
        border: .0375rem solid transparent;
        border-top-color: #fff;
        position: relative;
        left: 50%;
        top: 50%;
        margin-top: -1rem;
        margin-left: -1rem;
        transform: translate(-50%,-50%);
        border-radius: 50%;
        display: flex;
        z-index: 2;
        justify-content: center;
        align-items: center;
        animation: spin 1.7s linear infinite;
    }
    .loader::before{
        content: '';
        position: absolute;
        top: .0625rem;
        left: .0625rem;
        right: .0625rem;
        bottom: .0625rem;
        border-radius: 50%;
        border: .0375rem solid transparent;
        border-top-color: #fff;
        animation: spin 0.6s linear infinite reverse;
    }
    .loader::after{
        content: '';
        position: absolute;
        top: .1875rem;
        left: .1875rem;
        right: .1875rem;
        bottom: .1875rem;
        border-radius: 50%;
        border: .0375rem solid transparent;
        border-top-color: #fff;
        animation: spin 1s linear infinite;
    }
    .loader img{
      @include wh(55%,55%);
        border-radius: 50%;
        position: absolute;
        animation: spin 1.7s linear infinite reverse;
    }
    .loader-text{
        @include wh(50%,.45rem);
        position: absolute;
        top: 72%;
        left: 54%;
        transform: translateX(-50%);
        z-index: 3;
        user-select: none;
    }
    .loader-text div{
        @include wh(.375rem,.45rem);
        color: #fff;
        font-size: .4rem;
        margin: 0 .25rem;
        position: absolute;
        opacity: 0;
        transform: rotate(180deg);
        animation: move 2s linear infinite;
    }
    .loader-text div::after{
        content: '';
        position: absolute;
        @include wh(.125rem,.0625rem);
        left: 50%;
        bottom: -0.5rem;
        border-radius: 50%;
        background-color: #fff;
        margin-left: -0.0625rem;
    }
    .loader-text div:nth-child(8)::after,
    .loader-text div:nth-child(9)::after,
    .loader-text div:nth-child(10)::after{
        left: 0;
        margin-left: 0;
    }
    loader-text div:nth-child(8)::before,
    .loader-text div:nth-child(9)::before,
    .loader-text div:nth-child(10)::before{
        content: '';
        position: absolute;
        @include wh(.125rem,.125rem);
        left: 0;
        bottom: 0;
        border-radius: 50%;
        background-color: #fff;
        margin-left: -0.0625rem;
    }
    .loader-text div:nth-child(2){
        animation-delay: 0.2s;
    }
    .loader-text div:nth-child(3){
        animation-delay: 0.4s;
    }
    .loader-text div:nth-child(4){
        animation-delay: 0.6s;
    }
    .loader-text div:nth-child(5){
        animation-delay: 0.8s;
    }
    .loader-text div:nth-child(6){
        animation-delay: 1s;
    }
    .loader-text div:nth-child(7){
        animation-delay: 1.2s;
    }
    .loader-text div:nth-child(8){
        animation-delay: 1.4s;
    }
    .loader-text div:nth-child(9){
        animation-delay: 1.6s;
    }
    .loader-text div:nth-child(10){
        animation-delay: 1.8s;
    }

    @keyframes gardient{
        50%{
            background-position: 100% 0%;
        }
    }
    @keyframes spin{
        0%{
           transform: rotate(0);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    @keyframes move{
        0%{
           right: 0;
           opacity: 0;
        }
        35%{
            right: 41%;
           opacity: 1;
           transform: rotate(0);
        }
        65%{
            right: 59%;
           opacity: 1;
           transform: rotate(0);
        }
        100%{
            right: 100%;
           transform: rotate(-180deg);
        }
    }
</style>
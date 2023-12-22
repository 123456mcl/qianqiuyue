<script setup lang="ts">
    
</script>

<template>
    <header>
        <div class="Carousel">
            <el-carousel >
            <el-carousel-item v-for="item in 4" :key="item">
                <div>
                    <img src="/src/assets/imgs/4k专区.png" alt="" style="width: 100%;height:100%;">
                </div>
            </el-carousel-item>
            </el-carousel>
        </div>
        <div class="Section" >
            <div>
                <h1>动漫</h1>
            </div>
            <div>
                <h1>风景</h1>
            </div>
            <div>
                <h1>AI</h1>
            </div>
            <div>
                <h1>军事天地</h1>
            </div>
            <div>
                <h1>概念科幻</h1>
            </div>
        </div>
        <div class="Classify" style="z-index:2;">
            <div class="Classifybtn">
              
            </div>
            <div class="Classifyavatar">

            </div>
        </div>
         <router-view/>
    </header>
   
</template>
  
<style lang="scss">
@mixin wh($w,$h){
    min-width: $w;
        min-height: $h;
    }
    .active{
        background-color: rgba(255,216,0);
    }
    header{
        @include wh(100%,10rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        .Carousel{
            position: relative;
            margin-top: .25rem;
            @include wh(95%,4rem);
            border-radius: .125rem;
            overflow: hidden;
            div{
                position: absolute;
                @include wh(100%,4rem);
            }
            .el-carousel {
                --el-carousel-indicator-width: .375rem;
                --el-carousel-indicator-heighth: .025rem;
          }
        }

        .Carousel,.Classify{
            box-shadow: 0 2px 3px rgba(0, 0, 0,.1);
        }
        .Section{
            @include wh(95%,2.4rem);
            margin-top: .4rem;
            display: flex;
            justify-content: space-between;
            div{
                @include wh(4.35rem,100%);
                border-radius: .1rem;
                box-shadow: 0 2px 3px rgba(0, 0, 0,.2);
                h1{
                    font-size: .35rem;
                    color: white;
                    text-align: center;
                    line-height: 2rem;
                    text-shadow: 1px 1px white, 1px 1px rgb(86, 84, 84), -2px 2px 3px rgb(103, 103, 103);  
                 }
            }
            div:nth-child(1){
                background: url('/src/assets/imgs/动漫卡通.png')no-repeat;
            }
            div:nth-child(2){
                background: url('/src/assets/imgs/4k专区.png')no-repeat;
            }
            div:nth-child(3){
                background: url('/src/assets/imgs/ai.png')no-repeat;
            }
            div:nth-child(4){
                background: url('/src/assets/imgs/军事天地.png')no-repeat;
            }
            div:nth-child(5){
                background: url('/src/assets/imgs/游戏壁纸.png')no-repeat;
            }
            div:nth-child(2),div:nth-child(3),div:nth-child(4),div:nth-child(5),div:nth-child(1){
                background-size: 200% 200%;
                background-position: 40% 30%;
            }
        }
        .Classify{
            position: sticky;
            margin-top: .4rem;
            display: flex;
            @include wh(95%,1rem);
            top: 0rem;
            background-color: white;
            border-radius: .1rem;
            .Classifybtn{
                flex: 1;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .Classifyavatar{
                flex: 3;
            }
            button{
                background-color: rgba(244,244,244);
                border: none;
                @include wh(1.4rem,.6rem);
                border-radius: .1rem;
                color: black;
            }
            div{

            }
        }
    }
  
</style>
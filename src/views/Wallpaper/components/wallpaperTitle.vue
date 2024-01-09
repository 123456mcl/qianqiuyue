<script setup lang="ts">
</script>

<template>
    <header>
        <div id="Carousel" class="wow animate__slideInDown" data-wow-duration="1s" data-wow-delay=".5s">
            <el-carousel >
                <el-carousel-item v-for="item in 4" :key="item">
                    <div>
                        <img src="/src/assets/imgs/4k专区.png" alt="" style="width: 100%;height:100%;">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="Section" >
            <div class="animate__animated animate__fadeInLeft">
                <h1>动漫</h1>
            </div>
            <div class="animate__animated animate__fadeInTopLeft">
                <h1>风景</h1>
            </div>
            <div class="animate__animated animate__fadeInDown">
                <h1>AI</h1>
            </div>
            <div class="animate__animated animate__fadeInTopRight">
                <h1>军事天地</h1>
            </div>
            <div class="animate__animated animate__fadeInRight">
                <h1>概念科幻</h1>
            </div>
        </div>
        <div class="Classify" style="z-index:2;">
            <div class="Classifybtn">
                <ul>
                    <li>
                        <router-link active-class="active" to="/Wallpaper/hottest">最新作品</router-link>
                    </li>
                    <li>
                        <router-link active-class="active" to="/Wallpaper/hot">热门作品</router-link>
                    </li>
                </ul>
            </div>
            <div class="Classifyavatar">

            </div>
        </div>
    <router-view/>
    </header>
   
</template>
  
<style lang="scss" scope>
@import '/src/styles/color.scss';
    
    header{
        @include wh2(100%,10rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        #Carousel{
            position: relative;
            margin-top: .25rem;
            @include wh2(95%,4rem);
            border-radius: .125rem;
            overflow: hidden;
            div{
                position: absolute;
                @include wh2(100%,4rem);
            }
            .el-carousel {
                --el-carousel-indicator-width: .375rem;
                --el-carousel-indicator-heighth: .025rem;
          }
        }

        .Carousel,.Classify{
            box-shadow: 0 .025rem .0375rem $graysColor4;
        }
        .Section{
            @include wh2(95%,2.4rem);
            margin-top: .4rem;
            display: flex;
            justify-content: space-between;
            div{
                @include wh2(4.35rem,100%);
                border-radius: .1rem;
                box-shadow: 0 .025rem .0375rem $graysColor3;
                h1{
                    font-size: .35rem;
                    color: white;
                    text-align: center;
                    line-height: 2rem;
                    text-shadow: .0125rem .0125rem $white, 1px 1px rgb(86, 84, 84), -2px 2px 3px rgb(103, 103, 103);  
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
            @include wh(95%,1.2rem);
            top: 0rem;
            background-color: $white;
            border-radius: .05rem;
            .Classifybtn{
                flex: 1;
                display: flex;
                justify-content: space-around;
                align-items: center;
                ul{
                    width: 100%;
                    @include flex9();
                }
                li{
                    list-style: none;
                    line-height: .5rem;
                    a{
                        display: block;
                       @include wh(1.5rem,.6rem);
                       text-align: center;
                       line-height: .6rem;
                       border-radius: .0625rem;
                        text-decoration: none;
                        background-color: $grayColor2;
                      @include fontsize($middleSize,$black1);
                      font-family: '方正幼圆';
                    }
                }
                li:nth-child(1){
                    margin-left: .8rem;
                }
                .active{
                    background-color: $hoverOrange1;
                    font-weight: 600;
                }
            }
            .Classifyavatar{
                flex: 4;
            }
            button{
                background-color: $grayColor2;
                border: none;
                @include wh(1.4rem,.6rem);
                border-radius: .1rem;
                color: $black1;
            }
        }
    }
    
</style>
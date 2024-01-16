<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-19 23:13:15
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-15 21:24:00
 * @FilePath: \Vue-wallpapers site\src\views\Wallpaper\components\ImageComponent\latest.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
     <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__zoomOut">
        <div id="Details" v-if="istrue">
        <div class="bgcDetails">
            <div class="Details_Img">
                <div class="Details_Imgs">  
                    <div class="Details_nav">
                        <div>
                            <svg style="width:.35rem;height:.35rem;" t="1703140140340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10308" width="200" height="200"><path d="M692 112l-9.472 0.16a264.32 264.32 0 0 0-167.232 67.712L512 182.912l-3.296-3.04A264.224 264.224 0 0 0 332 112C183.712 112 64 234.752 64 385.6c0 217.408 228.864 454.432 432.512 523.84a48 48 0 0 0 30.976 0C731.136 840 960 603.008 960 385.6c0-150.848-119.712-273.6-268-273.6z" fill="#bfbfbf" p-id="10309"></path></svg>
                            <span>喜欢 {{data.img_like}}</span>
                        </div>
                        <div>
                            <svg style="width:.35rem;height:.35rem;" t="1703317902877" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3640" width="200" height="200"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z" fill="#cdcdcd" p-id="3641"></path></svg>
                            <span>收藏 {{data.img_like}}</span>
                        </div>
                        <div>
                            <svg style="width:.35rem;height:.35rem;" t="1703317973893" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5736" width="200" height="200"><path d="M464.059456 61.709742c-73.221088 90.067444-134.484567 193.876228-180.674411 302.001204-28.56173 66.856909-21.613984 64.324451-55.21861-2.87379-31.413498-62.815986-57.519844-128.770019-76.557327-197.366617-2.268202-8.191953 0-16.394917 6.143965-22.252605C233.880983 68.712541 332.547775 19.648907 442.148183 5.676341c103.368357-13.179796 72.989864-6.782585 21.911273 56.033401zM332.878096 503.26043l83.516083-144.658444a8.764509 8.764509 0 0 1 7.773547-4.492362h167.032167c3.292196 0 6.121944 1.629582 7.773547 4.492362l83.516083 144.658444c1.651603 2.851769 1.651603 6.121944 0 8.973712l-83.516083 144.658445a8.786531 8.786531 0 0 1-7.773547 4.492361h-167.032167a8.77552 8.77552 0 0 1-7.773547-4.492361l-83.516083-144.658445a8.742488 8.742488 0 0 1 0-8.973712z m130.06928-285.154848c43.558289-64.654771 96.938114-135.783828 157.375792-192.973352a21.911273 21.911273 0 0 1 21.404781-5.329174c123.870262 34.188192 228.725062 114.301972 295.053458 220.841408 27.44965 44.108824 23.485802 36.621555-21.988348 28.308484-152.57513-27.868056-306.603672-20.777172-443.951018-18.222692-40.233061 0.759738-28.319495-2.323256-7.894665-32.624674z m325.211738 408.100212c31.512595 74.53136 54.943343 151.881457 71.525442 229.572885a21.911273 21.911273 0 0 1-6.595403 21.052439c-82.062672 77.019776-189.780252 127.019319-308.97097 135.728775-64.731846 4.712575-59.248523 6.628435-17.286784-41.576365 87.413867-100.417492 157.298716-208.465393 201.39653-328.768191 25.236501-68.882876 31.875947-82.337939 59.931185-16.009543zM521.193926 829.914568a1188.163551 1188.163551 0 0 1-133.57068 158.399786 21.933294 21.933294 0 0 1-22.065422 5.615452c-111.439193-32.327386-207.056024-101.947978-272.41548-194.448785-35.971924-50.91343-38.119009-47.830437 19.863285-39.616462 126.501817 17.903382 262.252613 15.844383 372.16132 8.94068 87.986423-5.538377 90.48585-16.086618 36.026977 61.109329zM258.269661 683.835745c-62.474655-2.411341-124.729096-9.370097-185.970553-21.624995-58.367667-11.693353-55.471856-17.176676-65.095199-76.75552-15.459009-95.704917 4.778639-189.879348 39.010875-280.067909 31.76584-83.670233 28.605772-74.806627 57.982293-3.03895 45.253936 110.60238 107.827687 211.603439 169.124197 314.035887 34.727716 58.048357 63.322478 70.479426-15.051613 67.451487z m507.824031-346.561466c73.441302 6.892692 146.354091 20.457862 217.648308 39.231088a21.966326 21.966326 0 0 1 16.152682 16.648164c25.06033 108.169018 13.708309 223.627113-32.5476 324.77131-32.789835 71.712624-29.453596 69.466443-50.561088 0.297289-37.843741-124.057444-94.053313-243.325237-166.635781-344.821777-29.927055-41.829611-41.047852-41.48828 15.943479-36.126074z" fill="#cdcdcd" p-id="5737"></path></svg>
                            <span>分享</span>
                        </div>
                    </div> 
                    <div v-for="(item,index) in dataimg" class="Details_List" :key="index">
                        <img :src="item" alt="" @click="preview(item)">
                    </div>
                </div>
                <div class="Details_Label">
                    <h1>{{ data.img_introduce}}</h1>
                    <span>热门标签</span>
                    <div class="dataLable">
                        <div v-for="item in data.img_type.split(',')">
                            <button>#{{ item }}</button>
                        </div>
                    </div>
                </div>
                <div class="publishComments">
                    <textarea v-model="textareaValue" cols="30" rows="10" ></textarea>
                    <button @click="textareaBtn">评论</button>
                </div>
                <div class="comments">
                    <p class="p">全部评论({{comment.length}})</p>
                    <div>
                        <div v-for="(item,index) in comment.data" key="index" class="comments_box">
                           <div class="comments_img">
                            <img :src="item.img_avatar" alt="">
                           </div>
                           <div class="comments_information">
                              <h1>{{ item.name }}</h1>  
                              <p>{{ item.img_comments }}</p>  
                                <div class="Thumbsup">
                                    <p>{{ item.time }}</p>
                                    <div class="ThumbsupDiv">
                                        <svg style="width:.3rem;height:.3rem;" t="1703140140340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10308" width="200" height="200"><path d="M692 112l-9.472 0.16a264.32 264.32 0 0 0-167.232 67.712L512 182.912l-3.296-3.04A264.224 264.224 0 0 0 332 112C183.712 112 64 234.752 64 385.6c0 217.408 228.864 454.432 432.512 523.84a48 48 0 0 0 30.976 0C731.136 840 960 603.008 960 385.6c0-150.848-119.712-273.6-268-273.6z" fill="#bfbfbf" p-id="10309"></path></svg>
                                        <span>{{ item.reply }}</span>
                                    </div> 
                                </div> 
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Details_Information">
                <div class="Information_avatar">
                        <div>
                            <img :src="tit.avatar" alt="">
                        </div>
                        <div>
                            <span>{{tit.name }}</span>
                        </div>
                        <div>
                            <span>作品 {{1}}</span>
                            <span>粉丝 {{1}}</span>
                        </div>
                        <div>
                            <h1>{{ tit.signature }}</h1>
                        </div>
                        <div>
                            <button>
                                <svg t="1703559735750"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" width="200" height="200"><path d="M629.510344 363.487571l-59.232033 58.972113c0.25071 0.112564 0.432859 0.25071 0.567935 0.363274l-31.003108 30.43108c-7.049556-2.706645-14.625092-4.344958-22.608927-4.344958-34.871205 0-63.12162 28.246321-63.12162 63.111386 0 34.888602 28.250414 63.11241 63.12162 63.11241 34.846646 0 63.075571-28.223808 63.075571-63.11241 0-8.027837-1.63729-15.623839-4.344958-22.651906l69.239967-69.229734-0.045025-0.022513 20.380166-20.377096 123.69623 18.807345L937.997254 269.830495l-155.586544-22.26612-72.65167 72.345702-0.205685-0.181125 73.517387-73.461105L759.482511 91.296309 610.721419 240.058424 629.510344 363.487571zM800.10879 451.322036l-13.147438 16.488533c3.046383 16.261359 3.774977 27.086915 3.774977 44.189432 0 151.015436-122.467239 273.441742-273.479605 273.441742-151.08195 0-273.526677-122.426307-273.526677-273.441742 0-151.035902 122.467239-274.941909 273.504164-273.462209 14.874779 0.158612 29.161157 0.477884 37.666878 2.001587l120.011304-118.424156c-48.746214-19.71911-101.880365-30.817889-157.678182-30.817889-232.401024 0-420.765089 188.358949-420.765089 420.703691 0 232.367255 188.362019 420.703691 420.765089 420.703691 232.400001 0 420.765089-188.334389 420.765089-420.703691 0-55.969733-11.168364-109.256356-30.980595-158.086481L800.10879 451.322036zM517.234211 407.495878c6.550183 0 12.941753 0.773619 19.197224 1.909489l54.339606-54.514591-10.030447-65.88557c-20.244067-5.777587-41.466414-9.052167-63.506383-9.052167-128.177288 0-232.082776 103.890138-232.082776 232.047983 0 128.158868 103.905488 232.026494 232.082776 232.026494 128.175241 0 232.05924-103.867626 232.05924-232.026494 0-20.468171-2.911306-40.232306-7.892761-59.154261l-67.807339-13.82896-53.749158 53.788044c1.159406 6.209422 1.909489 12.599969 1.909489 19.195178 0 57.723679-46.788629 104.505146-104.518448 104.505146-57.731866 0-104.543008-46.782489-104.543008-104.505146C412.69018 454.278367 459.502345 407.495878 517.234211 407.495878z" fill="#515151" p-id="4250"></path></svg>
                                <span>关注</span>
                            </button>
                            <button>
                                <svg t="1703560465272" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13424" width="200" height="200"><path d="M809.890909 884.363636H214.109091c-93.090909 0-167.563636-74.472727-167.563636-165.236363V311.854545C46.545455 216.436364 121.018182 139.636364 214.109091 139.636364h595.781818c93.090909 0 167.563636 76.8 167.563636 172.218181v407.272728c0 90.763636-74.472727 165.236364-167.563636 165.236363m-27.927273-528.290909c-6.981818-13.963636-20.945455-20.945455-34.909091-20.945454-6.981818 0-13.963636 2.327273-20.945454 4.654545l-221.090909 134.981818-200.145455-134.981818c-6.981818-4.654545-16.290909-4.654545-23.272727-4.654545-16.290909 0-32.581818 6.981818-39.563636 20.945454-13.963636 18.618182-4.654545 44.218182 16.290909 55.854546l218.763636 141.963636c6.981818 4.654545 13.963636 4.654545 20.945455 4.654546h13.963636c6.981818 0 13.963636-2.327273 20.945455-4.654546l232.727272-141.963636c20.945455-11.636364 27.927273-34.909091 16.290909-55.854546" p-id="13425" fill="#515151"></path></svg>
                                <span>私信</span>
                            </button>
                        </div>
                </div>
                <div class="Information_more">
                    <h1>此作品专区为  <span>？？？</span></h1>
                    <span>前往查看 ></span>
                </div>
                <div class="Information_wallpaper">
                    <h1>查看他更多的壁纸详情</h1>
                    <div class="informationBox">
                        <div v-for="item in recommendImg.slice(0, 8)" :key="item.img_id">
                            <img :src="item.img_url[0]" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn" @click="cliclkBtn">
                <svg t="1703169912951" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5871" width="200" height="200"><path d="M512.001 15.678C237.414 15.678 14.82 238.273 14.82 512.86S237.414 1010.04 512 1010.04s497.18-222.593 497.18-497.18S786.589 15.678 512.002 15.678z m213.211 645.937c17.798 17.803 17.798 46.657 0 64.456-17.798 17.797-46.658 17.797-64.456 0L512.001 577.315 363.241 726.07c-17.799 17.797-46.652 17.797-64.45 0-17.804-17.799-17.804-46.653 0-64.456L447.545 512.86 298.79 364.104c-17.803-17.798-17.803-46.657 0-64.455 17.799-17.798 46.652-17.798 64.45 0l148.761 148.755 148.755-148.755c17.798-17.798 46.658-17.798 64.456 0 17.798 17.798 17.798 46.657 0 64.455L576.456 512.86l148.756 148.755z m0 0" fill="#e6e6e6" p-id="5872"></path></svg>
            </div>
        </div>
    </div></transition>
</template>

<script setup lang="ts">
import 'hover.css'
import 'animate.css'
import { onMounted,ref,reactive } from 'vue';
import { useRoute,useRouter } from 'vue-router'
import { preview } from 'v-preview-image'
import {getRecommend} from '../../../../apis/getRecommend'
import { useStore } from '../../../../stores/counter'
import {  ElMessage,ElNotification } from 'element-plus';
const route:any = useRoute()
const router = useRouter()
const data=ref({
    avatar:[],
    img_collection: '',
    img_id: '',
    img_introduce: '',
    img_like: '',
    img_time: '',
    img_type:'',
    img_url: '',
    information_id: '',
    name:'',
})
const dataimg=ref()
const istrue=ref(false)
const tit=ref({
    avatar:'',
    gender:'',
    information_concern:'',
    information_followers:'',
    information_id:'',
    information_tsan:'',
    name:'',
    signature:'',
    vip:'',
})
const user:any=ref()
const textareaValue:any = ref()
const recommendImg:any=ref([])
const cliclkBtn=()=>{
    router.back();
    const body:HTMLBodyElement | null | any =document.querySelector('body')
    body.style.overflowY = 'scroll';
    istrue.value=false
}
const comment:any=ref({
    length:0,
    data:null,
})
onMounted(()=>{
    if(useStore().$state.login){
    user.value=useStore().$state.information}
    data.value = JSON.parse(route.query.data)[route.query.id-1]
    dataimg.value=data.value.img_url
    tit.value=data.value.avatar[0]
    getRecommend({
        url:'/api/getImages',
        query:{
            img_id:route.query.id-1,
            parameter:route.query.name
        }
    }).then((results)=>{
        recommendImg.value = results.data
    })
    // 获取评论
    getRecommend({
        url:'/api/Comments',
        query:{
            img_id:route.query.id-1,
            parameter:data.value.name
        }
    }).then((results)=>{
        comment.value.data = results.data
        comment.value.length = results.data.length 
        istrue.value=true
    });
})
const textareaBtn=()=>{
    if(!useStore().$state.login){
        ElNotification({
        title: '提示',
        message: '你还没有登录账号!',
        type: 'warning',
        duration:1500,
    })
    }
    else if( textareaValue.value==undefined ||textareaValue.value.length<2){
        ElNotification({
        title: '提示',
        message: '输入内容不能小于两个字',
        type: 'warning',
        duration:1500,
    })}else{
        getRecommend({
        url:'/uploadComment',
        query:{
            img_id:route.query.id-1,
            parameter:{
                img_avatar:user.value.avatar,
                name:user.value.name,
                textareaValue:textareaValue.value,
            }
        }
    }).then((results)=>{
        if(results.status==200){
            ElNotification({
            title: 'Success',
            message: '评论成功',
            type: 'success',
        })
        textareaValue.value=''
        }else{
            ElNotification({
            title: 'Error',
            message: '评论失败',
            type: 'warning',
            duration:1500,
        })}
    });
    }
}
</script>
  
<style lang="scss">
  @import '/src/styles/color.scss';
    #Details{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(100, 99, 99, 0.6);
        z-index: 3;
        overflow-y: scroll ;
        .bgcDetails{
            position: relative;
            @include wh(80%,100%);  
            padding-top: .5rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            .Details_Img{
                flex: 3;
                .Details_Imgs{
                    position: relative;
                    .Details_List{
                        height: 9rem;
                        padding: .125rem .1rem .05rem;
                        background-color: $white;
                    img{
                        border-radius: .05rem;
                        @include wh(100%,100%);
                    }
                    }
                .Details_List:last-child{
                    padding-bottom: .8rem;
                }
                .Details_nav{
                    display: flex;
                    position: absolute;
                    bottom: 0;
                        div{
                            line-height: .8rem;
                            display: flex;
                            align-items: center;
                            margin-left: .375rem;
                            span{
                                font-size: .3125rem;
                                color: rgba(191,191,191);
                                margin-left: .1rem;
                                font-weight: 400;
                                font-family:'方正幼圆';
                            }
                        }
                    }
                }
               .Details_Label{
                    height: 2.2rem;
                    padding: .3rem .375rem .25rem;
                    display: flex;
                    flex-direction: column;
                    h1{
                        font-size: $Oversized;
                        font-family:'方正幼圆';
                    }
                    span{
                        font-size: $middleSize;
                        font-weight: 400;
                        font-family:'方正幼圆';
                        padding: .125rem 0 .225rem;
                    }
                    .dataLable{
                        display: flex;
                        div{
                            display: flex;
                            @include wh(1.5rem,.8rem);
                            button{
                                @include wh(1.2rem,.6rem);
                                border-radius: .4rem;  
                                background-color: $grayColor3;
                                border: none;
                                @include fontsize($smallSize,$black);
                            }
                        }
                    }
               }
               .publishComments,.Details_Label{
                    background-color: $white;
                    margin-top: .25rem;
               }
               .publishComments{
                    height: 1.5rem;
                    display: flex;
                    padding: .1rem .1rem .1rem;
                    textarea{
                        flex: 8;
                        resize:none;
                        border: .0125rem solid $textColor;
                        outline-color: $blue;
                        @include fontsize($Oversized,$black);
                        padding: .125rem;
                    }
                    button{
                        flex: 1;
                        background-color: $Orange1;
                        transition: .3s;
                        border: .0125rem solid $textColor;
                        border-radius: 0 4px 4px 0;
                        @include fontsize($Oversized,$black1);
                    }
                    button:hover{
                        background-color: $hoverOrange1;
                    }
               }
               .comments{
                background-color: $white;
                padding-bottom: .0125rem;
                   .p{
                        @include fontsize($middleSize,$black1);
                        line-height: .75rem;
                        padding-left: .25rem;
                        font-family: '方正幼圆';
                   }
                   .comments_box{
                        display: flex;
                        margin: .2rem 0 .2rem;
                       
                        .comments_img{
                            flex: 1;
                            @include flex5();
                            img{
                                @include wh(1rem,1rem);
                                border-radius: 50%;
                                margin-bottom: .2rem;
                            }
                        }
                        .comments_information{
                            flex: 7;
                            p{
                                line-height: .5rem;
                                 @include fontsize($middleSize,$black1);
                                font-family: '方正幼圆';
                            }
                            h1:nth-child(1){
                                position: relative;
                                @include fontsize($middleSize,$black1);
                            }
                            .Thumbsup{
                                position: relative;
                                @include flex6;
                                padding-right: 2rem;
                                    p{
                                        @include fontsize($smallSize,$graysColor3);
                                    }
                                    .ThumbsupDiv{
                                        display: flex;
                                        span{
                                            @include fontsize($middleSize,$textColor);
                                            margin-left: .0625rem;
                                            line-height: .3rem;
                                            transition: .3s;
                                        }
                                        span:hover{
                                            color: $Orange1;
                                        }
                                    }
                                }
                                .Thumbsup::before{
                                position: absolute;
                                content: '';
                                width: 90%;
                                height: .015rem;
                                background-color: $graysColor;
                                bottom: 0;
                            }
                           
                        }
                   }
                   
               }
            }
            .Details_Information{
                flex: 1;
                margin-left: .25rem;
             @include flex4();
                div{
                    background-color: $white;
                }
                .Information_avatar{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    div:first-child{
                        margin: .4rem 0 .1rem;
                        @include wh(1.5rem,1.5rem);
                        img{
                           @include wh(1.5rem,1.5rem);
                           border-radius: 50%;
                        }
                    }
                    div:nth-child(2){
                        font-size: .35rem;
                        font-weight: 400;
                        font-family:'方正幼圆';
                        margin: .05rem 0 .05rem;
                    }
                    div:nth-child(3){
                        position: relative;
                        width: 40%;
                        display: flex;
                        justify-content: space-around;
                        font-size: .2rem;
                        color: $textColor;
                        span:nth-child(2)::before{
                            content: '';
                            right: 49%;
                            top: .03rem;
                            position: absolute;
                            @include wh(.025rem,.2rem);
                            background-color: $graysColor;
                        }
                    }
                    div:nth-child(4){
                        font-size: .12rem;
                        color: $textColor;
                        margin: .1rem 0 .2rem;
                    }
                    div:nth-child(5){
                        width: 70%;
                        display: flex;
                        justify-content: space-around;
                        font-size: .2rem;
                        button{
                            display: flex;
                            @include wh(1.3rem,.6rem);
                            margin-bottom: .3rem;
                            align-items: center;
                            border: none;
                            border-radius: .0625rem;
                            background-color: $Orange1;
                            transition: .3s;
                        }
                        button:hover{
                            background-color: $hoverOrange1;
                        }
                        svg{
                            @include wh(.3rem,.3rem);
                            flex: 1.5;
                        }
                        span{
                            flex: 1;
                            padding-right: .2rem;
                            font-size: $smallSize;
                        }
                    }
                }
                .Information_more{
                    @include flex2();
                   h1{
                    @include fontsize($middleSize,$black);
                    height: 1rem;
                    line-height: 1rem;
                    span{
                        color: $hoverOrange1;
                    }
                   }
                   span{
                    @include fontsize($smallSize,$black);
                    }
                }
                .Information_wallpaper{
                    padding: .2rem .1rem .1rem;
                    h1{
                        @include wh(100%,.6rem);
                        line-height: .6rem;
                        @include fontsize($middleSize,$blacks);
                        border-bottom: .02rem solid  $graysColor;
                    }
                    .informationBox{
                        @include flex3();
                        display: flex;
                        div{
                            @include wh(2.15rem,2.5rem);
                            overflow: hidden;
                            img{
                                @include wh(200%,120%);
                                margin-top: .1rem;
                                margin-left: -1rem;
                            }
                    }
                    }
                }
                .Information_more,.Information_wallpaper{
                    margin-top: .25rem;
                }
            }
            .btn{
                position: absolute;
                @include wh(.8rem,.8rem);
                top: .4rem;
                right: -1rem;
                svg{
                    @include wh(100%,100%);
                    opacity: .8; 
                    transition: all .5s;
                }
                svg:hover{
                    opacity: 1;
                }
            }
        }
    }
</style>
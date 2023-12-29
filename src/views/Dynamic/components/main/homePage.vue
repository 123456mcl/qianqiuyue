<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-05 15:31:33
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-27 16:18:45
 * @FilePath: \Vue-wallpapers site\src\views\Dynamic\components\main\homePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-05 15:12:44
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-19 11:27:10
 * @FilePath: \Vue-wallpapers site\src\views\Dynamic\components\dynamicMian.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section>
      <div class="boxList">
            <div>
               <a href="#">我的壁纸</a>
               <div class="divList">
               
               </div>
                <hr>
            </div>
            <div>
              <a href="#">我的动态</a>
              <div class="divList"></div>
              <hr>
            </div>
            <div>
              <a href="#">我的收藏</a>
              <div class="divList"></div>
              <hr>
            </div>
            <div>
              <a href="#">我的订阅</a>
              <div class="divList"></div>
              <hr>
            </div>
      </div>
      <div class="boxList2" ref="boxList2">
          <div class="boxBackground" >
            <el-carousel height="3.6rem">
            <el-carousel-item v-for="item in data" key="index">
              <img :src="item.img_url[0]" style="width: 100%;height:100%;vertical-align: bottom;" alt="">
              <h5>No.001【动漫】优选壁纸荐</h5>
              <h6>us:千秋月</h6>
            </el-carousel-item>
          </el-carousel>                          
          </div>
          <div class="boxAnnouncement">
              <h1>公告</h1>
              <textarea type="textarea" rows="4" placeholder="编辑我的空间公告" maxlength="150" class="be-textarea_inner"></textarea>
          </div>
          <div class="boxInformation" ref="boxInformation">
              <h1>个人资料</h1>
              <button class="reviseBtn" @click="reviseBtn">修改资料</button>
              <el-form :model="form" v-if="istrue" label-width="1.4rem" style="margin-top:.4rem">
              <el-form-item label="昵称" style="width: 4.5rem;height: .6rem;">
                <el-input v-model="form.name" />
              </el-form-item>
              <el-form-item label="出生日期" style="width: 4rem;height: .6rem;">
                <el-col :span="11">
                  <el-date-picker  
                    v-model="form.date1"
                    type="date"
                    placeholder="Pick a date"
                  />
                </el-col>
              </el-form-item>
              <el-form-item label="性别" style="width: 4rem;height: .6rem;">
                <el-radio-group v-model="form.resource" >
                  <el-radio label="男" />
                  <el-radio label="女"/>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="个性签名" :resize="false" style="width: 4.5rem;height: .6rem;">
                <input v-model="form.desc" type="textarea" :resize="false" :autosize="false"/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width: 1rem; height:.4rem;font-size:.25rem"   @click="onSubmit">清空</el-button>
                <el-button style="width: 1rem; height:.4rem;font-size:.25rem;margin-left:.5rem">登录</el-button>
              </el-form-item>
            </el-form>
            <div v-else="istrue==false" class="boxInformationList3">
               <h6>uid: 002</h6>
               <h6>生日: 01-18</h6>
            </div>
          </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import {getRecommend} from '../../../../apis/getRecommend'
import { onMounted,ref,reactive } from 'vue';
const data:any=ref([
])
const istrue=ref(false)
const boxList2:any=ref(null)
const boxInformation:any=ref(null)
const form = reactive({
  name: '',
  date1: '',
  resource: '',
  desc: '',
})
onMounted(()=>{
  getRecommend({
    url:'/api/TopTen'
  }).then((result)=>{
    data.value = result.data
  })
})
const reviseBtn=()=>{
  istrue.value=!istrue.value
  if(istrue.value){
    boxInformation.value.style.flex=1.5
    boxList2.value.style.height=13.57+'rem'
  }
  else{
    boxInformation.value.style.flex=1
    boxList2.value.style.height=10.5+'rem'
  }
}
const onSubmit=()=>{
  
}
</script>

<style lang="scss" scoped>
textarea {
  resize: none !important;
}
section{
    position: relative;
    width: 95%;
    left: 50%;
    min-height: 10rem;
    transform: translatex(-50%);
    background-size: 100% 100%;
    border-radius: .0375rem;
    display: flex;
    margin-top: .5rem;
    .boxList{
      background-color: rgb(255,255,255);
      border: .0125rem solid #eee;
      border-radius: .05rem;
      padding: .125rem .1875rem .1875rem .45rem;
    }
    .boxList2{
      border-radius: .05rem;
      display: flex;
      margin-left: .375rem;
      height: 10.5rem;
      flex-direction: column;
      .boxBackground{
        position: relative;
        background-color: rgb(255,255,255);
        border: .0125rem solid #eee;
        border-radius: .1rem;
        overflow: hidden;
        bottom: 0;
     .el-carousel__item h5,.el-carousel__item h6 {
      position: absolute;
      color: #ffffff;
      left:.1875rem;
      }
      .el-carousel__item h6{
        top: .5rem;
      }
      .el-carousel__item h5{
        top: .2rem;
      }
      .el-carousel{
        --el-carousel-indicator-width:.1rem;
        --el-carousel-indicator-height:.0375rem;
        --el-carousel-indicator-padding-vertical:.2rem;
      }
        .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      
      }
      .boxAnnouncement,.boxInformation{
        margin-top: .25rem;;
        background-color: rgb(255,255,255);
        border: .0125rem solid #eee;
      }
      
      .boxAnnouncement{
        flex: 2.5;
        padding: .225rem .225rem 0rem;
          h1{
            position: relative;
            font-size: .25rem;
            display: block;
          }
          h1::after{
            position: absolute;
            content: '';
            width: 95%;
            height: .01rem;
            background: #cccdcd;
            top: .55rem;
            left: .125rem;
          }
          textarea{
            width: 95%;
            height: 3.5rem;
            color: #6d757a;
            border-radius: .05rem;
            box-sizing: content-box;
            font-size: .275rem;
            white-space: nowrap;
            margin-top: .225rem;
            padding: .125rem .125rem .125rem;
            display:inline-block;
            resize:none;
            border: .0125rem solid rgb(255,255,255);
            transition: all .3s;
            outline-color: rgb(0,161,214);
            font-family: '方正';
          }
          textarea:hover{
            border: .025rem solid rgb(0,161,214);
          }
          
      }
      .boxInformation{
        padding: .225rem .225rem 0rem;
        position: relative;
        flex: 1;
         font-size: .25rem;
          h1{
            position: relative;
            font-size: .25rem;
          }
          h1::after{
            position: absolute;
            content: '';
            width: 95%;
            height: .01rem;
            background: #cccdcd;
            top: .55rem;
            left: .125rem;
          }
          .reviseBtn{
            position: absolute;
            width: 1rem;
            height: .4rem;
            right: .25rem;
            top: .25rem;
            font-size: .2rem;
          }
          label {
              width: 1rem;
          }
          .el-form-item .asterisk-left{
              width: 3.75rem;
              height: .75rem;
          }
          .el-form{
            --el-form-label-font-size:.2rem;
          }
          .el-input{
            --el-input-height:.5rem
          }
          .el-col-11{
            max-width: 3rem;
            height: .5rem;
          }
          .el-radio {
            --el-radio-input-height: .25rem;
            --el-radio-input-width: .25rem;
          }
          .el-button{
            height: .4rem;
            margin-top: .125rem;
          }
          :root{
            --el-font-size-base:.175rem;
          }
          .el-form-item{
            margin-bottom: .125rem;
          }
          [type="textarea"]{
            width: 3.5rem;
            height: .5rem;
            border: 1px solid rgb(225, 222, 222);
            border-radius: .05rem;
            outline-color: rgb(0,161,214);
          }
          .el-radio{
            --el-radio-font-size: .25rem;
          }
          .boxInformationList3{
            display: flex ;
            margin-top: .5rem;
            width: 100%;
            justify-content: space-around;
            font-size: .3125rem;
            color: rgb(117,117,117);
          }
      }
    }
    div:nth-child(1){
      flex: 3;
      div{
        font-size: .25rem;
        a{
          line-height: .7rem;
          text-decoration: dashed;
          color: rgb(34,34,34);
        }
        .divList{
        height: 3.75rem;
        background-color: rgb(244,245,247);
        margin:0 .25rem 0.25rem 0;  
      }
        hr{
          width: 98%;
          border: 0.0013rem solid rgba(228, 228, 228, 0.9);
        }
      }
    }
    div:nth-child(2){
      flex: 1;
    }
    }
</style>
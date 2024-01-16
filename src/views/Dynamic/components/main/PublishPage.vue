<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-13 20:14:18
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-16 21:03:50
 * @FilePath: \Vue-wallpapers site\src\views\Dynamic\components\main\PublishPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div id="PublishPage">
        <div id="PublishPage_wp">
            <h1>发布壁纸</h1>
            <div>
                <el-upload 
                class="upload-demo"
                drag="true"
                multiple
                show-file-list  
                :before-upload="beforeAvatarUpload"
                :http-request="onUpload"
                list-type="picture"
                :limit="8" >
                <el-icon class="el-icon--upload" style="width: 1rem;height:.8rem">
                    <img src="/src/assets/imgs/上传.png" alt="" style="width: 100%;height:100%;">
                </el-icon>
                <div class="el-upload__text" style="font-size: .25rem;">
                点击添加壁纸<em>拖拽壁纸上传</em>
                </div>
                <template #tip>
                <div class="el-upload__tip">
                上传大小为8MB壁纸(<span style="color: rgb(64,158,255);">请勿上传色情、涉政、涉恐作品图，违规者将被封禁账号</span>)
                </div>
                </template>
                </el-upload>
            </div>
            <div class="demo-collapse">
            <el-collapse >
                <el-collapse-item title="填写信息" >
                    <el-form :model="form" label-width="1.5rem" >
                    <el-form-item label="*壁纸标题" style="width:10rem">
                        <el-input  type="text" show-word-limit v-model="form.name" maxlength="10"/>
                    </el-form-item> 
                    <el-form-item label="*壁纸分区" >
                    <el-select v-model="form.region" placeholder="投稿分区" >
                        <el-option label="动漫" value="动漫" />
                        <el-option label="游戏" value="游戏" />
                        <el-option label="风景" value="风景" />
                        <el-option label="军事" value="军事" />
                        <el-option label="科幻" value="科幻" />
                        <el-option label="二次元" value="二次元" />
                    </el-select>
                    </el-form-item>
                    <el-form-item label="*下载权限">
                    <el-switch v-model="form.delivery" />
                    </el-form-item>
                    <el-form-item label="*作品权限">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="自制" />
                        <el-radio label="转载" />
                    </el-radio-group>
                    </el-form-item>
                    <el-form-item label="*壁纸标签">
                        <div id="el-input" ref="reference">
                            <span class="span" v-for="(item,index) in form.labelData">{{item}}<span>
                                <svg @click="btn(index)" style="width:.3rem;heights:.3rem;" t="1705247252464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4911" width="200" height="200"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#878787" p-id="4912"></path><path d="M555.323077 512l185.107692-185.107692c11.815385-11.815385 11.815385-31.507692 0-43.323077s-31.507692-11.815385-43.323077 0L512 468.676923 326.892308 283.569231c-11.815385-11.815385-31.507692-11.815385-43.323077 0s-11.815385 31.507692 0 43.323077l185.107692 185.107692-185.107692 185.107692c-11.815385 11.815385-11.815385 31.507692 0 43.323077 7.876923 3.938462 15.753846 7.876923 23.630769 7.876923s15.753846-3.938462 19.692308-7.876923l185.107692-185.107692 185.107692 185.107692c3.938462 3.938462 11.815385 7.876923 19.692308 7.876923s15.753846-3.938462 19.692308-7.876923c11.815385-11.815385 11.815385-31.507692 0-43.323077L555.323077 512z" fill="#EFEFEF" p-id="4913"></path></svg>
                            </span></span>
                            <input type="text" maxlength="4" @focus="btnColor" show-word-limit v-model="form.label" placeholder="最多添加四个标签" @blur="handleBlur"/>
                        </div>
                    </el-form-item>
                    <div class="labels">
                       <label>标签推荐:</label><span v-for="(item,index) in labels" @click="btnspan(index)">{{ item }}</span>
                    </div>
                    <el-form-item label="*壁纸简介">
                    <el-input v-model="form.desc" maxlength="30" placeholder="简单的介绍一下你的壁纸吧" show-word-limit type="textarea" />
                    </el-form-item>
                    <el-form-item>
                    <el-button @click="btnsubmit">Cancel</el-button>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
        </el-collapse>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref,reactive,toRaw} from 'vue'
import type { UploadProps, UploadUserFile } from 'element-plus'
import { error,success,warning } from '../../../../apis/messagePrompt'
import postWithToken from '../../../../apis/postComment'
import { useStore } from '../../../../stores/counter'
import { throttle } from 'lodash'
const fileList:any  = ref([])
const reference:any = ref(null)
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile:any) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png' && rawFile.type !== 'image/webp') {
    error('Avatar picture must be JPG、PNG、WEBP format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 8) {
    error('Avatar picture size can not exceed 8MB!')
    return false
  }
  success('The image has been uploaded successfully!')
  fileList.value.push(rawFile)
  console.log(fileList.value);
      return true
}
const labels=ref(['动漫','游戏','风景','科幻','电影','二次元','爱情','绘画','摄影'])
const form:any= reactive({
  name: '',
  region: '',
  delivery: false,
  label:'',
  labelData:[],
  resource: '',
  desc: '',
})
const onUpload=(file:UploadUserFile)=>{
    // console.log(form);
}
const btn=(e:number)=>{
    form.labelData.splice(e, 1);
}
const btnColor=()=>{
    reference.value.style=`
    border: 1px solid #58a3ed; transition: all .2s;
    `
}
const btnspan=(value:number)=>{
   
        if(form.labelData.length==4){
            form.labelData[3]=labels.value[value]
        }else if(form.labelData.length<4){
            form.labelData.push(labels.value[value])    
        }     
}
const handleBlur=()=>{
    reference.value.style.border='none'
    if(form.label.length>0){
        if(form.labelData.length==4){
            form.labelData[3]=form.label
            form.label='' 
        }else if(form.labelData.length<4){
            form.labelData.push(form.label)
            form.label='' 
        } 
    } 
}
function cc() {
    const id:any = useStore().$state.user_id
        const formData = new FormData();
        formData.append('form',JSON.stringify(form));
        formData.append('id',id);
        fileList.value.forEach((element: any,index:number) => {
            formData.append(`file${index}`,fileList.value[index]);
            })
        postWithToken('/PostComments',formData).then((res) =>{
            console.log(res.state);
            
        })
        .catch((err: any) => {
        });
}
const onSubmit = throttle(function(){
    console.log(form.delivery);
    if(form.name.length==0 || form.region.length==0  || form.resource.length==0|| form.desc.length==0 || fileList.value.length==0){
        warning('请填写所有选项再提交吧！')
    }else{
        form.name=''
        form.region=''
        form.resource=''
        form.desc=''
        fileList.value=[]
        cc()
    }
},5000)
const btnsubmit=() => {
    if(form.name.length==0 || form.region.length==0  || form.resource.length==0|| form.desc.length==0 || fileList.value.length==0){
        warning('请填写所有选项再提交吧！')
    }else{ 
        const data:any={
            form:form,
            file:fileList.value
        }
        localStorage.setItem('ScratchBoxes',data)
    }
}
</script>

<style lang="scss" scoped>
@import '/src/styles/color.scss';
#PublishPage{
    padding: .2rem 1rem .25rem;
    margin-top: .5rem;
    width: 95%;
    min-height:10rem;
    background-color: $white;
    margin-left: .6rem;
    box-shadow: 0 0.025rem 0.05rem rgba(0, 0, 0, 0.0784313725);
    #PublishPage_wp{
        h1:nth-child(1){
            position: relative;
            @include fontsize($Oversized,$black1);
            line-height: .75rem;
        }
        h1:nth-child(1)::after{
            position: absolute;
            content: '';
            left: 0;
            bottom: 0;
            @include wh(100%,.0125rem);
            background-color: $graysColor;
        }
        div:nth-child(2){
            margin-top: .2rem;
        }
    }
} 
#el-input{
    display:flex;
    align-items: center;
    @include wh2(12rem,.7rem);
    box-shadow: 0 0 0 .016rem #dcdfe6 inset;
    border-radius: .07rem;
    .span{
       @include flex9();
        @include wh2(1.3rem,.4rem);
        background-color: $graysColor;
        text-align: center;
        margin-left: .125rem;
        line-height: .5rem;
        border-radius: .05rem;
        text-align: center;
        font-family: '方正幼圆';
        @include fontsize($middleSize,$graysColor4);
       span{
        @include wh2(.3rem,.3rem);
        line-height: .2rem;
        svg{
            @include wh(.3rem,.3rem);
        }
       }
    }
    input{
        @include wh(100%,.5rem);
        border: none;
        outline: none;
        font-size: .25rem;
        margin-left: .125rem;
        margin-right : .125rem;
        padding: 0rem .1rem 0rem;
        color: #6d6d6d;
       
    }
    input::-webkit-input-placeholder{
            color: #a4a3a3;
        }
}
.labels{
    @include flex9();
    @include wh(13rem,.7rem);
    margin:0rem  1.5rem .25rem;
    label{
        color: #6f7174;
    }
    span{
        @include wh(1.1rem,.5rem);
        background-color: $grayColor3;
        text-align: center;
        line-height: .5rem;
        border-radius: .375rem ;
        @include fontsize($smallSize,$black);
        transition: .3s;
    }
    span:hover{
        background-color: $grayColor4;
    }
}
</style>
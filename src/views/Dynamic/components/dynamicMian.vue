<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-05 15:12:44
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-16 12:42:35
 * @FilePath: \Vue-wallpapers site\src\views\Dynamic\components\dynamicMian.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  
  <section class="section1">
        <div class="section1List">
            <div class="img" @click="isimg">
                <img :src="datas.information.avatar" alt="">
            </div>
            <div class="listbox">
               <div>
                    <h1>{{ datas.information.name }}</h1>
                    <h4 v-if="0"><svg t="1702652779381" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7494" width="200" height="200"><path d="M624.375393 840.051501c-125.609813 88.36249-295.736515 73.492828-404.520103-35.303041-110.134353-110.173239-124.039038-281.673218-33.051767-407.788543 10.089799-13.980409 6.934946-33.493835-7.046486-43.586704-13.975293-10.097986-33.488719-6.947226-43.573401 7.048533-109.006669 151.087067-92.384084 356.522949 39.534412 488.481354 73.39459 73.411987 170.102143 111.098307 267.485077 111.098307 75.477019 0 151.36643-22.654976 217.07906-68.868507 14.103206-9.91993 17.496489-29.393447 7.579629-43.499723C657.945977 833.516668 638.4786 830.131571 624.375393 840.051501z" fill="#1296db" p-id="7495"></path><path d="M959.12648 89.744977c-0.183172-0.919952-0.527003-1.772366-0.788969-2.662643-0.311085-1.060145-0.555655-2.133593-0.981351-3.163039-0.441045-1.063215-1.043772-2.029216-1.594311-3.028986-0.428765-0.779759-0.769526-1.592264-1.2689-2.340301-2.288113-3.426029-5.229095-6.370081-8.654101-8.659217-0.765433-0.511653-1.595334-0.862647-2.39249-1.298576-0.983397-0.540306-1.930979-1.1328-2.974751-1.566682-1.038656-0.429789-2.122337-0.678452-3.192715-0.991584-0.881067-0.258896-1.722224-0.599657-2.632967-0.780783-2.910283-0.579191-5.872754-0.61296-8.819876-0.357134-0.862647-0.071631-1.691525-0.25992-2.572592-0.25992L700.929953 64.636113c-17.237593 0-31.212886 13.980409-31.212886 31.222095s13.975293 31.222095 31.212886 31.222095l152.250566 0L687.421288 292.8907c-132.484384-112.053052-329.144392-120.017444-469.979978-15.001669-13.818727 10.305717-16.673751 29.865191-6.371104 43.693128 10.292414 13.82282 29.841655 16.678868 43.679825 6.372128 124.557854-92.88448 301.497729-79.900771 411.56659 30.200836 109.875456 109.904109 122.988102 286.714024 30.491455 411.273924-10.282181 13.843286-7.396457 33.402761 6.441713 43.682895 5.593392 4.15667 12.121062 6.15928 18.588357 6.15928 9.540284 0 18.959817-4.355191 25.081235-12.603039 104.566544-140.816143 96.449679-337.313445-15.363919-469.626937L897.316739 171.232896l0 147.016355c0 17.242709 13.975293 31.222095 31.212886 31.222095s31.212886-13.980409 31.212886-31.222095L959.742511 95.859231C959.743534 93.809549 959.527616 91.762937 959.12648 89.744977z" fill="#1296db" p-id="7496"></path><path d="M397.125693 486.328317c7.985882 0 15.972786-3.049452 22.068621-9.142218l21.535479-21.536502c12.192693-12.19167 12.192693-31.958876 0.005117-44.155662-12.187577-12.196787-31.94455-12.19167-44.142359-0.005117l-21.535479 21.536502c-12.192693 12.19167-12.192693 31.958876-0.005117 44.155662C381.14779 483.279888 389.134695 486.328317 397.125693 486.328317z" fill="#1296db" p-id="7497"></path><path d="M591.455633 649.499607l21.535479-21.536502c12.192693-12.19167 12.192693-31.958876 0.005117-44.155662-12.187577-12.19167-31.94455-12.196787-44.142359-0.005117l-21.535479 21.536502c-12.192693 12.19167-12.192693 31.959899-0.005117 44.155662 6.096858 6.097882 14.08274 9.147334 22.073738 9.147334C577.372893 658.641825 585.358775 655.592372 591.455633 649.499607z" fill="#1296db" p-id="7498"></path><path d="M338.748121 569.379848c-4.831029 20.683065-4.673439 64.014966 26.544563 95.238085 22.769586 22.781866 52.184523 29.179576 74.446549 29.179576 8.102538 0 15.265682-0.848321 20.808932-2.062985 16.84055-3.694135 27.499307-20.342304 23.811312-37.183877-3.698229-16.845667-20.341281-27.517727-37.172621-23.818475-0.23843 0.051165-23.196305 4.293793-37.751812-10.269901-14.122649-14.122649-10.119475-35.700083-9.819646-37.199227 3.708462-16.683984-6.690376-33.286104-23.369244-37.183877C359.485421 542.156834 342.670453 552.59558 338.748121 569.379848z" fill="#1296db" p-id="7499"></path></svg></h4>
                    <h4 v-else-if="1"><svg t="1702652632929" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6316" width="200" height="200"><path d="M612.939947 848.148923c-123.957173 79.558987-289.647843 61.574381-393.957537-42.745547-104.309694-104.314811-122.2943-269.985014-42.775222-393.931954 9.323343-14.526855 5.101181-33.859155-9.42465-43.177382-14.531971-9.318226-33.864272-5.101181-43.177382 9.42465C28.334325 526.2127 49.858548 724.664517 174.787862 849.592808c72.723302 72.728418 170.360016 110.412692 268.555455 110.412692 70.495564 0 141.29198-19.429515 203.349361-59.255569 14.526855-9.323343 18.742876-28.655643 9.42465-43.177382C646.793986 843.041602 627.456568 838.820464 612.939947 848.148923z" fill="#e35c9f" p-id="6317"></path><path d="M950.58699 292.284903l-87.151919-87.149872 87.151919-87.151919c12.20702-12.201903 12.20702-31.987528 0-44.189432-12.196787-12.20702-31.992645-12.20702-44.189432 0l-87.151919 87.151919-87.160105-87.157036C719.889771 61.591777 700.099029 61.58666 687.892009 73.79368c-12.201903 12.201903-12.201903 31.987528 0.005117 44.194548l87.154989 87.151919-87.953168 87.953168C554.461067 180.950212 357.577978 172.97968 216.556151 278.079366c-13.8351 10.314926-16.693194 29.891797-6.378268 43.732014 10.30981 13.824867 29.876448 16.693194 43.732014 6.378268 124.720559-92.977601 301.859979-79.971379 412.059823 30.222325 110.00644 110.010533 123.128295 286.978037 30.528294 411.642315-10.29446 13.854543-7.405667 33.432437 6.448876 43.721781 5.599532 4.160763 12.135388 6.164397 18.61087 6.164397 9.55154 0 18.98233-4.359284 25.110911-12.614296 104.690364-140.935869 96.565313-337.607134-15.382339-470.041376l87.954191-87.954191 87.157036 87.154989c6.098905 6.098905 14.099113 9.150404 22.095227 9.150404 7.996115 0 15.996322-3.051499 22.100344-9.155521C962.795033 324.277548 962.795033 304.491922 950.58699 292.284903z" fill="#e35c9f" p-id="6318"></path><path d="M396.458497 486.702847c7.996115 0 15.991206-3.051499 22.095227-9.150404l21.561062-21.555945c12.20702-12.201903 12.20702-31.987528 0.005117-44.194548s-31.982412-12.201903-44.194548-0.005117l-21.561062 21.555945c-12.20702 12.201903-12.20702 31.987528-0.005117 44.194548C380.462175 483.651348 388.457266 486.702847 396.458497 486.702847z" fill="#e35c9f" p-id="6319"></path><path d="M591.018681 650.0174l21.561062-21.555945c12.20702-12.201903 12.20702-31.987528 0.005117-44.194548-12.201903-12.201903-31.982412-12.20702-44.194548-0.005117l-21.561062 21.555945c-12.20702 12.201903-12.20702 31.987528-0.005117 44.194548 6.104021 6.102998 14.099113 9.155521 22.100344 9.155521C576.919569 659.167804 584.91466 656.116305 591.018681 650.0174z" fill="#e35c9f" p-id="6320"></path><path d="M338.01134 569.828057c-4.837168 20.701484-4.679579 64.072271 26.576285 95.321996 22.796192 22.801309 52.245921 29.205159 74.534554 29.205159 8.112772 0 15.284101-0.849344 20.833491-2.065032 16.861016-3.698229 27.532053-20.360723 23.838941-37.216623-3.702322-16.861016-20.36584-27.511587-37.216623-23.838941-0.239454 0.046049-23.223934 4.29277-37.795814-10.279111-14.140045-14.134929-10.131755-35.730783-9.831926-37.231973 3.712555-16.698311-6.698562-33.314757-23.396873-37.216623C358.774223 542.575366 341.93879 553.027415 338.01134 569.828057z" fill="#e35c9f" p-id="6321"></path></svg></h4>
                    <h4 v-else>设置性别</h4>
                    <h4 v-if="0"><svg t="1702652851170" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9653" width="200" height="200"><path d="M938.666667 896H85.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333V213.333333c0-46.933333 38.4-85.333333 85.333333-85.333333h853.333334c46.933333 0 85.333333 38.4 85.333333 85.333333v597.333334c0 46.933333-38.4 85.333333-85.333333 85.333333zM149.333333 384L213.333333 640h85.333334l64-256H298.666667l-42.666667 192L213.333333 384H149.333333z m512 0v256H725.333333v-64h85.333334c34.133333 0 64-29.866667 64-64v-64c0-34.133333-29.866667-64-64-64h-149.333334z m-213.333333 192V640h128v-64h-34.133333v-128h34.133333V384h-128v64h34.133333v128h-34.133333z m328.533333-55.466667H725.333333v-85.333333h51.2c17.066667 0 34.133333 12.8 34.133334 34.133333v21.333334c0 17.066667-12.8 29.866667-34.133334 29.866666z" p-id="9654" fill="#8a8a8a"></path></svg></h4>
                    <h4 v-else><svg t="1702653068650" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18381" width="200" height="200"><path d="M511.0784 512m-436.2752 0a436.2752 436.2752 0 1 0 872.5504 0 436.2752 436.2752 0 1 0-872.5504 0Z" fill="#F8D2FF" p-id="18382"></path><path d="M556.032 206.1824L747.52 316.7232c27.7504 16.0256 44.8512 45.6192 44.8512 77.6704v221.1328c0 32.0512-17.1008 61.6448-44.8512 77.6704l-191.488 110.5408a89.69216 89.69216 0 0 1-89.7024 0l-191.488-110.5408a89.68704 89.68704 0 0 1-44.8512-77.6704V394.3936c0-32.0512 17.1008-61.6448 44.8512-77.6704l191.488-110.5408c27.7504-16.0256 61.952-16.0256 89.7024 0z" fill="#DB90F6" p-id="18383"></path><path d="M760.3712 430.0288L543.1808 304.64a64.07168 64.07168 0 0 0-64 0L261.9904 430.0288a63.96928 63.96928 0 0 0-32 55.4496v144.896c0 22.8864 12.1856 43.9808 32 55.4496l217.1904 125.3888c19.8144 11.4176 44.1856 11.4176 64 0l217.1904-125.3888c19.8144-11.4176 32-32.5632 32-55.4496v-144.896c0-22.8864-12.2368-44.032-32-55.4496z" fill="#D186F7" p-id="18384"></path><path d="M760.3712 535.9104l-217.1904-125.3888a64.07168 64.07168 0 0 0-64 0l-217.1904 125.3888a63.96928 63.96928 0 0 0-32 55.4496v39.0144c0 22.8864 12.1856 43.9808 32 55.4496l217.1904 125.3888c19.8144 11.4176 44.1856 11.4176 64 0l217.1904-125.3888c19.8144-11.4176 32-32.5632 32-55.4496v-39.0144c0-22.8864-12.2368-44.032-32-55.4496z" fill="#C276F6" p-id="18385"></path><path d="M543.1808 516.4032a64.07168 64.07168 0 0 0-64 0l-217.1904 125.3888a63.60064 63.60064 0 0 0-22.528 22.016c5.4784 8.96 13.1584 16.5888 22.528 22.016l217.1904 125.3888c19.8144 11.4176 44.1856 11.4176 64 0l217.1904-125.3888c9.4208-5.4272 17.0496-13.056 22.528-22.016a64.02048 64.02048 0 0 0-22.528-22.016l-217.1904-125.3888z" fill="#AF64F6" p-id="18386"></path><path d="M479.1296 622.2848l-163.584 94.4128 163.584 94.4128c19.8144 11.4176 44.1856 11.4176 64 0l163.584-94.4128-163.584-94.4128a64.07168 64.07168 0 0 0-64 0z" fill="#A25BF4" p-id="18387"></path><path d="M392.9088 617.6256c-8.8064 0-16.7424-5.2736-20.1728-13.4144L296.0896 422.7584a21.9136 21.9136 0 0 1 11.6736-28.7232c11.1616-4.7104 24.0128 0.512 28.7232 11.6736l54.9888 130.2528 47.4112-129.28a21.91872 21.91872 0 0 1 41.1648 15.0528l-66.56 181.504a22.0416 22.0416 0 0 1-20.0704 14.3872h-0.512zM530.6368 617.6256c-12.0832 0-21.9136-9.8304-21.9136-21.9136V414.208c0-12.0832 9.8304-21.9136 21.9136-21.9136s21.9136 9.8304 21.9136 21.9136v181.504c0 12.1344-9.7792 21.9136-21.9136 21.9136zM613.632 617.6256c-12.0832 0-21.9136-9.8304-21.9136-21.9136V414.208c0-12.0832 9.8304-21.9136 21.9136-21.9136h55.6544c38.2464 0 69.376 31.1296 69.376 69.376 0 38.2464-31.1296 69.376-69.376 69.376h-33.6896v64.7168c0 12.0832-9.8304 21.8624-21.9648 21.8624z m21.9648-130.4576h33.6896a25.4976 25.4976 0 0 0 0-50.9952h-33.6896v50.9952z" fill="#FFFFFF" p-id="18388"></path></svg></h4>
               </div>
               <div>
                    {{datas.information.signature}}    
               </div>
            </div>
        </div>
       
  </section>
  <section class="section2">
    <el-button type="primary">风景</el-button>
    <el-button type="success">旅行</el-button>
    <el-button type="warning">冒险</el-button>
    <el-button type="danger">绘画</el-button>
    <ul>
        <li>
            <span>关注</span>
            <span>{{ datas.information.information_concern }}</span>
        </li>
        <li>
            <span>粉丝</span>
            <span>{{ datas.information.information_concern }}</span>
        </li>
        <li>
            <span>获赞</span>
            <span>{{ datas.information.information_concern }}</span>
        </li>
    </ul>
    <transition-group enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
    <div v-if="isInformation">
        <div class="Update_Information">
            <el-upload
                class="upload-demo"
                :before-upload="handleBeforeUpload"
                :on-exceed="handleExceed"
                :show-file-list="false"
                max-size="5MB"
                accept="image/*"
                :limit="1"
              >
              <img src="/src/assets/imgs/上传1.png" alt="">
                <span>选择本地上传</span>
              </el-upload>
            <div>
                <img src="/src/assets/imgs/上传2.png" alt="">
                <span>选择在线头像</span>
            </div>
        </div>
        <div class="Update_Information2">
            <img :src="imgList.avatar" alt="">
            <button ref="btn" @click="btnClick()">更新</button>
        </div>
    </div>
    </transition-group>
  </section>
</template>

<script setup lang="ts">
import {useStore} from '../../../stores/counter'
import {ref,toRaw,onMounted,reactive} from 'vue'
import { useRouter } from 'vue-router'
import { ElUpload, ElButton, ElMessage,ElNotification } from 'element-plus';
import { log } from 'util';
import axios from 'axios';
import { throttle } from 'lodash'
const isInformation=ref(false)
const uploadRef = ref()
const id=ref()
const datas=ref<any>({
    information:{
        avatar:'',
        gender:0,
        information_concern:0,
        information_followers: 0,
        information_id: null,
        information_tsan: 0,
        name:'未设置',
        signature:'登录了才能设置签名哟~',
        vip:0,
    }
})
const istrue=ref(false)
const fileList = ref();
const imgList = ref({
    avatar:''
});
onMounted(()=>{
    datas.value=useStore().$state
    imgList.value.avatar=datas.value.information.avatar
})  
const isimg=()=>{
  if(useStore().$state.login){
    isInformation.value=!isInformation.value
  }else{
    ElNotification({
    title: '提示',
    message: '你还未登录',
    type: 'warning',
  })}}
const btn=ref()
// 定义节流
        function cc() {
            const formData = new FormData();
            formData.append('file', fileList.value);
            formData.append('id', datas.value.information.information_id);
            axios.post('/Url',formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }).then((r:any)=>{
                if(r.data.status==200){
                    ElNotification({
                        title: 'Success',
                        message: '修改头像成功',
                        type: 'success',
                    })
                    istrue.value=false
                    btn.value.style.backgroundColor= 'rgb(220, 220, 220)';
                    btn.value.style.color= 'rgb(91, 91, 91)'; 
                    useStore().$patch((state:any) => {
                        state.information=r.data.data
                    })
                    isInformation.value=false
                }else{
                    ElNotification({
                    title: 'Error',
                    message: '修改头像失败',
                    type: 'error',
                })
                }
            })
        }
// 获取img参数并解析
const handleBeforeUpload:any= (file:never) => {
  fileList.value = file
  const reader=new FileReader();
  reader.onload=(e:any)=>{
    imgList.value.avatar = e.target?.result;
    btn.value.style.backgroundColor= 'rgb(0,181,229)';
    btn.value.style.color= 'rgb(255,255,255)'; 
    istrue.value=true
  }
  reader.readAsDataURL(file)
  return false; // 阻止上传到服务器
};
const btnClick=throttle(function(){
    if(istrue.value){
        cc()
    }
    else{
        ElNotification({
            title: 'Error',
            message: '请上传图片',
            type: 'error',
        })
    }
},2000)
const handleExceed = (files: string | any[], uploadFiles: string | any[]) => {
  ElMessage.warning(
    `The limit is 1, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};
</script>

<style lang="scss" scoped>

section{
    position: relative;
    width: 95%;
    left: 50%;
    transform: translatex(-50%);
}
.section1{   
    position: relative;
    height: 4rem;
    background: url(../../../assets/imgs/dynamicTitle.png)no-repeat;
    background-size: 100% 100%;
    box-shadow: 0 2px .05rem #00000014;
    border-radius: .0375rem;
    border: 1px solid #eee;
    .section1List{
        position: absolute;
        width: 55%;
        height: 2.5rem;
        bottom: .225rem;
        left: 5%;
        display: flex;
        align-items: center;
        div:nth-child(1){
            width:2.4rem;
            height: 2.4rem;
            flex: 1;
            position: relative;
            transition: 1s;
            img{
                width:2.4rem;
            height: 2.4rem;
                border-radius: 50%;
                border: .025rem solid white;
            }
        }
        .img:hover::after{
            position: absolute;
            content: '更换头像';
            left: 0;
            top: 0;
            width: 100%;
            height: 2.4rem;
            font-size: .29rem;
            background-color: rgba(114, 114, 114, 0.7);
            text-align: center;
            line-height: 2.45rem;
            color: white;
            border-radius: 50%;
        }
        .listbox{
            flex: 4;
            display: flex;
            margin-top: .5rem;
            flex-direction: column;
            margin-left: .375rem;
            div{
                margin-top: .1rem;
                h4:nth-child(2),h4:nth-child(4),h4:nth-child(3){
                    padding-left: .1rem;
                }
            }
            div:nth-child(1){
                display: flex;
                font-size: .3rem;
                color: white;
                width: 3.75rem;
                h1,h4{
                    line-height: .5rem;
                    margin-left: .0625rem;
                }
                svg{
                    width: .5rem;
                    height:.5rem;
                }
            }
            div:nth-child(2){
                font-size: .3rem;
                color: white;
            }
        }
    }
}
.section2{
    height:1rem;
    background-color: rgb(255,255,255);
    border: .0125rem solid #eee;
    display: flex;
    align-items: center;
    position: relative;
    button:first-child{
        margin-left: 1rem;
    }
    button{
        width: 1.2rem;
        margin-left: .4rem;
        opacity: .8;
        height: .525rem;
        font-size: .2525rem;
    }
    ul{
        display: flex;
        position: absolute;
        right: .675rem;
        width: 3.2rem;
        li{
            flex: 1;
            display: flex;
            color: #949494;
            font-size: .275rem;
            flex-direction: column;
            align-items: center;
        }
    }
    div:nth-child(6){
    position: absolute;
    display: flex;
    width: 6rem;
    height: 3rem;
    background-color: rgb(255,255,255);
    z-index: 2;
    left: 4.25rem;
    bottom: 1.1rem;
    border-radius: .1rem;
    padding: .4rem .1rem .4rem .4rem;
    overflow: hidden;
    .Update_Information{
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        div{
            flex:1;
            background-color:rgb(244,245,247);
            font-size: .275rem;
            border-radius: .0625rem;
            display: flex;
            align-items: center;
            color: rgb(140, 140, 140);
            transition: .5s;
            border: 1px solid #e5e9ef;
            img{
                width: .475rem;
                margin-left: .125rem;
            }
        }
        div:nth-child(2){
            margin-top: .125rem;
        }
        div:hover{
            background-color:rgb(217, 217, 217);
        }   
    }
    .Update_Information::after{
        content: '';
        position: absolute;
        width: .0125rem;
        height: 90%;
        background-color: #cfcfcf;
        right: -0.4rem;
        top: 5%;
    }
    .Update_Information2{
        border-radius: .0625rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: .4rem;
        img{
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 50%;
        }
        button{
           width: 1rem;
           height: .425rem;
           margin-right: .29rem;
           margin-top: .1175rem;
           background-color: rgb(220, 220, 220);
           color:rgb(91, 91, 91) ;
           border-radius: .05rem;
           border: 1px solid rgb(116, 115, 115);
           opacity: 1;
           transition: all .3s;
        }
        button:hover{
            opacity: .7;
        }
    }
 }
}

</style>
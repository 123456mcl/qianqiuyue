/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-19 10:26:26
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-15 23:02:19
 * @FilePath: \Vue-wallpapers site\src\apis\getToken.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios';
import {useStore} from '../stores/counter'
// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 对响应数据做些事
    return response;
  },
  (error) => {
    // 对响应错误做些事
    if (error.response && error.response.status === 401) {
      // 处理令牌无效的情况
      // 例如重新登录用户或显示错误提示
      console.log('token错误');
    }
    return Promise.reject(error);
  }
);

export async function getToken(): Promise<any> {
  const uid = localStorage.getItem('uid');
  try {
    const params = {
      id:uid,
    };
    const response = await axios.post('http://localhost:8000/Token',params);
    useStore().$patch((state) => {
      state.user_id=response.data.data.information_id
      state.information=response.data.data
      state.login=true
    })
    return response.data; // 根据实际情况返回相应的数据
  } catch (error) {
    console.log('发生错误');
    // throw error; // 根据实际情况处理错误
  }
}
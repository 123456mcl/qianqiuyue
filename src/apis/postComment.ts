/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-15 14:46:00
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-16 12:39:15
 * @FilePath: \Vue-wallpapers site\src\apis\getapi.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios';

// 创建一个 Axios 实例
const instance = axios.create({
  baseURL: 'http://localhost:8000', // 设置请求的基础 URL
  timeout: 5000 // 设置请求超时时间
});

// 设置请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做一些处理，例如添加请求头等
    const token = localStorage.getItem('token');// 替换为你的 Token
    config.headers.Authorization = token;
    return config;
  },
  error => {
    // 处理请求错误
    console.error('请求拦截器发生错误:', error);
    return Promise.reject(error);
  }
);

// 封装 POST 请求的 API
const postWithToken = (url: string, data: FormData | number | any) => {
  console.log(data);
  return instance.post(url,data)
    .then(response => {
      // 处理请求成功的响应数据
      return response.data;
    })
    .catch(error => {
      // 处理请求失败的错误
      console.error('请求失败:', error);
      throw error;
    });
};

export default postWithToken;
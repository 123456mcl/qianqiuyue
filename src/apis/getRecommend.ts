import axios from 'axios';
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

export async function getRecommend(v:string | number | object[]): Promise<any> {
 const uid = localStorage.getItem('uid');
 try {
   const params = {
     id:uid,
   };
   const response = await axios.post(`${v}`,params);
   return response.data; // 根据实际情况返回相应的数据
 } catch (error) {
   console.log('发生错误');
   // throw error; // 根据实际情况处理错误
 }
}
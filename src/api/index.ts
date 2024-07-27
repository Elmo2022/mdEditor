// // 定义一个异步函数
// const request = async () => {
//     try {
//       // 使用 fetch 发送请求，并等待响应
//       const response = await fetch("https://api.apiopen.top/api/sentences");
//       // 确保响应状态是成功的
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       // 将响应转换为 JSON 格式
//       const data = await response.json();
//       // 返回 JSON 数据
//       return data;
//     } catch (error) {
//       // 处理请求过程中可能发生的错误
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   };
  
//   export default request;
// import axios from 'axios';

// // 使用 axios 发起 GET 请求
// const request = async () => {
//   try {
//     // 发送请求并等待响应
//     const response = await axios.get("https://api.apiopen.top/api/sentences");
//     // 返回响应数据
//     return response.data;
//   } catch (error) {
//     // 处理请求过程中可能发生的错误
//     console.error('There was a problem with the axios request:', error);
//     throw error; // 可以选择将错误抛出，让调用者处理
//   }
// };

// export default request;

import axios from "axios";
//引入进度条和进度条样式
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'
//start 进度条开始 done 进度条结束

const request = axios.create({
    baseURL: 'https://api.apiopen.top/api/sentences',
    timeout:2000
})


//请求拦截器；在请求发送前，请求拦截器可以检测到，请求发出去之前做一些事情
request.interceptors.request.use((config)=>{
    //config;配置对象 对象里面有一个属性很重要 headers 请求头
    //开启进度条
    nProgress.start();
    return config
});

//响应拦截器
request.interceptors.response.use((res)=>{
    //成功的回调函数；服务器响应数据回来之后，响应拦截器可以检测到，可以做一些事情
    //进度条结束
    nProgress.done();
    return res;

},(error)=>{
    //失败的回调函数
    return Promise.reject(new Error('failed to open the page'))
})


export default request

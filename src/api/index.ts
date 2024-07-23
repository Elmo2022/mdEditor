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
import axios from 'axios';

// 使用 axios 发起 GET 请求
const request = async () => {
  try {
    // 发送请求并等待响应
    const response = await axios.get("https://api.apiopen.top/api/sentences");
    // 返回响应数据
    return response.data;
  } catch (error) {
    // 处理请求过程中可能发生的错误
    console.error('There was a problem with the axios request:', error);
    throw error; // 可以选择将错误抛出，让调用者处理
  }
};

export default request;
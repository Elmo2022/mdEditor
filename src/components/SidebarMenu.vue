<template>
    <div class="sidebar">
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <!-- 可以根据需要添加更多的菜单项 -->
        </ul>
      </nav>
    </div>
  </template>
  
  <script setup lang="ts">
  // 导入 RouterLink 组件，它将被自动注册为当前组件的子组件
  import { RouterLink } from 'vue-router';
  
  // 如果你需要在模板中使用额外的响应式状态或计算属性，
  // 你可以在这里定义它们，并将它们作为返回对象的属性
  // 例如：
  // const menuItems = ref([
  //   { path: '/', name: 'Home' },
  //   { path: '/about', name: 'About' },
  //   // 其他菜单项...
  // ]);
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #f4f4f4;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    margin-bottom: 10px;
  }
  
  router-link {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  router-link:hover,
  router-link.router-link-exact-active {
    background-color: #007bff;
    color: white;
  }
  </style>
<script setup lang="ts">
import mdEditor from '../src/views/mdEditor.vue'
import videoPlayer from '../src/views/videoPlayer.vue'
import eventBus from '../src/views/eventBus.vue'
import { ref } from 'vue'
import request from '../src/api'
import pinia from '../src/views/pinia.vue'
import watchView from '../src/views/watchView.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const poem = ref('')
const toMdEditor = () => {
  router.push('/mdEditor')
}
const toVideoPlayer = () => {
  router.push('/videoPlayer')
}
const toEventBus = () => {
  router.push('/eventBus')
}
const toPinia = () => {
  router.push('/pinia')
}
const toWatch = () => {
  router.push('/watchView')
}
async function fetchData() {
  try {
    const result = await request();
    console.log(result); // 处理返回的数据
    poem.value = result.result.name
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
const requestPoem = async () => {
  try {
    // 发送请求并等待响应
    const response = await request.get("https://api.apiopen.top/api/sentences");
    // 返回响应数据
    poem.value = response.data.result.name;
  }  catch (error) {
    // 处理请求过程中可能发生的错误
    console.error('There was a problem with the axios request:', error);
    throw error; // 可以选择将错误抛出，让调用者处理
  }
};

</script>

<template>
<a-button @click="toMdEditor" type="primary" primary>mdEditor</a-button>
<a-button @click="toVideoPlayer" type="primary" primary>videoPlayer</a-button>
<a-button @click="toEventBus" type="primary" primary>eventBus</a-button>
<a-button @click="toPinia" type="primary" primary>pinia</a-button>
<a-button @click="requestPoem" type="primary" primary>请求一个古诗</a-button>
<a-button @click="toWatch" type="primary" primary>watch实践</a-button>
{{ poem }}
<router-view></router-view>

</template>



<style  scoped>


</style>


  ./api
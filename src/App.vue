<script setup lang="ts">
import mdEditor from '../src/views/mdEditor.vue'
import videoPlayer from '../src/views/videoPlayer.vue'
import eventBus from '../src/views/eventBus.vue'
import { ref } from 'vue'
import request from '../src/api'
import pinia from '../src/views/pinia.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const poem = ref('这里将会随机展示一句诗词')
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
async function fetchData() {
  try {
    const result = await request();
    console.log(result); // 处理返回的数据
    poem.value = result.result.name
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
const requestPoem = ()=>{
  fetchData()
}

</script>

<template>
<a-button @click="toMdEditor" type="primary" primary>mdEditor</a-button>
<a-button @click="toVideoPlayer" type="primary" primary>videoPlayer</a-button>
<a-button @click="toEventBus" type="primary" primary>eventBus</a-button>
<a-button @click="toPinia" type="primary" primary>pinia</a-button>
<a-button @click="requestPoem" type="primary" primary>请求一个古诗</a-button>
{{ poem }}
<router-view></router-view>

</template>



<style  scoped>


</style>


  ./api
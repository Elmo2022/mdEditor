<script setup lang="ts">
import mdEditor from '../src/views/mdEditor.vue'
import videoPlayer from '../src/views/videoPlayer.vue'
import eventBus from '../src/views/eventBus.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const toMdEditor = () => {
  router.push('/mdEditor')
}
const toVideoPlayer = () => {
  router.push('/videoPlayer')
}
const toEventBus = () => {
  router.push('/eventBus')
}
</script>

<template>
<a-button @click="toMdEditor" type="primary" primary>mdEditor</a-button>
<a-button @click="toVideoPlayer" type="primary" primary>videoPlayer</a-button>
<a-button @click="toEventBus" type="primary" primary>eventBus</a-button>

<router-view></router-view>

</template>



<style  scoped>


</style>


  
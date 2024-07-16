<script setup lang="ts">
import mdEditor from '../src/views/mdEditor.vue'
import videoPlayer from '../src/views/videoPlayer.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const toMdEditor = () => {
  router.push('/mdEditor')
}
const toVideoPlayer = () => {
  router.push('/videoPlayer')
}
</script>

<template>
<a-button @click="toMdEditor" type="primary" primary>mdEditor</a-button>
<a-button @click="toVideoPlayer" type="primary" primary>videoPlayer</a-button>
<router-view></router-view>
Copyright © 2024Elmo
</template>



<style  scoped>


</style>


  
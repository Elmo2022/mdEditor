<template>
  111
  <div class="video-player">
    <video
      ref="videoElement"
      controls
      @play="handlePlay"
      @pause="handlePause"
      @ended="handleEnded"
    >
      <source :src="url" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="controls">
      <!-- 控制按钮等 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const url = ref<string>("data.mp4")
const videoElement = ref(null);


const handlePlay = () => {
  console.log('Video is playing');
};

const handlePause = () => {
  console.log('Video is paused');
};

const handleEnded = () => {
  console.log('Video has ended');
};
</script>

<style scoped>

</style>
<template>
  <div class="video-player">
   {{data}}
  </div>
  <button @click="changeData">修改</button>

<uls :message="messages" @update:message="updateMessages" />
</template>

<script setup lang="ts">
import uls from "../components/ul.vue"

import { reactive, ref,toRaw } from 'vue';
const data = ref<string>("这里是测试一下自己学的vue知识")
const changeData = () => {
  data.value = "修改后的数据"
}
const messages =  reactive<string[]>(["詹姆斯","乔丹","杜兰特"])

const updateMessages = (newMessages) => {
  messages.splice(0, messages.length, ...newMessages);
  console.log(toRaw(messages))
}

</script>

<style scoped>

</style>
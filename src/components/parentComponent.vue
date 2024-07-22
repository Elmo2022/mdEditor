<template>
  <div style="width: 300px;height: 300px; background-color: green; margin: 0 auto; text-align: center; line-height: 300px">
    我是弟弟组件
    <button @click="sendData">给哥哥发信息</button>
  </div>
 
  <template>


</template>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

import eventBus from '../utils/event-bus'; // 引入 event bus

export default defineComponent({

  setup() {
    const sendData = () => {
      eventBus.emit('custom-event', '在吗？哥哥');
    };

    return {
      sendData
    };
  }
});
</script>
<style>

</style>
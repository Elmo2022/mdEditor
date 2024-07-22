<template>
  <div style="width: 300px;height: 300px; background-color: red; margin: 0 auto; text-align: center; line-height: 300px">
    我是哥哥组件
    
   {{ datas }}
  </div>

</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue';
import eventBus from '../utils/event-bus'; // 引入 event bus
import {ref} from  'vue'
export default defineComponent({
  setup() {
    const datas = ref('')
    // 监听事件
    const emitData = (data: string) => {
      eventBus.emit('custom-event', data);
    };

    watchEffect(() => {
      eventBus.on('custom-event', (payload) => {
        datas.value = payload;
        console.log('Received event with payload:', payload);
      });
    });

    return {
      emitData,
      datas
    };
  }
});
</script>
<style>

</style>
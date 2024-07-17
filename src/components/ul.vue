<template>
    <ul v-for="item in message" :key="item">
    <li>{{item}}</li>

  </ul>
  <a-button type="primary" @click="handleClick">我是子组件的按钮</a-button>
</template>

<script setup lang="ts">

import { defineProps,defineEmits} from 'vue'

const props = defineProps({
        message: {
            type: Array,
            default: () => []
        }
    })
const message:string[] = props.message
const emit = defineEmits(['update:message'])

const handleClick = () => {
  // 触发事件并传递新的消息数组
  emit('update:message', [...props.message, "新消息"])
}


</script>

<style>

</style>
<template>
  <br>
  这里展示一下兄弟组件通过event bus进行通信
  <br>
 <child></child>
 <parent/>
</template>

<script setup lang="ts">
import child from "../components/childComponent.vue"
import parent from "../components/parentComponent.vue"
</script>

<style>

</style>
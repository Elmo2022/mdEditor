<script setup lang="ts">
import { ref } from 'vue';
import VMdEditor from '@kangc/v-md-editor';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
import katex from 'katex';

VMdEditor.use(githubTheme);
VMdEditor.use(createKatexPlugin());

const data:string = ref("### 1111"); 


function downloadMarkdown() {
//   const markdownContent = `# 这是一个 Markdown 标题

// 这是一些 Markdown 内容

// - 列表项 1
// - 列表项 2
// - 列表项 3`;
const markdownContent = data.value;
  const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'hello.md';
  link.click();
}
</script>

<template>
      你好啊

      <v-md-editor  v-model="data" />
      

      这是下面


<button @click="downloadMarkdown">下载</button>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { ref } from 'vue';
import VMdEditor from '@kangc/v-md-editor';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
import katex from 'katex';

VMdEditor.use(githubTheme);
VMdEditor.use(createKatexPlugin());

const data:string = ref(
  `### 标题1
> 这里是引用
$$\\sum_{i=1}^n a_i=0$$`); 


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
  <div class="app-container" >
    <v-md-editor v-model="data" class="editor" height="660px" />
    <div class="button-container">
      <button @click="downloadMarkdown" class="download-button">下载</button>
   
    </div>
  </div>
</template>

<style  scoped>

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f8d4e1;
}
.editor {
  width: 800px;
  height: 80%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(237, 162, 191, 0.1);
}
.button-container {
  margin-top: 10px;
}
.download-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f5b1d4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
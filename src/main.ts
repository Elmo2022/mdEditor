import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import VuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import markdownItKatex from 'markdown-it-katex';
import 'katex/dist/katex.min.css';

const app = createApp(App);
app.use(VMdEditor).mount('#app')
//VMdEditor.use(githubTheme);

// 配置 markdown-it 插件
// VMdEditor.extendMarkdown((md:any) => {
//   md.use(markdownItKatex);
// });

import { createApp } from 'vue'
import router from './router';
import {createPinia} from 'pinia'
import App from './App.vue'
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
//import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

//import VuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
//import markdownItKatex from 'markdown-it-katex';
import 'katex/dist/katex.min.css';
import Antd from 'ant-design-vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import globalComponent from '../src/components/globalComponent.vue';
const app = createApp(App);
app.use(router)
app.use(createPinia())
app.use(Antd)
app.use(ElementPlus)
app.use(VMdEditor)
app.component('global-component', globalComponent).mount('#app')

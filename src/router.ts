import {createWebHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import ModalDemo from './components/ModalDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
import { h } from 'vue'
import Markdown from "./components/Markdown.vue"

const genMd = filename =>  h(Markdown, {path: `../markdown/${filename}.md`, key:filename})
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc, 
            children: [
                {path: "", redirect: "/doc/intro"},
                {path: "intro", component: genMd("intro")},
                {path: "get-started", component: genMd("get-started")},
                {path: "install", component: genMd("install")},
                {path: "switch", component: SwitchDemo},
                {path: "button", component: ButtonDemo},
                {path: "modal", component: ModalDemo},
                {path: "tabs", component: TabsDemo},
        ]}
    ]
})
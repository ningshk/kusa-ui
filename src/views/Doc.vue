<template>
    <div class="layout">
        <Topnav class="nav" :toggleMenuButtonVisible="true" />
        <div class="content">
            <transition name="slide-fade">
                <aside v-if="asideVisible">
                    <h2>开发指南</h2>
                    <ol>
                        <li>
                            <router-link to="/doc/intro">介绍</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/install">安装</router-link>
                        </li>                        
                        <li>
                            <router-link to="/doc/get-started">快速上手</router-link>
                        </li>
                    </ol>
                    <h2>组件</h2>
                    <ol>
                        <li>
                            <router-link to="/doc/switch">Switch 开关</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/button">Button 按钮</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/modal">Modal 对话框</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/tabs">Tabs 标签页</router-link>
                        </li>
                    </ol>
                </aside>
            </transition>
            <main>
                <router-view/>
            </main>
        </div>
    </div>
    <div class="mask" v-show="maskVisible" @click="hideMask"></div>
</template>
<script lang="ts">
import { computed, inject, onMounted, Ref, watchEffect, ref } from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
    components: {Topnav},
    setup(){
        const asideVisible = inject<Ref<boolean>>("asideVisible") // get
        const maskVisible = ref(asideVisible?false:true)
        const mask = ref<HTMLDivElement>(null)
        onMounted(()=> {
            watchEffect(()=> {
                const width = document.documentElement.clientWidth
                if(asideVisible.value) {
                    maskVisible.value = true
                } else {
                    maskVisible.value = false
                }
                if (width > 500) {
                    maskVisible.value = false
                }
            }, {flush: 'post'})  // 在组件更新后触发
        })
        const hideMask = () => {
            // mask.value.classList.remove('mask-show')
            asideVisible.value = !asideVisible.value
            maskVisible.value = !maskVisible.value
        }
        // console.log('cotains', mask.value.classList);
        return { asideVisible, maskVisible, hideMask, mask }
    }
}
</script>
<style lang="scss" scoped>
.layout {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
        flex-shrink: 0;
    }
    > .content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;
        @media (max-width: 500px) {
            padding-left: 0; 
        }
    }
}
.content {
    display: flex;
    > aside {
        flex-shrink: 0;
    }
    > main {
        flex-grow: 1;
        padding: 16px;
        background: #fff;
    }
    > .slide-fade-enter-active {
        transition: all 300ms ease-out;
    }

    > .slide-fade-leave-active {
        transition: all 300ms cubic-bezier(1, 0.5, 0.8, 1);
    }

    > .slide-fade-enter-from, .slide-fade-leave-to {
        transform: translateX(-20px);
        opacity: 0;
    }
}
aside {
    background: #87ccbf;
    width: 150px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: 5;
    > h2 {
        margin-bottom: 4px;
        padding: 0 16px;
    }
    > ol {
        > li {
            >a {
                display: block;
                padding: 4px 16px;
                text-decoration: none;
            }
            .router-link-active {
                background: #cfebe5;
            }
        }
    }
}
main {
    overflow: auto;
}
.mask {
    display: block;
    z-index: 2;
    background-color: rgba(0,0,0,0);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
}
</style> 
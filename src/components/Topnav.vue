<template>
    <div class="topnav" >
        <router-link to="/" class="logo">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-grass"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc/switch"><Button theme="link" level="main">文档</Button></router-link>
            </li>
        </ul>
        <svg class="toggleAside" v-if="toggleMenuButtonVisible" @click="toggleMenu">
            <use xlink:href="#icon-menu"></use>
        </svg>
    </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
import Button from "../lib/Button.vue"
export default {
    props:{
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    components: {Button},
    setup(){
        const asideVisible  = inject<Ref<boolean>>('asideVisible') // get
        const toggleMenu = () => {
            asideVisible.value = !asideVisible.value
        }
        return {toggleMenu}
    }
}
</script>
<style lang="scss" scoped>
.topnav {
    background: rgb(255,255,255,1);
    box-shadow: 0 0 16px rgba(0,0,0,.1);
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    > .logo {
        max-width: 6em;
        margin-right: auto;
        > svg {
            width: 32px;
            height: 32px;
        }
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
            a {
                text-decoration: none;
            }
        }
    }
    > .toggleAside {
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
        &:hover {
            cursor: pointer;
        }
    }
    @media (max-width:500px) {
        > .menu{display: none;} 
        > .logo{margin: 0 auto;}
        > .toggleAside{display: inline-block;}
    }
}
</style>
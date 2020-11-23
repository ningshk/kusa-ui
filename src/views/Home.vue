<template>
<div>
    <div class="topnavdAndBanner">
        <Topnav />
        <div class="banner">
            <h1 class="title">Kusa UI</h1>
            <h2 class="desc">一个基于Vue 3的UI框架</h2>
            <p class="actions">
                <a to="https://github.com">GitHub</a>
                <router-link to="/doc/intro">开始</router-link>
            </p>
        </div>
    </div>
    <div class="features">
        <ul>
            <li>
                <svg>
                <use xlink:href="#icon-vue"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>使用了 Vue 3 Composition API</p>
            </li>
            <li>
                <svg>
                <use xlink:href="#icon-ts"></use>
                </svg>
                <h3>基于 TypeScript </h3>
                <p>源代码采用 TypeScript 书写（非严格检查）</p>
            </li>
            <li>
                <svg>
                <use xlink:href="#icon-light"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都非常简洁</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {Topnav}
}
</script>
<style lang="scss" scoped>
$grey1:rgba(82,111,123,0.9);
$grey2:rgba(44,62,70,0.9);
$whtie:rgba(255,255,255,.5);
$border-radius: 4px;
.topnavdAndBanner {
    background-image: url('../assets/trees-and-birds.jpg');
}
.banner {
    color:#2c3e46;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .title{
        font-size: 40px;
        padding: 0 4px;
        border-radius: $border-radius;
        background: $whtie;
    }
    > .desc{
        font-size: 24px;
        padding: 0 4px;
        border-radius: $border-radius;
        background: $whtie;
    }
    > p {
        color:#fff;
    }
    > .actions{
        padding: 8px 0;
        a {
            margin:0 8px;
            background: $grey1;
            display: inline-block;
            $h: 28px;
            padding: 8px 24px;
            border-radius: $border-radius;
            transition: all 1s;
            &:hover {
                background: $grey2;
                text-decoration: none;
            }
        }
    }
}
.features {
    margin: 64px auto;
    padding: 0 16px;

    @media (min-width: 800px) {
        width: 800px;
        >ul {
            >li {
                width: 50%;
            }
        }
    }
    @media (min-width: 1200px) {
        width: 1200px;
        >ul {
            >li {
                width: 33.3333%;
            }
        }
    }
    >ul {
        display: flex;
        flex-wrap: wrap;
        >li {
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;
            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }
            >h3 {
                grid-area: title;
                font-size: 28px;
            }
            >p {
                grid-area: text
            }
        }
    }
}
</style>
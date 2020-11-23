<template>
    <div class="kusa-tabs">
        <div class="kusa-tabs-nav" ref="container">
            <div class="kusa-tabs-nav-item"
                :class="{selected: t === selected }" 
                v-for="(t, index) in titles"
                :ref="el => {if (t === selected) selectedItem = el}"
                :key="index"
                @click="select(t)"
            >{{t}}</div>
            <div class="kusa-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="kusa-tabs-content">
            <component :is="current" 
                        :key="current.props.title"
                        />
        </div>
    </div>
</template>
<script lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import Tab from './Tab.vue'
export default {
    props:{
        selected: String
    },
    setup(props, context) {
        const selectedItem = ref<HTMLDivElement>(null)
        const indicator = ref<HTMLDivElement>(null)
        const container = ref<HTMLDivElement>(null)
        onMounted(()=> {
            watchEffect(()=> {
                const {width} = selectedItem.value.getBoundingClientRect()
                indicator.value.style.width = `${width}px`
                const {left: containerLeft} = container.value.getBoundingClientRect()
                const {left: resultLeft} = selectedItem.value.getBoundingClientRect()
                const left = resultLeft - containerLeft
                indicator.value.style.left = `${left}px`
            }, {flush: 'post'})  // 在组件更新后触发
        })
        // 检查子组件类型
        const defaults = context.slots.default()
        defaults.forEach((tag) => {
            // @ts-ignore
            if (tag.type.name !== Tab.name) {
                throw new Error("<Tabs> 的子标签不是 <Tab>")
            }
        }) 
        const current = computed(() => {
            return defaults.find(tag => tag.props.title === props.selected)
        })
        const titles = defaults.map((tag) => {
            return tag.props.title
        })
        const select = (title: string) => {
            context.emit("update:selected", title)
        }
        return {defaults, current, titles, select, selectedItem, indicator, container}
    }
}
</script>

<style lang="scss">
$green: #59886b;
$color: #333;
$border-color: #d9d9d9;
.kusa-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;
        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
            &:first-child {
                margin-left: 0;
            }
            &.selected {
                color: $green;
            }
        }
        &-indicator {
            position: absolute;
            height: 3px;
            background: $green;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }
    &-content {
        padding: 8px 0;
    }
}
</style>
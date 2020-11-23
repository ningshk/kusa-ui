<demo>
基础用法
</demo>
<template>
    <div class="demo-desc">基础的、简洁的标签页。</div>
    <Tabs v-model:selected="titleSelected">
        <Tab title="导航一">内容一</Tab>
        <Tab title="导航二">内容二</Tab>
        <Tab title="导航三">内容三</Tab>
    </Tabs>
</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
    components: {
        Tabs, Tab
    },
    setup() {
        const titleSelected = ref("导航一")
        return { titleSelected }
    }
}
</script>
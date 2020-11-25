<demo>
加载中
</demo>
<template>
<div>
    <div class="demo-desc">点击按钮后进行数据加载操作，在按钮上显示加载状态。</div>
    <Button loading>加载中</Button>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";  // 这里是我的引用路径，请改为 import { Button } from 'kusa-ui'
export default {
components: {
    Button
}
}
</script>
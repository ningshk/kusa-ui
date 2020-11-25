<demo>
不同类型
</demo>
<template>
<div>
    <div class="demo-desc">button 组件提供除了默认值以外的两种类型，可以在不同场景下选择合适的按钮类型。</div>
    <div>
        <Button>默认按钮</Button>
        <Button level="main">主要按钮</Button>
        <Button level="danger">危险按钮</Button>
    </div>
    <div>
        <Button theme="link">默认链接按钮</Button>
        <Button theme="link" level="main">主要链接按钮</Button>
        <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
        <Button theme="text">默认文字按钮</Button>
        <Button theme="text" level="main">主要文字按钮</Button>
        <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
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
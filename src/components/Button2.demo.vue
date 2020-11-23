<demo>
不同尺寸
</demo>
<template>
<div>
    <div class="demo-desc">Button 组件提供除了默认值以外的两种尺寸，可以在不同场景下选择合适的按钮尺寸。</div>
    <div>
    <Button>默认按钮</Button>
    <Button size="large">大按钮</Button>
    <Button size="small">小按钮</Button>
    </div>
    <div>
    <Button theme="link">默认按钮</Button>
    <Button theme="link" size="large">大按钮</Button>
    <Button size="small" theme="link">小按钮</Button>
    </div>
    <div>
    <Button theme="text">默认按钮</Button>
    <Button size="large" theme="text">大按钮</Button>
    <Button size="small" theme="text">小按钮</Button>
    </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
components: {
    Button
}
}
</script>
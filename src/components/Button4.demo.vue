<demo>
禁用状态
</demo>
<template>
<div class="demo-desc">按钮不可用状态。</div>
<Button disabled>禁用按钮</Button>
<Button theme="link" disabled>禁用链接按钮</Button>
<Button theme="text" disabled>禁用按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";  // 这里是我的引用路径，请改为 import { Button } from 'kusa-ui'
export default {
components: {
    Button
}
}
</script>
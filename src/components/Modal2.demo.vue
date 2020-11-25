<demo>
一键弹出 Modal
</demo>
<template>
<div>
<Button @click="showModal">点击打开 Modal</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'  // 这里是我的引用路径，请改为 import { Button } from 'kusa-ui'
import { ref, h } from 'vue'
import {openModal} from '../lib/openModal'  // 这里是我的引用路径，请改为 import { openModal } from 'kusa-ui'

export default {
components: {
    Button
},
setup() {
    const showModal = () => {
        openModal({
            title: h('strong', {}, '标题'),
            content: '内容',
            confirm() {
                console.log('点击确认')
            },
            cancel() {
                console.log('点击取消')
            }
        })
    }
    return {
        showModal
    }
}
}
</script>
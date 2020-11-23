<demo>
一键弹出 Modal
</demo>
<template>
<div>
<Button @click="showModal">点击打开 Modal</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import { ref, h } from 'vue'
import {openModal} from '../lib/openModal'

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
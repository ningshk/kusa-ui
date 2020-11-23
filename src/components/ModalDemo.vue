<template>
    <div>
    <h1>Modal 对话框</h1>
    </div>
    <Demo :component="Modal1Demo" />
    <Demo :component="Modal2Demo" />
</template>
<script lang="ts">
import { ref } from 'vue'
import Demo from './Demo.vue';
import Modal1Demo from './Modal1.demo.vue';
import Modal2Demo from './Modal2.demo.vue';
export default {
    components: {Demo},
    setup() {
        return {Modal1Demo, Modal2Demo}
    }
}
</script>
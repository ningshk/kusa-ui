<template>
    <button class="kusa-switch" :class="{'kusa-checked':value}" @click="toggle">
        <span></span>
    </button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    props: {
        value: Boolean
    },
    setup(props, context) {
        const toggle = ()=>{
            context.emit('update:value', !props.value)
        }
        return {toggle}
    }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.kusa-switch {
    height: $h;
    width: $h*2;
    border: none;
    background: #9BA4B4;
    border-radius: $h/2;
    position: relative;
    > span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
    }
    &.kusa-checked {
        background: #59886b;
        > span {
        left: calc(100% - #{$h2} - 2px);
    }
    }
    &:focus{
        outline: none;
    }
    &:active{
        > span {
            width: $h2 + 4px;
        }
    }
    &.kusa-checked:active{
        > span {
            width: $h2 + 4px; 
            margin-left: -4px;
        }
    }
    &[disabled] {
        cursor: not-allowed;
        background:#9ba4b480;
    }
    &.kusa-checked[disabled] {
        cursor: not-allowed;
        background: #acc3b5;
    }
}

</style>
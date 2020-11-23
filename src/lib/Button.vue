<template>
    <button class="kusa-button"
        :class="classes"
        :disabled="disabled">
        <span v-if="loading" class="kusa-loadingIndicator"></span>
        <slot/>
    </button>
</template>
<script lang="ts">
import { computed } from 'vue'
export default {
    props: {
        theme: {
            type: String,
            default: 'button'    
        },
        size: {
            type: String,
            default: 'normal'
        },
        level: {
            type: String,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const {theme, size, level} = props
        const classes = computed(() => {
            return {
                [`kusa-theme-${theme}`]: theme,
                [`kusa-size-${size}`]: size,
                [`kusa-level-${level}`]: level
            }
        })
        return {classes}
    }
}
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$green: #59886b;
$red:#C05555;
$grey: grey;
$radius: 4px;
.kusa-button {
    box-sizing: border-box;
    height: $h;
    // width: auto;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    & + & {
        margin-left: 8px;
    }
    &:hover,
    &:focus {
        color: $green;
        border-color: $green;
    }
    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {
        border: 0;
    }
    &.kusa-theme-link{
        border-color: transparent;
        box-shadow: none;
        color: $green;
        &:hover,&:focus{
            color: lighten($green, 10%);
        }
    }
    &.kusa-theme-text{
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        &:hover,&:focus{
            background: darken(white, 5%);;
        }
    }
    &.kusa-size-large {
        font-size: 24px;
        height: 48px;
        padding: 0 16px
    }
    &.kusa-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }
    &.kusa-theme-button {
        &.kusa-level-main {
            background: $green;
            color: white;
            border-color: $green;
            &:hover,
            &:focus {
                background: darken($green, 10%);
                border-color: darken($green, 10%);
            }
        }
        &.kusa-level-danger {
            background: $red;
            border-color: $red;
            color: white;
            &:hover,
            &:focus {
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }
    }
    &.kusa-theme-link {
        &.kusa-level-danger {
            color: $red;
            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }
    &.kusa-theme-text {
        &.kusa-level-main {
            color: $green;
            &:hover,
            &:focus {
                color: darken($green, 10%);
            }
        }
        &.kusa-level-danger {
            color: $red;
            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }
    &.kusa-theme-button {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
            &:hover {
                border-color: $grey;
            }
        }
    }
    &.kusa-theme-link, &.kusa-theme-text {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }
    }
    > .kusa-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px; 
        border-color: $green $green $green transparent;
        border-style: solid;
        border-width: 2px;
        animation: kusa-spin 1s infinite linear;
    }
}

@keyframes kusa-spin {
    0% {transform: rotate(0deg)} 
    100% {transform: rotate(360deg)} 
}
</style>
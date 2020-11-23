<template>
  <router-view/>
</template>

<script lang="ts">
import { onMounted, onUnmounted, provide, ref } from 'vue'
import { router } from './router';
import _ from "lodash"
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide('asideVisible', asideVisible) // set

    router.afterEach(()=> {
      const currentWidth = document.documentElement.clientWidth;
      if (currentWidth<=500) {
        asideVisible.value = false
      }
    })
    onMounted(()=> {
      window.addEventListener('resize', _.debounce(function() {
        if (document.documentElement.clientWidth<=500) {
          asideVisible.value = false
        } else {
          asideVisible.value = true
        }
      }, 300), false)
    })
    onUnmounted(()=>{
      window.onresize = null
    })
  }
}
</script>

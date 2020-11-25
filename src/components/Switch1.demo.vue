<demo>
基础用法
</demo>
<template>
<Switch v-model:value="ifChecked" />
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'  // 这里是我的引用路径，请改为 import { Switch } from 'kusa-ui'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const ifChecked = ref(false)
    return {
      ifChecked
    }
  }
}
</script>
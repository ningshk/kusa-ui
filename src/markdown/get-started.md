# 快速上手

请先[安装](/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Switch, Modal, openModal, Tabs, Tab} from 'kusa-ui'
import 'kusa-ui/dist/lib/kusa.css'
```

就可以使用我提供的组件了。

## 引入Kusa UI

Vue单文件组件引入：

```
<template>
    <div><Button>按钮</Button></div>
</template>
<script>
import {Button} from "kusa-ui"
import 'kusa-ui/dist/lib/kusa.css'
export default {
    components: {Button}
}
</script>
```


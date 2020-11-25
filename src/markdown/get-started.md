# 快速上手

请先<a href="/doc/install" class="link">安装</a>本组件库

然后在你的代码中写入下面的代码：

<div class="tips">

import {Button, Switch, Modal, openModal, Tabs, Tab} from 'kusa-ui'

import 'kusa-ui/dist/lib/kusa.css'

</div>

就可以使用我提供的组件了。

## 引入Kusa UI

Vue单文件组件引入：

<div class="tips">

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

</div>

<style>
.tips {
    padding: 10px 16px;
    margin-bottom: 8px;
    max-width:750px;
    background-color: #f3f5f7;
    font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace;
}
.link {
    font-weight: 700;
    color: rgb(135, 204, 191) !important;
}
</style>
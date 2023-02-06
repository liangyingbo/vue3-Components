<template>

<div>
    <button @click="showMessageBox">MessageBox</button>
    <button @click="showMessageConfirmBox">MessageConfirmBox</button>
    <button @click="showMessagePromptBox">MessagePromptBox</button>
</div>

</template>

<script setup>
import {ref,reactive} from 'vue'
import MessageBox from '../libs/JsppUI/components/MessageBox'

const showMessageBox = () =>{
    MessageBox({
        confirmBtnText:'确定',
        title:"MessageBox",
        content:'This is MessageBox text.'
    }).then(() =>{
        console.log('MessageBox resolve')
    }).catch(() =>{
        console.log('MessageBox reject')
    })
}

const showMessageConfirmBox = () =>{
    MessageBox.confirm({
        title:'MessageConfirmBox',
        content:'This is MessageConfirmBox text.',
        cancelBtn:true,
        cancelBtnText:'取消',
        confirmBtnText:'确定',
    }).then(() =>{
        console.log('MessageConfirmBox resolve')
    }).catch(() =>{
        console.log('MessageConfirmBox reject')
    })
}

const showMessagePromptBox = () =>{
    MessageBox.prompt({
        title:'MessagPromptBox',
        content:'This is MessagePromptBox text',
        cancelBtn:true,
        cancelBtn:true,
        cancelBtnText:'取消',
        confirmBtnText:'确定',
    }).then((value) =>{
        console.log('MessagePromptBox resolve',value)
    }).catch(() =>{
        console.log('MessagePromptBox reject')
    })
}

</script>
<style lang='scss' scoped>

</style>
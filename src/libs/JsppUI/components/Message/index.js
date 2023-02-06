import { createApp } from "vue"
import types from "./types"
import MessageComponent from './Message.vue'
import { watch,ref } from 'vue'

const Message = (options) => {
    const messageApp = createApp(MessageComponent, options)
    showMessage(messageApp, options.duration)
}

const messageArr = ref([])

function showMessage(app, duration) {
    const el = document.createElement('div')
    const vm = app.mount(el)
    document.body.appendChild(el)
    vm.setVisible(true)
    messageArr.value.push(vm)
    watch(messageArr, () => setVMTop(vm))
    setVMTop(vm)
    hideMessage(app, vm, duration)
}

function hideMessage(app, vm, duration) {
    setTimeout(async () => {
        await vm.setVisible(false)
        app.unmount()
        messageArr.value = messageArr.value.filter(item => item != vm)
    }, duration || 3000);
}

Object.values(types).forEach(type => {
    Message[type] = (options) => {
        options.type = type
        return Message(options)
    }
})

function setVMTop(vm) {
    const { setTop } = vm
    const currentIndex = messageArr.value.findIndex(item => item == vm)
    setTop(20 * (currentIndex))
}
export { types }
export default Message
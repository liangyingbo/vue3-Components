
import { createApp,watch } from 'vue'
import MessageBoxComponent from './MessageBox.vue'

export const fields = ['confirm', 'prompt']

const MessageBox = (options) => {

    const messageBoxApp = createApp(MessageBoxComponent, options)

   return new Promise((resolve, reject) => {
        showMessageBox(messageBoxApp, { resolve, reject })
    })
}

fields.forEach(field => {
    MessageBox[field] = (options) => {
        options.field = field
        return MessageBox(options)
    }
})

function showMessageBox(app, { resolve, reject }) {
    const frg = document.createDocumentFragment('div')
    const vm = app.mount(frg)
    document.body.appendChild(frg)
    vm.setVisible(true)
    watch(vm.state,() =>{
        if(!vm.state.visible){
             const { type,promptValue }  = vm.state
             switch(type){
                case 'cancel':
                    reject()
                break;
                case "confirm":
                    resolve(promptValue)
                    break;
             }
             hideMessageBox(app)
        }
    })
}

function hideMessageBox(app) {
    app.unmount()
}



export default MessageBox 
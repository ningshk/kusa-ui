import Modal from './Modal.vue'
import { createApp, h } from 'vue'
export const openModal = (options) => {
    const {title, content, confirm, cancel, closeOnClickOverlay} = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render() {
            return h(Modal, {visible: true,
            'onUpdate:visible': (newValue) => {
                if(newValue === false) {
                    close()
                }
            }, confirm, cancel, closeOnClickOverlay}, {
                title, content
            })
        }
    })
    app.mount(div)
}
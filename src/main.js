import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AppSwitch from './components/ui/AppSwitch.vue'
import AppInput from './components/ui/AppInput.vue'
import AppInputPhone from './components/ui/AppInputPhone.vue'
import AppButton from './components/ui/AppButton.vue'
import AppCheckbox from './components/ui/AppCheckbox.vue'
import AppRadio from './components/ui/AppRadio.vue'
import AppSelect from './components/ui/AppSelect.vue'

import vClickOutside  from 'click-outside-vue3'
import Maska from 'maska'

import 'swiper/css';

createApp(App)
  .use(router)
  .use(vClickOutside)
  .use(Maska)
  .component('AppSwitch', AppSwitch)
  .component('AppInput', AppInput)
  .component('AppInputPhone', AppInputPhone)
  .component('AppButton', AppButton)
  .component('AppCheckbox', AppCheckbox)
  .component('AppRadio', AppRadio)
  .component('AppSelect', AppSelect)
  .mount('#app')

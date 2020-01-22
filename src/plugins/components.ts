import 'reflect-metadata'
import 'css-vars-ponyfill'

import Vue from 'vue'

import Header from '../components/header/index.vue'
import Input from '../components/shared/input.vue'
import Button from '../components/shared/button.vue'
import Tag from '../components/shared/tag.vue'
import Brand from '../components/shared/brand.vue'
import TitleBar from '../components/shared/title-bar.vue'

Vue.config.productionTip = true

import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

import PortalVue from 'portal-vue'
Vue.use(PortalVue)


Vue.directive('scroll', {

    inserted(el, binding) {
        const f = (e: any) => {
            if (binding.value(e, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
})

Vue.component('v-header', Header)
Vue.component('v-brand', Brand)
Vue.component('v-input', Input)
Vue.component('v-button', Button)
Vue.component('v-tag', Tag)
Vue.component('v-title', TitleBar)

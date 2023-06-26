// vue imports

import { createApp } from 'vue'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faTwitter,faGoogle,faAmazon} from '@fortawesome/free-brands-svg-icons'

// project imports
import './main.css'
import App from './App.vue'

// ***************
library.add(faCartShopping,faFacebook,faTwitter,faGoogle,faAmazon)

// createApp(App).mount('#app')
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

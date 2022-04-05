import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faAngleDown, faMagnifyingGlass, faArrowRightLong, faCircle, faCaretDown, faCaretUp, faLocationDot, faRulerCombined, faLifeRing, faBook, faCartShopping, faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser, faCopyright, faFileLines, faUser, faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faAngleDown, faCircleUser, faMagnifyingGlass, faFacebookSquare, faTwitter, faInstagram, faLinkedin, faCopyright, faArrowRightLong, faCircle, faFileLines, faUser, faCaretDown, faCaretUp, faLocationDot, faCircleRegular, faRulerCombined, faLifeRing, faBook, faCartShopping, faArrowUpLong)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

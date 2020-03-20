import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

import mock from './Mock-Data.js'

let data = {
  employees: mock,
  contact_requests: [],
  person: {
    name: "",
    memo: "",
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

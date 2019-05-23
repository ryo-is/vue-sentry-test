import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"

import * as Sentry from "@sentry/browser"
import * as Integrations from "@sentry/integrations"
import "./plugins/element.js"

Vue.config.productionTip = false

Sentry.init({
  dsn: "https://453e0f6436ac4fb8bfe0819cc4ac2c98@sentry.io/1466014",
  integrations: [
    new Integrations.Vue({
      Vue,
      attachProps: true
    })
  ]
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")

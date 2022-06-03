import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import "@/css/styles.css";
import focusDirective from "@/directives/focus.directive.js";
import tooltipDirective from "@/directives/tooltip.directive.js";
import "@/css/tooltip.directive.css";
import chartsPlugin from "@/utils/charts/chartsPlugin.js";




createApp(App)
    .use(store)
    .use(router)
    .use(chartsPlugin)
    .directive('focus', focusDirective)
    .directive('tooltip', tooltipDirective)
    .mount('#app')

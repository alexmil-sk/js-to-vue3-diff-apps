import {
	createApp
} from 'vue';
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
import translatePlugin from './plugins/translatePlugin.js';
import en from './languages/en.js';
import ru from './languages/ru.js';
import sk from './languages/sk.js';
import AppBtn from './components/btnLanguage/AppBtn.vue';




createApp(App)
	.use(store)
	.use(router)
	.use(translatePlugin, { en, ru, sk })
	.directive('focus', focusDirective)
	.directive('tooltip', tooltipDirective)
	.component('AppBtn', AppBtn)
	.mount('#app')
export default {
	install(app, options) {
		let currentLanguage = 'en';

		function changeLanguage(name) {
			currentLanguage = name;
		}


		app.config.globalProperties.$lang = key => {
			return key.split('.').reduce((words, k) => {
				return words[k] || ('=Missing in dictionary=').toUpperCase()
			}, options[currentLanguage])
		}

		app.provide('translate', changeLanguage);

	}
}
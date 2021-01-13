'use strict';

(() => {

	var scriptArea = document.getElementById('script');

	(() => {
		scriptArea.addEventListener('keyup', (_) => {
			chrome.storage.local.set({scriptData: scriptArea.value})
		})

		renderText();		
	})();

	function renderText() {
		chrome.storage.local.get('scriptData', (data) => {
			scriptArea.value = data?.scriptData ?? '';
		});
	}	
})();

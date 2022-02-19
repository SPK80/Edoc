document.addEventListener('DOMContentLoaded', function () {
	chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
		if (changeInfo.status == "complete" && tab.title == "Поиск") {
			const mark = window.localStorage['inputMark'];
			const archivID = window.localStorage['inputArchivID'];
			setMarkArchivAndClick(mark, archivID);
		}
	})
})

function setMarkArchivAndClick(mark, archivID) {
	const code = `document.getElementById('tfMark-inputEl').value='${mark}'; 
				document.getElementById('tfAccNumber-inputEl').value='${archivID}'; 
				document.getElementById('Content_ctl17-btnIconEl').click()`;
	chrome.tabs.executeScript(
		null,
		{ "code": code },
		function (result) {
			console.log(result);
		}
	)
}
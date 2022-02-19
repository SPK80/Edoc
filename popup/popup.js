document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('inputMark').addEventListener('keyup', onKeyUp);
	document.getElementById('inputArchivID').addEventListener('keyup', onKeyUp);
})

function onKeyUp(e) {
	const key = e.keyCode;
	if (key == 13) {
		openArchiv();
	}
}

function openArchiv() {
	const inputMark = document.getElementById('inputMark').value.toString();
	const inputArchivID = document.getElementById('inputArchivID').value.toString();
	window.localStorage['inputMark'] = inputMark;
	window.localStorage['inputArchivID'] = inputArchivID;

	const _url = "http://serv-iis:8089/Pages/Search.aspx";
	chrome.tabs.create({ url: _url });

}


function handleFile(file) {
	const formData = new FormData();
	formData.append("files", file, file.name)
	console.log(url + "/upload");
	fetch(url + "/upload", {
		method: "POST",
		body: formData,
	}).then(response => {
		response.text().then(function(data) {
			alert(data);
		});
	});
}
function dropHandler(ev) {
	console.log("niggamos");
	ev.preventDefault();
	if(ev.dataTransfer.items) {
		for(var i=0; i<ev.dataTransfer.items.length; i++) {
			if(ev.dataTransfer.items[i].kind === 'file') {
				var file = ev.dataTransfer.items[i].getAsFile();
				handleFile(file)
			}
		}
	}
}
function dragOverEvent(ev) {
	console.log('File(s) in drop zone');
	ev.preventDefault();
}
document.getElementById('fileInput').onchange = function() {
	var file = document.getElementById('fileInput').files[0];
	handleFile(file);
}

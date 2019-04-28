function dropHandler(ev) {
	console.log("niggamos");
	ev.preventDefault();
	if(ev.dataTransfer.items) {
		for(var i=0; i<ev.dataTransfer.items.length; i++) {
			if(ev.dataTransfer.items[i].kind === 'file') {
				var file = ev.dataTransfer.items[i].getAsFile();
				console.log(file.name);
			}
		}
	}
}
function dragOverEvent(ev) {
	console.log('File(s) in drop zone');
	ev.preventDefault();
}

document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
	navigator.splashscreen.hide();
	document.getElementById('btnOpenPDF').onclick = function() {
		var app = new Application();
		app.Run();
	}
}

function Application() {
}

Application.prototype.Run = function() {
	if (window.plugins !== undefined) {
		var infoDiv = document.getElementById("infoField");
		var path = this.getWorkingFolder().replace('http://', 'file://') + "sample.pdf";
		infoDiv.innerText = path;
        
		if (device.platform === 'Android') {
			window.open(path, '_system');
		}
		else {
			window.open(path, '_blank');
		}
	}
	else
		alert("Not Supported in Simulator.")
}

Application.prototype.getWorkingFolder = function() {
	var path = window.location.href.replace('index.html', '');
	return path;
}
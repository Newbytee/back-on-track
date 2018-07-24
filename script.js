browser.storage.sync.get("urls").then(loadList, gotError);

function createPopup() {
    var backOnTrackPopup = document.createElement("DIV");
    var backOnTrackPopupText = document.createElement("P");
    var backOnTrackPopupTextArea = document.createElement("TEXTAREA");
    backOnTrackPopup.style.height = "400px";
    backOnTrackPopup.style.width = "400px";
    backOnTrackPopup.style.backgroundColor = "#FF00FF";
    backOnTrackPopup.style.zIndex = "100";
    backOnTrackPopup.style.position = "fixed";
    backOnTrackPopup.style.top = "50px";
    backOnTrackPopup.style.left = "50%";
    backOnTrackPopup.style.marginLeft = "-200px";
    backOnTrackPopupText.innerHTML = "Why are you visiting this website?";
    backOnTrackPopupText.style.textAlign = "center";
    backOnTrackPopup.appendChild(backOnTrackPopupText);
    backOnTrackPopup.appendChild(backOnTrackPopupTextArea);
    document.body.appendChild(backOnTrackPopup);
    console.log("Script was run successfully");
}

function loadList(item) {
    for (var i = 0; i < item.urls.length; i++) {
        if (item.urls[i] === window.location.host || "www." + item.urls[i] === window.location.host) {
            createPopup();
        }
    }
}

function gotError(error) {
    console.log(error);
}
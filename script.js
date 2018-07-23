browser.storage.sync.get("urls").then(loadList, gotError);

function createPopup() {
    var backOnTrackPopup = document.createElement("DIV");
    var backOnTrackPopupText = document.createElement("P");
    var backOnTrackPopupTextArea = document.createElement("TEXTAREA");
    backOnTrackPopup.style.height = "100px";
    backOnTrackPopup.style.width = "200px";
    backOnTrackPopup.style.backgroundColor = "#FF00FF";
    backOnTrackPopup.style.zIndex = "100";
    backOnTrackPopup.style.position = "fixed";
    backOnTrackPopup.style.top = "50px";
    backOnTrackPopup.style.left = "45%";
    backOnTrackPopup.appendChild(backOnTrackPopupText);
    backOnTrackPopup.appendChild(backOnTrackPopupTextArea);
    document.body.appendChild(backOnTrackPopup);
    console.log("Script was run successfully");
}

function loadList(item) {
    for (var i = 0; i < item.urls.length; i++) {
        if (item.urls[i] === window.location.host) {
            console.log("hi");
            createPopup();
        }
    }
}

function gotError(error) {
    console.log(error);
}
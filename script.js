if (typeof browser === "undefined") {
    const browser = chrome;
}

browser.storage.sync.get("urls").then(loadList, gotError);

function createPopup() {
    const backOnTrackPopup = document.createElement("DIV");
    const backOnTrackPopupText = document.createElement("P");
    const backOnTrackPopupTextArea = document.createElement("TEXTAREA");
    const backOnTrackPopupButton = document.createElement("BUTTON");
    backOnTrackPopup.style.height = "400px";
    backOnTrackPopup.style.width = "400px";
    backOnTrackPopup.style.backgroundColor = "#FFF9F8";
    backOnTrackPopup.style.zIndex = "100";
    backOnTrackPopup.style.position = "fixed";
    backOnTrackPopup.style.top = "50px";
    backOnTrackPopup.style.left = "50%";
    backOnTrackPopup.style.marginLeft = "-200px";
    backOnTrackPopup.style.boxShadow = "1px 1px 15px 5px #333333AA";
    backOnTrackPopupText.innerHTML = "Why are you visiting this website?";
    backOnTrackPopupText.style.textAlign = "center";
    backOnTrackPopupTextArea.style.width = "96%";
    backOnTrackPopupTextArea.style.height = "72%";
    backOnTrackPopupTextArea.style.border = "none";
    backOnTrackPopupButton.innerHTML = "Submit";
    backOnTrackPopupButton.style.marginTop = "2.4%";
    backOnTrackPopup.appendChild(backOnTrackPopupText);
    backOnTrackPopup.appendChild(backOnTrackPopupTextArea);
    backOnTrackPopup.appendChild(backOnTrackPopupButton);
    document.body.appendChild(backOnTrackPopup);
    console.log("Script was run successfully");
}

function loadList(item) {
    for (let i = 0; i < item.urls.length; i++) {
        if (item.urls[i] === window.location.host || "www." + item.urls[i] === window.location.host) {
            createPopup();
        }
    }
}

function gotError(error) {
    console.log(error);
}
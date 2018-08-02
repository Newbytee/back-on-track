if (typeof browser === "undefined") {
    const browser = chrome;
}

browser.storage.sync.get("urls").then(loadList, gotError);

function loadList(item) {
    for (let i = 0; i < item.urls.length; i++) {
        if (item.urls[i] === window.location.host || "www." + item.urls[i] === window.location.host) {
            new BackOnTrackPopup();
        }
    }
}

function gotError(error) {
    console.log(error);
}

class BackOnTrackPopup {
    constructor() {
        this.backOnTrackPopup = document.createElement("DIV");
        this.backOnTrackPopupText = document.createElement("P");
        this.backOnTrackPopupTextArea = document.createElement("TEXTAREA");
        this.backOnTrackPopupButton = document.createElement("BUTTON");
        this.backOnTrackPopup.style.height = "400px";
        this.backOnTrackPopup.style.width = "400px";
        this.backOnTrackPopup.style.backgroundColor = "#FFF9F8";
        this.backOnTrackPopup.style.zIndex = "100";
        this.backOnTrackPopup.style.position = "fixed";
        this.backOnTrackPopup.style.top = "50px";
        this.backOnTrackPopup.style.left = "50%";
        this.backOnTrackPopup.style.marginLeft = "-200px";
        this.backOnTrackPopup.style.boxShadow = "1px 1px 15px 5px #333333AA";
        this.backOnTrackPopupText.innerHTML = "Why are you visiting this website?";
        this.backOnTrackPopupText.style.textAlign = "center";
        this.backOnTrackPopupText.style.marginTop = "3%";
        this.backOnTrackPopupText.style.marginBottom = "3%";
        this.backOnTrackPopupTextArea.style.width = "96%";
        this.backOnTrackPopupTextArea.style.height = "72%";
        this.backOnTrackPopupTextArea.style.border = "none";
        this.backOnTrackPopupButton.innerHTML = "Submit";
        this.backOnTrackPopupButton.style.marginTop = "2.4%";
        this.backOnTrackPopupButton.style.width = "20%";
        this.backOnTrackPopupButton.style.marginLeft = "40%";
        this.backOnTrackPopupButton.addEventListener("click", this.closePopUp.bind(this));
        this.backOnTrackPopup.appendChild(this.backOnTrackPopupText);
        this.backOnTrackPopup.appendChild(this.backOnTrackPopupTextArea);
        this.backOnTrackPopup.appendChild(this.backOnTrackPopupButton);
        document.body.appendChild(this.backOnTrackPopup);
    }
    closePopUp() {
        if (this.backOnTrackPopupTextArea.value.length > 0) {
            this.backOnTrackPopup.parentElement.removeChild(this.backOnTrackPopup);
        }
    }
}
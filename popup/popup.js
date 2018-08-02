// noinspection JSAnnotator
// noinspection JSAnnotator
if (typeof browser === "undefined") {
    document.getElementById("webpageList").value = "browser.storage API not available.";
}

const websiteList = document.getElementById("webpageList");

browser.storage.sync.get("urls").then(loadList, gotError);

document.addEventListener("beforeunload", updateList);
websiteList.addEventListener("blur", updateList);
document.getElementById("buttonUpdate").addEventListener("onclick", updateList);

function updateList() {
    const websites = (websiteList.value).split("\n");

    browser.storage.sync.set({
        urls: websites
    });
}

function loadList(item) {
    for (let i = 0; i < item.urls.length; i++) {
        websiteList.append(item.urls[i]);
        if (i < item.urls.length - 1) {
            websiteList.append("\n");
        }
    }
}

function gotError(error) {
    console.log(error);
}
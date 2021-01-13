// chrome.runtime.onInstalled.addListener(function () {

// });

chrome.contextMenus.removeAll();
chrome.contextMenus.create({
    id: '1',
    title: "FillForm",
    contexts: ["all"]
});
chrome.contextMenus.onClicked.addListener((d) => {
    console.log(d);
});
chrome.runtime.onInstalled.addListener(function () {
  console.log("Hello from background");
});

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const currentURL = tabs[0].title;
  console.log("Current page URL: " + currentURL);
});

function updateCurrentTabURL() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs && tabs[0]) {
      const currentURL = tabs[0].title;
      console.log("Current page URL: " + currentURL);
    }
  });
}

updateCurrentTabURL();

chrome.tabs.onActivated.addListener(function (activeInfo) {
  updateCurrentTabURL();
});

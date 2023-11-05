//
//function updateCurrentTabURL() {
//  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//    if (tabs && tabs[0]) {
//      const currentURL = tabs[0].title;
//      console.log("Current page URL: " + currentURL);
//    }
//  });
//}
//
//updateCurrentTabURL();
//
//chrome.tabs.onActivated.addListener(function (activeInfo) {
//  updateCurrentTabURL();
//});


chrome.storage.local.get(['responseData'], function (result) {
    if (chrome.runtime.lastError) {
        const responseDataElement = document.getElementById('context');
        responseDataElement.textContent = 'Server response: ' + 'Loading';
    } else {
        const responseData = result.responseData;
        const responseDataElement = document.getElementById('context');
        responseDataElement.textContent = responseData.response;
        // Now, you can use responseData as an object.
    }
});

//document.addEventListener('DOMContentLoaded', function () {
//  chrome.runtime.sendMessage({ action: 'updateResponseData' }, function (response) {
//    const responseData = response.responseData;
//    if (responseData) {
//      // Update the content of the response-data element
//      const responseDataElement = document.getElementById('context');
//      responseDataElement.textContent = 'Server response: ' + responseData;
//    }
//  });
//});
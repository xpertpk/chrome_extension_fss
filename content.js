chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'takeScreenshot') {
      chrome.tabs.captureVisibleTab({ format: 'png' }, function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'screenshot.png';
        link.click();
      });
    }
  });
  
console.log('RequestSearch  background.js');

function beJSON(str) {
    try {
        JSON.parse(str);
        return JSON.parse(str);
    } catch (e) {
        return {};
    }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.name === 'panel') {
        var data = beJSON(message.content);
        console.log('=====接口url:', message.url);
        console.log('=====接口data:', data);

        //数据发给content-script
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                console.log('=====tabs', tabs);
                chrome.tabs.sendMessage(tabs[0].id, {
                    type: 'sendRequestData',
                    url: message.url,
                    data: data,
                });
            }
        );
    }
});
